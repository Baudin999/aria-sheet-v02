import { IWeapon, WeaponTypes, ICharacterWeapon } from "../interfaces";
import { uuid } from "../services/helpers";

export const weapons: IWeapon[] = [
  {
    id: "197a715b-38d2-4b24-92c9-fbedc37b7aff",
    type: WeaponTypes.Sword,
    name: "Blunt Sword",
    description: "A simple sword.",
    dmg: "1d6+0",
    speed: 15
  },
  {
    id: "07035812-5d2b-4e5a-a72e-9969563dbcc0",
    type: WeaponTypes.Sword,
    name: "Rusty Sword",
    description: "A simple sword.",
    dmg: "1d6+1",
    speed: 15
  },
  {
    id: "a018ed2e-b28c-4b67-bf9f-6db231c58fad",
    type: WeaponTypes.Dagger,
    name: "Rusty Dagger",
    description: "A rusty dagger.",
    dmg: "1d4+1",
    speed: 15
  }
];

export const getWeaponByName = (name: string): IWeapon | null => {
  return weapons.find(s => s.name === name);
};
export const toCharacterWeapon = (weapon: IWeapon): ICharacterWeapon => {
  return { ...weapon, notes: "" } as ICharacterWeapon;
};
export const getCharacterWeaponByName = (name: string): ICharacterWeapon => {
  let w = getWeaponByName(name);
  if (w) {
    return toCharacterWeapon(w);
  } else {
    throw "Not a weapon";
  }
};

// let r = "";
// for (var i = 0; i < 50; ++i) {
//   r += `${uuid()}\n`;
// }
// console.log(r);

/*
DELETE ID after use!
754bbe97-1891-4bf2-8dfa-814450ebd1c9
70de0f5a-b4a3-4917-a6cb-e0d12de39e64
99d1d085-1051-4d48-bd67-418598b56250
c626c335-1570-456f-af3c-898455a6d6a7
73d07495-c9bb-4dc6-9d04-3ec167236ae3
b42e3e30-fda5-4a1f-8593-51c10e07cfd2
4e2afda7-0a75-49aa-b80d-654357b45a8f
7874bdf9-b176-4a63-9a8b-7698011d1e46
6b62eb7e-2ad2-4858-9354-5b2b90abef42
6331099a-a962-403c-a4fc-3afc70f60450
72c77f38-5aaa-49ee-8f51-794986b95496
1b893487-cccc-421b-bdcf-2683902b6189
7c6fc29b-61e7-4cdc-b556-a65d91207458
2b03314d-1491-4725-bf50-0ba83532ebf4
2d320d08-dad8-4278-be42-87352802b349
6941fa29-5f88-45a9-851e-e53a8ca507ca
143928a3-cdf7-4bd6-a20e-0559cb00b55b
094b3c5c-3e3e-4866-a4fb-75630507dd3c
ce2a79dc-566f-4f9a-a570-613a6c483ce7
a8d51a7d-c1de-408d-b430-6df60b675769
d38ccfb0-3833-4991-ab98-fcac746be746
c6202577-9ca7-4c4d-9771-882bf7ff88c8
f0680b9d-60da-407f-8776-b9dee95959ee
98b85761-bd56-41d3-9255-d1c1e6f4d21d
68119273-2854-4095-899a-050dcccc9703
dc3fa2d6-8600-4285-8f29-dca088691032
1b365015-040e-476c-9fe8-2b51408012c8
9b8f3441-a0f3-4623-9935-aee2998b98dc
2fbdc546-ec9a-474b-8848-59b5df986e5f
19f8e3b7-457f-48dd-b3f0-717cc06ac0cc
39a252ad-3d23-4472-ace6-a5ced129b153
1fc141f2-498b-4007-9a5a-f57934390eed
2d58137f-8519-4434-b102-324769d9a754
d905f0b4-4f92-41aa-850f-59635460ee10
67399625-8be4-4492-a576-83df1700766b
64a4c708-e524-44da-8bb9-99b4cf609130
314b94ca-30fe-41c3-a16e-cf5e53ecd14c
eec0ae92-3942-4fd2-88ef-6ee6efa2b2f8
e7aa3db3-b027-46ea-bfcb-06492f656767
628997ff-0730-4314-b3bf-f2562632244c
5ca7c4b6-6444-451e-ac20-82325763b787
daa596ba-7761-46ea-9bc4-597c142a06a2
0cfb2bab-b691-4675-aff2-b19f4ee86433
3679b77f-5282-4e96-8aa8-00038855ebb6
9fd90d41-fd96-4cae-b883-10bc5c65824c
a6f9e1d8-ae22-4109-818a-f237e521f4b6
08dcf36d-3d13-4ee5-955b-afc9e654de7c
8f717247-f326-4b56-9ff3-6ccd92164180
e4fff64c-2c5e-4c86-b268-c718fadc632a
f6f24106-5cab-4e87-9dc1-38fa3978a14e
7aab13ea-eb34-498c-9f92-df2873418105
651fbc44-0f80-44dd-a649-f9a9d588cc0f
7719c741-122a-44fc-92eb-7e1ec18a5724
be4330be-6ccc-49fa-b82e-6a4bcc090557
285600c8-fb90-4a4d-9350-222dfdca5b03
23f26af5-9eed-40e4-ad05-9d16decb9d43
49d09963-bc1c-4b1e-ab19-b6e3df8c5f1c
d3435468-03b7-47a9-9fcb-cc853ceff17b
78c081f4-2403-4f08-955e-1e0daa83fc1a
c7a2762c-db9f-47e8-aaf3-5e5bb0b88173
f5708bc8-c10c-4390-ab02-3c9c23c61491
ef8a9c96-ad3b-41ff-a939-e5e9a1dbf50b
0f2566eb-b957-4537-9d85-f9d27b94b098
969d1690-a1bf-48aa-9a1e-eeb3c90be4d8
0a9707d1-82f3-4609-a38f-c78fc86f25c7
7e7c11ab-b7b5-44ce-9f7b-6ba3c33eeef4
e208b443-dc6a-4cb8-ac02-5a3b1a2288cf
d781552b-7c13-4d34-8f25-4ad87473883e
c1bc7ce5-6381-43da-9b41-3dfe4e60f2a8
94047573-785d-482c-a127-41cd201a82cd
b3547d02-8676-4df9-ad5a-c80ed60fec0b
81331cfd-5da2-4f69-ab17-9c50b4719fb1
54fc9b73-82bc-4a98-856f-eeeb68cb19c4
6df98de3-1781-4a8c-8f36-302f92c8a921
e6a8acb4-2552-49eb-a22a-eee2873667e9
e6fc2443-fbb5-48cc-9c55-c8880f294d58
a7ac0beb-2eae-4bb7-bb02-cfdd20432826
ef80a442-d220-4c87-b258-33b8c2dbc013
cb6be768-67f1-4adb-8a6a-50b3fd230063
1c187f16-8526-410a-a015-3e5c4485229c
14b6d47d-18a9-430a-8a78-bba9a0dcc3d4
8506f1de-a7bb-4ac2-9ba5-5ab88de26278
36415a93-bf8b-4614-96c0-4d660349fb09
74d50458-07f3-44b0-8119-31e56bdeb4d4
d521cb0a-fb82-4721-a21b-7acca286cedb
*/
