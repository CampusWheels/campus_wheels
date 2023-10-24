import './Index.css'

export const Home = () => {
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
                                <tr>
                                    <td>PBO2A0001</td>
                                    <td>Faculty</td>
                                </tr>
                                <tr>
                                    <td>PBO2A0001</td>
                                    <td>Faculty</td>
                                </tr>
                                <tr>
                                    <td>PBO2A0001</td>
                                    <td>Faculty</td>
                                </tr>
                                <tr>
                                    <td>PBO2A0001</td>
                                    <td>Faculty</td>
                                </tr>
                                <tr>
                                    <td>PBO2A0001</td>
                                    <td>Faculty</td>
                                </tr>
                                <tr>
                                    <td>PBO2A0001</td>
                                    <td className="un-auth">UnAuthorized</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-section">
                        <div className="card-header">
                            <span>Recent Unauthorized entries</span>
                        </div>
                        <div className="card-grid">
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                            <div className="card-item">
                                <span className="carNumber">PB02A0001</span>
                                <span className="parkingLot">R&D Block</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}