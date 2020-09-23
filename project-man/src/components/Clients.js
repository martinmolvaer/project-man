import React from 'react';
import ClientData from "../data/ClientData.json";

const Clients = () => {



    return (
        <div>
            <h1>Clients</h1>
            {ClientData.map((client) => {
                return ( <ul>
                    <li>
                        {client.client}
                    </li>
                </ul>
                );
            })}

        </div>
    )
};


export default Clients;