import React, {useEffect, useRef, useContext} from 'react';
import styles from './Cockpit.css';
import AuthContext from '../../context/authContext';

const cockpit = (props)=> {
    const togButnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log (' [cockpit.JS] useEffect when component first mount');
        togButnRef.current.click();
        return () => {
            console.log (' [cockpit.JS] useEffect for cleanUp work') 
        }
    },[]

)

useEffect(() => {
    console.log (' [cockpit.JS] useEffect executes showPersons Props changes')
},[props.showPersons] // can have array with multiple args and executed when something in it changes
)


    let btnclass = '';

    let classes = [];
    if (props.persons.length <=2){
      classes.push(styles.red);
    }
    if (props.persons.length <=1){
      classes.push(styles.bold);
    }
    if(props.showPersons){
       btnclass = styles.Red;
    }
    return(
        <div className={styles.cockpit}>
            <h1>{props.title}</h1>
        <p className={classes.join(' ')}>It is working!</p>
        <button 
        className={btnclass}
        ref = {togButnRef} 
        onClick = {props.toggleHandler}>
        Toggle Persons</button>
        <button onClick = {authContext.login}>
        Login</button>
        
        
        </div>
    )

}

export default React.memo(cockpit); // React.memo only updates or re renders component when something in input changes
//saves snapshot of prev props and executes should comp update