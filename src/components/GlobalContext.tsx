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
    countries: Country[];
    loading: boolean;
    // inputValue: string;
}

const initialState = {
    countries: [],
    loading: true,
    // inputValue: ""
}

type Action = {type: "SET_COUNTRY",payload: Country[], } 



export const Context = createContext<State>(initialState);

function reducer( state: State, action: Action,) {
    switch(action.type) {
        case 'SET_COUNTRY':
         return { countries: action.payload, loading: false}

        default:
            return state;
    }
}

export const GlobalContext: React.FC  = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getCountries = async () => {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        dispatch({ type: "SET_COUNTRY", payload: data})
    }

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <Context.Provider value={{ countries: state.countries, 
        loading: state.loading,
        // inputValue: state.inputValue,
        }}>
            { children }
        </Context.Provider> 
    )
}