import { expect } from 'chai';
import { offeringModelsReducer, initialState } from '../../offeringModels';
import {
  OFFERING_MODELS,
  GET_OFFERING_MODELS_PENDING,
  GET_OFFERING_MODELS_SUCCESS,
  GET_OFFERING_MODELS_FAIL,
  GET_OFFERING_MODELS_FAIL_WITHOUT_ERR,
  CREATE_OFFERING_MODEL_PENDING,
  CREATE_OFFERING_MODEL_SUCCESS,
  CREATE_OFFERING_MODEL_FAIL,
  CREATE_OFFERING_MODEL_FAIL_WITHOUT_ERR,
  UPDATE_OFFERING_MODEL_PENDING,
  UPDATE_OFFERING_MODEL_SUCCESS,
  UPDATE_OFFERING_MODEL_FAIL,
  UPDATE_OFFERING_MODEL_FAIL_WITHOUT_ERR,
  DELETE_OFFERING_MODELS_PENDING,
  DELETE_OFFERING_MODELS_SUCCESS,
  DELETE_OFFERING_MODELS_FAIL,
  DELETE_OFFERING_MODELS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  offeringModels: { ...initialState.offeringModels, data: OFFERING_MODELS }
};

describe('OfferingModels reducer', () => {
  // ********************* GET_OFFERING_MODELS ******************************
  it('should handle GET_OFFERING_MODELS_PENDING', () => {
    const result = offeringModelsReducer(initialState, GET_OFFERING_MODELS_PENDING);
    expect(result.offeringModels.loading).to.be.equal(true);
    expect(result.offeringModels.error).to.be.equal(null);
    expect(result.offeringModels.data).to.have.length(0);
  });

  it('should handle GET_OFFERING_MODELS_SUCCESS', () => {
    const result = offeringModelsReducer(initialState, GET_OFFERING_MODELS_SUCCESS);
    expect(result.offeringModels.loading).to.be.equal(false);
    expect(result.offeringModels.error).to.be.equal(null);
    expect(result.offeringModels.data).to.deep.equal(GET_OFFERING_MODELS_SUCCESS.payload);
  });

  it('should handle GET_OFFERING_MODELS_FAIL', () => {
    const result = offeringModelsReducer(initialState, GET_OFFERING_MODELS_FAIL);
    expect(result.offeringModels.loading).to.be.equal(false);
    expect(result.offeringModels.error).to.be.equal(GET_OFFERING_MODELS_FAIL.payload);
    expect(result.offeringModels.data).to.have.length(0);
  });

  it('should handle GET_OFFERING_MODELS_FAIL without error message', () => {
    const result = offeringModelsReducer(initialState, GET_OFFERING_MODELS_FAIL_WITHOUT_ERR);
    expect(result.offeringModels.loading).to.be.equal(false);
    expect(result.offeringModels.error).to.be.equal('Error, get offeringModels failed');
    expect(result.offeringModels.data).to.have.length(0);
  });
  // ********************* CREATE_OFFERING_MODEL ******************************
  it('should handle CREATE_OFFERING_MODEL_PENDING', () => {
    const result = offeringModelsReducer(initialState, CREATE_OFFERING_MODEL_PENDING);
    expect(result.createdOfferingModel.loading).to.be.equal(true);
    expect(result.createdOfferingModel.error).to.be.equal(null);
    expect(result.createdOfferingModel.data).to.deep.equal({});
  });

  it('should handle CREATE_OFFERING_MODEL_SUCCESS', () => {
    const result = offeringModelsReducer(initialState, CREATE_OFFERING_MODEL_SUCCESS);
    expect(result.createdOfferingModel.loading).to.be.equal(false);
    expect(result.createdOfferingModel.error).to.be.equal(null);
    expect(result.createdOfferingModel.data).to.be.equal(CREATE_OFFERING_MODEL_SUCCESS.payload);
    expect(result.offeringModels.data).to.deep.equal([CREATE_OFFERING_MODEL_SUCCESS.payload]);
  });

  it('should handle CREATE_OFFERING_MODEL_FAIL', () => {
    const result = offeringModelsReducer(initialState, CREATE_OFFERING_MODEL_FAIL);
    expect(result.createdOfferingModel.loading).to.be.equal(false);
    expect(result.createdOfferingModel.error).to.be.equal(CREATE_OFFERING_MODEL_FAIL.payload);
    expect(result.createdOfferingModel.data).to.deep.equal({});
  });

  it('should handle CREATE_OFFERING_MODEL_FAIL without error message', () => {
    const result = offeringModelsReducer(initialState, CREATE_OFFERING_MODEL_FAIL_WITHOUT_ERR);
    expect(result.createdOfferingModel.loading).to.be.equal(false);
    expect(result.createdOfferingModel.error).to.be.equal('Error, create offeringModel failed');
    expect(result.createdOfferingModel.data).to.deep.equal({});
  });
  // ********************* UPDATE_OFFERING_MODEL ******************************
  it('should handle UPDATE_OFFERING_MODEL_PENDING', () => {
    const result = offeringModelsReducer(initialState, UPDATE_OFFERING_MODEL_PENDING);
    expect(result.updatedOfferingModel.loading).to.be.equal(true);
    expect(result.updatedOfferingModel.error).to.be.equal(null);
    expect(result.updatedOfferingModel.data).to.deep.equal({});
  });

  it('should handle UPDATE_OFFERING_MODEL_SUCCESS', () => {
    const result = offeringModelsReducer(DIRTY_STATE, UPDATE_OFFERING_MODEL_SUCCESS);
    const [updatedOfferingModel] = result.offeringModels.data;

    expect(result.updatedOfferingModel.loading).to.be.equal(false);
    expect(result.updatedOfferingModel.error).to.be.equal(null);
    expect(result.updatedOfferingModel.data).to.be.equal(UPDATE_OFFERING_MODEL_SUCCESS.payload);
    expect(updatedOfferingModel).to.deep.equal(UPDATE_OFFERING_MODEL_SUCCESS.payload);
  });

  it('should handle UPDATE_OFFERING_MODEL_FAIL', () => {
    const result = offeringModelsReducer(initialState, UPDATE_OFFERING_MODEL_FAIL);
    expect(result.updatedOfferingModel.loading).to.be.equal(false);
    expect(result.updatedOfferingModel.error).to.be.equal(UPDATE_OFFERING_MODEL_FAIL.payload);
    expect(result.updatedOfferingModel.data).to.deep.equal({});
  });

  it('should handle UPDATE_OFFERING_MODEL_FAIL without error message', () => {
    const result = offeringModelsReducer(initialState, UPDATE_OFFERING_MODEL_FAIL_WITHOUT_ERR);
    expect(result.updatedOfferingModel.loading).to.be.equal(false);
    expect(result.updatedOfferingModel.error).to.be.equal('Error, update offeringModel failed');
    expect(result.updatedOfferingModel.data).to.deep.equal({});
  });
  // ********************* DELETE_OFFERING_MODELS ******************************
  it('should handle DELETE_OFFERING_MODELS_PENDING', () => {
    const result = offeringModelsReducer(initialState, DELETE_OFFERING_MODELS_PENDING);
    expect(result.deletedOfferingModels.loading).to.be.equal(true);
    expect(result.deletedOfferingModels.error).to.be.equal(null);
    expect(result.deletedOfferingModels.data).to.deep.equal([]);
  });

  it('should handle DELETE_OFFERING_MODELS_SUCCESS', () => {
    const result = offeringModelsReducer(DIRTY_STATE, DELETE_OFFERING_MODELS_SUCCESS);

    expect(result.deletedOfferingModels.loading).to.be.equal(false);
    expect(result.deletedOfferingModels.error).to.be.equal(null);
    expect(result.deletedOfferingModels.data).to.be.equal(DELETE_OFFERING_MODELS_SUCCESS.payload);
    expect(result.offeringModels.data).to.deep.equal(OFFERING_MODELS.slice(1));
  });

  it('should handle DELETE_OFFERING_MODELS_FAIL', () => {
    const result = offeringModelsReducer(initialState, DELETE_OFFERING_MODELS_FAIL);
    expect(result.deletedOfferingModels.loading).to.be.equal(false);
    expect(result.deletedOfferingModels.error).to.be.equal(DELETE_OFFERING_MODELS_FAIL.payload);
    expect(result.deletedOfferingModels.data).to.deep.equal([]);
  });

  it('should handle DELETE_OFFERING_MODELS_FAIL without error message', () => {
    const result = offeringModelsReducer(initialState, DELETE_OFFERING_MODELS_FAIL_WITHOUT_ERR);
    expect(result.deletedOfferingModels.loading).to.be.equal(false);
    expect(result.deletedOfferingModels.error).to.be.equal('Error, delete offeringModels failed');
    expect(result.deletedOfferingModels.data).to.deep.equal([]);
  });
});
