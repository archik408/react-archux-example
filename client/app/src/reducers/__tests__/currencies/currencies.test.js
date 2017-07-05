import { expect } from 'chai';
import { currenciesReducer, initialState } from '../../currencies';
import {
  CURRENCIES,
  INIT_STATE,
  GET_CURRENCIES_PENDING,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  GET_CURRENCIES_FAIL_WITHOUT_ERR,
  CREATE_CURRENCY_PENDING,
  CREATE_CURRENCY_SUCCESS,
  CREATE_CURRENCY_FAIL,
  CREATE_CURRENCY_FAIL_WITHOUT_ERR,
  UPDATE_CURRENCY_PENDING,
  UPDATE_CURRENCY_SUCCESS,
  UPDATE_CURRENCY_FAIL,
  UPDATE_CURRENCY_FAIL_WITHOUT_ERR,
  DELETE_CURRENCIES_PENDING,
  DELETE_CURRENCIES_SUCCESS,
  DELETE_CURRENCIES_FAIL,
  DELETE_CURRENCIES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  currencies: { ...initialState.currencies, data: CURRENCIES }
};

describe('Fiscal years reducer', () => {
  // ********************* GET_CURRENCIES ******************************
  it('should handle GET_CURRENCIES_PENDING', () => {
    const result = currenciesReducer(INIT_STATE, GET_CURRENCIES_PENDING);
    expect(result.currencies.loading).to.be.equal(true);
    expect(result.currencies.error).to.be.equal(null);
    expect(result.currencies.data).to.have.length(0);
  });

  it('should handle GET_CURRENCIES_SUCCESS', () => {
    const result = currenciesReducer(INIT_STATE, GET_CURRENCIES_SUCCESS);
    expect(result.currencies.loading).to.be.equal(false);
    expect(result.currencies.error).to.be.equal(null);
    expect(result.currencies.data).to.deep.equal(GET_CURRENCIES_SUCCESS.payload);
  });

  it('should handle GET_CURRENCIES_FAIL', () => {
    const result = currenciesReducer(INIT_STATE, GET_CURRENCIES_FAIL);
    expect(result.currencies.loading).to.be.equal(false);
    expect(result.currencies.error).to.be.equal(GET_CURRENCIES_FAIL.payload);
    expect(result.currencies.data).to.have.length(0);
  });

  it('should handle GET_CURRENCIES_FAIL without error message', () => {
    const result = currenciesReducer(INIT_STATE, GET_CURRENCIES_FAIL_WITHOUT_ERR);
    expect(result.currencies.loading).to.be.equal(false);
    expect(result.currencies.error).to.be.equal('Error, get currencies failed');
    expect(result.currencies.data).to.have.length(0);
  });
  // ********************* CREATE_CURRENCY ******************************
  it('should handle CREATE_CURRENCY_PENDING', () => {
    const result = currenciesReducer(initialState, CREATE_CURRENCY_PENDING);
    expect(result.createdCurrency.loading).to.be.equal(true);
    expect(result.createdCurrency.error).to.be.equal(null);
    expect(result.createdCurrency.data).to.deep.equal({});
  });

  it('should handle CREATE_CURRENCY_SUCCESS', () => {
    const result = currenciesReducer(initialState, CREATE_CURRENCY_SUCCESS);
    expect(result.createdCurrency.loading).to.be.equal(false);
    expect(result.createdCurrency.error).to.be.equal(null);
    expect(result.createdCurrency.data).to.be.equal(CREATE_CURRENCY_SUCCESS.payload);
    expect(result.currencies.data).to.deep.equal([CREATE_CURRENCY_SUCCESS.payload]);
  });

  it('should handle CREATE_CURRENCY_FAIL', () => {
    const result = currenciesReducer(initialState, CREATE_CURRENCY_FAIL);
    expect(result.createdCurrency.loading).to.be.equal(false);
    expect(result.createdCurrency.error).to.be.equal(CREATE_CURRENCY_FAIL.payload);
    expect(result.createdCurrency.data).to.deep.equal({});
  });

  it('should handle CREATE_CURRENCY_FAIL without error message', () => {
    const result = currenciesReducer(initialState, CREATE_CURRENCY_FAIL_WITHOUT_ERR);
    expect(result.createdCurrency.loading).to.be.equal(false);
    expect(result.createdCurrency.error).to.be.equal('Error, create currency failed');
    expect(result.createdCurrency.data).to.deep.equal({});
  });
  // ********************* UPDATE_CURRENCY ******************************
  it('should handle UPDATE_CURRENCY_PENDING', () => {
    const result = currenciesReducer(initialState, UPDATE_CURRENCY_PENDING);
    expect(result.updatedCurrency.loading).to.be.equal(true);
    expect(result.updatedCurrency.error).to.be.equal(null);
    expect(result.updatedCurrency.data).to.deep.equal({});
  });

  it('should handle UPDATE_CURRENCY_SUCCESS', () => {
    const result = currenciesReducer(DIRTY_STATE, UPDATE_CURRENCY_SUCCESS);
    const [updatedCurrency] = result.currencies.data;

    expect(result.updatedCurrency.loading).to.be.equal(false);
    expect(result.updatedCurrency.error).to.be.equal(null);
    expect(result.updatedCurrency.data).to.be.equal(UPDATE_CURRENCY_SUCCESS.payload);
    expect(updatedCurrency).to.deep.equal(UPDATE_CURRENCY_SUCCESS.payload);
  });

  it('should handle UPDATE_CURRENCY_FAIL', () => {
    const result = currenciesReducer(initialState, UPDATE_CURRENCY_FAIL);
    expect(result.updatedCurrency.loading).to.be.equal(false);
    expect(result.updatedCurrency.error).to.be.equal(UPDATE_CURRENCY_FAIL.payload);
    expect(result.updatedCurrency.data).to.deep.equal({});
  });

  it('should handle UPDATE_CURRENCY_FAIL without error message', () => {
    const result = currenciesReducer(initialState, UPDATE_CURRENCY_FAIL_WITHOUT_ERR);
    expect(result.updatedCurrency.loading).to.be.equal(false);
    expect(result.updatedCurrency.error).to.be.equal('Error, update currency failed');
    expect(result.updatedCurrency.data).to.deep.equal({});
  });
  // ********************* DELETE_CURRENCIES ******************************
  it('should handle DELETE_CURRENCIES_PENDING', () => {
    const result = currenciesReducer(initialState, DELETE_CURRENCIES_PENDING);
    expect(result.deletedCurrencies.loading).to.be.equal(true);
    expect(result.deletedCurrencies.error).to.be.equal(null);
    expect(result.deletedCurrencies.data).to.deep.equal({});
  });

  it('should handle DELETE_CURRENCIES_SUCCESS', () => {
    const result = currenciesReducer(DIRTY_STATE, DELETE_CURRENCIES_SUCCESS);

    expect(result.deletedCurrencies.loading).to.be.equal(false);
    expect(result.deletedCurrencies.error).to.be.equal(null);
    expect(result.deletedCurrencies.data).to.be.equal(DELETE_CURRENCIES_SUCCESS.payload);
    expect(result.currencies.data).to.deep.equal(CURRENCIES.slice(1));
  });

  it('should handle DELETE_CURRENCIES_FAIL', () => {
    const result = currenciesReducer(initialState, DELETE_CURRENCIES_FAIL);
    expect(result.deletedCurrencies.loading).to.be.equal(false);
    expect(result.deletedCurrencies.error).to.be.equal(DELETE_CURRENCIES_FAIL.payload);
    expect(result.deletedCurrencies.data).to.deep.equal({});
  });

  it('should handle DELETE_CURRENCIES_FAIL without error message', () => {
    const result = currenciesReducer(initialState, DELETE_CURRENCIES_FAIL_WITHOUT_ERR);
    expect(result.deletedCurrencies.loading).to.be.equal(false);
    expect(result.deletedCurrencies.error).to.be.equal('Error, delete currency failed');
    expect(result.deletedCurrencies.data).to.deep.equal({});
  });
});
