import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from './GlobalContext';
import styled, { css } from "styled-components";
import backIcon from "../assets/arrow-left-line.svg";

interface ParamsTypes {
    cityName?: string,
}


const CityDetails = () => {
    const { state } = useContext(Context);
    const { cityName } = useParams<ParamsTypes>();
    
    // const countryDetails = state.countries.find((countryName) => countryName.name.common === cityName);
    // console.log(countryDetails)
    
    const findCountry = state.countries.filter(country => country.name.common === cityName);
    // console.log(findCountry);
    
    // const getCurrencies = countryDetails?.currencies.map((currency) => <Span key={currency.PGK.name}>{currency.name}</Span>);
    // const getLanguages = countryDetails?.languages.map((language) => <Span key={language.iso639_1}>{language.name}</Span>);
    return (
        <DetailsOuterWrapper>
            <Button>
                <Link to="/">
                    Back
                </Link>
            </Button>
            {findCountry.map((country, index) => {
                // console.log(country.borders)
                return (
                    <DetailsInnerWrapper key={index}>
                        <FlagImg src={country.flags.png} alt={country?.name.common} />
                        <CountryContainer>
                            <ListContainerWrapper>
                                <ListContainerWrapperInner>
                                    <List>
                                        <CountryHeading>{country?.name.common}</CountryHeading>
                                    </List>
                                    <List><Span>Native name: </Span>{country?.name.official}</List>
                                    <List><Span>Population: </Span>{country?.population}</List>
                                    <List><Span>Region: </Span>{country?.region}</List>
                                    <List><Span>Sub Region: </Span>{country?.subregion}</List>
                                    <List><Span>Capital: </Span> {country?.capital}</List>
                                </ListContainerWrapperInner>
                                <ListContainerWrapperInner>
                                    <List>
                                        <Span>Top level domain: </Span>{country?.tld}
                                    </List>
                                    {country?.currencies && Object.values(country?.currencies).map((currencie: any) => (            
                                        <List key={currencie?.name}>
                                            <Span>Currencies: </Span>
                                            {currencie?.name}
                                        </List>
                                    ))}
                                    {Object.keys(country?.languages).length > 0
                                        ? Object.values(country?.languages).map((lang: any, ind: number) => (                    
                                            <List key={lang[ind]}>
                                                <Span>Language: </Span>
                                                {lang}
                                            </List>
                                    )) : null}
                                </ListContainerWrapperInner>
                            </ListContainerWrapper>
                            <BordersContainer>
                                <BordersHeading>Border Countries: </BordersHeading>
                                <BordersNameContainer>
                                    {country.borders === undefined || country.borders.map((border) => {
                                        const borderCountry = state.countries.find(el => el?.cca3 === border);
                                        return (
                                            <BordesButton key={borderCountry?.cca3}>
                                                <Link to={`/${borderCountry?.name.common}`}>
                                                    {country.borders === undefined ? "No border countries" : borderCountry?.name.common}
                                                </Link>
                                            </BordesButton>
                                        )
                                    })}
                                </BordersNameContainer>
                            </BordersContainer>
                        </CountryContainer>
                    </DetailsInnerWrapper>
                )
            })}
        </DetailsOuterWrapper>
    )
}

export default CityDetails

const ButtonStyles = css `
    background-color: #ffffff;
    padding-block-end: 10px;
    padding-block-start: 10px;
    padding-inline-start: 31px;
    padding-inline-end: 31px;
    margin-inline-end: 13px;
    box-shadow: 2px 0px 6px 0px #e5e5e5;
    border-radius: 5px;
    border: none;
`;   

const marginZero = css `
    margin-block-start: 0;
    margin-block-end: 0;
`;

const DetailsOuterWrapper = styled.div `
        padding-inline: 20px;
`;

const FlagImg = styled.img `
    max-width: 100%;
    height: auto;
    border-radius: 5px;
`; 
const DetailsInnerWrapper = styled.div `
    @media(min-width: 800px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 63px;
        align-items: center;
    }
`;
const CountryHeading = styled.h3 `
    ${marginZero}
    padding-block-end: 10px;
`;
const CountryContainer = styled.div `
    @media(min-width: 800px) {
        align-self: center;
    }
`;
const ListContainerWrapper = styled.nav `
@media(min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
`;
const ListContainerWrapperInner = styled.ul `
    list-style: none;
    padding-block-end: 19px;
    padding-block-start: 19px;
    padding-inline-start: 0;
    ${marginZero}
`;

const List = styled.li `
    padding-block-end: 24px;
    @media(min-width: 800px) {
        padding-block-end: 11px;
    }
`;

const Span = styled.span `
    font-weight: 600;
`;
    
const Button = styled.button `
    background-image: url('${backIcon}');
    background-repeat: no-repeat;
    background-size: 20%;
    background-position-x: 10%;
    background-position-y: 50%;

    ${ButtonStyles}
    margin-block-end: 64px;
    @media(min-width: 800px) {
        margin-block-end: 40px;
    }
`;

const BordersContainer = styled.div `
    @media(min-width: 800px) {
        display: flex;
        flex-direction: row;
        align-items: baseline;
    }
`;
const BordersHeading = styled.h4 `
    padding-inline-end: 10px;
    padding-block-start: 25px;
    padding-block-end: 25px;
    ${marginZero}
`;
const BordersNameContainer = styled.div ``; 

const BordesButton = styled.button `
    ${ButtonStyles}
    margin-block-end: 25px;
`;

