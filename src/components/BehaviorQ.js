import React from 'react'
import '../App.css'


export default class List extends React.Component{
    constructor() {
        super()
        this.state = {
            data: [],
            selection: 1,
            value: ''

        }
    }
      
      async componentDidMount(){
        fetch('http://localhost:3000/behavior')
        .then(res => res.json()
      .then(data => this.setState({data: data})))
      }

      handleSubmit = (e) => {
          e.preventDefault()
          let id = this.state.selection
          let value = {
              answer: this.state.value
          }
          fetch(`http://localhost:3000/behavior/${id}`, {
              method: "put",
              body: JSON.stringify(value),
              headers: {
                  "Content-Type": "application/json"
              }
          })
          this.refs.form.reset()
      }

        
    
    render(){
      
        return(
                <div className="listcontainer">
                    <h2>Behavioral Questions</h2>
                    <div className="formstyle">
                        <div>
                            <select name="questions" className="input-size" onChange={e=> this.setState({selection: e.target.value})}> {this.state.data.map(a =>
                                <option value={a.id} key={a.id}>{a.question}</option>)}
                            </select>
                        </div>
                        <div className="answer-display">
                            <label htmlFor="answer">Answer</label>
                            <form onSubmit={this.handleSubmit} ref="form">
                                <input type="text" name="answer" className="input-size spacing" value={this.state.value} onChange={e => this.setState({value:e.target.value})}/>
                                <p>{this.state.value}</p>
                                <button className="input-size spacing">Submit Answer</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}