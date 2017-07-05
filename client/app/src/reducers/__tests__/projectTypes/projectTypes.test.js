import { expect } from 'chai';
import { projectTypesReducer, initialState } from '../../projectTypes';
import {
  PROJECT_TYPES,
  GET_PROJECT_TYPES_PENDING,
  GET_PROJECT_TYPES_SUCCESS,
  GET_PROJECT_TYPES_FAIL,
  GET_PROJECT_TYPES_FAIL_WITHOUT_ERR,
  CREATE_PROJECT_TYPE_PENDING,
  CREATE_PROJECT_TYPE_SUCCESS,
  CREATE_PROJECT_TYPE_FAIL,
  CREATE_PROJECT_TYPE_FAIL_WITHOUT_ERR,
  UPDATE_PROJECT_TYPE_PENDING,
  UPDATE_PROJECT_TYPE_SUCCESS,
  UPDATE_PROJECT_TYPE_FAIL,
  UPDATE_PROJECT_TYPE_FAIL_WITHOUT_ERR,
  DELETE_PROJECT_TYPES_PENDING,
  DELETE_PROJECT_TYPES_SUCCESS,
  DELETE_PROJECT_TYPES_FAIL,
  DELETE_PROJECT_TYPES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  projectTypes: { ...initialState.projectTypes, data: PROJECT_TYPES }
};

