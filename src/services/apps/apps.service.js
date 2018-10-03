// Initializes the `apps` service on path `/apps`
const createService = require('./apps.class.js');
const hooks = require('./apps.hooks');

module.exports = function (app) {

  const options = {
    applicationId: app.get('algolia').applicationId
    apiKey: app.get('algolia').apiKey
  };

  // Initialize our service with any options it requires
  app.use('/apps', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('apps');

  service.hooks(hooks);
};
