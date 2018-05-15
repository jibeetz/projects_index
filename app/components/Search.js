var React = require('react');
var api = require('../utils/api');

class Search extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            sitesList: null
        }

        this.loadList = this.loadList.bind(this);

    }

    componentDidMount(){
        this.loadList();
    }

    loadList(){

        this.setState(function () {
            return {
                sitesList: null
            }
        })

        api.fetchList().then(function(res){

            this.setState(function(){
                return{
                    sitesList: res
                }
            })
        }.bind(this));
    }

    render(){

        return(
            <div>
                <form>
                    <input />
                </form>
            </div>
        )
    }
}

module.exports = Search;