import { expect } from 'chai';
import { granularSectorsReducer, initialState } from '../../granularSectors';
import {
  GRANULAR_SECTORS,
  GET_GRANULAR_SECTORS_PENDING,
  GET_GRANULAR_SECTORS_SUCCESS,
  GET_GRANULAR_SECTORS_FAIL,
  GET_GRANULAR_SECTORS_FAIL_WITHOUT_ERR,
  CREATE_GRANULAR_SECTOR_PENDING,
  CREATE_GRANULAR_SECTOR_SUCCESS,
  CREATE_GRANULAR_SECTOR_FAIL,
  CREATE_GRANULAR_SECTOR_FAIL_WITHOUT_ERR,
  UPDATE_GRANULAR_SECTOR_PENDING,
  UPDATE_GRANULAR_SECTOR_SUCCESS,
  UPDATE_GRANULAR_SECTOR_FAIL,
  UPDATE_GRANULAR_SECTOR_FAIL_WITHOUT_ERR,
  DELETE_GRANULAR_SECTORS_PENDING,
  DELETE_GRANULAR_SECTORS_SUCCESS,
  DELETE_GRANULAR_SECTORS_FAIL,
  DELETE_GRANULAR_SECTORS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  granularSectors: { ...initialState.granularSectors, data: GRANULAR_SECTORS }
};

