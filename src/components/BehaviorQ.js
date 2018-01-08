import React from 'react'
import '../App.css'
import Alert from './Alert'
import {Grid, Col} from 'react-bootstrap'
import Select from 'react-select'
import 'react-select/dist/react-select.css'



export default class List extends React.Component{
    constructor() {
        super()
        this.state = {
            data: [],
            selection: 0,
            name: '',
            value: '',
            alertVisible: false

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
         let el = document.getElementById('form')
         return el.value === ''
      }
       resetForm = () => {
           this.setState()
       }

        
    
    render(){
        return(
                <div className="listcontainer">
                    <div className="nav">
                    <h2>Behavioral Questions</h2>
                    <a href="/" className='home-link'>Home</a>
                    </div>
                    
                    <div className="formstyle">
                        <div className='select-option'>
                           <Grid>
                               <Col md={6} mdOffset={3}>
                               <Select name='interviewQ' value={this.state.name} onChange={e => this.setState({selection: e.value, name: e.value})} options={this.state.data} clearable={false}/>
                               </Col>
                           </Grid>
                            
                            {/* <select name="questions" className="input-size" onChange={e=> this.setState({selection: e.target.value})}> {this.state.data.map(a =>
                                <option value={a.id} key={a.id}>{a.question}</option>)}
                            </select> */}
                        </div>
                        <div className="answer-display">
                            <label htmlFor="answer">Your Answer</label>
                            <form onSubmit={this.handleSubmit} ref="form" id="form">
                                <input type="text" name="answer" className="input-size " value={this.state.value} onChange={e => this.setState({value:e.target.value})}/>
                                <p>{this.state.value}</p>
                                <button className="spacing">Submit</button>
                            </form>
                        </div>

                        <div className="answer-container">
                                <Grid>
                                    <Col md={4} mdOffset={4}>
                                    <Alert selection = {this.state.selection}/>
                                    </Col>                  
                                </Grid>
                            
                        </div>
                    </div>
                </div>
        )
    }
}