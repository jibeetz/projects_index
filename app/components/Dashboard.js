var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var api = require('../utils/api');
var List = require('./List');
var ListSearch = require('./ListSearch');
var SearchResults = require('./SearchResults');
var Site = require('./Site');
var AddSite = require('./AddSite');
var includes = require('../utils/includes');

class Dashboard extends React.Component {

  constructor() {

    super();

    this.state = {
      isAddSiteActive: false,
      sitesList: null,
      input: ''
    }

    this.loadList = this.loadList.bind(this);
    this.handleAddSiteMode = this.handleAddSiteMode.bind(this);
  }

  componentDidMount() {
    this.loadList();
  }

  updateSearch(inputValue) {

    this.setState({
      input: inputValue
    })
  }

  handleAddSiteMode() {
    this.setState({
      isAddSiteActive: !this.state.isAddSiteActive
    })
  }

  loadList() {
    api.fetchSites().then(function (res) {

      this.setState(function () {
        return {
          sitesList: res
        }
      })

    }.bind(this));
  }

  render() {

    return (
      <Router>
        <div>
          <h2>Dashboard</h2>
          <AddSite addSite={this.state.isAddSiteActive} />
          <button onClick={this.handleAddSiteMode.bind(this)}>Add project</button>
          <List list={this.state.sitesList} searchText={this.state.input} />
          <ListSearch updateSearch={this.updateSearch.bind(this)} searchText={this.state.input} />
          <SearchResults list={this.state.sitesList} searchInput={this.state.input} />

          {!this.state.sitesList
            ? <p>Loading</p>
            : <Route path="/page/:id" render={props => <Site seitesList={this.state.sitesList} {...props} />} />
          }
        </div>
      </Router>
    )
  }
}

module.exports = Dashboard;