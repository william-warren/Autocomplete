# Autocomplete from API

For this assignment you will be using the JavaScript function `fetch`
to make an API request to the backend and update a `datalist` to support
dynamic autocompletion based on data from the server.

To complete this project you will want to:

- listen to `input` events on the `#student-name` `input`
- `fetch` to `/api/students` with a `GET` request and provide
  a `q` argument for the current value of `#student-name`
- populate the `#student-names` `datalist` with `option`s
  for each of the returned names. _Don't forget to empty the
  `datalist` out first._

## Important documation

- [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`datalist`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)

## Running the server

This project doesn't require a database, so you don't have to do any interesting setup. Just run the server!

`python3 manage.py runserver`

## Running the test

This project uses a [cypress](https://cypress.io) test suite.
You should `npm install` to make sure `cypress` gets installed.
After that you can run `npm test` to start the `cypress` test runner.
From there you can press the `Run All Specs` button.

**Don't forget to start your django server before running your cypress specs**
