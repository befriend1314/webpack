import React, {Component} from 'react'
import Styles from './style.css'

class Greeter extends Component {
    render() {
        return (
            <div>
                <div className={Styles.root}>hello react!</div>
                <h2 className="h2">this is h2!</h2>
            </div>
        )
    }
}

export default Greeter