import { expect } from 'chai';
import { slnValuesReducer, initialState } from '../../slnValues';
import {
  SLN_VALUES,
  GET_SLN_VALUES_PENDING,
  GET_SLN_VALUES_SUCCESS,
  GET_SLN_VALUES_FAIL,
  GET_SLN_VALUES_FAIL_WITHOUT_ERR,
  CREATE_SLN_VALUE_PENDING,
  CREATE_SLN_VALUE_SUCCESS,
  CREATE_SLN_VALUE_FAIL,
  CREATE_SLN_VALUE_FAIL_WITHOUT_ERR,
  UPDATE_SLN_VALUE_PENDING,
  UPDATE_SLN_VALUE_SUCCESS,
  UPDATE_SLN_VALUE_FAIL,
  UPDATE_SLN_VALUE_FAIL_WITHOUT_ERR,
  DELETE_SLN_VALUES_PENDING,
  DELETE_SLN_VALUES_SUCCESS,
  DELETE_SLN_VALUES_FAIL,
  DELETE_SLN_VALUES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  slnValues: { ...initialState.slnValues, data: SLN_VALUES }
};

describe('Sln Values reducer', () => {
  // ********************* GET_SLN_VALUES ******************************
  it('should handle GET_SLN_VALUES_PENDING', () => {
    const result = slnValuesReducer(initialState, GET_SLN_VALUES_PENDING);
    expect(result.slnValues.loading).to.be.equal(true);
    expect(result.slnValues.error).to.be.equal(null);
    expect(result.slnValues.data).to.have.length(0);
  });

  it('should handle GET_SLN_VALUES_SUCCESS', () => {
    const result = slnValuesReducer(initialState, GET_SLN_VALUES_SUCCESS);
    expect(result.slnValues.loading).to.be.equal(false);
    expect(result.slnValues.error).to.be.equal(null);
    expect(result.slnValues.data).to.deep.equal(GET_SLN_VALUES_SUCCESS.payload);
  });

  it('should handle GET_SLN_VALUES_FAIL', () => {
    const result = slnValuesReducer(initialState, GET_SLN_VALUES_FAIL);
    expect(result.slnValues.loading).to.be.equal(false);
    expect(result.slnValues.error).to.be.equal(GET_SLN_VALUES_FAIL.payload);
    expect(result.slnValues.data).to.have.length(0);
  });

  it('should handle GET_SLN_VALUES_FAIL without error message', () => {
    const result = slnValuesReducer(initialState, GET_SLN_VALUES_FAIL_WITHOUT_ERR);
    expect(result.slnValues.loading).to.be.equal(false);
    expect(result.slnValues.error).to.be.equal('Error, get sln values failed');
    expect(result.slnValues.data).to.have.length(0);
  });
  // ********************* CREATE_SLN_VALUE ******************************
  it('should handle CREATE_SLN_VALUE_PENDING', () => {
    const result = slnValuesReducer(initialState, CREATE_SLN_VALUE_PENDING);
    expect(result.createdSlnValue.loading).to.be.equal(true);
    expect(result.createdSlnValue.error).to.be.equal(null);
    expect(result.createdSlnValue.data).to.deep.equal({});
  });

  it('should handle CREATE_SLN_VALUE_SUCCESS', () => {
    const result = slnValuesReducer(initialState, CREATE_SLN_VALUE_SUCCESS);
    expect(result.createdSlnValue.loading).to.be.equal(false);
    expect(result.createdSlnValue.error).to.be.equal(null);
    expect(result.createdSlnValue.data).to.be.equal(CREATE_SLN_VALUE_SUCCESS.payload);
    expect(result.slnValues.data).to.deep.equal([CREATE_SLN_VALUE_SUCCESS.payload]);
  });

  it('should handle CREATE_SLN_VALUE_FAIL', () => {
    const result = slnValuesReducer(initialState, CREATE_SLN_VALUE_FAIL);
    expect(result.createdSlnValue.loading).to.be.equal(false);
    expect(result.createdSlnValue.error).to.be.equal(CREATE_SLN_VALUE_FAIL.payload);
    expect(result.createdSlnValue.data).to.deep.equal({});
  });

  it('should handle CREATE_SLN_VALUE_FAIL without error message', () => {
    const result = slnValuesReducer(initialState, CREATE_SLN_VALUE_FAIL_WITHOUT_ERR);
    expect(result.createdSlnValue.loading).to.be.equal(false);
    expect(result.createdSlnValue.error).to.be.equal('Error, create sln value failed');
    expect(result.createdSlnValue.data).to.deep.equal({});
  });
  // ********************* UPDATE_SLN_VALUE ******************************
  it('should handle UPDATE_SLN_VALUE_PENDING', () => {
    const result = slnValuesReducer(initialState, UPDATE_SLN_VALUE_PENDING);
    expect(result.updatedSlnValue.loading).to.be.equal(true);
    expect(result.updatedSlnValue.error).to.be.equal(null);
    expect(result.updatedSlnValue.data).to.deep.equal({});
  });

  it('should handle UPDATE_SLN_VALUE_SUCCESS', () => {
    const result = slnValuesReducer(DIRTY_STATE, UPDATE_SLN_VALUE_SUCCESS);
    const [updatedSlnValue] = result.slnValues.data;

    expect(result.updatedSlnValue.loading).to.be.equal(false);
    expect(result.updatedSlnValue.error).to.be.equal(null);
    expect(result.updatedSlnValue.data).to.be.equal(UPDATE_SLN_VALUE_SUCCESS.payload);
    expect(updatedSlnValue).to.deep.equal(UPDATE_SLN_VALUE_SUCCESS.payload);
  });

  it('should handle UPDATE_SLN_VALUE_FAIL', () => {
    const result = slnValuesReducer(initialState, UPDATE_SLN_VALUE_FAIL);
    expect(result.updatedSlnValue.loading).to.be.equal(false);
    expect(result.updatedSlnValue.error).to.be.equal(UPDATE_SLN_VALUE_FAIL.payload);
    expect(result.updatedSlnValue.data).to.deep.equal({});
  });

  it('should handle UPDATE_SLN_VALUE_FAIL without error message', () => {
    const result = slnValuesReducer(initialState, UPDATE_SLN_VALUE_FAIL_WITHOUT_ERR);
    expect(result.updatedSlnValue.loading).to.be.equal(false);
    expect(result.updatedSlnValue.error).to.be.equal('Error, update sln value failed');
    expect(result.updatedSlnValue.data).to.deep.equal({});
  });
  // ********************* DELETE_SLN_VALUES ******************************
  it('should handle DELETE_SLN_VALUES_PENDING', () => {
    const result = slnValuesReducer(initialState, DELETE_SLN_VALUES_PENDING);
    expect(result.deletedSlnValues.loading).to.be.equal(true);
    expect(result.deletedSlnValues.error).to.be.equal(null);
    expect(result.deletedSlnValues.data).to.deep.equal([]);
  });

  it('should handle DELETE_SLN_VALUES_SUCCESS', () => {
    const result = slnValuesReducer(DIRTY_STATE, DELETE_SLN_VALUES_SUCCESS);

    expect(result.deletedSlnValues.loading).to.be.equal(false);
    expect(result.deletedSlnValues.error).to.be.equal(null);
    expect(result.deletedSlnValues.data).to.be.equal(DELETE_SLN_VALUES_SUCCESS.payload);
    expect(result.slnValues.data).to.deep.equal(SLN_VALUES.slice(1));
  });

  it('should handle DELETE_SLN_VALUES_FAIL', () => {
    const result = slnValuesReducer(initialState, DELETE_SLN_VALUES_FAIL);
    expect(result.deletedSlnValues.loading).to.be.equal(false);
    expect(result.deletedSlnValues.error).to.be.equal(DELETE_SLN_VALUES_FAIL.payload);
    expect(result.deletedSlnValues.data).to.deep.equal([]);
  });

  it('should handle DELETE_SLN_VALUES_FAIL without error message', () => {
    const result = slnValuesReducer(initialState, DELETE_SLN_VALUES_FAIL_WITHOUT_ERR);
    expect(result.deletedSlnValues.loading).to.be.equal(false);
    expect(result.deletedSlnValues.error).to.be.equal('Error, delete sln value failed');
    expect(result.deletedSlnValues.data).to.deep.equal([]);
  });
});
