import React, {useEffect, useState} from 'react';
import {Routing} from "./routes/Routing";
import NavigationBar from "./components/NavigationBar";
import {UserContext} from "./shared/global/provider/UserProvider";


function App() {
    const [authenticatedUser, setAuthenticatedUser ] = useState<string>('')

    const checkIfUserIsAuthenticatedInBrowser = () => {
        const username = localStorage.getItem('username')
        if (typeof username === 'string') {
            setAuthenticatedUser(username)
        }

    }

    useEffect(() => {
        checkIfUserIsAuthenticatedInBrowser()
    }, [])
  return (
      <UserContext.Provider value={{ authenticatedUser, setAuthenticatedUser}}>

       <Routing>
        <NavigationBar/>
      </Routing>
      </UserContext.Provider>

  )
}

export default App;
