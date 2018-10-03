const algoliasearch = require('algoliasearch');

/* eslint-disable no-unused-vars */
class Service {
  constructor (options) {
    this.options = options || {};
    this.client = algoliasearch(options.applicationId, options.apiKey);
    this.index = this.client.initIndex('apps');
  }

  async create (data, params) {
    try {
      const content = await this.index.addObjects(data);
      return content;
    } catch(error) {
      console.log('/apps-create-error', error);
    }
  }

  async remove (id, params) {
    try {
      const content = await this.index.deleteObject(id);
      return content;
    } catch(error) {
      console.log('/apps-remove-error', error);
    }
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
