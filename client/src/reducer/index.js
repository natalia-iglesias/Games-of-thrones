
const initialState = {
    characters: [],
    charactersList: []
}


function rootReducer (state = initialState, action){
    switch(action.type){
        case 'GET_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
                charactersList: action.payload
            }
         case 'ORDER_NAME' :
            let arrSort = action.payload === 'asc' ?
            state.characters.sort(function(a,b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1
                }
                return 0
            }) :
            state.characters.sort(function(a, b){
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1
                }
                return 0
            }) 
            return {
                ...state,
                characters: arrSort
            }
            case 'FILTER_FAMILY':
                const allCharacters = state.charactersList
                const charactersFilter = action.payload === 'All'
                ? allCharacters : allCharacters.filter(character => character.family === action.payload)
                return {
                    ...state,
                    characters: charactersFilter
                }
          
           default:
            return state;
    }
}

export default rootReducer;