import {useEffect, useState} from "react";

function PermitData({searchQuery}
) {
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
    {filteredPermits.slice(0, displayLimit).map((permit, index) => (
        <div key={index} className="Permit-box">
        <p>Permit Number: {permit.permit_number}</p>
        </div>
    ))}
    {displayLimit < filteredPermits.length && (
        <button onClick={() => setDisplayLimit(displayLimit + 10)}>Load More</button>
    )}
    {displayLimit < filteredPermits.length && (
        <button onClick={() => setDisplayLimit(filteredPermits.length)}>Load All</button>
    )}
    </div>
);
}

export default PermitData;