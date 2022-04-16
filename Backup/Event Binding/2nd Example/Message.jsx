import React from 'react'

class Message extends React.Component{
    state={
        Employee_sal:10000
    }
    btnHandler= (value) => {
        this.setState({Employee_sal:10000 + value})
    }
    render () {
        return(
            <>
            <h1>Employee Sal- {this.state.Employee_sal}</h1>
            <button className='btn btn-dark' onClick={this.btnHandler.bind(this,50000)}>Hike 50k</button>
            <button className='btn btn-primary' onClick={this.btnHandler.bind(this,100000)}>Hike 100k</button>
            <button className='btn btn-success' onClick={this.btnHandler.bind(this,0)}>Hike 0k</button>
            </>
        )
    }
}
export default Message