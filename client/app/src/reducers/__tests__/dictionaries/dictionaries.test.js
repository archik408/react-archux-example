import { expect } from 'chai';
import { dictionariesReducer } from '../../dictionaries';
import {
  INIT_STATE,
  GET_PROJECT_TYPES_PENDING,
  GET_PROJECT_TYPES_SUCCESS,
  GET_PROJECT_TYPES_FAIL,
  GET_SECTORS_PENDING,
  GET_SECTORS_SUCCESS,
  GET_SECTORS_FAIL,
  GET_GRANULAR_SECTORS_PENDING,
  GET_GRANULAR_SECTORS_SUCCESS,
  GET_GRANULAR_SECTORS_FAIL
} from './data.test';

it('should handle GET_PROJECT_TYPES_PENDING', () => {
  const result = dictionariesReducer(INIT_STATE, GET_PROJECT_TYPES_PENDING);
  expect(result.projectTypes.loading).to.equal(true);
});
it('should handle GET_PROJECT_TYPES_SUCCESS', () => {
  const result = dictionariesReducer(INIT_STATE, GET_PROJECT_TYPES_SUCCESS);
  expect(result.projectTypes.data).to.deep.equal(GET_PROJECT_TYPES_SUCCESS.payload);
});
it('should handle GET_PROJECT_TYPES_FAIL', () => {
  const result = dictionariesReducer(INIT_STATE, GET_PROJECT_TYPES_FAIL);
  expect(result.projectTypes.error).to.equal('Error');
});

it('should handle GET_SECTORS_PENDING', () => {
  const result = dictionariesReducer(INIT_STATE, GET_SECTORS_PENDING);
  expect(result.sectors.loading).to.equal(true);
});
it('should handle GET_SECTORS_SUCCESS', () => {
  const result = dictionariesReducer(INIT_STATE, GET_SECTORS_SUCCESS);
  expect(result.sectors.data).to.deep.equal(GET_SECTORS_SUCCESS.payload);
});
it('should handle GET_SECTORS_FAIL', () => {
  const result = dictionariesReducer(INIT_STATE, GET_SECTORS_FAIL);
  expect(result.sectors.error).to.equal('Error');
});
// ********************* GET_GRANULAR_SECTORS ******************************
it('should handle GET_GRANULAR_SECTORS_PENDING', () => {
  const result = dictionariesReducer(INIT_STATE, GET_GRANULAR_SECTORS_PENDING);
  expect(result.granularSectors.loading).to.equal(true);
});
it('should handle GET_GRANULAR_SECTORS_SUCCESS', () => {
  const result = dictionariesReducer(INIT_STATE, GET_GRANULAR_SECTORS_SUCCESS);
  expect(result.granularSectors.data).to.deep.equal(GET_GRANULAR_SECTORS_SUCCESS.payload);
});
it('should handle GET_GRANULAR_SECTORS_FAIL', () => {
  const result = dictionariesReducer(INIT_STATE, GET_GRANULAR_SECTORS_FAIL);
  expect(result.granularSectors.error).to.equal('Error');
});
