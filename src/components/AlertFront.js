import React from 'react'
import { Alert, Button } from 'react-bootstrap'


export default class AlertFront extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            alertVisible: false,
            data: null
        }
    }

    handlePress = () => {
        let id = this.props.selection

        fetch(`http://localhost:3000/frontend/${id}`)
        .then(res => res.json()
        .then(data => this.setState({data: data[0], alertVisible: true})))
    }

    handleDismiss = () => {
        this.setState({alertVisible: false})
    }

    render(){
        let data = this.state.data
        if(this.state.alertVisible){
            return(
                <div className="alert-align">
                <Alert bsStyle='success' onDismiss={this.handleDismiss}>
                <div>
                    <div className="question">
                        <label htmlFor="question">Question</label>
                        <p>{data.label}</p>
                    </div>
                    <div className="answer">
                        <label htmlFor="answer">Answer</label>
                        <p>{data.answer}</p>
                    </div>
                </div>
                    
                </Alert>
                </div>
                
            )
        } else {
            return (
                <Button onClick={this.handlePress} bsSize='large' bsStyle='primary'>Answers</Button>
            )
        }
        
    }

}