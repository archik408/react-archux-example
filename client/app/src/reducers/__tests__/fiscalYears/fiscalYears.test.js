import { expect } from 'chai';
import { fiscalYearsReducer, initialState } from '../../fiscalYears';
import {
  INIT_STATE,
  FISCAL_YEARS,
  GET_FISCAL_YEARS_PENDING,
  GET_FISCAL_YEARS_SUCCESS,
  GET_FISCAL_YEARS_FAIL,
  CREATE_FISCAL_YEAR_PENDING,
  CREATE_FISCAL_YEAR_SUCCESS,
  CREATE_FISCAL_YEAR_FAIL,
  CREATE_FISCAL_YEAR_FAIL_WITHOUT_ERR,
  UPDATE_FISCAL_YEAR_PENDING,
  UPDATE_FISCAL_YEAR_SUCCESS,
  UPDATE_FISCAL_YEAR_FAIL,
  UPDATE_FISCAL_YEAR_FAIL_WITHOUT_ERR,
  DELETE_FISCAL_YEARS_PENDING,
  DELETE_FISCAL_YEARS_SUCCESS,
  DELETE_FISCAL_YEARS_FAIL,
  DELETE_FISCAL_YEARS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  fiscalYears: { ...initialState.fiscalYears, data: FISCAL_YEARS }
};

