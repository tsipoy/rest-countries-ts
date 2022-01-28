import React, { useRef, useContext } from 'react'
import { Context } from './GlobalContext';
import styled, { css } from "styled-components";
import searchIcon from "../assets/search-icon.svg";

export const Form = () => {
    const { state, dispatch } = useContext(Context);
    const inpuRef = useRef<HTMLInputElement>(null!);

    const handleSearch = (e: any) => {        
        dispatch({
            type: "SET_INPUTVALUE",
            payload: e.target.value,
        });
    }
    
    const handleSearchRegion = (e: any) => {
        dispatch({
            type: "SET_FILTERED_BY_REGION",
            payload: e.target.value
        });
    }

    const allRegions = state.countries.map((region, index) => {
        return  region.region
    })

    const uniqueArray = allRegions.filter(function(item, pos) {
        return allRegions.indexOf(item) === pos;
    })

    const mapRegions = uniqueArray.map((region, index) => {
        return <option key={index} value={region}>{region}</option>
    })
    
    return (
        <FormWrapper>
            <SearchInput
                ref={inpuRef}
                type="text"
                value={state.inputValue}
                placeholder="Search for a country"
                onChange={handleSearch}
            />
            <Select name="regions" onChange={handleSearchRegion}>
                <Option value="">Filter by Region</Option>
                {mapRegions}
            </Select>
        </FormWrapper>
    )
}

const InputStyle = css `
    display: flex;
    background: rgb(255, 255, 255);
    margin-block-end: 4rem;
    padding: 1.4rem 3.2rem;
    box-shadow: rgb(0 0 0 / 6%) 0px 0.2rem 0.9rem;
    border-radius: 0.5rem;
    border: none;
    width: -webkit-fill-available;
    `   
const FormWrapper = styled.form `
    padding-inline-start: 30px;
    padding-inline-end: 30px;
    @media(min-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }
`;
const SearchInput = styled.input `
    ${InputStyle}
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position-x: 18px;
    background-position-y: 50%;
    @media(min-width: 900px) {
        max-width: 30%;
    }
`;

// .select-by-month {
//     -webkit-appearance: none;
//   }
  
//   .select-by-month {
//     background-color: #ffffff;
//     background-image: url("./dist/select-icon.svg");
//     background-repeat: no-repeat;
//     background-position-x: 91%;
//     background-position-y: 50%;
//   }
  
const Select = styled.select `
    ${InputStyle}
    @media(min-width: 900px) {
        max-width: 20%;
    }
    `;
const Option = styled.option ``;
