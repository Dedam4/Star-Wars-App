import React from 'react'
import styles from './ListHeroes.module.css'
import { Link } from 'react-router-dom'
import {makeCurrentReques} from '../../HelpFunction/getApiInfo'

export const ListHeroes = (props) => {
    return (
        <ul className=' heroes '>
            {props.heroes.map((element) =>
                <li  className='card N/A transparent ' key={element.id}>
                    <Link className={styles.card__container} to={`/people/${element.id}`}>
                         <h5 className={styles.card__title}>{element.name}</h5>
                         <p> Mass: <span className={styles.card__info}>{element.mass}</span></p>
                         <p> Hair Color: <span className={styles.card__info}>{element.hair_color}</span></p>
                         <p> Skin Color: <span className={styles.card__info}>{element.skin_color}</span></p>
                         <p> Eye Color: <span className={styles.card__info}>{element.eye_color}</span></p>
                         <p> Birth Year: <span className={styles.card__info}>{element.birth_year}</span></p>
                         <p> Films: <span className={styles.card__info}>{element.films.length}</span></p>
                         <p> Species: <span className={styles.card__info}>{element.species.length}</span></p>
                         <p> Vehicles: <span className={styles.card__info}>{element.vehicles.length}</span></p>
                         <p> Starships: <span className={styles.card__info}>{element.starships.length}</span></p>
                         <p> Created: <span className={styles.card__info}>{element.created}</span></p>
                         <p> Edited: <span className={styles.card__info}>{element.edited}</span></p>
                       
                    </Link>
                </li>
            )}

        </ul>
    )
}
