/**
 *
 */

// import {fetchFromUrl} from "../../src/utils/network";

import {fetchFromUrl} from "../../src/utils/network";

const normalFetch = global.fetch;

describe('Network utilities', ()=> {

  afterEach(() => {
    global.fetch = normalFetch;
  })

  test('fetchFromUrl fails if no url is passed in', async () => {

    global.fetch = jest.fn(() =>
      Promise.reject("Invalid Url")
    );// as jest.MockedFn<any>;
    //
    try {
      await fetchFromUrl("")
    } catch (e) {
      expect(e).toMatch('Invalid Url')
    }
  })
})
