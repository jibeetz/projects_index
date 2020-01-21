const React = require('react')
const includes = require('../utils/includes')
const ReactRouter = require('react-router-dom')
const NavLink = ReactRouter.NavLink

class SearchResults extends React.Component {

  render() {
    return (
      <ul>
        {!this.props.list
          ? <p>Loading</p>
          : this.props.list.filter(d => this.props.searchInput !== '' && includes.check(d, this.props.searchInput))
            .map(d => <li key={d.id}><NavLink to={'/page/' + d.id}>{d.name}</NavLink></li>)
        }
      </ul>
    )
  }

}

module.exports = SearchResults