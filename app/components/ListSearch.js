const React = require('react')
const ReactDOM = require('react-dom')

class ListSearch extends React.Component {

  handleSearchChange(event) {
    this.props.updateSearch(event.target.value);
  }

  resetSearch() {
    this.props.updateSearch('');
    ReactDOM.findDOMNode(this.refs.form).value = '';
  }

  render() {
    return (
      <div>
        <input ref="form" onChange={this.handleSearchChange.bind(this)} value={this.props.searchText} type="text" />
        {
          this.props.searchText.length !== 0 ? <button onClick={this.resetSearch.bind(this)}>reset</button> : ''
        }
      </div>
    )
  }
}

module.exports = ListSearch