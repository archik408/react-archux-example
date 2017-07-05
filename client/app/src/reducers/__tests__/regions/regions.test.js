import { expect } from 'chai';
import { regionsReducer, initialState } from '../../regions';
import {
  REGIONS,
  GET_REGIONS_PENDING,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
  GET_REGIONS_FAIL_WITHOUT_ERR,
  CREATE_REGION_PENDING,
  CREATE_REGION_SUCCESS,
  CREATE_REGION_FAIL,
  CREATE_REGION_FAIL_WITHOUT_ERR,
  UPDATE_REGION_PENDING,
  UPDATE_REGION_SUCCESS,
  UPDATE_REGION_FAIL,
  UPDATE_REGION_FAIL_WITHOUT_ERR,
  DELETE_REGIONS_PENDING,
  DELETE_REGIONS_SUCCESS,
  DELETE_REGIONS_FAIL,
  DELETE_REGIONS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  regions: { ...initialState.regions, data: REGIONS }
};

describe('Regions reducer', () => {
  // ********************* GET_REGIONS ******************************
  it('should handle GET_REGIONS_PENDING', () => {
    const result = regionsReducer(initialState, GET_REGIONS_PENDING);
    expect(result.regions.loading).to.be.equal(true);
    expect(result.regions.error).to.be.equal(null);
    expect(result.regions.data).to.have.length(0);
  });

  it('should handle GET_REGIONS_SUCCESS', () => {
    const result = regionsReducer(initialState, GET_REGIONS_SUCCESS);
    expect(result.regions.loading).to.be.equal(false);
    expect(result.regions.error).to.be.equal(null);
    expect(result.regions.data).to.deep.equal(GET_REGIONS_SUCCESS.payload);
  });

  it('should handle GET_REGIONS_FAIL', () => {
    const result = regionsReducer(initialState, GET_REGIONS_FAIL);
    expect(result.regions.loading).to.be.equal(false);
    expect(result.regions.error).to.be.equal(GET_REGIONS_FAIL.payload);
    expect(result.regions.data).to.have.length(0);
  });

  it('should handle GET_REGIONS_FAIL without error message', () => {
    const result = regionsReducer(initialState, GET_REGIONS_FAIL_WITHOUT_ERR);
    expect(result.regions.loading).to.be.equal(false);
    expect(result.regions.error).to.be.equal('Error, get regions failed');
    expect(result.regions.data).to.have.length(0);
  });
  // ********************* CREATE_REGION ******************************
  it('should handle CREATE_REGION_PENDING', () => {
    const result = regionsReducer(initialState, CREATE_REGION_PENDING);
    expect(result.createdRegion.loading).to.be.equal(true);
    expect(result.createdRegion.error).to.be.equal(null);
    expect(result.createdRegion.data).to.deep.equal({});
  });

  it('should handle CREATE_REGION_SUCCESS', () => {
    const result = regionsReducer(initialState, CREATE_REGION_SUCCESS);
    expect(result.createdRegion.loading).to.be.equal(false);
    expect(result.createdRegion.error).to.be.equal(null);
    expect(result.createdRegion.data).to.be.equal(CREATE_REGION_SUCCESS.payload);
    expect(result.regions.data).to.deep.equal([CREATE_REGION_SUCCESS.payload]);
  });

  it('should handle CREATE_REGION_FAIL', () => {
    const result = regionsReducer(initialState, CREATE_REGION_FAIL);
    expect(result.createdRegion.loading).to.be.equal(false);
    expect(result.createdRegion.error).to.be.equal(CREATE_REGION_FAIL.payload);
    expect(result.createdRegion.data).to.deep.equal({});
  });

  it('should handle CREATE_REGION_FAIL without error message', () => {
    const result = regionsReducer(initialState, CREATE_REGION_FAIL_WITHOUT_ERR);
    expect(result.createdRegion.loading).to.be.equal(false);
    expect(result.createdRegion.error).to.be.equal('Error, create region failed');
    expect(result.createdRegion.data).to.deep.equal({});
  });
  // ********************* UPDATE_REGION ******************************
  it('should handle UPDATE_REGION_PENDING', () => {
    const result = regionsReducer(initialState, UPDATE_REGION_PENDING);
    expect(result.updatedRegion.loading).to.be.equal(true);
    expect(result.updatedRegion.error).to.be.equal(null);
    expect(result.updatedRegion.data).to.deep.equal({});
  });

  it('should handle UPDATE_REGION_SUCCESS', () => {
    const result = regionsReducer(DIRTY_STATE, UPDATE_REGION_SUCCESS);
    const [updatedRegion] = result.regions.data;

    expect(result.updatedRegion.loading).to.be.equal(false);
    expect(result.updatedRegion.error).to.be.equal(null);
    expect(result.updatedRegion.data).to.be.equal(UPDATE_REGION_SUCCESS.payload);
    expect(updatedRegion).to.deep.equal(UPDATE_REGION_SUCCESS.payload);
  });

  it('should handle UPDATE_REGION_FAIL', () => {
    const result = regionsReducer(initialState, UPDATE_REGION_FAIL);
    expect(result.updatedRegion.loading).to.be.equal(false);
    expect(result.updatedRegion.error).to.be.equal(UPDATE_REGION_FAIL.payload);
    expect(result.updatedRegion.data).to.deep.equal({});
  });

  it('should handle UPDATE_REGION_FAIL without error message', () => {
    const result = regionsReducer(initialState, UPDATE_REGION_FAIL_WITHOUT_ERR);
    expect(result.updatedRegion.loading).to.be.equal(false);
    expect(result.updatedRegion.error).to.be.equal('Error, update region failed');
    expect(result.updatedRegion.data).to.deep.equal({});
  });
  // ********************* DELETE_REGIONS ******************************
  it('should handle DELETE_REGIONS_PENDING', () => {
    const result = regionsReducer(initialState, DELETE_REGIONS_PENDING);
    expect(result.deletedRegions.loading).to.be.equal(true);
    expect(result.deletedRegions.error).to.be.equal(null);
    expect(result.deletedRegions.data).to.deep.equal([]);
  });

  it('should handle DELETE_REGIONS_SUCCESS', () => {
    const result = regionsReducer(DIRTY_STATE, DELETE_REGIONS_SUCCESS);

    expect(result.deletedRegions.loading).to.be.equal(false);
    expect(result.deletedRegions.error).to.be.equal(null);
    expect(result.deletedRegions.data).to.be.equal(DELETE_REGIONS_SUCCESS.payload);
    expect(result.regions.data).to.deep.equal(REGIONS.slice(1));
  });

  it('should handle DELETE_REGIONS_FAIL', () => {
    const result = regionsReducer(initialState, DELETE_REGIONS_FAIL);
    expect(result.deletedRegions.loading).to.be.equal(false);
    expect(result.deletedRegions.error).to.be.equal(DELETE_REGIONS_FAIL.payload);
    expect(result.deletedRegions.data).to.deep.equal([]);
  });

  it('should handle DELETE_REGIONS_FAIL without error message', () => {
    const result = regionsReducer(initialState, DELETE_REGIONS_FAIL_WITHOUT_ERR);
    expect(result.deletedRegions.loading).to.be.equal(false);
    expect(result.deletedRegions.error).to.be.equal('Error, delete regions failed');
    expect(result.deletedRegions.data).to.deep.equal([]);
  });
});
