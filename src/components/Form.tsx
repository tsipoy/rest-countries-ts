import React, { useRef, useContext } from 'react'
// import { useEffect } from 'react';
import { Context } from './GlobalContext';

export const Form = () => {
    const { state, dispatch } = useContext(Context);
    const inpuRef = useRef<HTMLInputElement>(null!)
    console.log(state.inputValue);

    const handleSearch = (e: any) => {
        const value = e.target.value;
        dispatch({
            type: "SET_COUNTRY",
            payload: state.countries.filter((country) => 
            country.name.toLowerCase().includes(value.toLowerCase())),
        });
    }

    return (
        <form>
            <input
                ref={inpuRef}
                type="text"
                placeholder="Search for a country"
                onChange={handleSearch}
            />
        </form>
    )
}