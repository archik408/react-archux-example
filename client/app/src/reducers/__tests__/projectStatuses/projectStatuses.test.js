import { expect } from 'chai';
import { projectStatusesReducer, initialState } from '../../projectStatuses';
import {
  PROJECT_STATUSES,
  GET_PROJECT_STATUSES_PENDING,
  GET_PROJECT_STATUSES_SUCCESS,
  GET_PROJECT_STATUSES_FAIL,
  GET_PROJECT_STATUSES_FAIL_WITHOUT_ERR,
  CREATE_PROJECT_STATUS_PENDING,
  CREATE_PROJECT_STATUS_SUCCESS,
  CREATE_PROJECT_STATUS_FAIL,
  CREATE_PROJECT_STATUS_FAIL_WITHOUT_ERR,
  UPDATE_PROJECT_STATUS_PENDING,
  UPDATE_PROJECT_STATUS_SUCCESS,
  UPDATE_PROJECT_STATUS_FAIL,
  UPDATE_PROJECT_STATUS_FAIL_WITHOUT_ERR,
  DELETE_PROJECT_STATUSES_PENDING,
  DELETE_PROJECT_STATUSES_SUCCESS,
  DELETE_PROJECT_STATUSES_FAIL,
  DELETE_PROJECT_STATUSES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  projectStatuses: { ...initialState.projectStatuses, data: PROJECT_STATUSES }
};

