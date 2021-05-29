import React, { useContext } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from './GlobalContext';

interface ParamsTypes {
    cityName?: string,
}


const CityDetails = () => {
    const { countries } = useContext(Context);
    const { cityName } = useParams<ParamsTypes>();
    console.log(cityName);

    const countryDetails = countries.find((countryName) => countryName.name === cityName);

    const getCurrencies = countryDetails?.currencies.map((currency) => <span key={currency.code}>{currency.name}</span>);
    const getLanguages = countryDetails?.languages.map((language) => <span key={language.iso639_1}>{language.name}</span>);
    const getBorders = countryDetails?.borders.map((border) => <button key={border}>{border}</button>);


    return (
        <div>
            <Link to="/">
                <button>Back</button>
            </Link>
            <div>
                <img src={countryDetails?.flag} alt={countryDetails?.name} />
                <h3>{countryDetails?.name}</h3>
                <nav>
                    <ul>
                        <li><span>Native name: </span>{countryDetails?.nativeName}</li>
                        <li><span>Population: </span>{countryDetails?.population}</li>
                        <li><span>Region: </span>{countryDetails?.region}</li>
                        <li><span>Sub Region: </span>{countryDetails?.subregion}</li>
                        <li><span>Capital:</span> {countryDetails?.capital}</li>
                    </ul>
                    <ul>
                        <li><span>Top level domain: </span>{countryDetails?.topLevelDomain}</li>
                        <li><b>Currencies: </b>{getCurrencies}</li>
                        <li><b>Languages:</b>{getLanguages}</li>
                    </ul>
                </nav>
                <div>
                    <h4>Border Countries: </h4>
                    <div>
                        {getBorders}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityDetails


