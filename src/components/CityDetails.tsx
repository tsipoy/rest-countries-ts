import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from './GlobalContext';
import styled from "styled-components";
import { ListContainer, List, Span, FlagImg } from "../components/CitiesLists"

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
            <Link to="/">
                <button>Back</button>
            </Link>
            {findCountry.map((country, index) => {

                return (
                    <DetailsInnerWrapper key={index}>
                        <FlagImg src={country?.flag} alt={country?.name} />
                        <CountryHeading>{country?.name}</CountryHeading>
                        <CountryContainer>
                            <ListContainer>
                                <List><Span>Native name: </Span>{country?.nativeName}</List>
                                <List><Span>Population: </Span>{country?.population}</List>
                                <List><Span>Region: </Span>{country?.region}</List>
                                <List><Span>Sub Region: </Span>{country?.subregion}</List>
                                <List><Span>Capital:</Span> {country?.capital}</List>
                            </ListContainer>
                            <ListContainer>
                                <List><Span>Top level domain: </Span>{country?.topLevelDomain}</List>
                                <List><b>Currencies: </b>{getCurrencies}</List>
                                <List><b>Languages:</b>{getLanguages}</List>
                            </ListContainer>
                        </CountryContainer>
                        <div>
                            <h4>Border Countries: </h4>
                            <div>
                                {country.borders.map((border, index) => {
                                    const borderCountry = state.countries.find(el => el?.alpha3Code == border);
                                    return (
                                        <Link to={`/${borderCountry?.name}`} key={index} >
                                            {borderCountry?.name}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </DetailsInnerWrapper>
                )
            })}
        </DetailsOuterWrapper>
    )
}

export default CityDetails

const DetailsOuterWrapper = styled.div ``;
const DetailsInnerWrapper = styled.div ``;
const CountryHeading = styled.h3 ``;
const CountryContainer = styled.div ``;
const Button = styled.button ``;

