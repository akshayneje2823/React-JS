import React from 'react'

class Example extends React.Component{
    constructor(props){
        super(props)
        console.log("First Construcor Method will Execute")
        this.state = {
            currentTime: new Date().toLocaleTimeString()
            
        }
    }
    componentDidMount = () => {
        setInterval(()=>{
            this.setState({currentTime: new Date().toLocaleTimeString()})
        },1000)
        console.log("Third Life Cycle Method will execute")
    }
    render(){
        console.log("Second Render Method will execute")
        return(
            <React.Fragment>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h3>Time:{this.state.currentTime}</h3>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
export default Example