import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData()
    return (
        <div>
            <h1>All phones here: {phones.length}</h1>
            {phones.map(phone => <li key={phone.id}><Link to={`/phones/${phone.id}`}>{phone.name}</Link></li>)}
        </div>
    );
};

export default Phones;