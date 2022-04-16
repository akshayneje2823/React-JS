import React from 'react'

class Submit extends React.Component{
  state= {
    email:"",
    password:""
  }
  updateHandler= (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  submitHandler= (event) => {
    event.preventDefault();
    console.log(this.state)
  }
    render(){
        return(
            <React.Fragment>
                <div className="container mt-5">
                <form onSubmit={this.submitHandler}>
                     <div className="form-group">
                        <label html_for="exampleInputEmail1" >Email address</label>
                        <input type="email" className="form-control" onChange={this.submitHandler} placeholder="Enter email" name='email'/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                     </div>
                     <div className="form-group">
                          <label html-for="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" placeholder="Password" onChange={this.submitHandler} name="password"/>
                      </div>
                      <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" />
                          <label className="form-check-label" html-for="exampleCheck1">Accept Terms And Conditions</label>
                      </div>
                      <button type="submit" className="btn btn-primary" onSubmit={this.submitHandler}>Submit</button>
                  </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Submit