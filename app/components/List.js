var React = require('react');
var ReactRouter = require('react-router-dom');
var NavLink = ReactRouter.NavLink;
var includes = require('../utils/includes');

class List extends React.Component {
  render() {

    return (
      <aside>
        <ul>
          {!this.props.list
            ? <p>Loading</p>
            : this.props.list.map(site => {
              var selectedClass = (this.props.searchText !== '' && includes.check(site, this.props.searchText)) ? 'selected' : '';
              return (
                <li key={site.id}>
                  <NavLink className={selectedClass} to={'/page/' + site.id}>{site.name}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </aside>
    )
  }
}

module.exports = List;