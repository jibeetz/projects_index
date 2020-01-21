const React = require('react')

class AddSite extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newSite: {}
    }
  }

  render() {
    var openedAddSiteClass = (this.props.addSite) ? 'open' : '';

    return (
      <div id="add-site" className={openedAddSiteClass}>
        <h3>Add a project</h3>

      </div>
    )
  }
}

module.exports = AddSite