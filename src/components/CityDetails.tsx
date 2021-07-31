import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from './GlobalContext';
import styled, { css } from "styled-components";

interface ParamsTypes {
    cityName?: string,
}


const CityDetails = () => {
    const { state, dispatch } = useContext(Context);
    const { cityName } = useParams<ParamsTypes>();
    console.log(cityName);
    

    const countryDetails = state.countries.find((countryName) => countryName.name === cityName);
    console.log(countryDetails)

    const findCountry = state.countries.filter(country => country.name === cityName);
    console.log(findCountry);
    
    
    const getCurrencies = countryDetails?.currencies.map((currency) => <Span key={currency.code}>{currency.name}</Span>);
    const getLanguages = countryDetails?.languages.map((language) => <Span key={language.iso639_1}>{language.name}</Span>);
    const getBorders = countryDetails?.borders.map((border) => <Button key={border}>{border}</Button>);

    return (
        <DetailsOuterWrapper>
            <Button>
                <Link to="/">
                    Back
                </Link>
            </Button>
            {findCountry.map((country, index) => {

                return (
                    <DetailsInnerWrapper key={index}>
                        <FlagImg src={country?.flag} alt={country?.name} />
                        <CountryContainer>
                            <ListContainerWrapper>
                                <ListContainerWrapperInner>
                                    <List>
                                        <CountryHeading>{country?.name}</CountryHeading>
                                    </List>
                                    <List><Span>Native name: </Span>{country?.nativeName}</List>
                                    <List><Span>Population: </Span>{country?.population}</List>
                                    <List><Span>Region: </Span>{country?.region}</List>
                                    <List><Span>Sub Region: </Span>{country?.subregion}</List>
                                    <List><Span>Capital: </Span> {country?.capital}</List>
                                </ListContainerWrapperInner>
                                <ListContainerWrapperInner>
                                    <List><Span>Top level domain: </Span>{country?.topLevelDomain}</List>
                                    <List><b>Currencies: </b>{getCurrencies}</List>
                                    <List><b>Languages: </b>{getLanguages}</List>
                                </ListContainerWrapperInner>
                            </ListContainerWrapper>
                            <BordersContainer>
                                <BordersHeading>Border Countries: </BordersHeading>
                                <BordersNameContainer>
                                    {country.borders.map((border, index) => {
                                        const borderCountry = state.countries.find(el => el?.alpha3Code == border);
                                        return (
                                            <BordesButton key={index}>
                                                <Link to={`/${borderCountry?.name}`} key={index} >
                                                        {borderCountry?.name}
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
@media(min-width: 800px) {
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

