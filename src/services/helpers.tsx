export const uuid = () => {
  // @ts-ignore
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
};

export const setCharacter = (props, t) => {
  let character;
  if (props.selectedCharacter) {
    character = props.selectedCharacter;
  } else {
    let characterName = props.match.params.name;
    character = props.characters.find(c => c.name === characterName);
  }
  t.setState({
    character: JSON.parse(JSON.stringify(character))
  });
};

export function debounce(fn, delay) {
  var timer = null;
  return function(...args) {
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  };
}
