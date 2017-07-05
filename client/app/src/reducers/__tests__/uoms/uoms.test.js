import { expect } from 'chai';
import { uomsReducer, initialState } from '../../uoms';
import {
  UOMS,
  GET_UOMS_PENDING,
  GET_UOMS_SUCCESS,
  GET_UOMS_FAIL,
  GET_UOMS_FAIL_WITHOUT_ERR,
  CREATE_UOM_PENDING,
  CREATE_UOM_SUCCESS,
  CREATE_UOM_FAIL,
  CREATE_UOM_FAIL_WITHOUT_ERR,
  UPDATE_UOM_PENDING,
  UPDATE_UOM_SUCCESS,
  UPDATE_UOM_FAIL,
  UPDATE_UOM_FAIL_WITHOUT_ERR,
  DELETE_UOMS_PENDING,
  DELETE_UOMS_SUCCESS,
  DELETE_UOMS_FAIL,
  DELETE_UOMS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  uoms: { ...initialState.uoms, data: UOMS }
};

describe('UOMs reducer', () => {
  // ********************* GET_UOMS ******************************
  it('should handle GET_UOMS_PENDING', () => {
    const result = uomsReducer(initialState, GET_UOMS_PENDING);
    expect(result.uoms.loading).to.be.equal(true);
    expect(result.uoms.error).to.be.equal(null);
    expect(result.uoms.data).to.have.length(0);
  });

  it('should handle GET_UOMS_SUCCESS', () => {
    const result = uomsReducer(initialState, GET_UOMS_SUCCESS);
    expect(result.uoms.loading).to.be.equal(false);
    expect(result.uoms.error).to.be.equal(null);
    expect(result.uoms.data).to.deep.equal(GET_UOMS_SUCCESS.payload);
  });

  it('should handle GET_UOMS_FAIL', () => {
    const result = uomsReducer(initialState, GET_UOMS_FAIL);
    expect(result.uoms.loading).to.be.equal(false);
    expect(result.uoms.error).to.be.equal(GET_UOMS_FAIL.payload);
    expect(result.uoms.data).to.have.length(0);
  });

  it('should handle GET_UOMS_FAIL without error message', () => {
    const result = uomsReducer(initialState, GET_UOMS_FAIL_WITHOUT_ERR);
    expect(result.uoms.loading).to.be.equal(false);
    expect(result.uoms.error).to.be.equal('Error, get uoms failed');
    expect(result.uoms.data).to.have.length(0);
  });
  // ********************* CREATE_UOM ******************************
  it('should handle CREATE_UOM_PENDING', () => {
    const result = uomsReducer(initialState, CREATE_UOM_PENDING);
    expect(result.createdUOM.loading).to.be.equal(true);
    expect(result.createdUOM.error).to.be.equal(null);
    expect(result.createdUOM.data).to.deep.equal({});
  });

  it('should handle CREATE_UOM_SUCCESS', () => {
    const result = uomsReducer(initialState, CREATE_UOM_SUCCESS);
    expect(result.createdUOM.loading).to.be.equal(false);
    expect(result.createdUOM.error).to.be.equal(null);
    expect(result.createdUOM.data).to.be.equal(CREATE_UOM_SUCCESS.payload);
    expect(result.uoms.data).to.deep.equal([CREATE_UOM_SUCCESS.payload]);
  });

  it('should handle CREATE_UOM_FAIL', () => {
    const result = uomsReducer(initialState, CREATE_UOM_FAIL);
    expect(result.createdUOM.loading).to.be.equal(false);
    expect(result.createdUOM.error).to.be.equal(CREATE_UOM_FAIL.payload);
    expect(result.createdUOM.data).to.deep.equal({});
  });

  it('should handle CREATE_UOM_FAIL without error message', () => {
    const result = uomsReducer(initialState, CREATE_UOM_FAIL_WITHOUT_ERR);
    expect(result.createdUOM.loading).to.be.equal(false);
    expect(result.createdUOM.error).to.be.equal('Error, create uom failed');
    expect(result.createdUOM.data).to.deep.equal({});
  });
  // ********************* UPDATE_UOM ******************************
  it('should handle UPDATE_UOM_PENDING', () => {
    const result = uomsReducer(initialState, UPDATE_UOM_PENDING);
    expect(result.updatedUOM.loading).to.be.equal(true);
    expect(result.updatedUOM.error).to.be.equal(null);
    expect(result.updatedUOM.data).to.deep.equal({});
  });

  it('should handle UPDATE_UOM_SUCCESS', () => {
    const result = uomsReducer(DIRTY_STATE, UPDATE_UOM_SUCCESS);
    const [updatedUOM] = result.uoms.data;

    expect(result.updatedUOM.loading).to.be.equal(false);
    expect(result.updatedUOM.error).to.be.equal(null);
    expect(result.updatedUOM.data).to.be.equal(UPDATE_UOM_SUCCESS.payload);
    expect(updatedUOM).to.deep.equal(UPDATE_UOM_SUCCESS.payload);
  });

  it('should handle UPDATE_UOM_FAIL', () => {
    const result = uomsReducer(initialState, UPDATE_UOM_FAIL);
    expect(result.updatedUOM.loading).to.be.equal(false);
    expect(result.updatedUOM.error).to.be.equal(UPDATE_UOM_FAIL.payload);
    expect(result.updatedUOM.data).to.deep.equal({});
  });

  it('should handle UPDATE_UOM_FAIL without error message', () => {
    const result = uomsReducer(initialState, UPDATE_UOM_FAIL_WITHOUT_ERR);
    expect(result.updatedUOM.loading).to.be.equal(false);
    expect(result.updatedUOM.error).to.be.equal('Error, update uom failed');
    expect(result.updatedUOM.data).to.deep.equal({});
  });
  // ********************* DELETE_UOMS ******************************
  it('should handle DELETE_UOMS_PENDING', () => {
    const result = uomsReducer(initialState, DELETE_UOMS_PENDING);
    expect(result.deletedUOMs.loading).to.be.equal(true);
    expect(result.deletedUOMs.error).to.be.equal(null);
    expect(result.deletedUOMs.data).to.deep.equal([]);
  });

  it('should handle DELETE_UOMS_SUCCESS', () => {
    const result = uomsReducer(DIRTY_STATE, DELETE_UOMS_SUCCESS);

    expect(result.deletedUOMs.loading).to.be.equal(false);
    expect(result.deletedUOMs.error).to.be.equal(null);
    expect(result.deletedUOMs.data).to.be.equal(DELETE_UOMS_SUCCESS.payload);
    expect(result.uoms.data).to.deep.equal(UOMS.slice(1));
  });

  it('should handle DELETE_UOMS_FAIL', () => {
    const result = uomsReducer(initialState, DELETE_UOMS_FAIL);
    expect(result.deletedUOMs.loading).to.be.equal(false);
    expect(result.deletedUOMs.error).to.be.equal(DELETE_UOMS_FAIL.payload);
    expect(result.deletedUOMs.data).to.deep.equal([]);
  });

  it('should handle DELETE_UOMS_FAIL without error message', () => {
    const result = uomsReducer(initialState, DELETE_UOMS_FAIL_WITHOUT_ERR);
    expect(result.deletedUOMs.loading).to.be.equal(false);
    expect(result.deletedUOMs.error).to.be.equal('Error, delete uom failed');
    expect(result.deletedUOMs.data).to.deep.equal([]);
  });
});
