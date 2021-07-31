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
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 32px;
`;

export function CitiesLists () {
    const { state, dispatch } = useContext(Context);
    // console.log(state.countries)
    const allCountries = state.countries.map((country => (
            <WrapperInner key={country.name}>
                <Link to={`/${country.name}`}>
                    <FrontPageContainer>
                        <FlagImg src={country.flag} alt={country.name}/>
                        <AboutCountry>
                            <CountryName>{country.name}</CountryName>
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
            <Inputs />
            {state.loading ? <p>Loading ... </p> : 
            <Wrapper>
                {allCountries}
            </Wrapper>
            }  
        </>
    )
} 