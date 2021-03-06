// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        peopleInSpace: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(res => {
            this.setState( {peopleInSpace: res.people})
        })
    }


    render() {
        return (
            <div>
                {this.state.peopleInSpace.map(person => person.name)}
            </div>
        )
    }
}