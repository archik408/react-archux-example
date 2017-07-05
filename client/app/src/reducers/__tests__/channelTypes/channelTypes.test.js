import { expect } from 'chai';
import { channelTypesReducer, initialState } from '../../channelTypes';
import {
  CHANNEL_TYPES,
  GET_CHANNEL_TYPES_PENDING,
  GET_CHANNEL_TYPES_SUCCESS,
  GET_CHANNEL_TYPES_FAIL,
  GET_CHANNEL_TYPES_FAIL_WITHOUT_ERR,
  CREATE_CHANNEL_TYPE_PENDING,
  CREATE_CHANNEL_TYPE_SUCCESS,
  CREATE_CHANNEL_TYPE_FAIL,
  CREATE_CHANNEL_TYPE_FAIL_WITHOUT_ERR,
  UPDATE_CHANNEL_TYPE_PENDING,
  UPDATE_CHANNEL_TYPE_SUCCESS,
  UPDATE_CHANNEL_TYPE_FAIL,
  UPDATE_CHANNEL_TYPE_FAIL_WITHOUT_ERR,
  DELETE_CHANNEL_TYPES_PENDING,
  DELETE_CHANNEL_TYPES_SUCCESS,
  DELETE_CHANNEL_TYPES_FAIL,
  DELETE_CHANNEL_TYPES_FAIL_WITHOUT_ERR
} from './data.test';

const DIRTY_STATE = {
  ...initialState,
  channelTypes: { ...initialState.c, data: CHANNEL_TYPES }
};

