import axios from 'axios';

export function getCharacters(){
    return async function(dispatch){
        var response = await axios.get('http://localhost:3001/characters');
        return dispatch({
           type: 'GET_CHARACTERS',
           payload: response.data
        })    
    }
}
export function orderName(payload){
    return{
        type: 'ORDER_NAME',
        payload
    }
}
export function filterFamily(payload){
    return{
        type: 'FILTER_FAMILY',
        payload
    }
}

