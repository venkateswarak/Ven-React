import React, {PureComponent} from 'react';
import Person from './Person/Person';
import PropTypes from 'prop-types';

class Persons extends PureComponent {
    //pure component updates or renders everytime when something in props changes


    // static getDerivedStateFromProps(state,props){
    //     console.log('[Persons.JS] getDerivedStateFromProps', props);
    // return state;
    // }
    // componentWillReceiveProps (props){
    //     console.log('[Persons.JS] componentWillReceiveProps');
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log ('[Persons.JS] shouldComponentUpdate :', nextProps, nextState)
    //     if(nextProps.Persons !== props.Persons){
    //                return true;
    //              }else{
    //                return false;
    //             } 

    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log (' [Persons.JS] getSnapshotBeforeUpdate :', prevProps, prevState)
        return null;
    }
    // componentWillUpdate (){
    //     console.log('[Persons.JS] componentWillUpdate');
    // }
    componentDidUpdate (prevProps, prevState, snapshot){
        console.log('[Persons.JS] componentDidUpdate');
    }

    
    render (){
    console.log('[Persons.JS] rendering...');
    return this.props.persons.map((person, index) => 
    {
      return <Person click = {() => this.props.delete(index)}
      change = {(event) => this.props.change(event, person.id)}
    name = {person.name} 
    age = {person.age}
    key = {person.id}
    auth = {this.props.Authenticated}
    />
      
    })

}
}
Person.propTypes= {
    click : PropTypes.func,
    change : PropTypes.func,
  name : PropTypes.string, 
  age : PropTypes.number,
}
    

export default Persons;