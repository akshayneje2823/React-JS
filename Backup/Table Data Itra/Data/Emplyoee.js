import React from 'react'
import Data from './data'
// import Data from './data'

class App extends React.Component{
    render() {
        return(
            <>
            <div className='container '>
                <div className='row'>
                    <div className='col-md-6 mt-5'>
                        <table className='table table-hover'>
                            <thead className='bg-dark text-white'>
                            <tr>
                                <th>ID</th>
                                <th>First_name</th>
                                <th>Last_name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Ip_address</th>
                            </tr>
                            </thead>
                            <tbody>{Data.map((Data) => {
                                return <tr>
                                    <td>{Data.id}</td>
                                    <td>{Data.first_name}</td>
                                    <td>{Data.last_name}</td>
                                    <td>{Data.email}</td>
                                    <td>{Data.gender}</td>
                                    <td>{Data.ip_address}</td>
                                </tr>
                            })
                                }</tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default App