describe('Project Statuses reducer', () => {
  // ********************* GET_PROJECT_STATUSES ******************************
  it('should handle GET_PROJECT_STATUSES_PENDING', () => {
    const result = projectStatusesReducer(initialState, GET_PROJECT_STATUSES_PENDING);
    expect(result.projectStatuses.loading).to.be.equal(true);
    expect(result.projectStatuses.error).to.be.equal(null);
    expect(result.projectStatuses.data).to.have.length(0);
  });

  it('should handle GET_PROJECT_STATUSES_SUCCESS', () => {
    const result = projectStatusesReducer(initialState, GET_PROJECT_STATUSES_SUCCESS);
    expect(result.projectStatuses.loading).to.be.equal(false);
    expect(result.projectStatuses.error).to.be.equal(null);
    expect(result.projectStatuses.data).to.deep.equal(GET_PROJECT_STATUSES_SUCCESS.payload);
  });

  it('should handle GET_PROJECT_STATUSES_FAIL', () => {
    const result = projectStatusesReducer(initialState, GET_PROJECT_STATUSES_FAIL);
    expect(result.projectStatuses.loading).to.be.equal(false);
    expect(result.projectStatuses.error).to.be.equal(GET_PROJECT_STATUSES_FAIL.payload);
    expect(result.projectStatuses.data).to.have.length(0);
  });

  it('should handle GET_PROJECT_STATUSES_FAIL without error message', () => {
    const result = projectStatusesReducer(initialState, GET_PROJECT_STATUSES_FAIL_WITHOUT_ERR);
    expect(result.projectStatuses.loading).to.be.equal(false);
    expect(result.projectStatuses.error).to.be.equal('Error, get project statuses failed');
    expect(result.projectStatuses.data).to.have.length(0);
  });
  // ********************* CREATE_PROJECT_STATUS ******************************
  it('should handle CREATE_PROJECT_STATUS_PENDING', () => {
    const result = projectStatusesReducer(initialState, CREATE_PROJECT_STATUS_PENDING);
    expect(result.createdProjectStatus.loading).to.be.equal(true);
    expect(result.createdProjectStatus.error).to.be.equal(null);
    expect(result.createdProjectStatus.data).to.deep.equal({});
  });

  it('should handle CREATE_PROJECT_STATUS_SUCCESS', () => {
    const result = projectStatusesReducer(initialState, CREATE_PROJECT_STATUS_SUCCESS);
    expect(result.createdProjectStatus.loading).to.be.equal(false);
    expect(result.createdProjectStatus.error).to.be.equal(null);
    expect(result.createdProjectStatus.data).to.be.equal(CREATE_PROJECT_STATUS_SUCCESS.payload);
    expect(result.projectStatuses.data).to.deep.equal([CREATE_PROJECT_STATUS_SUCCESS.payload]);
  });

  it('should handle CREATE_PROJECT_STATUS_FAIL', () => {
    const result = projectStatusesReducer(initialState, CREATE_PROJECT_STATUS_FAIL);
    expect(result.createdProjectStatus.loading).to.be.equal(false);
    expect(result.createdProjectStatus.error).to.be.equal(CREATE_PROJECT_STATUS_FAIL.payload);
    expect(result.createdProjectStatus.data).to.deep.equal({});
  });

  it('should handle CREATE_PROJECT_STATUS_FAIL without error message', () => {
    const result = projectStatusesReducer(initialState, CREATE_PROJECT_STATUS_FAIL_WITHOUT_ERR);
    expect(result.createdProjectStatus.loading).to.be.equal(false);
    expect(result.createdProjectStatus.error).to.be.equal('Error, create project status failed');
    expect(result.createdProjectStatus.data).to.deep.equal({});
  });
  // ********************* UPDATE_PROJECT_STATUS ******************************
  it('should handle UPDATE_PROJECT_STATUS_PENDING', () => {
    const result = projectStatusesReducer(initialState, UPDATE_PROJECT_STATUS_PENDING);
    expect(result.updatedProjectStatus.loading).to.be.equal(true);
    expect(result.updatedProjectStatus.error).to.be.equal(null);
    expect(result.updatedProjectStatus.data).to.deep.equal({});
  });

  it('should handle UPDATE_PROJECT_STATUS_SUCCESS', () => {
    const result = projectStatusesReducer(DIRTY_STATE, UPDATE_PROJECT_STATUS_SUCCESS);
    const [updatedProjectStatus] = result.projectStatuses.data;

    expect(result.updatedProjectStatus.loading).to.be.equal(false);
    expect(result.updatedProjectStatus.error).to.be.equal(null);
    expect(result.updatedProjectStatus.data).to.be.equal(UPDATE_PROJECT_STATUS_SUCCESS.payload);
    expect(updatedProjectStatus).to.deep.equal(UPDATE_PROJECT_STATUS_SUCCESS.payload);
  });

  it('should handle UPDATE_PROJECT_STATUS_FAIL', () => {
    const result = projectStatusesReducer(initialState, UPDATE_PROJECT_STATUS_FAIL);
    expect(result.updatedProjectStatus.loading).to.be.equal(false);
    expect(result.updatedProjectStatus.error).to.be.equal(UPDATE_PROJECT_STATUS_FAIL.payload);
    expect(result.updatedProjectStatus.data).to.deep.equal({});
  });

  it('should handle UPDATE_PROJECT_STATUS_FAIL without error message', () => {
    const result = projectStatusesReducer(initialState, UPDATE_PROJECT_STATUS_FAIL_WITHOUT_ERR);
    expect(result.updatedProjectStatus.loading).to.be.equal(false);
    expect(result.updatedProjectStatus.error).to.be.equal('Error, update project status failed');
    expect(result.updatedProjectStatus.data).to.deep.equal({});
  });
  // ********************* DELETE_PROJECT_STATUSES ******************************
  it('should handle DELETE_PROJECT_STATUSES_PENDING', () => {
    const result = projectStatusesReducer(initialState, DELETE_PROJECT_STATUSES_PENDING);
    expect(result.deletedProjectStatuses.loading).to.be.equal(true);
    expect(result.deletedProjectStatuses.error).to.be.equal(null);
    expect(result.deletedProjectStatuses.data).to.deep.equal([]);
  });

  it('should handle DELETE_PROJECT_STATUSES_SUCCESS', () => {
    const result = projectStatusesReducer(DIRTY_STATE, DELETE_PROJECT_STATUSES_SUCCESS);

    expect(result.deletedProjectStatuses.loading).to.be.equal(false);
    expect(result.deletedProjectStatuses.error).to.be.equal(null);
    expect(result.deletedProjectStatuses.data).to.be.equal(DELETE_PROJECT_STATUSES_SUCCESS.payload);
    expect(result.projectStatuses.data).to.deep.equal(PROJECT_STATUSES.slice(1));
  });

  it('should handle DELETE_PROJECT_STATUSES_FAIL', () => {
    const result = projectStatusesReducer(initialState, DELETE_PROJECT_STATUSES_FAIL);
    expect(result.deletedProjectStatuses.loading).to.be.equal(false);
    expect(result.deletedProjectStatuses.error).to.be.equal(DELETE_PROJECT_STATUSES_FAIL.payload);
    expect(result.deletedProjectStatuses.data).to.deep.equal([]);
  });

  it('should handle DELETE_PROJECT_STATUSES_FAIL without error message', () => {
    const result = projectStatusesReducer(initialState, DELETE_PROJECT_STATUSES_FAIL_WITHOUT_ERR);
    expect(result.deletedProjectStatuses.loading).to.be.equal(false);
    expect(result.deletedProjectStatuses.error).to.be.equal('Error, delete project status failed');
    expect(result.deletedProjectStatuses.data).to.deep.equal([]);
  });
});
