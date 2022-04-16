import React from 'react'

class Example extends React.Component{
state = {
    Email:"",
    Password: ""
}
    updateHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitHandler = (event) => {
        alert(`${this.state}`);
        event.preventDefault();
        console.log(this.state)
    }
    
    render () {
        return(
            <React.Fragment>
                <form onSubmit ={this.submitHandler}>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <label>Login Page</label>
                    <br /><br />
                    <label htmlFor="">Email: </label>
                    <input type="text" placeholder='Enter Your Email' name='email' onChange={this.updateHandler} />
                    <br /><br />
                    <label htmlFor="">Password: </label>
                    <input type="password" placeholder='Enter Your password' name='password' onChange={this.updateHandler} />
                    <br /><br />
                    <input type="submit" value="login" className='btn btn-success' onChange={this.subHandler} />
                </form>
            </React.Fragment>
        )
    }
}
export default Example