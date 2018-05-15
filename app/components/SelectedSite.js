var React = require('react');

class SelectedSite extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false,
            site: this.props.site
        }

        this.handleEditMode = this.handleEditMode.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateSite = this.updateSite.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this.setState({
                site: nextProps.site
            });
        }
    }

    handleEditMode() {
        this.setState({
            isEditMode: !this.state.isEditMode
        })
    }

    updateSite(event) {
        event.preventDefault();

        console.log('submit', this.state.site);

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:9595/data', true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        xhr.send(JSON.stringify(this.state.site));
    }

    handleChange(event) {
        var value = event.target.value;

        this.setState(function () {
            this.state.site.url = value;
            return this.state.site
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.site.name}</h3>

                <form onSubmit={this.updateSite}>
                    <div>URL: <a href={this.state.site.url}>{this.state.site.url}</a></div>
                    {this.state.isEditMode &&
                        <div>
                            <input type="text" value={this.state.site.url} onChange={this.handleChange} />

                            <button type="submit">update</button>
                        </div>
                    }

                    {!this.state.isEditMode &&
                        <button onClick={this.handleEditMode.bind(this)}>edit</button>
                    }
                    {this.state.isEditMode &&
                        <button onClick={this.handleEditMode.bind(this)}>read</button>
                    }

                </form>
            </div>
        )
    }
}

module.exports = SelectedSite;