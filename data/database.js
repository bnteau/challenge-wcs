import axios from 'axios';

export function getNames() {
    return axios.get('https://fierce-taiga-68749.herokuapp.com/', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export function addName(name) {
    return axios.post('https://fierce-taiga-68749.herokuapp.com/add', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        name
    })
}