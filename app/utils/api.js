var axios = require('axios');

module.exports = {

  fetchList: function () {
    var encodedURI = __dirname + 'app/data/list.js';

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data
      })
  },

  fetchSites: function () {
    var encodedURI = 'http://localhost:9595/sites';
    // var encodedURI = __dirname + 'app/data/list.js';

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data
      })
  }
}