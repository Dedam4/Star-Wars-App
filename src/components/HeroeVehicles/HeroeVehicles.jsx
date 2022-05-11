import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getApiResource } from '../../HelpFunction/getApiInfo';
import { GET_VEHICLES, GET_HEROE } from '../../constants/apiConst';
import { HeroeButtonBack } from '../HeroeBtnBack/HeroeButtonBack';
import { Vehicles } from '../Vehicles/Vehicles';


export const HeroeVehicles = (props) => {

    const [heroeInfo, setHeroeInfo] = useState([]);
    const [heroeVehicleso, setHeroeVehicleso] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        (async () => {
            const response = await getApiResource(`${GET_HEROE}/${id}`);

            if (response) {
                setHeroeInfo([
                    { title: 'Vehicles', data: response.name }
                ])



               { response.vehicles.length && setHeroeVehicleso(response.vehicles)}
            }

        })();

    }, []);

    return (
        <>
            <HeroeButtonBack />
            {heroeInfo && (
                <ul>{heroeInfo.map(({ title, data }) =>

                    data && (
                        <li key={title}>
                            <h3>{title}: {data}</h3>

                        </li>
                    )
                )}</ul>

            )}
              {heroeVehicleso === null ? <h3 style={{color:'white'}}>Nothing</h3> : <Vehicles heroeVehicleso={heroeVehicleso} />}

            </>
    )
}
