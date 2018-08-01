# Ember Client

This Ember app(frontend) is connected To [this Rails API(backend)](https://github.com/manojnaidu619/Rails-API-Backend)

# Important Step

Make Sure to install ``active-model-adapter`` by running ``ember install active-model-adapter``

```javascript
// in app/adapters/application.js

import ActiveModelAdapter from 'active-model-adapter';
export default ActiveModelAdapter.extend();
```

## Installation

* `git clone <repository-url>` this repository
* `cd customer`
* `npm install`

## Running / Development

* `ember serve --proxy http://localhost:3000`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
