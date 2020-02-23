import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './Loading'
import SeasonPlay from './SeasonDisplay'


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lat : null,
            long : null,
            errorMessage : '',
            loading : true
        }
    }
    
    getLocation(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat : position.coords.latitude,
                    loading : false
                })
                console.log(position)
            },
            (err) => {
                this.setState({
                    errorMessage : err.message
                })
                console.log(err)
            }
        );
    }

    componentDidMount(){
        setTimeout(() => {
            //IF FALSE NAVIGATE TO ERROR
            if(true) {
               this.getLocation()
            } 
        }, 2000) //TIME OF WAITING
    }

    render() {
            if(!this.state.loading && this.state.lat){
                return <SeasonPlay lat={this.state.lat}/>
            }

            return <Loading message="Place accept location request"/>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)