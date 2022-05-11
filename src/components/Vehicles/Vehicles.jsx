import React, { useEffect, useState } from 'react'

import { makeCurrentReques } from '../../HelpFunction/getApiInfo';
import styles from './Vehicles.module.css'

export const Vehicles = ({ heroeVehicleso }) => {
  const [vehiclesInfo, setVehiclesInfo] = useState([]);

  useEffect(() => {
    (async () => {

      const vehicles = await makeCurrentReques(heroeVehicleso);
      setVehiclesInfo(vehicles);
    })();

  }, [])
  return (
    <div className={styles.vehicles}>
      <ul className={styles.vehicles__list}>
        {vehiclesInfo.map(({ name, max_atmosphering_speed, cargo_capacity, vehicle_class, model }) =>
          <li key={name} className={styles.vehicles__item}>
            <p><span className={styles.vehicles__info}>Name:</span> {name}</p>
            <p><span className={styles.vehicles__info}>Max Atmosphering Speed:</span> {max_atmosphering_speed}</p>
            <p><span className={styles.vehicles__info}>Cargo Capacity: </span>{cargo_capacity}</p>
            <p><span className={styles.vehicles__info}>Vehicle Class: </span>{vehicle_class}</p>
            <p><span className={styles.vehicles__info}>Model: </span> {model}</p>
          </li>
        )}
      </ul>
    </div>
  )
}
