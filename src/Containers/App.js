import React, { Component } from 'react';

import styles from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClasses from '../hoc/withClasses';
import Aux from '../hoc/aux';
import AuthContext from '../context/authContext';


class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.JS] Constructor');
  }
  state = {
    persons: [
      {id:'ddfa1',name:'Ven', age:26},
      {id:'ddeea1',name:'Manu', age:27},
      {id:'eeea1',name:'Moni', age:5}
    ],
    otherValue : 'hello there!',
    showPersons : false,
    Authenticated: false
  }

  static getDerivedStateFromProps (props, state){
    console.log('[App.JS] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount (){
  //   console.log('[App.JS] componentWillMount');
  // }
  componentDidMount (){
    console.log('[App.JS] componentDidMount');
  }

  // componentWillUnmount (){
  //   console.log('[App.JS] componentWillUnmount');
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log ('[App.JS] shouldComponentUpdate :', nextProps, nextState)
    return true;
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log (' [App.JS] getSnapshotBeforeUpdate :', prevProps, prevState)
    return null;
}
// componentWillUpdate (){
//     console.log('[App.JS] componentWillUpdate');
// }
componentDidUpdate (prevProps, prevState, snapshot){
    console.log('[App.JS] componentDidUpdate');
}


  deletePersonHandler = (personIndex) => {
    
    const persons = [...this.state.persons];// JS Spread Operator
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }

  eventNameHandler = (event, id) => {
    const pIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[pIndex]};

    //const person = object.assign({},this.setState.persons[pIndex]);//traditional way

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[pIndex] = person;
    this.setState({persons : persons})
    
  }

  toggleHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({showPersons: !doesShowPersons})

  }
  loginHandler = () => {
    this.setState({Authenticated: true})

  }
  render() {
    console.log('[App.JS] rendering...');

    let persons = null;

    if(this.state.showPersons){
      persons = <Persons delete={this.deletePersonHandler}
          change={this.eventNameHandler} 
          Authenticated = {this.state.Authenticated}
          persons = {this.state.persons}/>
    }

    return (
      <Aux> 
        <AuthContext.Provider value={{Authenticated: this.state.Authenticated,login :this.loginHandler}}> 
 <Cockpit
 title = {this.props.title}
 showPersons = {this.state.showPersons}
 toggleHandler = {this.toggleHandler}
 loginHandler = {this.loginHandler}
 persons = {this.state.persons}
 />
   {persons}  
        </AuthContext.Provider>
     
      </Aux>
    );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi Ven, I'm your react App"));
  }
}

export default withClasses(App, styles.App);


