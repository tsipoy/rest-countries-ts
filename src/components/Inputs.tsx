import React, { useRef } from 'react'
// import { Context } from './GlobalContext';



export const Inputs = () => {
    // const { countries } = useContext(Context);
    const ref = useRef<HTMLInputElement>(null!)

    return (
        <form>
            <input
                ref={ref}
                type="text" 
                placeholder="Search for a country"
                // onClick={(e) => console.log(e.target.value)}
            />
        </form>
    )
}