describe('Granular Sectors reducer', () => {
  // ********************* GET_GRANULAR_SECTORS ******************************
  it('should handle GET_GRANULAR_SECTORS_PENDING', () => {
    const result = granularSectorsReducer(initialState, GET_GRANULAR_SECTORS_PENDING);
    expect(result.granularSectors.loading).to.be.equal(true);
    expect(result.granularSectors.error).to.be.equal(null);
    expect(result.granularSectors.data).to.have.length(0);
  });

  it('should handle GET_GRANULAR_SECTORS_SUCCESS', () => {
    const result = granularSectorsReducer(initialState, GET_GRANULAR_SECTORS_SUCCESS);
    expect(result.granularSectors.loading).to.be.equal(false);
    expect(result.granularSectors.error).to.be.equal(null);
    expect(result.granularSectors.data).to.deep.equal(GET_GRANULAR_SECTORS_SUCCESS.payload);
  });

  it('should handle GET_GRANULAR_SECTORS_FAIL', () => {
    const result = granularSectorsReducer(initialState, GET_GRANULAR_SECTORS_FAIL);
    expect(result.granularSectors.loading).to.be.equal(false);
    expect(result.granularSectors.error).to.be.equal(GET_GRANULAR_SECTORS_FAIL.payload);
    expect(result.granularSectors.data).to.have.length(0);
  });

  it('should handle GET_GRANULAR_SECTORS_FAIL without error message', () => {
    const result = granularSectorsReducer(initialState, GET_GRANULAR_SECTORS_FAIL_WITHOUT_ERR);
    expect(result.granularSectors.loading).to.be.equal(false);
    expect(result.granularSectors.error).to.be.equal('Error, get granular sectors failed');
    expect(result.granularSectors.data).to.have.length(0);
  });
  // ********************* CREATE_GRANULAR_SECTOR ******************************
  it('should handle CREATE_GRANULAR_SECTOR_PENDING', () => {
    const result = granularSectorsReducer(initialState, CREATE_GRANULAR_SECTOR_PENDING);
    expect(result.createdGranularSector.loading).to.be.equal(true);
    expect(result.createdGranularSector.error).to.be.equal(null);
    expect(result.createdGranularSector.data).to.deep.equal({});
  });

  it('should handle CREATE_GRANULAR_SECTOR_SUCCESS', () => {
    const result = granularSectorsReducer(initialState, CREATE_GRANULAR_SECTOR_SUCCESS);
    expect(result.createdGranularSector.loading).to.be.equal(false);
    expect(result.createdGranularSector.error).to.be.equal(null);
    expect(result.createdGranularSector.data).to.be.equal(CREATE_GRANULAR_SECTOR_SUCCESS.payload);
    expect(result.granularSectors.data).to.deep.equal([CREATE_GRANULAR_SECTOR_SUCCESS.payload]);
  });

  it('should handle CREATE_GRANULAR_SECTOR_FAIL', () => {
    const result = granularSectorsReducer(initialState, CREATE_GRANULAR_SECTOR_FAIL);
    expect(result.createdGranularSector.loading).to.be.equal(false);
    expect(result.createdGranularSector.error).to.be.equal(CREATE_GRANULAR_SECTOR_FAIL.payload);
    expect(result.createdGranularSector.data).to.deep.equal({});
  });

  it('should handle CREATE_GRANULAR_SECTOR_FAIL without error message', () => {
    const result = granularSectorsReducer(initialState, CREATE_GRANULAR_SECTOR_FAIL_WITHOUT_ERR);
    expect(result.createdGranularSector.loading).to.be.equal(false);
    expect(result.createdGranularSector.error).to.be.equal('Error, create granular sector failed');
    expect(result.createdGranularSector.data).to.deep.equal({});
  });
  // ********************* UPDATE_GRANULAR_SECTOR ******************************
  it('should handle UPDATE_GRANULAR_SECTOR_PENDING', () => {
    const result = granularSectorsReducer(initialState, UPDATE_GRANULAR_SECTOR_PENDING);
    expect(result.updatedGranularSector.loading).to.be.equal(true);
    expect(result.updatedGranularSector.error).to.be.equal(null);
    expect(result.updatedGranularSector.data).to.deep.equal({});
  });

  it('should handle UPDATE_GRANULAR_SECTOR_SUCCESS', () => {
    const result = granularSectorsReducer(DIRTY_STATE, UPDATE_GRANULAR_SECTOR_SUCCESS);
    const [updatedGranularSector] = result.granularSectors.data;

    expect(result.updatedGranularSector.loading).to.be.equal(false);
    expect(result.updatedGranularSector.error).to.be.equal(null);
    expect(result.updatedGranularSector.data).to.be.equal(UPDATE_GRANULAR_SECTOR_SUCCESS.payload);
    expect(updatedGranularSector).to.deep.equal(UPDATE_GRANULAR_SECTOR_SUCCESS.payload);
  });

  it('should handle UPDATE_GRANULAR_SECTOR_FAIL', () => {
    const result = granularSectorsReducer(initialState, UPDATE_GRANULAR_SECTOR_FAIL);
    expect(result.updatedGranularSector.loading).to.be.equal(false);
    expect(result.updatedGranularSector.error).to.be.equal(UPDATE_GRANULAR_SECTOR_FAIL.payload);
    expect(result.updatedGranularSector.data).to.deep.equal({});
  });

  it('should handle UPDATE_GRANULAR_SECTOR_FAIL without error message', () => {
    const result = granularSectorsReducer(initialState, UPDATE_GRANULAR_SECTOR_FAIL_WITHOUT_ERR);
    expect(result.updatedGranularSector.loading).to.be.equal(false);
    expect(result.updatedGranularSector.error).to.be.equal('Error, update granular sector failed');
    expect(result.updatedGranularSector.data).to.deep.equal({});
  });
  // ********************* DELETE_GRANULAR_SECTORS ******************************
  it('should handle DELETE_GRANULAR_SECTORS_PENDING', () => {
    const result = granularSectorsReducer(initialState, DELETE_GRANULAR_SECTORS_PENDING);
    expect(result.deletedGranularSectors.loading).to.be.equal(true);
    expect(result.deletedGranularSectors.error).to.be.equal(null);
    expect(result.deletedGranularSectors.data).to.deep.equal([]);
  });

  it('should handle DELETE_GRANULAR_SECTORS_SUCCESS', () => {
    const result = granularSectorsReducer(DIRTY_STATE, DELETE_GRANULAR_SECTORS_SUCCESS);

    expect(result.deletedGranularSectors.loading).to.be.equal(false);
    expect(result.deletedGranularSectors.error).to.be.equal(null);
    expect(result.deletedGranularSectors.data).to.be.equal(DELETE_GRANULAR_SECTORS_SUCCESS.payload);
    expect(result.granularSectors.data).to.deep.equal(GRANULAR_SECTORS.slice(1));
  });

  it('should handle DELETE_GRANULAR_SECTORS_FAIL', () => {
    const result = granularSectorsReducer(initialState, DELETE_GRANULAR_SECTORS_FAIL);
    expect(result.deletedGranularSectors.loading).to.be.equal(false);
    expect(result.deletedGranularSectors.error).to.be.equal(DELETE_GRANULAR_SECTORS_FAIL.payload);
    expect(result.deletedGranularSectors.data).to.deep.equal([]);
  });

  it('should handle DELETE_GRANULAR_SECTORS_FAIL without error message', () => {
    const result = granularSectorsReducer(initialState, DELETE_GRANULAR_SECTORS_FAIL_WITHOUT_ERR);
    expect(result.deletedGranularSectors.loading).to.be.equal(false);
    expect(result.deletedGranularSectors.error).to.be.equal('Error, delete granular sector failed');
    expect(result.deletedGranularSectors.data).to.deep.equal([]);
  });
});
