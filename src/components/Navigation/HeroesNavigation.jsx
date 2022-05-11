import React from 'react';
import { Link } from 'react-router-dom';
import style from './HeroesNavigation.module.css';


export const HeroesNavigation = ({ getResourse, prevPage, nextPage, countPage }) => {
    const handleNext = () => getResourse(nextPage);
    const handlePrev = () => getResourse(prevPage);
    return (
        <div>
            <Link className={style.link} to={{
                pathname: '/people/',
                search: `?page=${countPage - 1}`
            }}>
                <button disabled={!prevPage} onClick={handlePrev} className={style.btn_m}>Previous</button>


            </Link>
            <Link
                to={{
                    pathname: '/people/',
                    search: `?page=${countPage + 1}`
                }}>
                <button disabled={!nextPage} onClick={handleNext} className={style.btn_m}>Next</button>



            </Link>

        </div>
    )
}
