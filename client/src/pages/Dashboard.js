import './Dashboard.css';
import React, { useState, useEffect } from 'react';



export const Dashboard = () => {
    const [ vehicleData, setVehicleData ] = useState([]);
    useEffect(() => {
        // Fetch vehicle data
        fetch('YOUR_API_URL_HERE')
            .then(response => response.json())
            .then(data => {
                setVehicleData(data); // check for return object 
            })
            .catch(error => console.error('Error fetching vehicle data:', error));
    }, []);

    return (
        <>
            <div className="container">
                <div className="inner-container">
                    <div className="table-section">
                        <div className="table-header">
                            <span>All Entries</span>
                        </div>
                        <div className="table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Car Number</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        vehicleData.map((vehicle, index) => {
                                            <tr key={ index }>
                                                <td>{ vehicle.vehicleNo }</td>
                                                <td className={ !vehicle.db_match ? 'un-auth' : '' }>
                                                    { vehicle.category }
                                                </td>
                                            </tr>;
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="card-header">
                            <span>Recent Unauthorized entries</span>
                        </div>
                        <div className="card-grid">
                            {
                                vehicleData.filter(vehicle => !vehicle.db_match).map((vehicle, index) => {
                                    <div className="card-item" key={ index }>
                                        <span className="carNumber">{ vehicle.vehicleNo }</span>
                                    </div>;
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};