describe('Channel types reducer', () => {
  // ********************* GET_CHANNEL_TYPES ******************************
  it('should handle GET_CHANNEL_TYPES_PENDING', () => {
    const result = channelTypesReducer(initialState, GET_CHANNEL_TYPES_PENDING);
    expect(result.channelTypes.loading).to.be.equal(true);
    expect(result.channelTypes.error).to.be.equal(null);
    expect(result.channelTypes.data).to.have.length(0);
  });

  it('should handle GET_CHANNEL_TYPES_SUCCESS', () => {
    const result = channelTypesReducer(initialState, GET_CHANNEL_TYPES_SUCCESS);
    expect(result.channelTypes.loading).to.be.equal(false);
    expect(result.channelTypes.error).to.be.equal(null);
    expect(result.channelTypes.data).to.deep.equal(GET_CHANNEL_TYPES_SUCCESS.payload);
  });

  it('should handle GET_CHANNEL_TYPES_FAIL', () => {
    const result = channelTypesReducer(initialState, GET_CHANNEL_TYPES_FAIL);
    expect(result.channelTypes.loading).to.be.equal(false);
    expect(result.channelTypes.error).to.be.equal(GET_CHANNEL_TYPES_FAIL.payload);
    expect(result.channelTypes.data).to.have.length(0);
  });

  it('should handle GET_CHANNEL_TYPES_FAIL without error message', () => {
    const result = channelTypesReducer(initialState, GET_CHANNEL_TYPES_FAIL_WITHOUT_ERR);
    expect(result.channelTypes.loading).to.be.equal(false);
    expect(result.channelTypes.error).to.be.equal('Error, getting channel types failed');
    expect(result.channelTypes.data).to.have.length(0);
  });
  // ********************* CREATE_CHANNEL_TYPE ******************************
  it('should handle CREATE_CHANNEL_TYPE_PENDING', () => {
    const result = channelTypesReducer(initialState, CREATE_CHANNEL_TYPE_PENDING);
    expect(result.createdChannelType.loading).to.be.equal(true);
    expect(result.createdChannelType.error).to.be.equal(null);
    expect(result.createdChannelType.data).to.deep.equal({});
  });

  it('should handle CREATE_CHANNEL_TYPE_SUCCESS', () => {
    const result = channelTypesReducer(initialState, CREATE_CHANNEL_TYPE_SUCCESS);
    expect(result.createdChannelType.loading).to.be.equal(false);
    expect(result.createdChannelType.error).to.be.equal(null);
    expect(result.createdChannelType.data).to.be.equal(CREATE_CHANNEL_TYPE_SUCCESS.payload);
    expect(result.channelTypes.data).to.deep.equal([CREATE_CHANNEL_TYPE_SUCCESS.payload]);
  });

  it('should handle CREATE_CHANNEL_TYPE_FAIL', () => {
    const result = channelTypesReducer(initialState, CREATE_CHANNEL_TYPE_FAIL);
    expect(result.createdChannelType.loading).to.be.equal(false);
    expect(result.createdChannelType.error).to.be.equal(CREATE_CHANNEL_TYPE_FAIL.payload);
    expect(result.createdChannelType.data).to.deep.equal({});
  });

  it('should handle CREATE_CHANNEL_TYPE_FAIL without error message', () => {
    const result = channelTypesReducer(initialState, CREATE_CHANNEL_TYPE_FAIL_WITHOUT_ERR);
    expect(result.createdChannelType.loading).to.be.equal(false);
    expect(result.createdChannelType.error).to.be.equal('Error, creating channel types failed');
    expect(result.createdChannelType.data).to.deep.equal({});
  });
  // ********************* UPDATE_CHANNEL_TYPE ******************************
  it('should handle UPDATE_CHANNEL_TYPE_PENDING', () => {
    const result = channelTypesReducer(initialState, UPDATE_CHANNEL_TYPE_PENDING);
    expect(result.updatedChannelType.loading).to.be.equal(true);
    expect(result.updatedChannelType.error).to.be.equal(null);
    expect(result.updatedChannelType.data).to.deep.equal({});
  });

  it('should handle UPDATE_CHANNEL_TYPE_SUCCESS', () => {
    const result = channelTypesReducer(DIRTY_STATE, UPDATE_CHANNEL_TYPE_SUCCESS);
    const [updatedChannelType] = result.channelTypes.data;

    expect(result.updatedChannelType.loading).to.be.equal(false);
    expect(result.updatedChannelType.error).to.be.equal(null);
    expect(result.updatedChannelType.data).to.be.equal(UPDATE_CHANNEL_TYPE_SUCCESS.payload);
    expect(updatedChannelType).to.deep.equal(UPDATE_CHANNEL_TYPE_SUCCESS.payload);
  });

  it('should handle UPDATE_CHANNEL_TYPE_FAIL', () => {
    const result = channelTypesReducer(initialState, UPDATE_CHANNEL_TYPE_FAIL);
    expect(result.updatedChannelType.loading).to.be.equal(false);
    expect(result.updatedChannelType.error).to.be.equal(UPDATE_CHANNEL_TYPE_FAIL.payload);
    expect(result.updatedChannelType.data).to.deep.equal({});
  });

  it('should handle UPDATE_CHANNEL_TYPE_FAIL without error message', () => {
    const result = channelTypesReducer(initialState, UPDATE_CHANNEL_TYPE_FAIL_WITHOUT_ERR);
    expect(result.updatedChannelType.loading).to.be.equal(false);
    expect(result.updatedChannelType.error).to.be.equal('Error, updating channel types failed');
    expect(result.updatedChannelType.data).to.deep.equal({});
  });
  // ********************* DELETE_CHANNEL_TYPES ******************************
  it('should handle DELETE_CHANNEL_TYPES_PENDING', () => {
    const result = channelTypesReducer(initialState, DELETE_CHANNEL_TYPES_PENDING);
    expect(result.deletedChannelTypes.loading).to.be.equal(true);
    expect(result.deletedChannelTypes.error).to.be.equal(null);
    expect(result.deletedChannelTypes.data).to.deep.equal({});
  });

  it('should handle DELETE_CHANNEL_TYPES_SUCCESS', () => {
    const result = channelTypesReducer(DIRTY_STATE, DELETE_CHANNEL_TYPES_SUCCESS);

    expect(result.deletedChannelTypes.loading).to.be.equal(false);
    expect(result.deletedChannelTypes.error).to.be.equal(null);
    expect(result.deletedChannelTypes.data).to.deep.equal(DELETE_CHANNEL_TYPES_SUCCESS.payload);
    expect(result.channelTypes.data).to.deep.equal(CHANNEL_TYPES.slice(1));
  });

  it('should handle DELETE_CHANNEL_TYPES_FAIL', () => {
    const result = channelTypesReducer(initialState, DELETE_CHANNEL_TYPES_FAIL);
    expect(result.deletedChannelTypes.loading).to.be.equal(false);
    expect(result.deletedChannelTypes.error).to.be.equal(DELETE_CHANNEL_TYPES_FAIL.payload);
    expect(result.deletedChannelTypes.data).to.deep.equal({});
  });

  it('should handle DELETE_CHANNEL_TYPES_FAIL without error message', () => {
    const result = channelTypesReducer(initialState, DELETE_CHANNEL_TYPES_FAIL_WITHOUT_ERR);
    expect(result.deletedChannelTypes.loading).to.be.equal(false);
    expect(result.deletedChannelTypes.error).to.be.equal('Error, deleting channel types failed');
    expect(result.deletedChannelTypes.data).to.deep.equal({});
  });
});
