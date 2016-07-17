import generateCosplay from './generator'
import React from 'react'
import _ from 'lodash'

class GeneratorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: ["Looking for a new cosplay? Try this out for size: ",
            "People are saying this is the new hot scene: ",
            "Here's your new cosplay: "],
            cosplay: ""
        }
    }

    componentDidMount(){
        this.getCosplay();
    }

    getCosplay(){
        generateCosplay((result)=>{
            console.log(result);
            this.setState({cosplay: result})
        });
    }


    render() {
        return <div>
            <div>{_.shuffle(this.state.messages)[0]}{this.state.cosplay}</div>
            <button onClick={this.getCosplay.bind(this)}>Generate new</button>
        </div>
    }
}

module.exports = GeneratorPage