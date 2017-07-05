import { expect } from 'chai';
import { usersReducer } from '../../users';
import {
  INIT_STATE,
  DIRTY_STATE,
  GET_USER_PENDING,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CREATE_USER_PENDING,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  UPDATE_USER_PENDING,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  CHANGE_USER_FILTER
} from './data.test';

describe('Users reducer', () => {
  // ********************* GET_USERS ******************************
  it('should handle GET_USERS_PENDING', () => {
    const result = usersReducer(INIT_STATE, GET_USERS_PENDING);
    expect(result.users.loading).to.equal(true);
    expect(result.users.error).to.be.equal(null);
    expect(result.users.data).to.deep.equal([]);

    expect(result.users.filter).to.deep.equal({ search: '', sort: 'ASC' });
  });
  it('should handle GET_USERS_SUCCESS', () => {
    const result = usersReducer(INIT_STATE, GET_USERS_SUCCESS);
    expect(result.users.loading).to.equal(false);
    expect(result.users.error).to.be.equal(null);
    expect(result.users.data).to.deep.equal(GET_USERS_SUCCESS.payload);

    expect(result.users.filter).to.deep.equal({ search: '', sort: 'ASC' });
  });
  it('should handle GET_USERS_FAIL', () => {
    const result = usersReducer(INIT_STATE, GET_USERS_FAIL);
    expect(result.users.error).to.equal('Error');
    expect(result.users.loading).to.equal(false);
    expect(result.users.data).to.deep.equal([]);

    expect(result.users.filter).to.deep.equal({ search: '', sort: 'ASC' });
  });

  // ********************* GET_USER ******************************
  it('should handle GET_USER_PENDING', () => {
    const result = usersReducer(INIT_STATE, GET_USER_PENDING);
    expect(result.user.loading).to.be.equal(true);
    expect(result.user.error).to.be.equal(null);
    expect(result.user.data).to.deep.equal({});
  });
  it('should handle GET_USER_SUCCESS', () => {
    const result = usersReducer(INIT_STATE, GET_USER_SUCCESS);
    expect(result.user.data).to.deep.equal(GET_USER_SUCCESS.payload);

    expect(result.user.loading).to.be.equal(false);
    expect(result.user.error).to.be.equal(null);
  });
  it('should handle GET_USER_FAIL', () => {
    const result = usersReducer(INIT_STATE, GET_USER_FAIL);
    expect(result.user.loading).to.be.equal(false);
    expect(result.user.error).to.equal('Error');
    expect(result.user.data).to.deep.equal({});
  });

  // ********************* DELETE_USER ******************************
  it('should handle DELETE_USER_PENDING', () => {
    const result = usersReducer(INIT_STATE, DELETE_USER_PENDING);
    expect(result.deletedUser.loading).to.equal(true);
    expect(result.deletedUser.error).to.be.equal(null);
    expect(result.deletedUser.data).to.deep.equal({});

    expect(result.users.data).to.deep.equal([]);
  });
  it('should handle DELETE_USER_SUCCESS', () => {
    const result = usersReducer(INIT_STATE, DELETE_USER_SUCCESS);
    expect(result.deletedUser.error).to.equal(null);
    expect(result.deletedUser.loading).to.equal(false);

    const [id] = DELETE_USER_SUCCESS.meta;
    expect(result.deletedUser.data).to.deep.equal({ id });

    expect(result.users.data).to.deep.equal([]);
  });
  it('should handle DELETE_USER_FAIL', () => {
    const result = usersReducer(INIT_STATE, DELETE_USER_FAIL);
    expect(result.deletedUser.error).to.equal('Error');
    expect(result.deletedUser.loading).to.equal(false);
    expect(result.deletedUser.data).to.deep.equal({});

    expect(result.users.data).to.deep.equal([]);
  });

  // ********************* CREATE_USER ******************************
  it('should handle CREATE_USER_PENDING', () => {
    const result = usersReducer(INIT_STATE, CREATE_USER_PENDING);
    expect(result.createdUser.loading).to.equal(true);
    expect(result.createdUser.error).to.be.equal(null);
    expect(result.createdUser.data).to.deep.equal({});

    expect(result.users.data).to.deep.equal([]);
  });
  it('should handle CREATE_USER_SUCCESS', () => {
    const result = usersReducer(INIT_STATE, CREATE_USER_SUCCESS);
    expect(result.createdUser.error).to.equal(null);
    expect(result.createdUser.loading).to.equal(false);
    expect(result.createdUser.data).to.deep.equal(CREATE_USER_SUCCESS.payload);

    const [firstUser] = result.users.data;
    expect(firstUser).to.deep.equal(CREATE_USER_SUCCESS.payload);
  });

  it('should handle CREATE_USER_FAIL', () => {
    const result = usersReducer(INIT_STATE, CREATE_USER_FAIL);
    expect(result.createdUser.error).to.equal('Error');
    expect(result.createdUser.loading).to.equal(false);
    expect(result.createdUser.data).to.deep.equal({});

    expect(result.users.data).to.deep.equal([]);
  });

  // ********************* UPDATE_USER ******************************
  it('should handle UPDATE_USER_PENDING', () => {
    const result = usersReducer(INIT_STATE, UPDATE_USER_PENDING);
    expect(result.updatedUser.loading).to.equal(true);
    expect(result.updatedUser.error).to.be.equal(null);
    expect(result.updatedUser.data).to.deep.equal({});
  });
  it('should handle UPDATE_USER_SUCCESS', () => {
    const result = usersReducer(INIT_STATE, UPDATE_USER_SUCCESS);
    expect(result.updatedUser.error).to.equal(null);
    expect(result.updatedUser.loading).to.equal(false);
    expect(result.updatedUser.data).to.deep.equal(UPDATE_USER_SUCCESS.payload);
  });
  it('should handle UPDATE_USER_FAIL', () => {
    const result = usersReducer(INIT_STATE, UPDATE_USER_FAIL);
    expect(result.updatedUser.error).to.equal('Error');
    expect(result.updatedUser.loading).to.equal(false);
    expect(result.updatedUser.data).to.deep.equal({});
  });

  // ********************* CHANGE_USER_FILTER ******************************
  it('should handle CHANGE_USER_FILTER', () => {
    const result = usersReducer(INIT_STATE, CHANGE_USER_FILTER);
    expect(result.users.filter).to.deep.equal(CHANGE_USER_FILTER.payload);
  });
});
