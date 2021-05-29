import React, { useContext } from 'react';
import { Context } from './GlobalContext';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Inputs } from './Inputs';

const WrapperInner = styled.div `
    background-color: #ffffff;
    margin-block-end: 32px;
    margin-inline-start: 32px;
    margin-inline-end: 32px;
    box-shadow: 0.3px 0.3px 6px #808080;

    ul {
        padding-inline-start: 0;   
    }

    li {
        list-style: none;
    }

    span {
        font-weight: bold;
    }

    img {
        width: 100%;
        height: auto;
    }

    .country-about {
        padding-inline-start: 32px;
        padding-block-end: 32px;
    }

    @media(min-width: 800px) {
        margin-inline-start: 0;
        margin-inline-end: 0;
    }


`;

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 32px;
`;

export function CitiesLists () {
    const { countries, loading } = useContext(Context);
    console.log(countries)
    const allCountries = countries.map((country => (
            <WrapperInner key={country.name}>
                <Link to={`/cityDetails/${country.name}`}>
                    <div>
                        <img src={country.flag} alt={country.name}/>
                        <div className="country-about">
                            <h2>{country.name}</h2>
                            <ul>
                                <li><span>Population</span>: {country.population}</li>
                                <li><span>Region</span>: {country.region}</li>
                                <li><span>Capital</span>: {country.capital}</li>
                            </ul>
                        </div>
                    </div>
                </Link>
            </WrapperInner>
    )))
    
    return (
        <>
            <Inputs />
            {loading ? <p>Loading ... </p> : 
            <Wrapper>
                {allCountries}
            </Wrapper>
            }  
        </>
    )
} 