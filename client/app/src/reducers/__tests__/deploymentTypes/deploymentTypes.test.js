import { expect } from 'chai';
import { deploymentTypesReducer, initialState } from '../../deploymentTypes';
import {
  DEPLOYMENT_TYPES,
  GET_DEPLOYMENT_TYPES_PENDING,
  GET_DEPLOYMENT_TYPES_SUCCESS,
  GET_DEPLOYMENT_TYPES_FAIL,
  GET_DEPLOYMENT_TYPES_FAIL_WITHOUT_ERR,
  CREATE_DEPLOYMENT_TYPE_PENDING,
  CREATE_DEPLOYMENT_TYPE_SUCCESS,
  CREATE_DEPLOYMENT_TYPE_FAIL,
  CREATE_DEPLOYMENT_TYPE_FAIL_WITHOUT_ERR,
  UPDATE_DEPLOYMENT_TYPE_PENDING,
  UPDATE_DEPLOYMENT_TYPE_SUCCESS,
  UPDATE_DEPLOYMENT_TYPE_FAIL,
  UPDATE_DEPLOYMENT_TYPE_FAIL_WITHOUT_ERR,
  DELETE_DEPLOYMENT_TYPES_PENDING,
  DELETE_DEPLOYMENT_TYPES_SUCCESS,
  DELETE_DEPLOYMENT_TYPES_FAIL,
  DELETE_DEPLOYMENT_TYPES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  deploymentTypes: { ...initialState.deploymentTypes, data: DEPLOYMENT_TYPES }
};

