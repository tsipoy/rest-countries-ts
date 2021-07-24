import React, { useRef, useContext   } from 'react'
import { useEffect } from 'react';
import { Context } from './GlobalContext';



export const Inputs = () => {
    const { state, dispatch } = useContext(Context);
    const ref = useRef<HTMLInputElement>(null!)
    // console.log(state.inputValue);

    const handleChangetext = (e: any) => {
        dispatch({
            type: "SET_INPUTVALUE",
            payload: e.target.value,
        })
    }

    // const searchRegion = state.countries.filter((country) => 
    // country.region.toLowerCase().includes(state.inputValue.toLowerCase()))

    // useEffect(() => {
    //     dispatch({searchRegion})
    // }, [state.inputValue])

    return (
        <form>
            <input
                ref={ref}
                type="text" 
                value={state.inputValue}
                placeholder="Search for a country"
                onChange={handleChangetext}
            />
        </form>
    )
}
