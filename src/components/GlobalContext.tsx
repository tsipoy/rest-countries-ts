import React, { createContext, useReducer, useEffect } from 'react';

type Country = {
    name: string,
    topLevelDomain: string[],
    alpha2Code: string,
    alpha3Code: string,
    callingCodes: string[],
    capital: string,
    altSpellings: string[],
    region: string,
    subregion: string,
    population: number,
    latlng: number[],
    demonym: string,
    area: number,
    gini: number,
    timezones: string[],
    borders: string[],
    nativeName: string,
    numericCode: string,
    currencies: { code: string, name: string}[],
    languages: { name: string, iso639_1: string}[],
    translations: string[],
    flag: string,
    regionalBlocs: string[],
    cioc: string
}

type State = {
    countries: Country[]
    loading: boolean
    inputValue: string
    filteredByRegion: string
}

const initialState = {
    countries: [],
    loading: true,
    inputValue: "",
    filteredByRegion: "",
}

type Action = 
| {type: "SET_COUNTRY", payload: Country[]}
| {type: "SET_INPUTVALUE", payload: string} 
| {type: "SET_FILTERED_BY_REGION", payload: string}

export const Context = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>
}>({
    state: initialState,
    dispatch: () => null
});

function reducer( state: State, action: Action ):any {
    switch(action.type) {
        case 'SET_COUNTRY':
            return {...state, countries: action.payload, loading: false}
        case 'SET_INPUTVALUE': 
            return {...state, inputValue :action.payload}
        case 'SET_FILTERED_BY_REGION': 
            return {...state, filteredByRegion :action.payload}
        default:
            return state;
    }
}

export const GlobalContext: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getCountries = async () => {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        dispatch({type: "SET_COUNTRY", payload: data})        
    }

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <Context.Provider value={{state, dispatch}}>
            { children }
        </Context.Provider> 
    )
}