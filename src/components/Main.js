import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import BehaviorQ from './BehaviorQ'

export default class Main extends React.Component{
    render(){
      return (
            <Router>
              
              <div>
              <Route  exact path="/" component={Header}/>
             
                <div className="navbar">
                <NavLink to="/behavior" activeClassName="selected">Behavior Questions</NavLink>
                </div>
                    
                 


               
                <Route exact path="/behavior" component={BehaviorQ}/>
                
              </div>
            </Router>
      )
    }
} 

const Header = () => (
  <div className='header'>
    <h2>Developer Interview Questions</h2>
  </div>
)
  




