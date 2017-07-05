import { expect } from 'chai';
import { subSectorsReducer, initialState } from '../../subSectors';
import {
  SUB_SECTORS,
  GET_SUB_SECTORS_PENDING,
  GET_SUB_SECTORS_SUCCESS,
  GET_SUB_SECTORS_FAIL,
  GET_SUB_SECTORS_FAIL_WITHOUT_ERR,
  CREATE_SUB_SECTOR_PENDING,
  CREATE_SUB_SECTOR_SUCCESS,
  CREATE_SUB_SECTOR_FAIL,
  CREATE_SUB_SECTOR_FAIL_WITHOUT_ERR,
  UPDATE_SUB_SECTOR_PENDING,
  UPDATE_SUB_SECTOR_SUCCESS,
  UPDATE_SUB_SECTOR_FAIL,
  UPDATE_SUB_SECTOR_FAIL_WITHOUT_ERR,
  DELETE_SUB_SECTORS_PENDING,
  DELETE_SUB_SECTORS_SUCCESS,
  DELETE_SUB_SECTORS_FAIL,
  DELETE_SUB_SECTORS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  subSectors: { ...initialState.subSectors, data: SUB_SECTORS }
};

describe('Sub Sectors reducer', () => {
  // ********************* GET_SUB_SECTORS ******************************
  it('should handle GET_SUB_SECTORS_PENDING', () => {
    const result = subSectorsReducer(initialState, GET_SUB_SECTORS_PENDING);
    expect(result.subSectors.loading).to.be.equal(true);
    expect(result.subSectors.error).to.be.equal(null);
    expect(result.subSectors.data).to.have.length(0);
  });

  it('should handle GET_SUB_SECTORS_SUCCESS', () => {
    const result = subSectorsReducer(initialState, GET_SUB_SECTORS_SUCCESS);
    expect(result.subSectors.loading).to.be.equal(false);
    expect(result.subSectors.error).to.be.equal(null);
    expect(result.subSectors.data).to.deep.equal(GET_SUB_SECTORS_SUCCESS.payload);
  });

  it('should handle GET_SUB_SECTORS_FAIL', () => {
    const result = subSectorsReducer(initialState, GET_SUB_SECTORS_FAIL);
    expect(result.subSectors.loading).to.be.equal(false);
    expect(result.subSectors.error).to.be.equal(GET_SUB_SECTORS_FAIL.payload);
    expect(result.subSectors.data).to.have.length(0);
  });

  it('should handle GET_SUB_SECTORS_FAIL without error message', () => {
    const result = subSectorsReducer(initialState, GET_SUB_SECTORS_FAIL_WITHOUT_ERR);
    expect(result.subSectors.loading).to.be.equal(false);
    expect(result.subSectors.error).to.be.equal('Error, get sub sectors failed');
    expect(result.subSectors.data).to.have.length(0);
  });
  // ********************* CREATE_SUB_SECTOR ******************************
  it('should handle CREATE_SUB_SECTOR_PENDING', () => {
    const result = subSectorsReducer(initialState, CREATE_SUB_SECTOR_PENDING);
    expect(result.createdSubSector.loading).to.be.equal(true);
    expect(result.createdSubSector.error).to.be.equal(null);
    expect(result.createdSubSector.data).to.deep.equal({});
  });

  it('should handle CREATE_SUB_SECTOR_SUCCESS', () => {
    const result = subSectorsReducer(initialState, CREATE_SUB_SECTOR_SUCCESS);
    expect(result.createdSubSector.loading).to.be.equal(false);
    expect(result.createdSubSector.error).to.be.equal(null);
    expect(result.createdSubSector.data).to.be.equal(CREATE_SUB_SECTOR_SUCCESS.payload);
    expect(result.subSectors.data).to.deep.equal([CREATE_SUB_SECTOR_SUCCESS.payload]);
  });

  it('should handle CREATE_SUB_SECTOR_FAIL', () => {
    const result = subSectorsReducer(initialState, CREATE_SUB_SECTOR_FAIL);
    expect(result.createdSubSector.loading).to.be.equal(false);
    expect(result.createdSubSector.error).to.be.equal(CREATE_SUB_SECTOR_FAIL.payload);
    expect(result.createdSubSector.data).to.deep.equal({});
  });

  it('should handle CREATE_SUB_SECTOR_FAIL without error message', () => {
    const result = subSectorsReducer(initialState, CREATE_SUB_SECTOR_FAIL_WITHOUT_ERR);
    expect(result.createdSubSector.loading).to.be.equal(false);
    expect(result.createdSubSector.error).to.be.equal('Error, create sub sector failed');
    expect(result.createdSubSector.data).to.deep.equal({});
  });
  // ********************* UPDATE_SUB_SECTOR ******************************
  it('should handle UPDATE_SUB_SECTOR_PENDING', () => {
    const result = subSectorsReducer(initialState, UPDATE_SUB_SECTOR_PENDING);
    expect(result.updatedSubSector.loading).to.be.equal(true);
    expect(result.updatedSubSector.error).to.be.equal(null);
    expect(result.updatedSubSector.data).to.deep.equal({});
  });

  it('should handle UPDATE_SUB_SECTOR_SUCCESS', () => {
    const result = subSectorsReducer(DIRTY_STATE, UPDATE_SUB_SECTOR_SUCCESS);
    const [updatedSubSector] = result.subSectors.data;

    expect(result.updatedSubSector.loading).to.be.equal(false);
    expect(result.updatedSubSector.error).to.be.equal(null);
    expect(result.updatedSubSector.data).to.be.equal(UPDATE_SUB_SECTOR_SUCCESS.payload);
    expect(updatedSubSector).to.deep.equal(UPDATE_SUB_SECTOR_SUCCESS.payload);
  });

  it('should handle UPDATE_SUB_SECTOR_FAIL', () => {
    const result = subSectorsReducer(initialState, UPDATE_SUB_SECTOR_FAIL);
    expect(result.updatedSubSector.loading).to.be.equal(false);
    expect(result.updatedSubSector.error).to.be.equal(UPDATE_SUB_SECTOR_FAIL.payload);
    expect(result.updatedSubSector.data).to.deep.equal({});
  });

  it('should handle UPDATE_SUB_SECTOR_FAIL without error message', () => {
    const result = subSectorsReducer(initialState, UPDATE_SUB_SECTOR_FAIL_WITHOUT_ERR);
    expect(result.updatedSubSector.loading).to.be.equal(false);
    expect(result.updatedSubSector.error).to.be.equal('Error, update sub sector failed');
    expect(result.updatedSubSector.data).to.deep.equal({});
  });
  // ********************* DELETE_SUB_SECTORS ******************************
  it('should handle DELETE_SUB_SECTORS_PENDING', () => {
    const result = subSectorsReducer(initialState, DELETE_SUB_SECTORS_PENDING);
    expect(result.deletedSubSectors.loading).to.be.equal(true);
    expect(result.deletedSubSectors.error).to.be.equal(null);
    expect(result.deletedSubSectors.data).to.deep.equal([]);
  });

  it('should handle DELETE_SUB_SECTORS_SUCCESS', () => {
    const result = subSectorsReducer(DIRTY_STATE, DELETE_SUB_SECTORS_SUCCESS);

    expect(result.deletedSubSectors.loading).to.be.equal(false);
    expect(result.deletedSubSectors.error).to.be.equal(null);
    expect(result.deletedSubSectors.data).to.be.equal(DELETE_SUB_SECTORS_SUCCESS.payload);
    expect(result.subSectors.data).to.deep.equal(SUB_SECTORS.slice(1));
  });

  it('should handle DELETE_SUB_SECTORS_FAIL', () => {
    const result = subSectorsReducer(initialState, DELETE_SUB_SECTORS_FAIL);
    expect(result.deletedSubSectors.loading).to.be.equal(false);
    expect(result.deletedSubSectors.error).to.be.equal(DELETE_SUB_SECTORS_FAIL.payload);
    expect(result.deletedSubSectors.data).to.deep.equal([]);
  });

  it('should handle DELETE_SUB_SECTORS_FAIL without error message', () => {
    const result = subSectorsReducer(initialState, DELETE_SUB_SECTORS_FAIL_WITHOUT_ERR);
    expect(result.deletedSubSectors.loading).to.be.equal(false);
    expect(result.deletedSubSectors.error).to.be.equal('Error, delete sub sector failed');
    expect(result.deletedSubSectors.data).to.deep.equal([]);
  });
});
