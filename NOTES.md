## Changes for submission

### The following were modified

1 . server and client were migrated fully to typescript
- this was to facilitate sharing utilities regarding creating users between server, client and test
- to be able to make point 2 work properly, as having js and ts files to consider proved to be problematic in a non-module scoped npm project

2 . NPM START modified to run unit tests on file changes
- to take advantage of quick test times with Jest

3 . Stylings
- originally started in CSS and JSX CSS, changed my mind and refactored all stylings into styled-components as I noticed it was easier to scope down media queries

### UI Quirks I added in

1. The list of users header will stick to the top on scroll overflow
2. Hover your cursor over elements in the user table - the position of this popover is bounded to the screen
3. Added Planned colors throughout the user table
4. The UI is mobile friendly and adapts to the view width
5. You can save/unsave a user to local storage by selecting/deselecting their checkbox - any saved user should persist across page reloads

### Key features and logic behind them

1. **State management**
- Redux was used, with a simple reducer/slice approach
- Split into users and filters states
- Took this approach to minimize prop drilling as much as possible
2. **Testing**
- Tests run on file changes as part of npm start - making the application test-driven
3. **Filtering**
- filtering on age is done inclusively
- filtering by search text is done exhaustively - luckily, i realized that by concatenating all fields of a user, you could just check if the search string is a substring of this concatenation
  - it made the solution quite clean in my opinion
4. **Device compatibility**
- This build supports mobile, medium and large screens
- The design follows a mobile-first design, which evolves into the design of the assignment as the screen size increases
5. **Stylings**
- styled-components declarations are split into two files, components.ts containers.ts
- as the names suggest, this was to scope each declaration according to how reusable each declaration will need to be
  - variables: most reusable
  - containers: quite reusable
  - coomponents: need to be reusable, but not used all the time
- why keep all of these in one dedicated folder, and not each styled-component where they are first/only used?
  - I like to keep all stylings together, it keeps managing them simple
  - having stylings sprinkled accross dozens of component files means you end up potentially importing components uselessly
6. **Coding style**
- 12-factor app factors utilized here:
  - 1 codebase - by refactoring everything to one language to make code cross-app/module compatible
  - Dev/prod parity - here we use .env and have no-hardcoded environment variables
- dynamic programming:
  - user handling for filtering and sorting is done dynamically
  - here I use custom enums to give the dev the ability to dictate how to sort or filter users, and which variables to use
- DRYness
  - opted for reusability as much as possible
7. **Customizations**
- Custom state hooks to save to local storage
- Custom hover popup, and creating boundaries for where it can appear programmatically


### Things i would have tackled next

- save filters, and snapshots of filters, in local storage for re-use
  - be able to view these and have them get loaded into the table
- using redux thunk more
- writing more component unit tests
- ran into some jest config issues to test the mouse event dependency on "window", would tackle this more
- fleshing out more server-side functionality,
  - implement CRUD functionality with a database to save user filters
- hook this into a service provider for more functionality, and provide a small guide on how to set this up in the app, such as:
  - send a user an email via SNS or Sendgrid
