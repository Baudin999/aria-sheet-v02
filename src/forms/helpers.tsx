export const transformErrors = (schema: any, errors) => {
  return errors.map(error => {
    let schemaDef: any = findSchemaDefinition(error.schemaPath, schema);
    // use error messages from JSON schema if any
    if (schemaDef && schemaDef.messages && schemaDef.messages[error.name]) {
      return {
        ...error,
        message: schemaDef.messages[error.name],
        stack: schemaDef.messages[error.name]
      };
    }
    return error;
  });
};

export function findSchemaDefinition($ref_original, definitions = {}) {
  // Extract and use the referenced definition if we have it.
  let $ref = $ref_original.replace("#/", "");
  let parts = $ref.split("/");
  let current = definitions;
  let index = 0;

  while (parts[index] && index < parts.length - 1 && current) {
    current = current[parts[index]];
    index = index + 1;
  }
  return current;
}
