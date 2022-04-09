import React from "react";


class App extends Component {
    state = {
        emp_Sal:30000,
    };
    btnHandler(value){
        this.setState({
            emp_Sal: 30000 + value,
        })
    }
    render() {
        return (
            <div>
    
                <Navbar title = "My Page" aboutText="Abot Us"/>   

                <h1>Employee Sal : {this.state.emp_Sal}</h1>
                <button onClick={this.btnHandler.bind(this, 5000)}>Hike 50k </button>
                <hr/>
                <button onClick={this.btnHandler.bind(this,100000)}>Hike 100k</button>
                <hr/>
                <button onClick={this.btnHandler.bind(this,0)}>Hike 100k</button>
            </div>
            
        )
    }
       


    
    
}

export default App