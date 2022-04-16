import React from 'react'

class Card  extends React.Component{
    state = {
        Product_Name: "Iphone",
        Product_Name1: "Iphone12",
        Price: 10000,
        Price1: 20000,
        Qty: 1,
        Qty1: 2
    }
    decrHandler= () => {
        this.setState({Qty:this.state.Qty - 1})
    }
    incrHandler= () => {
        this.setState({Qty:this.state.Qty + 1})
    }

    dcrHandler = () => {
        this.setState({Qty:this.state.Qty1 - 1})

    }
    icrHandler = () => {
        this.setState({Qty:this.state.Qty1 + 1})
    }
    
    render() {
        return(
            <><div className="contarner">
                <div className="row">
                    <div className="col-md-10">
                        <table className='table table-hover'>
                            <thead>
                            <th>Product_Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total_Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.Product_Name}</td>
                                    <td>{this.state.Price}</td>
                                    <td><button onClick={this.decrHandler}>-</button>{this.state.Qty}<button onClick={this.incrHandler}>+</button></td>
                                    <td>{this.state.Price * this.state.Qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="contarner">
                <div className="row">
                    <div className="col-md-10">
                        <table className='table table-hover'>
                            <thead>
                            <th>Product_Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total_Price</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.Product_Name1}</td>
                                    <td>{this.state.Price1}</td>
                                    <td><button onClick={this.dcrHandler}>-</button>{this.state.Qty1}<button onClick={this.icrHandler}>+</button></td>
                                    <td>{this.state.Price1 * this.state.Qty1}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default Card