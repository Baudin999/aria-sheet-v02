import { uuid } from "./../services/helpers";
import { ISkill, ICharacterSkill, SkillTypes, WeaponTypes } from "../interfaces";

export const skills: ISkill[] = [
  {
    id: "197a715b-38d2-4b24-92c9-fbedc37b7aff",
    type: SkillTypes.Melee,
    weaponType: WeaponTypes.Sword,
    name: "Sword Attack",
    description: "A normal melee attack with a sword."
  },
  {
    id: "ab4685f9-d46c-4df7-9d35-304976bcf37c",
    type: SkillTypes.Melee,
    weaponType: WeaponTypes.Dagger,
    name: "Dagger Attack",
    description: "A normal melee attack with a dagger."
  },
  {
    id: "2284b6ff-3453-4bd1-9a24-7250202b6360",
    type: SkillTypes.Defense,
    weaponType: WeaponTypes.None,
    name: "Dodge",
    description: "You can step aside and dodge an attack."
  }
];

export const getSkillByName = (name: string): ISkill | null => {
  return skills.find(s => s.name === name);
};
export const toCharacterSkill = (skill: ISkill): ICharacterSkill => {
  return { ...skill, notes: "", level: 0 };
};
export const getCharacterSkillByName = (name: string): ICharacterSkill => {
  let w = getSkillByName(name);
  if (w) {
    return toCharacterSkill(w);
  } else {
    throw "Not a skill";
  }
};

/*
68f66a27-b4b1-486d-bdac-88f760b055a6
47acbd9f-7e3f-444b-b39f-d1738714e560
5afd5240-2e79-46f4-b7ee-eb68ef7f7a70
e7eef09e-1688-45df-a11b-4244c9b55514
abe569fc-176c-44b6-8ed9-377030c85ba3
a6a2e6db-7f74-440d-a4c0-731645cb9692
3929e5b0-72b7-4354-aad7-69cbfc41bb03
7cdef948-72d0-4ce3-9421-7eaca07e1c11
945d1a10-6938-4708-816d-cf6b2c597353
2df94d1f-1ca4-466c-9238-2749cd094362
6b3718a6-a823-46ae-8eec-f8e691f209dc
39982f6d-5658-49d6-91aa-fceb817de5e3
d8a947f0-b795-4dc2-8d4f-462fc7cb9346
4a36f295-06d0-4b0a-b70a-917d8b8ba1ee
4b7c7863-f684-4e3b-a216-03b553aa4e93
bf4c9b79-6969-4a93-aabb-6a630f34c826
29fb2c78-fb44-495e-8a7e-d4ef3956250c
f98503cc-f384-4b7e-adff-bced31487847
4207e98b-aeac-4ec9-81fb-08af6138b61c
09b108d9-1b37-4e4d-8740-8157c04ddb0e
5eb8a98a-a141-4732-91d7-bb990ce5d9bb
2ce9267e-d0af-4f92-8636-143fbb7e1ea6
432e2be0-46c0-4233-9878-54371630fd1f
d021c5bb-3247-4c64-9e32-bef56dc1ba01
ad827a97-3cd1-4b7b-8bc1-cc8138de8fbc
917ea173-cd94-43ac-824a-820246664235
8803841a-cb06-4780-bd18-82d505f12e4f
5476f33e-2971-4b3d-8529-475445b5d339
30f40b3f-9529-49a5-869d-7f1e92bb1043
6fdefc94-2f3f-4939-996e-5f2d9e57888c
4cc7943f-0052-4842-9dda-2d0dedc6fcdb
33caf131-534a-4b52-bd34-d7037d8ec221
21132679-4a82-41e0-91e8-652d8378dbcb
191619ab-3207-4527-bb34-bc02eec2ee52
803c5b6a-8264-49bb-ae98-419801e2984c
8d2a43d8-2e8e-4df3-b1ac-7cace27a1ab9
e0d02034-2f45-4ad3-917d-f9e2a15ee5d7
bc2a5a38-e497-4bce-ad16-808b44adc97d
ef2fa2d0-5a08-4201-bf05-9acb0c309154
cd3a14db-b03c-4e65-969c-c1aa90d09469
7e605ab1-559f-4e3f-b6e2-118973fa37b5
fb52bab6-f1b7-400f-a968-4f7b2f83d969
d11e05b5-389a-480d-a0b1-bc08313cfec9
943eefca-ba3b-4bd2-af68-0ef0f0bf8f84
2445bf06-709e-4cfe-8986-8a11066d3777
c489cee3-5e6c-45ad-927f-978363426ead
a64264ed-1f28-452b-8890-7073e3363a6c
7ae6a218-6845-41c3-bd9e-6a0c8f81c216
16b3eea4-3f06-47a7-a40f-07bb348cff49
51cf0ced-36ab-4d3c-b1a5-a913fb2a87ba
*/
