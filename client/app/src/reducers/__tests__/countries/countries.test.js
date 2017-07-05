import { expect } from 'chai';
import { countriesReducer, initialState } from '../../countries';
import {
  COUNTRIES,
  GET_COUNTRIES_PENDING,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_FAIL_WITHOUT_ERR,
  CREATE_COUNTRY_PENDING,
  CREATE_COUNTRY_SUCCESS,
  CREATE_COUNTRY_FAIL,
  CREATE_COUNTRY_FAIL_WITHOUT_ERR,
  UPDATE_COUNTRY_PENDING,
  UPDATE_COUNTRY_SUCCESS,
  UPDATE_COUNTRY_FAIL,
  UPDATE_COUNTRY_FAIL_WITHOUT_ERR,
  DELETE_COUNTRIES_PENDING,
  DELETE_COUNTRIES_SUCCESS,
  DELETE_COUNTRIES_FAIL,
  DELETE_COUNTRIES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  countries: { ...initialState.countries, data: COUNTRIES }
};

describe('Countries reducer', () => {
  // ********************* GET_COUNTRIES ******************************
  it('should handle GET_COUNTRIES_PENDING', () => {
    const result = countriesReducer(initialState, GET_COUNTRIES_PENDING);
    expect(result.countries.loading).to.be.equal(true);
    expect(result.countries.error).to.be.equal(null);
    expect(result.countries.data).to.have.length(0);
  });

  it('should handle GET_COUNTRIES_SUCCESS', () => {
    const result = countriesReducer(initialState, GET_COUNTRIES_SUCCESS);
    expect(result.countries.loading).to.be.equal(false);
    expect(result.countries.error).to.be.equal(null);
    expect(result.countries.data).to.deep.equal(GET_COUNTRIES_SUCCESS.payload);
  });

  it('should handle GET_COUNTRIES_FAIL', () => {
    const result = countriesReducer(initialState, GET_COUNTRIES_FAIL);
    expect(result.countries.loading).to.be.equal(false);
    expect(result.countries.error).to.be.equal(GET_COUNTRIES_FAIL.payload);
    expect(result.countries.data).to.have.length(0);
  });

  it('should handle GET_COUNTRIES_FAIL without error message', () => {
    const result = countriesReducer(initialState, GET_COUNTRIES_FAIL_WITHOUT_ERR);
    expect(result.countries.loading).to.be.equal(false);
    expect(result.countries.error).to.be.equal('Error, get countries failed');
    expect(result.countries.data).to.have.length(0);
  });
  // ********************* CREATE_COUNTRY ******************************
  it('should handle CREATE_COUNTRY_PENDING', () => {
    const result = countriesReducer(initialState, CREATE_COUNTRY_PENDING);
    expect(result.createdCountry.loading).to.be.equal(true);
    expect(result.createdCountry.error).to.be.equal(null);
    expect(result.createdCountry.data).to.deep.equal({});
  });

  it('should handle CREATE_COUNTRY_SUCCESS', () => {
    const result = countriesReducer(initialState, CREATE_COUNTRY_SUCCESS);
    expect(result.createdCountry.loading).to.be.equal(false);
    expect(result.createdCountry.error).to.be.equal(null);
    expect(result.createdCountry.data).to.be.equal(CREATE_COUNTRY_SUCCESS.payload);
    expect(result.countries.data).to.deep.equal([CREATE_COUNTRY_SUCCESS.payload]);
  });

  it('should handle CREATE_COUNTRY_FAIL', () => {
    const result = countriesReducer(initialState, CREATE_COUNTRY_FAIL);
    expect(result.createdCountry.loading).to.be.equal(false);
    expect(result.createdCountry.error).to.be.equal(CREATE_COUNTRY_FAIL.payload);
    expect(result.createdCountry.data).to.deep.equal({});
  });

  it('should handle CREATE_COUNTRY_FAIL without error message', () => {
    const result = countriesReducer(initialState, CREATE_COUNTRY_FAIL_WITHOUT_ERR);
    expect(result.createdCountry.loading).to.be.equal(false);
    expect(result.createdCountry.error).to.be.equal('Error, create country failed');
    expect(result.createdCountry.data).to.deep.equal({});
  });
  // ********************* UPDATE_COUNTRY ******************************
  it('should handle UPDATE_COUNTRY_PENDING', () => {
    const result = countriesReducer(initialState, UPDATE_COUNTRY_PENDING);
    expect(result.updatedCountry.loading).to.be.equal(true);
    expect(result.updatedCountry.error).to.be.equal(null);
    expect(result.updatedCountry.data).to.deep.equal({});
  });

  it('should handle UPDATE_COUNTRY_SUCCESS', () => {
    const result = countriesReducer(DIRTY_STATE, UPDATE_COUNTRY_SUCCESS);
    const [updatedCountry] = result.countries.data;

    expect(result.updatedCountry.loading).to.be.equal(false);
    expect(result.updatedCountry.error).to.be.equal(null);
    expect(result.updatedCountry.data).to.be.equal(UPDATE_COUNTRY_SUCCESS.payload);
    expect(updatedCountry).to.deep.equal(UPDATE_COUNTRY_SUCCESS.payload);
  });

  it('should handle UPDATE_COUNTRY_FAIL', () => {
    const result = countriesReducer(initialState, UPDATE_COUNTRY_FAIL);
    expect(result.updatedCountry.loading).to.be.equal(false);
    expect(result.updatedCountry.error).to.be.equal(UPDATE_COUNTRY_FAIL.payload);
    expect(result.updatedCountry.data).to.deep.equal({});
  });

  it('should handle UPDATE_COUNTRY_FAIL without error message', () => {
    const result = countriesReducer(initialState, UPDATE_COUNTRY_FAIL_WITHOUT_ERR);
    expect(result.updatedCountry.loading).to.be.equal(false);
    expect(result.updatedCountry.error).to.be.equal('Error, update country failed');
    expect(result.updatedCountry.data).to.deep.equal({});
  });
  // ********************* DELETE_COUNTRIES ******************************
  it('should handle DELETE_COUNTRIES_PENDING', () => {
    const result = countriesReducer(initialState, DELETE_COUNTRIES_PENDING);
    expect(result.deletedCountries.loading).to.be.equal(true);
    expect(result.deletedCountries.error).to.be.equal(null);
    expect(result.deletedCountries.data).to.deep.equal({});
  });

  it('should handle DELETE_COUNTRIES_SUCCESS', () => {
    const result = countriesReducer(DIRTY_STATE, DELETE_COUNTRIES_SUCCESS);

    expect(result.deletedCountries.loading).to.be.equal(false);
    expect(result.deletedCountries.error).to.be.equal(null);
    expect(result.deletedCountries.data).to.be.equal(DELETE_COUNTRIES_SUCCESS.payload);
    expect(result.countries.data).to.deep.equal(COUNTRIES.slice(1));
  });

  it('should handle DELETE_COUNTRIES_FAIL', () => {
    const result = countriesReducer(initialState, DELETE_COUNTRIES_FAIL);
    expect(result.deletedCountries.loading).to.be.equal(false);
    expect(result.deletedCountries.error).to.be.equal(DELETE_COUNTRIES_FAIL.payload);
    expect(result.deletedCountries.data).to.deep.equal({});
  });

  it('should handle DELETE_COUNTRIES_FAIL without error message', () => {
    const result = countriesReducer(initialState, DELETE_COUNTRIES_FAIL_WITHOUT_ERR);
    expect(result.deletedCountries.loading).to.be.equal(false);
    expect(result.deletedCountries.error).to.be.equal('Error, delete countries failed');
    expect(result.deletedCountries.data).to.deep.equal({});
  });
});
