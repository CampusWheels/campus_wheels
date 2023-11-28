import './Home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AppBar from '../components/navbar/nav'




export const Home = () => {
    const [ vehicleData, setVehicleData ] = useState([]);
    const [ unregisteredData, setUnregisteredData] = useState([]);

    useEffect(() => {
        // Fetch vehicle data
        axios.get('http://localhost:4000/vehicles')
        .then(response => {
            // console.log(response.data);
            setVehicleData(response.data);
        })
        .catch(err => {
            console.error("Error fetching data: ", err);
        })

        axios.get('http://localhost:4000/unregistered-vehicles')
        .then(response => {
            console.log(response.data);
            setUnregisteredData(response.data);
        })
        .catch(err => {
            console.error("Error fetching data: ", err);
        })

    }, []);

    const searchVehicle = (event) => {

        const searchParam = event.currentEvent;
        axios.get("https://localhost:3000/vehicle/:" + `${searchParam}`)
        .then(response => {

        })

    }

    return (
        <>
            <div className="container">
                <div className = "navbar">
                     <AppBar />
                </div>
                <div className="inner-container">
                    <div className="table-section">
                        <div className="table-header">
                            <span>All Entries</span>
                        </div>
                        <div className="table-content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Vehicle Number</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        vehicleData.map((vehicle, index) => (
                                            <tr key={ index }>
                                                <td>{ vehicle.matchedLp }</td>
                                                <td className={ !vehicle.db_match ? 'un-auth' : '' }>
                                                    { vehicle.vehicle_type }
                                                </td>
                                            </tr>
                                        ))
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
                            // filter(vehicle => !vehicle.db_match)
                                vehicleData.map((vehicle, index) => (
                                    <div className="card-item" key={ index }>
                                        <span className="carNumber">{ vehicle.matchedLp }</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};