describe('Fiscal years reducer', () => {
  // ********************* GET_FISCAL_YEARS ******************************
  it('should handle GET_FISCAL_YEARS_PENDING', () => {
    const result = fiscalYearsReducer(INIT_STATE, GET_FISCAL_YEARS_PENDING);
    expect(result.fiscalYears.loading).to.be.equal(true);
    expect(result.fiscalYears.error).to.be.equal(null);
    expect(result.fiscalYears.data).to.have.length(0);
  });

  it('should handle GET_FISCAL_YEARS_SUCCESS', () => {
    const result = fiscalYearsReducer(INIT_STATE, GET_FISCAL_YEARS_SUCCESS);
    expect(result.fiscalYears.loading).to.be.equal(false);
    expect(result.fiscalYears.error).to.be.equal(null);
    expect(result.fiscalYears.data).to.deep.equal(GET_FISCAL_YEARS_SUCCESS.payload);
  });

  it('should handle GET_FISCAL_YEARS_FAIL', () => {
    const result = fiscalYearsReducer(INIT_STATE, GET_FISCAL_YEARS_FAIL);
    expect(result.fiscalYears.loading).to.be.equal(false);
    expect(result.fiscalYears.error).to.be.equal('Error');
    expect(result.fiscalYears.data).to.have.length(0);
  });
  // ********************* CREATE_FISCAL_YEAR ******************************
  it('should handle CREATE_FISCAL_YEAR_PENDING', () => {
    const result = fiscalYearsReducer(initialState, CREATE_FISCAL_YEAR_PENDING);
    expect(result.createdFiscalYear.loading).to.be.equal(true);
    expect(result.createdFiscalYear.error).to.be.equal(null);
    expect(result.createdFiscalYear.data).to.deep.equal({});
  });

  it('should handle CREATE_FISCAL_YEAR_SUCCESS', () => {
    const result = fiscalYearsReducer(initialState, CREATE_FISCAL_YEAR_SUCCESS);
    expect(result.createdFiscalYear.loading).to.be.equal(false);
    expect(result.createdFiscalYear.error).to.be.equal(null);
    expect(result.createdFiscalYear.data).to.be.equal(CREATE_FISCAL_YEAR_SUCCESS.payload);
    expect(result.fiscalYears.data).to.deep.equal([CREATE_FISCAL_YEAR_SUCCESS.payload]);
  });

  it('should handle CREATE_FISCAL_YEAR_FAIL', () => {
    const result = fiscalYearsReducer(initialState, CREATE_FISCAL_YEAR_FAIL);
    expect(result.createdFiscalYear.loading).to.be.equal(false);
    expect(result.createdFiscalYear.error).to.be.equal(CREATE_FISCAL_YEAR_FAIL.payload);
    expect(result.createdFiscalYear.data).to.deep.equal({});
  });

  it('should handle CREATE_FISCAL_YEAR_FAIL without error message', () => {
    const result = fiscalYearsReducer(initialState, CREATE_FISCAL_YEAR_FAIL_WITHOUT_ERR);
    expect(result.createdFiscalYear.loading).to.be.equal(false);
    expect(result.createdFiscalYear.error).to.be.equal('Error, create fiscalYear failed');
    expect(result.createdFiscalYear.data).to.deep.equal({});
  });
  // ********************* UPDATE_FISCAL_YEAR ******************************
  it('should handle UPDATE_FISCAL_YEAR_PENDING', () => {
    const result = fiscalYearsReducer(initialState, UPDATE_FISCAL_YEAR_PENDING);
    expect(result.updatedFiscalYear.loading).to.be.equal(true);
    expect(result.updatedFiscalYear.error).to.be.equal(null);
    expect(result.updatedFiscalYear.data).to.deep.equal({});
  });

  it('should handle UPDATE_FISCAL_YEAR_SUCCESS', () => {
    const result = fiscalYearsReducer(DIRTY_STATE, UPDATE_FISCAL_YEAR_SUCCESS);
    const [updatedFiscalYear] = result.fiscalYears.data;

    expect(result.updatedFiscalYear.loading).to.be.equal(false);
    expect(result.updatedFiscalYear.error).to.be.equal(null);
    expect(result.updatedFiscalYear.data).to.be.equal(UPDATE_FISCAL_YEAR_SUCCESS.payload);
    expect(updatedFiscalYear).to.deep.equal(UPDATE_FISCAL_YEAR_SUCCESS.payload);
  });

  it('should handle UPDATE_FISCAL_YEAR_FAIL', () => {
    const result = fiscalYearsReducer(initialState, UPDATE_FISCAL_YEAR_FAIL);
    expect(result.updatedFiscalYear.loading).to.be.equal(false);
    expect(result.updatedFiscalYear.error).to.be.equal(UPDATE_FISCAL_YEAR_FAIL.payload);
    expect(result.updatedFiscalYear.data).to.deep.equal({});
  });

  it('should handle UPDATE_FISCAL_YEAR_FAIL without error message', () => {
    const result = fiscalYearsReducer(initialState, UPDATE_FISCAL_YEAR_FAIL_WITHOUT_ERR);
    expect(result.updatedFiscalYear.loading).to.be.equal(false);
    expect(result.updatedFiscalYear.error).to.be.equal('Error, update fiscalYear failed');
    expect(result.updatedFiscalYear.data).to.deep.equal({});
  });
  // ********************* DELETE_FISCAL_YEARS ******************************
  it('should handle DELETE_FISCAL_YEARS_PENDING', () => {
    const result = fiscalYearsReducer(initialState, DELETE_FISCAL_YEARS_PENDING);
    expect(result.deletedFiscalYears.loading).to.be.equal(true);
    expect(result.deletedFiscalYears.error).to.be.equal(null);
    expect(result.deletedFiscalYears.data).to.deep.equal([]);
  });

  it('should handle DELETE_FISCAL_YEARS_SUCCESS', () => {
    const result = fiscalYearsReducer(DIRTY_STATE, DELETE_FISCAL_YEARS_SUCCESS);

    expect(result.deletedFiscalYears.loading).to.be.equal(false);
    expect(result.deletedFiscalYears.error).to.be.equal(null);
    expect(result.deletedFiscalYears.data).to.be.equal(DELETE_FISCAL_YEARS_SUCCESS.payload);
    expect(result.fiscalYears.data).to.deep.equal(FISCAL_YEARS.slice(1));
  });

  it('should handle DELETE_FISCAL_YEARS_FAIL', () => {
    const result = fiscalYearsReducer(initialState, DELETE_FISCAL_YEARS_FAIL);
    expect(result.deletedFiscalYears.loading).to.be.equal(false);
    expect(result.deletedFiscalYears.error).to.be.equal(DELETE_FISCAL_YEARS_FAIL.payload);
    expect(result.deletedFiscalYears.data).to.deep.equal([]);
  });

  it('should handle DELETE_FISCAL_YEARS_FAIL without error message', () => {
    const result = fiscalYearsReducer(initialState, DELETE_FISCAL_YEARS_FAIL_WITHOUT_ERR);
    expect(result.deletedFiscalYears.loading).to.be.equal(false);
    expect(result.deletedFiscalYears.error).to.be.equal('Error, delete fiscalYears failed');
    expect(result.deletedFiscalYears.data).to.deep.equal([]);
  });
});