describe('Deployment Types reducer', () => {
  // ********************* GET_DEPLOYMENT_TYPES ******************************
  it('should handle GET_DEPLOYMENT_TYPES_PENDING', () => {
    const result = deploymentTypesReducer(initialState, GET_DEPLOYMENT_TYPES_PENDING);
    expect(result.deploymentTypes.loading).to.be.equal(true);
    expect(result.deploymentTypes.error).to.be.equal(null);
    expect(result.deploymentTypes.data).to.have.length(0);
  });

  it('should handle GET_DEPLOYMENT_TYPES_SUCCESS', () => {
    const result = deploymentTypesReducer(initialState, GET_DEPLOYMENT_TYPES_SUCCESS);
    expect(result.deploymentTypes.loading).to.be.equal(false);
    expect(result.deploymentTypes.error).to.be.equal(null);
    expect(result.deploymentTypes.data).to.deep.equal(GET_DEPLOYMENT_TYPES_SUCCESS.payload);
  });

  it('should handle GET_DEPLOYMENT_TYPES_FAIL', () => {
    const result = deploymentTypesReducer(initialState, GET_DEPLOYMENT_TYPES_FAIL);
    expect(result.deploymentTypes.loading).to.be.equal(false);
    expect(result.deploymentTypes.error).to.be.equal(GET_DEPLOYMENT_TYPES_FAIL.payload);
    expect(result.deploymentTypes.data).to.have.length(0);
  });

  it('should handle GET_DEPLOYMENT_TYPES_FAIL without error message', () => {
    const result = deploymentTypesReducer(initialState, GET_DEPLOYMENT_TYPES_FAIL_WITHOUT_ERR);
    expect(result.deploymentTypes.loading).to.be.equal(false);
    expect(result.deploymentTypes.error).to.be.equal('Error, get deployment types failed');
    expect(result.deploymentTypes.data).to.have.length(0);
  });
  // ********************* CREATE_DEPLOYMENT_TYPE ******************************
  it('should handle CREATE_DEPLOYMENT_TYPE_PENDING', () => {
    const result = deploymentTypesReducer(initialState, CREATE_DEPLOYMENT_TYPE_PENDING);
    expect(result.createdDeploymentType.loading).to.be.equal(true);
    expect(result.createdDeploymentType.error).to.be.equal(null);
    expect(result.createdDeploymentType.data).to.deep.equal({});
  });

  it('should handle CREATE_DEPLOYMENT_TYPE_SUCCESS', () => {
    const result = deploymentTypesReducer(initialState, CREATE_DEPLOYMENT_TYPE_SUCCESS);
    expect(result.createdDeploymentType.loading).to.be.equal(false);
    expect(result.createdDeploymentType.error).to.be.equal(null);
    expect(result.createdDeploymentType.data).to.be.equal(CREATE_DEPLOYMENT_TYPE_SUCCESS.payload);
    expect(result.deploymentTypes.data).to.deep.equal([CREATE_DEPLOYMENT_TYPE_SUCCESS.payload]);
  });

  it('should handle CREATE_DEPLOYMENT_TYPE_FAIL', () => {
    const result = deploymentTypesReducer(initialState, CREATE_DEPLOYMENT_TYPE_FAIL);
    expect(result.createdDeploymentType.loading).to.be.equal(false);
    expect(result.createdDeploymentType.error).to.be.equal(CREATE_DEPLOYMENT_TYPE_FAIL.payload);
    expect(result.createdDeploymentType.data).to.deep.equal({});
  });

  it('should handle CREATE_DEPLOYMENT_TYPE_FAIL without error message', () => {
    const result = deploymentTypesReducer(initialState, CREATE_DEPLOYMENT_TYPE_FAIL_WITHOUT_ERR);
    expect(result.createdDeploymentType.loading).to.be.equal(false);
    expect(result.createdDeploymentType.error).to.be.equal('Error, create deployment type failed');
    expect(result.createdDeploymentType.data).to.deep.equal({});
  });
  // ********************* UPDATE_DEPLOYMENT_TYPE ******************************
  it('should handle UPDATE_DEPLOYMENT_TYPE_PENDING', () => {
    const result = deploymentTypesReducer(initialState, UPDATE_DEPLOYMENT_TYPE_PENDING);
    expect(result.updatedDeploymentType.loading).to.be.equal(true);
    expect(result.updatedDeploymentType.error).to.be.equal(null);
    expect(result.updatedDeploymentType.data).to.deep.equal({});
  });

  it('should handle UPDATE_DEPLOYMENT_TYPE_SUCCESS', () => {
    const result = deploymentTypesReducer(DIRTY_STATE, UPDATE_DEPLOYMENT_TYPE_SUCCESS);
    const [updatedDeploymentType] = result.deploymentTypes.data;

    expect(result.updatedDeploymentType.loading).to.be.equal(false);
    expect(result.updatedDeploymentType.error).to.be.equal(null);
    expect(result.updatedDeploymentType.data).to.be.equal(UPDATE_DEPLOYMENT_TYPE_SUCCESS.payload);
    expect(updatedDeploymentType).to.deep.equal(UPDATE_DEPLOYMENT_TYPE_SUCCESS.payload);
  });

  it('should handle UPDATE_DEPLOYMENT_TYPE_FAIL', () => {
    const result = deploymentTypesReducer(initialState, UPDATE_DEPLOYMENT_TYPE_FAIL);
    expect(result.updatedDeploymentType.loading).to.be.equal(false);
    expect(result.updatedDeploymentType.error).to.be.equal(UPDATE_DEPLOYMENT_TYPE_FAIL.payload);
    expect(result.updatedDeploymentType.data).to.deep.equal({});
  });

  it('should handle UPDATE_DEPLOYMENT_TYPE_FAIL without error message', () => {
    const result = deploymentTypesReducer(initialState, UPDATE_DEPLOYMENT_TYPE_FAIL_WITHOUT_ERR);
    expect(result.updatedDeploymentType.loading).to.be.equal(false);
    expect(result.updatedDeploymentType.error).to.be.equal('Error, update deployment type failed');
    expect(result.updatedDeploymentType.data).to.deep.equal({});
  });
  // ********************* DELETE_DEPLOYMENT_TYPES ******************************
  it('should handle DELETE_DEPLOYMENT_TYPES_PENDING', () => {
    const result = deploymentTypesReducer(initialState, DELETE_DEPLOYMENT_TYPES_PENDING);
    expect(result.deletedDeploymentTypes.loading).to.be.equal(true);
    expect(result.deletedDeploymentTypes.error).to.be.equal(null);
    expect(result.deletedDeploymentTypes.data).to.deep.equal([]);
  });

  it('should handle DELETE_DEPLOYMENT_TYPES_SUCCESS', () => {
    const result = deploymentTypesReducer(DIRTY_STATE, DELETE_DEPLOYMENT_TYPES_SUCCESS);

    expect(result.deletedDeploymentTypes.loading).to.be.equal(false);
    expect(result.deletedDeploymentTypes.error).to.be.equal(null);
    expect(result.deletedDeploymentTypes.data).to.be.equal(DELETE_DEPLOYMENT_TYPES_SUCCESS.payload);
    expect(result.deploymentTypes.data).to.deep.equal(DEPLOYMENT_TYPES.slice(1));
  });

  it('should handle DELETE_DEPLOYMENT_TYPES_FAIL', () => {
    const result = deploymentTypesReducer(initialState, DELETE_DEPLOYMENT_TYPES_FAIL);
    expect(result.deletedDeploymentTypes.loading).to.be.equal(false);
    expect(result.deletedDeploymentTypes.error).to.be.equal(DELETE_DEPLOYMENT_TYPES_FAIL.payload);
    expect(result.deletedDeploymentTypes.data).to.deep.equal([]);
  });

  it('should handle DELETE_DEPLOYMENT_TYPES_FAIL without error message', () => {
    const result = deploymentTypesReducer(initialState, DELETE_DEPLOYMENT_TYPES_FAIL_WITHOUT_ERR);
    expect(result.deletedDeploymentTypes.loading).to.be.equal(false);
    expect(result.deletedDeploymentTypes.error).to.be.equal('Error, delete deployment type failed');
    expect(result.deletedDeploymentTypes.data).to.deep.equal([]);
  });
});
