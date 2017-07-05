import { expect } from 'chai';
import { businessUnitsReducer, initialState } from '../../businessUnits';
import {
  BUSINESS_UNITS,
  GET_BUSINESS_UNITS_PENDING,
  GET_BUSINESS_UNITS_SUCCESS,
  GET_BUSINESS_UNITS_FAIL,
  GET_BUSINESS_UNITS_FAIL_WITHOUT_ERR,
  CREATE_BUSINESS_UNIT_PENDING,
  CREATE_BUSINESS_UNIT_SUCCESS,
  CREATE_BUSINESS_UNIT_FAIL,
  CREATE_BUSINESS_UNIT_FAIL_WITHOUT_ERR,
  UPDATE_BUSINESS_UNIT_PENDING,
  UPDATE_BUSINESS_UNIT_SUCCESS,
  UPDATE_BUSINESS_UNIT_FAIL,
  UPDATE_BUSINESS_UNIT_FAIL_WITHOUT_ERR,
  DELETE_BUSINESS_UNITS_PENDING,
  DELETE_BUSINESS_UNITS_SUCCESS,
  DELETE_BUSINESS_UNITS_FAIL,
  DELETE_BUSINESS_UNITS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  businessUnits: { ...initialState.businessUnits, data: BUSINESS_UNITS }
};

