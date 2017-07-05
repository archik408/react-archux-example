import { expect } from 'chai';
import { customerSegmentsReducer, initialState } from '../../customerSegments';
import {
  CUSTOMER_SEGMENTS,
  GET_CUSTOMER_SEGMENTS_PENDING,
  GET_CUSTOMER_SEGMENTS_SUCCESS,
  GET_CUSTOMER_SEGMENTS_FAIL,
  GET_CUSTOMER_SEGMENTS_FAIL_WITHOUT_ERR,
  CREATE_CUSTOMER_SEGMENT_PENDING,
  CREATE_CUSTOMER_SEGMENT_SUCCESS,
  CREATE_CUSTOMER_SEGMENT_FAIL,
  CREATE_CUSTOMER_SEGMENT_FAIL_WITHOUT_ERR,
  UPDATE_CUSTOMER_SEGMENT_PENDING,
  UPDATE_CUSTOMER_SEGMENT_SUCCESS,
  UPDATE_CUSTOMER_SEGMENT_FAIL,
  UPDATE_CUSTOMER_SEGMENT_FAIL_WITHOUT_ERR,
  DELETE_CUSTOMER_SEGMENTS_PENDING,
  DELETE_CUSTOMER_SEGMENTS_SUCCESS,
  DELETE_CUSTOMER_SEGMENTS_FAIL,
  DELETE_CUSTOMER_SEGMENTS_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  customerSegments: { ...initialState.customerSegments, data: CUSTOMER_SEGMENTS }
};

