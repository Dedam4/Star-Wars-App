import { HTTPS, SWAPI_ROOT, SWAPI_PEOPLE, SWAPI_PARAM_PAGE } from "../constants/apiConst";

const getId = (url, category) => {
    const id = url.replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '');
    return (id);

}
export const getHeroeId = (url) => getId(url, SWAPI_PEOPLE);


export const getHeroePageId = (url) => {
    const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const positionId = url.slice(position + SWAPI_PARAM_PAGE.length, url.length);

    return Number(positionId);
}
