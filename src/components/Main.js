import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import BehaviorQ from './BehaviorQ'
import {PageHeader} from 'react-bootstrap';

export default class Main extends React.Component{
    render(){
      return (
                <Router>

                  <div>
                    <Route exact path="/" component={Header}/>
                    <Route exact path="/behavior" component={BehaviorQ}/>

                    <div className="navbar">

                      <NavLink to="/behavior" activeClassName="selected" className='link-style'>Behavior Questions</NavLink>

                      <NavLink to='/front-end' activeClassName="selected" className='link-style'>Front-End Questions</NavLink>

                      <NavLink to='/general' activeClassName="selected" className='link-style'>General Questions</NavLink>

                      <NavLink to='/javascript' activeClassName="selected" className='link-style'>JavaScript Questions</NavLink>

                      <NavLink to='/opinion' activeClassName="selected" className='link-style'>Opinion Questions</NavLink>
                      
                    </div>






                  </div>
                </Router>
      )
    }
} 

const Header = () => (
  <div >
   <PageHeader className='header'>Developer Interview Questions</PageHeader>
  </div>
)
  




