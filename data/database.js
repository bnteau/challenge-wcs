import axios from 'axios';

export function getNames() {
    return axios.get('http://localhost:5500/', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
}

export function addName(name) {
    return axios.post('http://localhost:5500/add', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        name
    })
}