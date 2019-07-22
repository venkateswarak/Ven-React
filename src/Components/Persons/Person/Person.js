import React, {Component} from 'react';
import styles from './Person.css';
import Aux from '../../../hoc/aux';
import withClasses from '../../../hoc/withClasses';
import AuthContext from '../../../context/authContext';

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    componentDidMount(){
        //this.inputElement.focus(); //older versions before 16.2 also now
        this.inputElementRef.current.focus(); //newer versions after 16.2
    }
render(){
    console.log('Person.JS] rendering...');
    return <Aux>
        {this.context.Authenticated ? <p>Is Authenticated</p> : <p>Please Login</p>}
        <p onClick = {this.props.click} key='i1'>
        I'm {this.props.name} and I'm {this.props.age} years old!
        </p>
<p key = 'i2'>{this.props.children}</p>
<input key='i3'type='text' 
//ref = {(inputEl)=> {this.inputElement = inputEl}}
ref = {this.inputElementRef}
onChange = {this.props.change}
value = {this.props.name}/>
        
    </Aux>  
    
}
}
 

export default withClasses(Person, styles.Person);