import React from 'react'
import Example from './Life Cycle/Example'
import Navbar from './Navbar'

class App extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
            <Example/>
            </React.Fragment>
        )
    }
}
export default App