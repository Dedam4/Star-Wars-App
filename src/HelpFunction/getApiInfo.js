import React from 'react'


export const getApiResource = async (url) => {
    try {
        const response = await (fetch(url));
        const data = await (response.json());
        if (!response.ok) {
            console.error('Problems', response.status);
            return false;
        }

        return data;

    }
    catch (error) {
        console.error('Problems', error.message);
        return false;
    }

}

export const makeCurrentReques = async (url) => {
    const res = await Promise.all(url.map((result) => {
        return fetch(result).then(res => res.json())
    }));


    return res;

} 
