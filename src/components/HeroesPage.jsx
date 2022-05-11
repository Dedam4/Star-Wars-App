import React, { useEffect, useState } from 'react'
import { GET_PEOPLE } from '../constants/apiConst';
import { getApiResource } from '../HelpFunction/getApiInfo';
import { getHeroeId, getHeroePageId } from '../HelpFunction/getHeroesData';
import { ListHeroes } from './ListHeroes/ListHeroes'
import { useQueryParams } from '../hooks/useQueryParams';
import { HeroesNavigation } from './Navigation/HeroesNavigation'

export const HeroePage = (props) => {

    const [heroes, setHeroes] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [countPage, setCountPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');



    const getResourse = async (url) => {
        const data = await getApiResource(url);

        const heroesList = data.results.map((
            { name,
                url,
                height,
                mass,
                hair_color,
                skin_color,
                eye_color,
                birth_year,
                gender,
                films,
                species,
                vehicles,
                starships,
                created,
                edited, }) => {
            const id = getHeroeId(url)

            return {
                name,
                url,
                id,
                height,
                mass,
                hair_color,
                skin_color,
                eye_color,
                birth_year,
                gender,
                films,
                species,
                vehicles,
                starships,
                created,
                edited,
            }
        })

        setHeroes(heroesList);
        setNextPage(data.next);
        setPrevPage(data.previous);
        setCountPage(getHeroePageId(url));




    }
    useEffect(function getHeroes() {
        getResourse(GET_PEOPLE + queryPage);




    }, [])


    return (
        <>
            <HeroesNavigation
                getResourse={getResourse}
                prevPage={prevPage}
                nextPage={nextPage}
                countPage={countPage} />
            {heroes && <ListHeroes heroes={heroes} />}
        </>
    )
}
