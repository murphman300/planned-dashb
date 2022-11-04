import * as methods from "../../src/api/methods";

import {createUser} from "../../helpers/models/Users";
// @ts-ignore
import faker from 'faker';
import {getAllUsers} from "../../src/api";

describe('Test apis calls', ()=> {

  test('getAllUsers returns users properly sorted', async () => {

    const child1 = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Maude',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const child2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Max',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const adult1 = createUser({
      age: 23,
      country: faker.address.country(),
      name: {
        firstName: 'Claire',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const adult2 = createUser({
      age: 43,
      country: faker.address.country(),
      name: {
        firstName: 'Justin',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const adult3 = createUser({
      age: 56,
      country: faker.address.country(),
      name: {
        firstName: 'Valerie',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const senior1 = createUser({
      age: 67,
      country: faker.address.country(),
      name: {
        firstName: 'Simone',
        lastName: 'Leduc'
      },
      email: "an-email",
    })

    const senior2 = createUser({
      age: 74,
      country: faker.address.country(),
      name: {
        firstName: 'Jolene',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const senior3 = createUser({
      age: 98,
      country: faker.address.country(),
      name: {
        firstName: 'Maurice',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    methods.getKids = jest.fn(() =>
      Promise.resolve({
        data: [
          child1,
          child2
        ]
      })
    );

    methods.getAdults = jest.fn(() =>
      Promise.resolve({
        data: [
          adult2,
          adult3,
          adult1
        ]
      })
    );

    methods.getSeniors = jest.fn(() =>
      Promise.resolve({
        data: [
          senior1,
          senior3,
          senior2,
        ]
      })
    );

    const sorted =  await getAllUsers();

    const expects = [
      adult1,
      senior2,
      adult2,
      child1,
      senior3,
      child2,
      senior1,
      adult3,
    ]

    expect(sorted).toMatchObject(expects)

  })
})
