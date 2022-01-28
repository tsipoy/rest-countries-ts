import React, { useContext } from 'react';
import { Context } from './GlobalContext';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Form }  from './Form';

const WrapperInner = styled.div `
    background-color: #ffffff;
    margin-block-end: 32px;
    margin-inline-start: 32px;
    margin-inline-end: 32px;
    box-shadow: rgb(0 0 0 / 3%) 0px 0px 0.7rem 0.2rem;
    border-radius: 5px;

    @media(min-width: 800px) {
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
`;

const FrontPageContainer = styled.div `

`;
export const FlagImg = styled.img `
    width:  100%;
    height: 218px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
`;
const AboutCountry = styled.div `
    padding-inline-start: 32px;
    padding-block-end: 32px;
`;
const CountryName = styled.h2 `
`;
const ListContainer = styled.ul `
    padding-inline-start: 0;   
`;
const List = styled.li `
    list-style: none;
`;
const Span = styled.span `
    font-weight: 600;
`;


const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));

    @media(min-width: 800px) {
        grid-gap: 32px;
    }
`;

export function CitiesLists () {
    const { state } = useContext(Context);
    // console.log(state.countries);
    const filteredCountries = state.countries.filter((country) => country.name.common.toLowerCase().includes(state.inputValue.toLowerCase()))
    .filter((region) => region.region.toLowerCase().includes(state.filteredByRegion.toLowerCase())); 
    const allCountries = filteredCountries.map((country => (
        <WrapperInner key={country.name.common}>
            <Link to={`/${country.name.common}`}>
                <FrontPageContainer>
                    <FlagImg src={country.flags.png} alt={country.name.common}/>
                    <AboutCountry>
                        <CountryName>{country.name.common}</CountryName>
                        <ListContainer>
                            <List><Span>Population</Span>: {country.population}</List>
                            <List><Span>Region</Span>: {country.region}</List>
                            <List><Span>Capital</Span>: {country.capital}</List>
                        </ListContainer>
                    </AboutCountry>
                </FrontPageContainer>
            </Link>
        </WrapperInner>
    )))
    
    return (
        <>
            <Form />
            {state.loading ? <p>Loading ... </p> : 
            <Wrapper>
                {allCountries}
            </Wrapper>
            }  
        </>
    )
} 