describe('Project Types reducer', () => {
  // ********************* GET_PROJECT_TYPES ******************************
  it('should handle GET_PROJECT_TYPES_PENDING', () => {
    const result = projectTypesReducer(initialState, GET_PROJECT_TYPES_PENDING);
    expect(result.projectTypes.loading).to.be.equal(true);
    expect(result.projectTypes.error).to.be.equal(null);
    expect(result.projectTypes.data).to.have.length(0);
  });

  it('should handle GET_PROJECT_TYPES_SUCCESS', () => {
    const result = projectTypesReducer(initialState, GET_PROJECT_TYPES_SUCCESS);
    expect(result.projectTypes.loading).to.be.equal(false);
    expect(result.projectTypes.error).to.be.equal(null);
    expect(result.projectTypes.data).to.deep.equal(GET_PROJECT_TYPES_SUCCESS.payload);
  });

  it('should handle GET_PROJECT_TYPES_FAIL', () => {
    const result = projectTypesReducer(initialState, GET_PROJECT_TYPES_FAIL);
    expect(result.projectTypes.loading).to.be.equal(false);
    expect(result.projectTypes.error).to.be.equal(GET_PROJECT_TYPES_FAIL.payload);
    expect(result.projectTypes.data).to.have.length(0);
  });

  it('should handle GET_PROJECT_TYPES_FAIL without error message', () => {
    const result = projectTypesReducer(initialState, GET_PROJECT_TYPES_FAIL_WITHOUT_ERR);
    expect(result.projectTypes.loading).to.be.equal(false);
    expect(result.projectTypes.error).to.be.equal('Error, get project types failed');
    expect(result.projectTypes.data).to.have.length(0);
  });
  // ********************* CREATE_PROJECT_TYPE ******************************
  it('should handle CREATE_PROJECT_TYPE_PENDING', () => {
    const result = projectTypesReducer(initialState, CREATE_PROJECT_TYPE_PENDING);
    expect(result.createdProjectType.loading).to.be.equal(true);
    expect(result.createdProjectType.error).to.be.equal(null);
    expect(result.createdProjectType.data).to.deep.equal({});
  });

  it('should handle CREATE_PROJECT_TYPE_SUCCESS', () => {
    const result = projectTypesReducer(initialState, CREATE_PROJECT_TYPE_SUCCESS);
    expect(result.createdProjectType.loading).to.be.equal(false);
    expect(result.createdProjectType.error).to.be.equal(null);
    expect(result.createdProjectType.data).to.be.equal(CREATE_PROJECT_TYPE_SUCCESS.payload);
    expect(result.projectTypes.data).to.deep.equal([CREATE_PROJECT_TYPE_SUCCESS.payload]);
  });

  it('should handle CREATE_PROJECT_TYPE_FAIL', () => {
    const result = projectTypesReducer(initialState, CREATE_PROJECT_TYPE_FAIL);
    expect(result.createdProjectType.loading).to.be.equal(false);
    expect(result.createdProjectType.error).to.be.equal(CREATE_PROJECT_TYPE_FAIL.payload);
    expect(result.createdProjectType.data).to.deep.equal({});
  });

  it('should handle CREATE_PROJECT_TYPE_FAIL without error message', () => {
    const result = projectTypesReducer(initialState, CREATE_PROJECT_TYPE_FAIL_WITHOUT_ERR);
    expect(result.createdProjectType.loading).to.be.equal(false);
    expect(result.createdProjectType.error).to.be.equal('Error, create project type failed');
    expect(result.createdProjectType.data).to.deep.equal({});
  });
  // ********************* UPDATE_PROJECT_TYPE ******************************
  it('should handle UPDATE_PROJECT_TYPE_PENDING', () => {
    const result = projectTypesReducer(initialState, UPDATE_PROJECT_TYPE_PENDING);
    expect(result.updatedProjectType.loading).to.be.equal(true);
    expect(result.updatedProjectType.error).to.be.equal(null);
    expect(result.updatedProjectType.data).to.deep.equal({});
  });

  it('should handle UPDATE_PROJECT_TYPE_SUCCESS', () => {
    const result = projectTypesReducer(DIRTY_STATE, UPDATE_PROJECT_TYPE_SUCCESS);
    const [updatedProjectType] = result.projectTypes.data;

    expect(result.updatedProjectType.loading).to.be.equal(false);
    expect(result.updatedProjectType.error).to.be.equal(null);
    expect(result.updatedProjectType.data).to.be.equal(UPDATE_PROJECT_TYPE_SUCCESS.payload);
    expect(updatedProjectType).to.deep.equal(UPDATE_PROJECT_TYPE_SUCCESS.payload);
  });

  it('should handle UPDATE_PROJECT_TYPE_FAIL', () => {
    const result = projectTypesReducer(initialState, UPDATE_PROJECT_TYPE_FAIL);
    expect(result.updatedProjectType.loading).to.be.equal(false);
    expect(result.updatedProjectType.error).to.be.equal(UPDATE_PROJECT_TYPE_FAIL.payload);
    expect(result.updatedProjectType.data).to.deep.equal({});
  });

  it('should handle UPDATE_PROJECT_TYPE_FAIL without error message', () => {
    const result = projectTypesReducer(initialState, UPDATE_PROJECT_TYPE_FAIL_WITHOUT_ERR);
    expect(result.updatedProjectType.loading).to.be.equal(false);
    expect(result.updatedProjectType.error).to.be.equal('Error, update project type failed');
    expect(result.updatedProjectType.data).to.deep.equal({});
  });
  // ********************* DELETE_PROJECT_TYPES ******************************
  it('should handle DELETE_PROJECT_TYPES_PENDING', () => {
    const result = projectTypesReducer(initialState, DELETE_PROJECT_TYPES_PENDING);
    expect(result.deletedProjectTypes.loading).to.be.equal(true);
    expect(result.deletedProjectTypes.error).to.be.equal(null);
    expect(result.deletedProjectTypes.data).to.deep.equal([]);
  });

  it('should handle DELETE_PROJECT_TYPES_SUCCESS', () => {
    const result = projectTypesReducer(DIRTY_STATE, DELETE_PROJECT_TYPES_SUCCESS);

    expect(result.deletedProjectTypes.loading).to.be.equal(false);
    expect(result.deletedProjectTypes.error).to.be.equal(null);
    expect(result.deletedProjectTypes.data).to.be.equal(DELETE_PROJECT_TYPES_SUCCESS.payload);
    expect(result.projectTypes.data).to.deep.equal(PROJECT_TYPES.slice(1));
  });

  it('should handle DELETE_PROJECT_TYPES_FAIL', () => {
    const result = projectTypesReducer(initialState, DELETE_PROJECT_TYPES_FAIL);
    expect(result.deletedProjectTypes.loading).to.be.equal(false);
    expect(result.deletedProjectTypes.error).to.be.equal(DELETE_PROJECT_TYPES_FAIL.payload);
    expect(result.deletedProjectTypes.data).to.deep.equal([]);
  });

  it('should handle DELETE_PROJECT_TYPES_FAIL without error message', () => {
    const result = projectTypesReducer(initialState, DELETE_PROJECT_TYPES_FAIL_WITHOUT_ERR);
    expect(result.deletedProjectTypes.loading).to.be.equal(false);
    expect(result.deletedProjectTypes.error).to.be.equal('Error, delete project type failed');
    expect(result.deletedProjectTypes.data).to.deep.equal([]);
  });
});
