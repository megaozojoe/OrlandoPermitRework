import {useEffect, useState} from "react";
import PropTypes from 'prop-types'

function PermitData({searchQuery}) {
const [permits, setPermits] = useState([]);
const [displayLimit, setDisplayLimit] = useState(10);

useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await fetch('https://data.cityoforlando.net/resource/ryhf-m453.json');
        const data = await response.json();
        setPermits(data);
    } catch (error) {
        console.error('Error fetching permit data:', error);
    }
    };

    fetchData();
}, []);

const filteredPermits = searchQuery
    ? permits.filter(permit =>
        permit.permit_number && permit.permit_number.toLowerCase().includes(searchQuery))
    : permits;

return (
    <div className="Content-area">
        <table className="Permit-table">
            <tr>
                <th>Permit Number</th>
                <th>Application Type</th>
                <th>Property Owner</th>
                <th>Contractor</th>
                <th>Contractor Phone</th>
            </tr>
            {filteredPermits.slice(0, displayLimit).map((permit, index) => (
        <tr key={index} className="Permit-box">
            <td>{permit.permit_number}</td>
            <td>{permit.application_type}</td>
            <td>{permit.property_owner_name}</td>
            <td>{permit.contractor}</td>
            <td>{permit.contractor_phone_number}</td>
        </tr>
    ))}
        </table>
        <div className="Permit-table-buttons">
        {displayLimit < filteredPermits.length && (
        <button onClick={() => setDisplayLimit(displayLimit + 10)}>Load More</button>
    )}
    {displayLimit < filteredPermits.length && (
        <button onClick={() => setDisplayLimit(filteredPermits.length)}>Load All</button>
    )}
        </div>    
    </div>
);
}

PermitData.propTypes = {
    searchQuery : PropTypes.node,
}

export default PermitData;