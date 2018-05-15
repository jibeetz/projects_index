const React = require('react')
const SelectedSite = require('./SelectedSite')
const ReactRouter = require('react-router-dom')
const Link = ReactRouter.Link

class Site extends React.Component {

    render() {

        let matchId = parseInt(this.props.match.params.id);
        let selectedSite = this.props.seitesList.filter(function (site) {
            if (site.id === matchId)
                return site;
        })[0];

        return (
            <div>
                {selectedSite &&
                    <SelectedSite site={selectedSite} />}

                <Link to='/' >close</Link>
            </div>
        )
    }
}

module.exports = Site;