describe('Customer segments reducer', () => {
  // ********************* GET_CUSTOMER_SEGMENTS ******************************
  it('should handle GET_CUSTOMER_SEGMENTS_PENDING', () => {
    const result = customerSegmentsReducer(initialState, GET_CUSTOMER_SEGMENTS_PENDING);
    expect(result.customerSegments.loading).to.be.equal(true);
    expect(result.customerSegments.error).to.be.equal(null);
    expect(result.customerSegments.data).to.have.length(0);
  });

  it('should handle GET_CUSTOMER_SEGMENTS_SUCCESS', () => {
    const result = customerSegmentsReducer(initialState, GET_CUSTOMER_SEGMENTS_SUCCESS);
    expect(result.customerSegments.loading).to.be.equal(false);
    expect(result.customerSegments.error).to.be.equal(null);
    expect(result.customerSegments.data).to.deep.equal(GET_CUSTOMER_SEGMENTS_SUCCESS.payload);
  });

  it('should handle GET_CUSTOMER_SEGMENTS_FAIL', () => {
    const result = customerSegmentsReducer(initialState, GET_CUSTOMER_SEGMENTS_FAIL);
    expect(result.customerSegments.loading).to.be.equal(false);
    expect(result.customerSegments.error).to.be.equal(GET_CUSTOMER_SEGMENTS_FAIL.payload);
    expect(result.customerSegments.data).to.have.length(0);
  });

  it('should handle GET_CUSTOMER_SEGMENTS_FAIL without error message', () => {
    const result = customerSegmentsReducer(initialState, GET_CUSTOMER_SEGMENTS_FAIL_WITHOUT_ERR);
    expect(result.customerSegments.loading).to.be.equal(false);
    expect(result.customerSegments.error).to.be.equal('Error, get customer segments failed');
    expect(result.customerSegments.data).to.have.length(0);
  });
  // ********************* CREATE_CUSTOMER_SEGMENT ******************************
  it('should handle CREATE_CUSTOMER_SEGMENT_PENDING', () => {
    const result = customerSegmentsReducer(initialState, CREATE_CUSTOMER_SEGMENT_PENDING);
    expect(result.createdCustomerSegment.loading).to.be.equal(true);
    expect(result.createdCustomerSegment.error).to.be.equal(null);
    expect(result.createdCustomerSegment.data).to.deep.equal({});
  });

  it('should handle CREATE_CUSTOMER_SEGMENT_SUCCESS', () => {
    const result = customerSegmentsReducer(initialState, CREATE_CUSTOMER_SEGMENT_SUCCESS);
    expect(result.createdCustomerSegment.loading).to.be.equal(false);
    expect(result.createdCustomerSegment.error).to.be.equal(null);
    expect(result.createdCustomerSegment.data).to.be.equal(CREATE_CUSTOMER_SEGMENT_SUCCESS.payload);
    expect(result.customerSegments.data).to.deep.equal([CREATE_CUSTOMER_SEGMENT_SUCCESS.payload]);
  });

  it('should handle CREATE_CUSTOMER_SEGMENT_FAIL', () => {
    const result = customerSegmentsReducer(initialState, CREATE_CUSTOMER_SEGMENT_FAIL);
    expect(result.createdCustomerSegment.loading).to.be.equal(false);
    expect(result.createdCustomerSegment.error).to.be.equal(CREATE_CUSTOMER_SEGMENT_FAIL.payload);
    expect(result.createdCustomerSegment.data).to.deep.equal({});
  });

  it('should handle CREATE_CUSTOMER_SEGMENT_FAIL without error message', () => {
    const result = customerSegmentsReducer(initialState, CREATE_CUSTOMER_SEGMENT_FAIL_WITHOUT_ERR);
    expect(result.createdCustomerSegment.loading).to.be.equal(false);
    expect(result.createdCustomerSegment.error).to.be.equal('Error, create customer segment failed');
    expect(result.createdCustomerSegment.data).to.deep.equal({});
  });
  // ********************* UPDATE_CUSTOMER_SEGMENT ******************************
  it('should handle UPDATE_CUSTOMER_SEGMENT_PENDING', () => {
    const result = customerSegmentsReducer(initialState, UPDATE_CUSTOMER_SEGMENT_PENDING);
    expect(result.updatedCustomerSegment.loading).to.be.equal(true);
    expect(result.updatedCustomerSegment.error).to.be.equal(null);
    expect(result.updatedCustomerSegment.data).to.deep.equal({});
  });

  it('should handle UPDATE_CUSTOMER_SEGMENT_SUCCESS', () => {
    const result = customerSegmentsReducer(DIRTY_STATE, UPDATE_CUSTOMER_SEGMENT_SUCCESS);
    const [updatedCustomerSegment] = result.customerSegments.data;

    expect(result.updatedCustomerSegment.loading).to.be.equal(false);
    expect(result.updatedCustomerSegment.error).to.be.equal(null);
    expect(result.updatedCustomerSegment.data).to.be.equal(UPDATE_CUSTOMER_SEGMENT_SUCCESS.payload);
    expect(updatedCustomerSegment).to.deep.equal(UPDATE_CUSTOMER_SEGMENT_SUCCESS.payload);
  });

  it('should handle UPDATE_CUSTOMER_SEGMENT_FAIL', () => {
    const result = customerSegmentsReducer(initialState, UPDATE_CUSTOMER_SEGMENT_FAIL);
    expect(result.updatedCustomerSegment.loading).to.be.equal(false);
    expect(result.updatedCustomerSegment.error).to.be.equal(UPDATE_CUSTOMER_SEGMENT_FAIL.payload);
    expect(result.updatedCustomerSegment.data).to.deep.equal({});
  });

  it('should handle UPDATE_CUSTOMER_SEGMENT_FAIL without error message', () => {
    const result = customerSegmentsReducer(initialState, UPDATE_CUSTOMER_SEGMENT_FAIL_WITHOUT_ERR);
    expect(result.updatedCustomerSegment.loading).to.be.equal(false);
    expect(result.updatedCustomerSegment.error).to.be.equal('Error, update customer segment failed');
    expect(result.updatedCustomerSegment.data).to.deep.equal({});
  });
  // ********************* DELETE_CUSTOMER_SEGMENTS ******************************
  it('should handle DELETE_CUSTOMER_SEGMENTS_PENDING', () => {
    const result = customerSegmentsReducer(initialState, DELETE_CUSTOMER_SEGMENTS_PENDING);
    expect(result.deletedCustomerSegments.loading).to.be.equal(true);
    expect(result.deletedCustomerSegments.error).to.be.equal(null);
    expect(result.deletedCustomerSegments.data).to.deep.equal([]);
  });

  it('should handle DELETE_CUSTOMER_SEGMENTS_SUCCESS', () => {
    const result = customerSegmentsReducer(DIRTY_STATE, DELETE_CUSTOMER_SEGMENTS_SUCCESS);

    expect(result.deletedCustomerSegments.loading).to.be.equal(false);
    expect(result.deletedCustomerSegments.error).to.be.equal(null);
    expect(result.deletedCustomerSegments.data).to.be.equal(DELETE_CUSTOMER_SEGMENTS_SUCCESS.payload);
    expect(result.customerSegments.data).to.deep.equal(CUSTOMER_SEGMENTS.slice(1));
  });

  it('should handle DELETE_CUSTOMER_SEGMENTS_FAIL', () => {
    const result = customerSegmentsReducer(initialState, DELETE_CUSTOMER_SEGMENTS_FAIL);
    expect(result.deletedCustomerSegments.loading).to.be.equal(false);
    expect(result.deletedCustomerSegments.error).to.be.equal(DELETE_CUSTOMER_SEGMENTS_FAIL.payload);
    expect(result.deletedCustomerSegments.data).to.deep.equal([]);
  });

  it('should handle DELETE_CUSTOMER_SEGMENTS_FAIL without error message', () => {
    const result = customerSegmentsReducer(initialState, DELETE_CUSTOMER_SEGMENTS_FAIL_WITHOUT_ERR);
    expect(result.deletedCustomerSegments.loading).to.be.equal(false);
    expect(result.deletedCustomerSegments.error).to.be.equal('Error, delete customer segments failed');
    expect(result.deletedCustomerSegments.data).to.deep.equal([]);
  });
});
