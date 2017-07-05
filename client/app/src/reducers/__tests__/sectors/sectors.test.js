import { expect } from 'chai';
import { sectorsReducer, initialState } from '../../sectors';
import {
  SECTORS,
  GET_SECTORS_PENDING,
  GET_SECTORS_SUCCESS,
  GET_SECTORS_FAIL,
  GET_SECTORS_FAIL_WITHOUT_ERR,
  CREATE_SECTOR_PENDING,
  CREATE_SECTOR_SUCCESS,
  CREATE_SECTOR_FAIL,
  CREATE_SECTOR_FAIL_WITHOUT_ERR,
  UPDATE_SECTOR_PENDING,
  UPDATE_SECTOR_SUCCESS,
  UPDATE_SECTOR_FAIL,
  UPDATE_SECTOR_FAIL_WITHOUT_ERR,
  DELETE_SECTORS_PENDING,
  DELETE_SECTORS_SUCCESS,
  DELETE_SECTORS_FAIL,
  DELETE_SECTORS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  sectors: { ...initialState.sectors, data: SECTORS }
};

describe('Sectors reducer', () => {
  // ********************* GET_SECTORS ******************************
  it('should handle GET_SECTORS_PENDING', () => {
    const result = sectorsReducer(initialState, GET_SECTORS_PENDING);
    expect(result.sectors.loading).to.be.equal(true);
    expect(result.sectors.error).to.be.equal(null);
    expect(result.sectors.data).to.have.length(0);
  });

  it('should handle GET_SECTORS_SUCCESS', () => {
    const result = sectorsReducer(initialState, GET_SECTORS_SUCCESS);
    expect(result.sectors.loading).to.be.equal(false);
    expect(result.sectors.error).to.be.equal(null);
    expect(result.sectors.data).to.deep.equal(GET_SECTORS_SUCCESS.payload);
  });

  it('should handle GET_SECTORS_FAIL', () => {
    const result = sectorsReducer(initialState, GET_SECTORS_FAIL);
    expect(result.sectors.loading).to.be.equal(false);
    expect(result.sectors.error).to.be.equal(GET_SECTORS_FAIL.payload);
    expect(result.sectors.data).to.have.length(0);
  });

  it('should handle GET_SECTORS_FAIL without error message', () => {
    const result = sectorsReducer(initialState, GET_SECTORS_FAIL_WITHOUT_ERR);
    expect(result.sectors.loading).to.be.equal(false);
    expect(result.sectors.error).to.be.equal('Error, get sectors failed');
    expect(result.sectors.data).to.have.length(0);
  });
  // ********************* CREATE_SECTOR ******************************
  it('should handle CREATE_SECTOR_PENDING', () => {
    const result = sectorsReducer(initialState, CREATE_SECTOR_PENDING);
    expect(result.createdSector.loading).to.be.equal(true);
    expect(result.createdSector.error).to.be.equal(null);
    expect(result.createdSector.data).to.deep.equal({});
  });

  it('should handle CREATE_SECTOR_SUCCESS', () => {
    const result = sectorsReducer(initialState, CREATE_SECTOR_SUCCESS);
    expect(result.createdSector.loading).to.be.equal(false);
    expect(result.createdSector.error).to.be.equal(null);
    expect(result.createdSector.data).to.be.equal(CREATE_SECTOR_SUCCESS.payload);
    expect(result.sectors.data).to.deep.equal([CREATE_SECTOR_SUCCESS.payload]);
  });

  it('should handle CREATE_SECTOR_FAIL', () => {
    const result = sectorsReducer(initialState, CREATE_SECTOR_FAIL);
    expect(result.createdSector.loading).to.be.equal(false);
    expect(result.createdSector.error).to.be.equal(CREATE_SECTOR_FAIL.payload);
    expect(result.createdSector.data).to.deep.equal({});
  });

  it('should handle CREATE_SECTOR_FAIL without error message', () => {
    const result = sectorsReducer(initialState, CREATE_SECTOR_FAIL_WITHOUT_ERR);
    expect(result.createdSector.loading).to.be.equal(false);
    expect(result.createdSector.error).to.be.equal('Error, create sector failed');
    expect(result.createdSector.data).to.deep.equal({});
  });
  // ********************* UPDATE_SECTOR ******************************
  it('should handle UPDATE_SECTOR_PENDING', () => {
    const result = sectorsReducer(initialState, UPDATE_SECTOR_PENDING);
    expect(result.updatedSector.loading).to.be.equal(true);
    expect(result.updatedSector.error).to.be.equal(null);
    expect(result.updatedSector.data).to.deep.equal({});
  });

  it('should handle UPDATE_SECTOR_SUCCESS', () => {
    const result = sectorsReducer(DIRTY_STATE, UPDATE_SECTOR_SUCCESS);
    const [updatedSector] = result.sectors.data;

    expect(result.updatedSector.loading).to.be.equal(false);
    expect(result.updatedSector.error).to.be.equal(null);
    expect(result.updatedSector.data).to.be.equal(UPDATE_SECTOR_SUCCESS.payload);
    expect(updatedSector).to.deep.equal(UPDATE_SECTOR_SUCCESS.payload);
  });

  it('should handle UPDATE_SECTOR_FAIL', () => {
    const result = sectorsReducer(initialState, UPDATE_SECTOR_FAIL);
    expect(result.updatedSector.loading).to.be.equal(false);
    expect(result.updatedSector.error).to.be.equal(UPDATE_SECTOR_FAIL.payload);
    expect(result.updatedSector.data).to.deep.equal({});
  });

  it('should handle UPDATE_SECTOR_FAIL without error message', () => {
    const result = sectorsReducer(initialState, UPDATE_SECTOR_FAIL_WITHOUT_ERR);
    expect(result.updatedSector.loading).to.be.equal(false);
    expect(result.updatedSector.error).to.be.equal('Error, update sector failed');
    expect(result.updatedSector.data).to.deep.equal({});
  });
  // ********************* DELETE_SECTORS ******************************
  it('should handle DELETE_SECTORS_PENDING', () => {
    const result = sectorsReducer(initialState, DELETE_SECTORS_PENDING);
    expect(result.deletedSectors.loading).to.be.equal(true);
    expect(result.deletedSectors.error).to.be.equal(null);
    expect(result.deletedSectors.data).to.deep.equal([]);
  });

  it('should handle DELETE_SECTORS_SUCCESS', () => {
    const result = sectorsReducer(DIRTY_STATE, DELETE_SECTORS_SUCCESS);

    expect(result.deletedSectors.loading).to.be.equal(false);
    expect(result.deletedSectors.error).to.be.equal(null);
    expect(result.deletedSectors.data).to.be.equal(DELETE_SECTORS_SUCCESS.payload);
    expect(result.sectors.data).to.deep.equal(SECTORS.slice(1));
  });

  it('should handle DELETE_SECTORS_FAIL', () => {
    const result = sectorsReducer(initialState, DELETE_SECTORS_FAIL);
    expect(result.deletedSectors.loading).to.be.equal(false);
    expect(result.deletedSectors.error).to.be.equal(DELETE_SECTORS_FAIL.payload);
    expect(result.deletedSectors.data).to.deep.equal([]);
  });

  it('should handle DELETE_SECTORS_FAIL without error message', () => {
    const result = sectorsReducer(initialState, DELETE_SECTORS_FAIL_WITHOUT_ERR);
    expect(result.deletedSectors.loading).to.be.equal(false);
    expect(result.deletedSectors.error).to.be.equal('Error, delete sector failed');
    expect(result.deletedSectors.data).to.deep.equal([]);
  });
});
