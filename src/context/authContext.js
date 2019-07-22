import React from 'react';

const authContext = React.createContext({
    Authenticated: false,
    login :() =>{}

})

export default authContext;