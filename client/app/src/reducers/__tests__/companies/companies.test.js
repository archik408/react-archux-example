import { expect } from 'chai';
import { companiesReducer, initialState } from '../../companies';
import {
  COMPANIES,
  GET_COMPANIES_PENDING,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
  GET_COMPANIES_FAIL_WITHOUT_ERR,
  CREATE_COMPANY_PENDING,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_FAIL_WITHOUT_ERR,
  UPDATE_COMPANY_PENDING,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAIL,
  UPDATE_COMPANY_FAIL_WITHOUT_ERR,
  DELETE_COMPANIES_PENDING,
  DELETE_COMPANIES_SUCCESS,
  DELETE_COMPANIES_FAIL,
  DELETE_COMPANIES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  companies: { ...initialState.companies, data: COMPANIES }
};

describe('Companies reducer', () => {
  // ********************* GET_COMPANIES ******************************
  it('should handle GET_COMPANIES_PENDING', () => {
    const result = companiesReducer(initialState, GET_COMPANIES_PENDING);
    expect(result.companies.loading).to.be.equal(true);
    expect(result.companies.error).to.be.equal(null);
    expect(result.companies.data).to.have.length(0);
  });

  it('should handle GET_COMPANIES_SUCCESS', () => {
    const result = companiesReducer(initialState, GET_COMPANIES_SUCCESS);
    expect(result.companies.loading).to.be.equal(false);
    expect(result.companies.error).to.be.equal(null);
    expect(result.companies.data).to.deep.equal(GET_COMPANIES_SUCCESS.payload);
  });

  it('should handle GET_COMPANIES_FAIL', () => {
    const result = companiesReducer(initialState, GET_COMPANIES_FAIL);
    expect(result.companies.loading).to.be.equal(false);
    expect(result.companies.error).to.be.equal(GET_COMPANIES_FAIL.payload);
    expect(result.companies.data).to.have.length(0);
  });

  it('should handle GET_COMPANIES_FAIL without error message', () => {
    const result = companiesReducer(initialState, GET_COMPANIES_FAIL_WITHOUT_ERR);
    expect(result.companies.loading).to.be.equal(false);
    expect(result.companies.error).to.be.equal('Error, get companies failed');
    expect(result.companies.data).to.have.length(0);
  });
  // ********************* CREATE_COMPANY ******************************
  it('should handle CREATE_COMPANY_PENDING', () => {
    const result = companiesReducer(initialState, CREATE_COMPANY_PENDING);
    expect(result.createdCompany.loading).to.be.equal(true);
    expect(result.createdCompany.error).to.be.equal(null);
    expect(result.createdCompany.data).to.deep.equal({});
  });

  it('should handle CREATE_COMPANY_SUCCESS', () => {
    const result = companiesReducer(initialState, CREATE_COMPANY_SUCCESS);
    expect(result.createdCompany.loading).to.be.equal(false);
    expect(result.createdCompany.error).to.be.equal(null);
    expect(result.createdCompany.data).to.be.equal(CREATE_COMPANY_SUCCESS.payload);
    expect(result.companies.data).to.deep.equal([CREATE_COMPANY_SUCCESS.payload]);
  });

  it('should handle CREATE_COMPANY_FAIL', () => {
    const result = companiesReducer(initialState, CREATE_COMPANY_FAIL);
    expect(result.createdCompany.loading).to.be.equal(false);
    expect(result.createdCompany.error).to.be.equal(CREATE_COMPANY_FAIL.payload);
    expect(result.createdCompany.data).to.deep.equal({});
  });

  it('should handle CREATE_COMPANY_FAIL without error message', () => {
    const result = companiesReducer(initialState, CREATE_COMPANY_FAIL_WITHOUT_ERR);
    expect(result.createdCompany.loading).to.be.equal(false);
    expect(result.createdCompany.error).to.be.equal('Error, create company failed');
    expect(result.createdCompany.data).to.deep.equal({});
  });
  // ********************* UPDATE_COMPANY ******************************
  it('should handle UPDATE_COMPANY_PENDING', () => {
    const result = companiesReducer(initialState, UPDATE_COMPANY_PENDING);
    expect(result.updatedCompany.loading).to.be.equal(true);
    expect(result.updatedCompany.error).to.be.equal(null);
    expect(result.updatedCompany.data).to.deep.equal({});
  });

  it('should handle UPDATE_COMPANY_SUCCESS', () => {
    const result = companiesReducer(DIRTY_STATE, UPDATE_COMPANY_SUCCESS);
    const [updatedCompany] = result.companies.data;

    expect(result.updatedCompany.loading).to.be.equal(false);
    expect(result.updatedCompany.error).to.be.equal(null);
    expect(result.updatedCompany.data).to.be.equal(UPDATE_COMPANY_SUCCESS.payload);
    expect(updatedCompany).to.deep.equal(UPDATE_COMPANY_SUCCESS.payload);
  });

  it('should handle UPDATE_COMPANY_FAIL', () => {
    const result = companiesReducer(initialState, UPDATE_COMPANY_FAIL);
    expect(result.updatedCompany.loading).to.be.equal(false);
    expect(result.updatedCompany.error).to.be.equal(UPDATE_COMPANY_FAIL.payload);
    expect(result.updatedCompany.data).to.deep.equal({});
  });

  it('should handle UPDATE_COMPANY_FAIL without error message', () => {
    const result = companiesReducer(initialState, UPDATE_COMPANY_FAIL_WITHOUT_ERR);
    expect(result.updatedCompany.loading).to.be.equal(false);
    expect(result.updatedCompany.error).to.be.equal('Error, update company failed');
    expect(result.updatedCompany.data).to.deep.equal({});
  });
  // ********************* DELETE_COMPANIES ******************************
  it('should handle DELETE_COMPANIES_PENDING', () => {
    const result = companiesReducer(initialState, DELETE_COMPANIES_PENDING);
    expect(result.deletedCompanies.loading).to.be.equal(true);
    expect(result.deletedCompanies.error).to.be.equal(null);
    expect(result.deletedCompanies.data).to.deep.equal([]);
  });

  it('should handle DELETE_COMPANIES_SUCCESS', () => {
    const result = companiesReducer(DIRTY_STATE, DELETE_COMPANIES_SUCCESS);

    expect(result.deletedCompanies.loading).to.be.equal(false);
    expect(result.deletedCompanies.error).to.be.equal(null);
    expect(result.deletedCompanies.data).to.be.equal(DELETE_COMPANIES_SUCCESS.payload);
    expect(result.companies.data).to.deep.equal(COMPANIES.slice(1));
  });

  it('should handle DELETE_COMPANIES_FAIL', () => {
    const result = companiesReducer(initialState, DELETE_COMPANIES_FAIL);
    expect(result.deletedCompanies.loading).to.be.equal(false);
    expect(result.deletedCompanies.error).to.be.equal(DELETE_COMPANIES_FAIL.payload);
    expect(result.deletedCompanies.data).to.deep.equal([]);
  });

  it('should handle DELETE_COMPANIES_FAIL without error message', () => {
    const result = companiesReducer(initialState, DELETE_COMPANIES_FAIL_WITHOUT_ERR);
    expect(result.deletedCompanies.loading).to.be.equal(false);
    expect(result.deletedCompanies.error).to.be.equal('Error, delete company failed');
    expect(result.deletedCompanies.data).to.deep.equal([]);
  });
});
