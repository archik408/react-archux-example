import { expect } from 'chai';
import { kpiDefinitionsReducer } from '../../kpiDefinitions';
import {
  INIT_STATE,
  NEXT_STATE,
  UPDATED_STATE,
  MULTIPLE_DATA_STATE,
  GET_KPI_DEFINITIONS_PENDING,
  GET_KPI_DEFINITIONS_SUCCESS,
  GET_KPI_DEFINITIONS_FAIL,
  CREATE_KPI_DEFINITIONS_PENDING,
  CREATE_KPI_DEFINITIONS_SUCCESS,
  CREATE_KPI_DEFINITIONS_FAIL,
  UPDATE_KPI_DEFINITIONS_PENDING,
  UPDATE_KPI_DEFINITIONS_SUCCESS,
  UPDATE_KPI_DEFINITIONS_FAIL,
  DELETE_KPI_DEFINITIONS_PENDING,
  DELETE_KPI_DEFINITIONS_SUCCESS,
  DELETE_KPI_DEFINITIONS_FAIL,
  DELETE_KPI_DEFINITIONS_MULTIPLY_PENDING,
  DELETE_KPI_DEFINITIONS_MULTIPLY_SUCCESS,
  DELETE_KPI_DEFINITIONS_MULTIPLY_FAIL
} from './data.test';

describe('Kpi definitions reducer', () => {
  // ********************* GET_KPI_DEFINITIONS ******************************
  it('should handle GET_KPI_DEFINITIONS_PENDING', () => {
    const result = kpiDefinitionsReducer(INIT_STATE, GET_KPI_DEFINITIONS_PENDING);
    expect(result.loading).to.be.equal(true);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(0);
  });

  it('should handle GET_KPI_DEFINITIONS_SUCCESS', () => {
    const result = kpiDefinitionsReducer(INIT_STATE, GET_KPI_DEFINITIONS_SUCCESS);
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(GET_KPI_DEFINITIONS_SUCCESS.payload);
  });

  it('should handle GET_KPI_DEFINITIONS_FAIL', () => {
    const result = kpiDefinitionsReducer(INIT_STATE, GET_KPI_DEFINITIONS_FAIL);
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal('Error');
    expect(result.data).to.have.length(0);
  });

  // ********************* CREATE_KPI_DEFINITIONS ******************************
  it('should handle CREATE_KPI_DEFINITIONS_PENDING', () => {
    const result = kpiDefinitionsReducer(
      INIT_STATE,
      CREATE_KPI_DEFINITIONS_PENDING
    );
    expect(result.loading).to.be.equal(true);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(0);
  });

  it('should handle CREATE_KPI_DEFINITIONS_SUCCESS', () => {
    const result = kpiDefinitionsReducer(
      INIT_STATE,
      CREATE_KPI_DEFINITIONS_SUCCESS
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(GET_KPI_DEFINITIONS_SUCCESS.payload);
  });

  it('should handle CREATE_KPI_DEFINITIONS_FAIL', () => {
    const result = kpiDefinitionsReducer(
      INIT_STATE,
      CREATE_KPI_DEFINITIONS_FAIL
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal('Error');
    expect(result.data).to.have.length(0);
  });

  // ********************* UPDATE_KPI_DEFINITIONS ******************************
  it('should handle UPDATE_KPI_DEFINITIONS_PENDING', () => {
    const result = kpiDefinitionsReducer(
      NEXT_STATE,
      UPDATE_KPI_DEFINITIONS_PENDING
    );
    expect(result.loading).to.be.equal(true);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(NEXT_STATE.data);
  });

  it('should handle UPDATE_KPI_DEFINITIONS_SUCCESS', () => {
    const result = kpiDefinitionsReducer(
      NEXT_STATE,
      UPDATE_KPI_DEFINITIONS_SUCCESS
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(UPDATED_STATE.data);
  });

  it('should handle UPDATE_KPI_DEFINITIONS_FAIL', () => {
    const result = kpiDefinitionsReducer(
      NEXT_STATE,
      UPDATE_KPI_DEFINITIONS_FAIL
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal('Error');
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(NEXT_STATE.data);
  });

  // ********************* DELETE_KPI_DEFINITIONS ******************************
  it('should handle DELETE_KPI_DEFINITIONS_PENDING', () => {
    const result = kpiDefinitionsReducer(
      NEXT_STATE,
      DELETE_KPI_DEFINITIONS_PENDING
    );
    expect(result.loading).to.be.equal(true);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(NEXT_STATE.data);
  });

  it('should handle DELETE_KPI_DEFINITIONS_SUCCESS', () => {
    const result = kpiDefinitionsReducer(
      NEXT_STATE,
      DELETE_KPI_DEFINITIONS_SUCCESS
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(0);
  });

  it('should handle DELETE_KPI_DEFINITIONS_FAIL', () => {
    const result = kpiDefinitionsReducer(
      NEXT_STATE,
      DELETE_KPI_DEFINITIONS_FAIL
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal('Error');
    expect(result.data).to.have.length(1);
    expect(result.data).to.deep.equal(NEXT_STATE.data);
  });

  // ********************* DELETE_MULTIPLE_KPI_DEFINITIONS ******************************
  it('should handle DELETE_KPI_DEFINITIONS_MULTIPLE_PENDING', () => {
    const result = kpiDefinitionsReducer(
      MULTIPLE_DATA_STATE,
      DELETE_KPI_DEFINITIONS_MULTIPLY_PENDING
    );
    expect(result.loading).to.be.equal(true);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(2);
    expect(result.data).to.deep.equal(MULTIPLE_DATA_STATE.data);
  });

  it('should handle DELETE_KPI_DEFINITIONS_MULTIPLE_SUCCESS', () => {
    const result = kpiDefinitionsReducer(
      MULTIPLE_DATA_STATE,
      DELETE_KPI_DEFINITIONS_MULTIPLY_SUCCESS
    );
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal(null);
    expect(result.data).to.have.length(0);
  });

  it('should handle DELETE_KPI_DEFINITIONS_MULTIPLE_FAIL', () => {
    const result = kpiDefinitionsReducer(
      MULTIPLE_DATA_STATE,
      DELETE_KPI_DEFINITIONS_MULTIPLY_FAIL);
    expect(result.loading).to.be.equal(false);
    expect(result.error).to.be.equal('Error');
    expect(result.data).to.have.length(2);
    expect(result.data).to.deep.equal(MULTIPLE_DATA_STATE.data);
  });
});
