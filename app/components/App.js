var React = require('react');
var Dashboard = require('./Dashboard');

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Dashboard />
            </div>
        )
    }
}

module.exports = App;