describe('BusinessUnits reducer', () => {
  // ********************* GET_BUSINESS_UNITS ******************************
  it('should handle GET_BUSINESS_UNITS_PENDING', () => {
    const result = businessUnitsReducer(initialState, GET_BUSINESS_UNITS_PENDING);
    expect(result.businessUnits.loading).to.be.equal(true);
    expect(result.businessUnits.error).to.be.equal(null);
    expect(result.businessUnits.data).to.have.length(0);
  });

  it('should handle GET_BUSINESS_UNITS_SUCCESS', () => {
    const result = businessUnitsReducer(initialState, GET_BUSINESS_UNITS_SUCCESS);
    expect(result.businessUnits.loading).to.be.equal(false);
    expect(result.businessUnits.error).to.be.equal(null);
    expect(result.businessUnits.data).to.deep.equal(GET_BUSINESS_UNITS_SUCCESS.payload);
  });

  it('should handle GET_BUSINESS_UNITS_FAIL', () => {
    const result = businessUnitsReducer(initialState, GET_BUSINESS_UNITS_FAIL);
    expect(result.businessUnits.loading).to.be.equal(false);
    expect(result.businessUnits.error).to.be.equal(GET_BUSINESS_UNITS_FAIL.payload);
    expect(result.businessUnits.data).to.have.length(0);
  });

  it('should handle GET_BUSINESS_UNITS_FAIL without error message', () => {
    const result = businessUnitsReducer(initialState, GET_BUSINESS_UNITS_FAIL_WITHOUT_ERR);
    expect(result.businessUnits.loading).to.be.equal(false);
    expect(result.businessUnits.error).to.be.equal('Error, get businessUnits failed');
    expect(result.businessUnits.data).to.have.length(0);
  });
  // ********************* CREATE_BUSINESS_UNIT ******************************
  it('should handle CREATE_BUSINESS_UNIT_PENDING', () => {
    const result = businessUnitsReducer(initialState, CREATE_BUSINESS_UNIT_PENDING);
    expect(result.createdBusinessUnit.loading).to.be.equal(true);
    expect(result.createdBusinessUnit.error).to.be.equal(null);
    expect(result.createdBusinessUnit.data).to.deep.equal({});
  });

  it('should handle CREATE_BUSINESS_UNIT_SUCCESS', () => {
    const result = businessUnitsReducer(initialState, CREATE_BUSINESS_UNIT_SUCCESS);
    expect(result.createdBusinessUnit.loading).to.be.equal(false);
    expect(result.createdBusinessUnit.error).to.be.equal(null);
    expect(result.createdBusinessUnit.data).to.be.equal(CREATE_BUSINESS_UNIT_SUCCESS.payload);
    expect(result.businessUnits.data).to.deep.equal([CREATE_BUSINESS_UNIT_SUCCESS.payload]);
  });

  it('should handle CREATE_BUSINESS_UNIT_FAIL', () => {
    const result = businessUnitsReducer(initialState, CREATE_BUSINESS_UNIT_FAIL);
    expect(result.createdBusinessUnit.loading).to.be.equal(false);
    expect(result.createdBusinessUnit.error).to.be.equal(CREATE_BUSINESS_UNIT_FAIL.payload);
    expect(result.createdBusinessUnit.data).to.deep.equal({});
  });

  it('should handle CREATE_BUSINESS_UNIT_FAIL without error message', () => {
    const result = businessUnitsReducer(initialState, CREATE_BUSINESS_UNIT_FAIL_WITHOUT_ERR);
    expect(result.createdBusinessUnit.loading).to.be.equal(false);
    expect(result.createdBusinessUnit.error).to.be.equal('Error, create businessUnit failed');
    expect(result.createdBusinessUnit.data).to.deep.equal({});
  });
  // ********************* UPDATE_BUSINESS_UNIT ******************************
  it('should handle UPDATE_BUSINESS_UNIT_PENDING', () => {
    const result = businessUnitsReducer(initialState, UPDATE_BUSINESS_UNIT_PENDING);
    expect(result.updatedBusinessUnit.loading).to.be.equal(true);
    expect(result.updatedBusinessUnit.error).to.be.equal(null);
    expect(result.updatedBusinessUnit.data).to.deep.equal({});
  });

  it('should handle UPDATE_BUSINESS_UNIT_SUCCESS', () => {
    const result = businessUnitsReducer(DIRTY_STATE, UPDATE_BUSINESS_UNIT_SUCCESS);
    const [updatedBusinessUnit] = result.businessUnits.data;

    expect(result.updatedBusinessUnit.loading).to.be.equal(false);
    expect(result.updatedBusinessUnit.error).to.be.equal(null);
    expect(result.updatedBusinessUnit.data).to.be.equal(UPDATE_BUSINESS_UNIT_SUCCESS.payload);
    expect(updatedBusinessUnit).to.deep.equal(UPDATE_BUSINESS_UNIT_SUCCESS.payload);
  });

  it('should handle UPDATE_BUSINESS_UNIT_FAIL', () => {
    const result = businessUnitsReducer(initialState, UPDATE_BUSINESS_UNIT_FAIL);
    expect(result.updatedBusinessUnit.loading).to.be.equal(false);
    expect(result.updatedBusinessUnit.error).to.be.equal(UPDATE_BUSINESS_UNIT_FAIL.payload);
    expect(result.updatedBusinessUnit.data).to.deep.equal({});
  });

  it('should handle UPDATE_BUSINESS_UNIT_FAIL without error message', () => {
    const result = businessUnitsReducer(initialState, UPDATE_BUSINESS_UNIT_FAIL_WITHOUT_ERR);
    expect(result.updatedBusinessUnit.loading).to.be.equal(false);
    expect(result.updatedBusinessUnit.error).to.be.equal('Error, update businessUnit failed');
    expect(result.updatedBusinessUnit.data).to.deep.equal({});
  });
  // ********************* DELETE_BUSINESS_UNITS ******************************
  it('should handle DELETE_BUSINESS_UNITS_PENDING', () => {
    const result = businessUnitsReducer(initialState, DELETE_BUSINESS_UNITS_PENDING);
    expect(result.deletedBusinessUnits.loading).to.be.equal(true);
    expect(result.deletedBusinessUnits.error).to.be.equal(null);
    expect(result.deletedBusinessUnits.data).to.deep.equal([]);
  });

  it('should handle DELETE_BUSINESS_UNITS_SUCCESS', () => {
    const result = businessUnitsReducer(DIRTY_STATE, DELETE_BUSINESS_UNITS_SUCCESS);

    expect(result.deletedBusinessUnits.loading).to.be.equal(false);
    expect(result.deletedBusinessUnits.error).to.be.equal(null);
    expect(result.deletedBusinessUnits.data).to.be.equal(DELETE_BUSINESS_UNITS_SUCCESS.payload);
    expect(result.businessUnits.data).to.deep.equal(BUSINESS_UNITS.slice(1));
  });

  it('should handle DELETE_BUSINESS_UNITS_FAIL', () => {
    const result = businessUnitsReducer(initialState, DELETE_BUSINESS_UNITS_FAIL);
    expect(result.deletedBusinessUnits.loading).to.be.equal(false);
    expect(result.deletedBusinessUnits.error).to.be.equal(DELETE_BUSINESS_UNITS_FAIL.payload);
    expect(result.deletedBusinessUnits.data).to.deep.equal([]);
  });

  it('should handle DELETE_BUSINESS_UNITS_FAIL without error message', () => {
    const result = businessUnitsReducer(initialState, DELETE_BUSINESS_UNITS_FAIL_WITHOUT_ERR);
    expect(result.deletedBusinessUnits.loading).to.be.equal(false);
    expect(result.deletedBusinessUnits.error).to.be.equal('Error, delete businessUnits failed');
    expect(result.deletedBusinessUnits.data).to.deep.equal([]);
  });
});
