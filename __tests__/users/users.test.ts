import {createUser} from "../../helpers/models/Users";
// @ts-ignore
import faker from 'faker';
import {Users} from "../../src/models/UserUtils";
import {UserSortDirection, UserSortOptions} from "../../src/models/UserUtilTypes";

/**
 *
 *     age: Math.floor(Math.random() * (maxAge - minAge + 1) + minAge),
 *     country: faker.address.country(),
 *     email: faker.internet.email(),
 *     name: {
 *       firstName: faker.name.firstName(),
 *       lastName: faker.name.lastName(),
 *     },
 */

const normalFetch = global.fetch;

// @ts-ignore
describe('Test sorting methods', () => {

// @ts-ignore
  afterEach(() => {
    global.fetch = normalFetch;
  })

// @ts-ignore
  test('api fetch returns data sorted properly by name', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const audrey = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Audrey',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const users = [
      audrey,
      michel
    ]

    const sorted = Users.sort(users)

// @ts-ignore
    expect(sorted[0]).toMatchObject(audrey);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel);
  })

  test('users.sort sorts properly by age for users of same name', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.sort(users)
// @ts-ignore
    expect(sorted[0]).toMatchObject(michel3);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel2);
// @ts-ignore
    expect(sorted[2]).toMatchObject(michel);
  })

  test('users.sort sorts properly by age for users of same name', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.sort(users)
// @ts-ignore
    expect(sorted[0]).toMatchObject(michel3);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel2);
// @ts-ignore
    expect(sorted[2]).toMatchObject(michel);
  })

  test('users.sortBy sorts by age ascending correctly', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.sortBy(users,  UserSortOptions.age, UserSortDirection.descending,)
// @ts-ignore
    expect(sorted[0]).toMatchObject(michel);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel2);
// @ts-ignore
    expect(sorted[2]).toMatchObject(michel3);
  })

  test('users.sortBy sorts by age descending correctly', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Michel',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.sortBy(users,  UserSortOptions.age, UserSortDirection.ascending)
// @ts-ignore
    expect(sorted[0]).toMatchObject(michel3);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel2);
// @ts-ignore
    expect(sorted[2]).toMatchObject(michel);
  })

  test('users.sortBy sorts by name ascending correctly', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.sortBy(users,  UserSortOptions.fullName, UserSortDirection.ascending)
// @ts-ignore
    expect(sorted[0]).toMatchObject(michel3);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel2);
// @ts-ignore
    expect(sorted[2]).toMatchObject(michel);
  })

  test('users.sortBy sorts by name descending correctly', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.sortBy(users,  UserSortOptions.fullName, UserSortDirection.descending)
// @ts-ignore
    expect(sorted[0]).toMatchObject(michel);
// @ts-ignore
    expect(sorted[1]).toMatchObject(michel2);
// @ts-ignore
    expect(sorted[2]).toMatchObject(michel3);
  })



  test('users.textFilter filters users correctly when search criteria should yield matches', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.textFilter(users,  'Aub')
// @ts-ignore
    expect(sorted.length).toEqual(3)
  })

  test('users.textFilter correctly yields no users because filter query does not consider case sensitivity', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.textFilter(users,  'aub')
// @ts-ignore
    expect(sorted.length).toEqual(0)
  })

  test('users.textFilter correctly yields a user by filtering with a part of its email address', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "a funky email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.textFilter(users,  'nky em')
// @ts-ignore
    expect(sorted.length).toEqual(1)
    expect(sorted).toMatchObject([michel2])
  })

  test('users.textFilter correctly yields a user by filtering with a part of its country field', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "a funky email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.textFilter(users,  michel.country)
// @ts-ignore
    expect(sorted.length).toEqual(1)
// @ts-ignore
    expect(sorted).toMatchObject([michel])
  })


  test('users.textFilter correctly yields unfiltered list as is because fitler is null or empty', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted1 = Users.textFilter(users,  '')
    const sorted2 = Users.textFilter(users,  '')
// @ts-ignore
    expect(sorted1.length).toEqual(3)
// @ts-ignore
    expect(sorted2.length).toEqual(3)
  })

  test('users.ageFilter correctly yields no users because no users exist within range', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.ageFilter(users,  50, 90);
// @ts-ignore
    expect(sorted.length).toEqual(0)
  })


  test('users.ageFilter correctly yields some users because users exist within range', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.ageFilter(users,  5, 15);
// @ts-ignore
    expect(sorted.length).toEqual(2)
  })


  test('users.ageFilter correctly yields a user inclusively on it limits', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel3 = createUser({
      age: 44,
      country: faker.address.country(),
      name: {
        firstName: 'Zoe',
        lastName: 'Aubin'
      },
      email: "an-email",
    })


    const users = [
      michel2,
      michel3,
      michel
    ]

    const sorted = Users.ageFilter(users,  12, 44);
// @ts-ignore
    expect(sorted.length).toEqual(3)
  })

  test('users.ageFilter correctly excludes an undefined entry in the list', () => {

    const michel = createUser({
      age: 12,
      country: faker.address.country(),
      name: {
        firstName: 'Alexandre',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const michel2 = createUser({
      age: 14,
      country: faker.address.country(),
      name: {
        firstName: 'Bob',
        lastName: 'Aubin'
      },
      email: "an-email",
    })

    const users = [
      michel2,
      undefined,
      michel
    ]

    // @ts-ignore
    const sorted = Users.ageFilter(users,  12, 44);
    // @ts-ignore
    expect(sorted.length).toEqual(2)
  })

})
