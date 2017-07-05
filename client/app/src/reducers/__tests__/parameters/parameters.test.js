import { expect } from 'chai';
import { parametersReducer, initialState } from '../../parameters';
import {
  PARAMETERS,
  GET_PARAMETERS_PENDING,
  GET_PARAMETERS_SUCCESS,
  GET_PARAMETERS_FAIL,
  GET_PARAMETERS_FAIL_WITHOUT_ERR,
  CREATE_PARAMETER_PENDING,
  CREATE_PARAMETER_SUCCESS,
  CREATE_PARAMETER_FAIL,
  CREATE_PARAMETER_FAIL_WITHOUT_ERR,
  UPDATE_PARAMETER_PENDING,
  UPDATE_PARAMETER_SUCCESS,
  UPDATE_PARAMETER_FAIL,
  UPDATE_PARAMETER_FAIL_WITHOUT_ERR,
  DELETE_PARAMETERS_PENDING,
  DELETE_PARAMETERS_SUCCESS,
  DELETE_PARAMETERS_FAIL,
  DELETE_PARAMETERS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  parameters: { ...initialState.parameters, data: PARAMETERS }
};

describe('Parameters reducer', () => {
  // ********************* GET_PARAMETERS ******************************
  it('should handle GET_PARAMETERS_PENDING', () => {
    const result = parametersReducer(initialState, GET_PARAMETERS_PENDING);
    expect(result.parameters.loading).to.be.equal(true);
    expect(result.parameters.error).to.be.equal(null);
    expect(result.parameters.data).to.have.length(0);
  });

  it('should handle GET_PARAMETERS_SUCCESS', () => {
    const result = parametersReducer(initialState, GET_PARAMETERS_SUCCESS);
    expect(result.parameters.loading).to.be.equal(false);
    expect(result.parameters.error).to.be.equal(null);
    expect(result.parameters.data).to.deep.equal(GET_PARAMETERS_SUCCESS.payload);
  });

  it('should handle GET_PARAMETERS_FAIL', () => {
    const result = parametersReducer(initialState, GET_PARAMETERS_FAIL);
    expect(result.parameters.loading).to.be.equal(false);
    expect(result.parameters.error).to.be.equal(GET_PARAMETERS_FAIL.payload);
    expect(result.parameters.data).to.have.length(0);
  });

  it('should handle GET_PARAMETERS_FAIL without error message', () => {
    const result = parametersReducer(initialState, GET_PARAMETERS_FAIL_WITHOUT_ERR);
    expect(result.parameters.loading).to.be.equal(false);
    expect(result.parameters.error).to.be.equal('Error, get parameters failed');
    expect(result.parameters.data).to.have.length(0);
  });
  // ********************* CREATE_PARAMETER ******************************
  it('should handle CREATE_PARAMETER_PENDING', () => {
    const result = parametersReducer(initialState, CREATE_PARAMETER_PENDING);
    expect(result.createdParameter.loading).to.be.equal(true);
    expect(result.createdParameter.error).to.be.equal(null);
    expect(result.createdParameter.data).to.deep.equal({});
  });

  it('should handle CREATE_PARAMETER_SUCCESS', () => {
    const result = parametersReducer(initialState, CREATE_PARAMETER_SUCCESS);
    expect(result.createdParameter.loading).to.be.equal(false);
    expect(result.createdParameter.error).to.be.equal(null);
    expect(result.createdParameter.data).to.be.equal(CREATE_PARAMETER_SUCCESS.payload);
    expect(result.parameters.data).to.deep.equal([CREATE_PARAMETER_SUCCESS.payload]);
  });

  it('should handle CREATE_PARAMETER_FAIL', () => {
    const result = parametersReducer(initialState, CREATE_PARAMETER_FAIL);
    expect(result.createdParameter.loading).to.be.equal(false);
    expect(result.createdParameter.error).to.be.equal(CREATE_PARAMETER_FAIL.payload);
    expect(result.createdParameter.data).to.deep.equal({});
  });

  it('should handle CREATE_PARAMETER_FAIL without error message', () => {
    const result = parametersReducer(initialState, CREATE_PARAMETER_FAIL_WITHOUT_ERR);
    expect(result.createdParameter.loading).to.be.equal(false);
    expect(result.createdParameter.error).to.be.equal('Error, create parameter failed');
    expect(result.createdParameter.data).to.deep.equal({});
  });
  // ********************* UPDATE_PARAMETER ******************************
  it('should handle UPDATE_PARAMETER_PENDING', () => {
    const result = parametersReducer(initialState, UPDATE_PARAMETER_PENDING);
    expect(result.updatedParameter.loading).to.be.equal(true);
    expect(result.updatedParameter.error).to.be.equal(null);
    expect(result.updatedParameter.data).to.deep.equal({});
  });

  it('should handle UPDATE_PARAMETER_SUCCESS', () => {
    const result = parametersReducer(DIRTY_STATE, UPDATE_PARAMETER_SUCCESS);
    const [updatedParameter] = result.parameters.data;

    expect(result.updatedParameter.loading).to.be.equal(false);
    expect(result.updatedParameter.error).to.be.equal(null);
    expect(result.updatedParameter.data).to.be.equal(UPDATE_PARAMETER_SUCCESS.payload);
    expect(updatedParameter).to.deep.equal(UPDATE_PARAMETER_SUCCESS.payload);
  });

  it('should handle UPDATE_PARAMETER_FAIL', () => {
    const result = parametersReducer(initialState, UPDATE_PARAMETER_FAIL);
    expect(result.updatedParameter.loading).to.be.equal(false);
    expect(result.updatedParameter.error).to.be.equal(UPDATE_PARAMETER_FAIL.payload);
    expect(result.updatedParameter.data).to.deep.equal({});
  });

  it('should handle UPDATE_PARAMETER_FAIL without error message', () => {
    const result = parametersReducer(initialState, UPDATE_PARAMETER_FAIL_WITHOUT_ERR);
    expect(result.updatedParameter.loading).to.be.equal(false);
    expect(result.updatedParameter.error).to.be.equal('Error, update parameter failed');
    expect(result.updatedParameter.data).to.deep.equal({});
  });
  // ********************* DELETE_PARAMETERS ******************************
  it('should handle DELETE_PARAMETERS_PENDING', () => {
    const result = parametersReducer(initialState, DELETE_PARAMETERS_PENDING);
    expect(result.deletedParameters.loading).to.be.equal(true);
    expect(result.deletedParameters.error).to.be.equal(null);
    expect(result.deletedParameters.data).to.deep.equal([]);
  });

  it('should handle DELETE_PARAMETERS_SUCCESS', () => {
    const result = parametersReducer(DIRTY_STATE, DELETE_PARAMETERS_SUCCESS);

    expect(result.deletedParameters.loading).to.be.equal(false);
    expect(result.deletedParameters.error).to.be.equal(null);
    expect(result.deletedParameters.data).to.be.equal(DELETE_PARAMETERS_SUCCESS.payload);
    expect(result.parameters.data).to.deep.equal(PARAMETERS.slice(1));
  });

  it('should handle DELETE_PARAMETERS_FAIL', () => {
    const result = parametersReducer(initialState, DELETE_PARAMETERS_FAIL);
    expect(result.deletedParameters.loading).to.be.equal(false);
    expect(result.deletedParameters.error).to.be.equal(DELETE_PARAMETERS_FAIL.payload);
    expect(result.deletedParameters.data).to.deep.equal([]);
  });

  it('should handle DELETE_PARAMETERS_FAIL without error message', () => {
    const result = parametersReducer(initialState, DELETE_PARAMETERS_FAIL_WITHOUT_ERR);
    expect(result.deletedParameters.loading).to.be.equal(false);
    expect(result.deletedParameters.error).to.be.equal('Error, delete parameter failed');
    expect(result.deletedParameters.data).to.deep.equal([]);
  });
});
