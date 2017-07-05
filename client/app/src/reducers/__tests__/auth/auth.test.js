import { expect } from 'chai';
import { authReducer } from '../../auth';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from './data.test';

describe('Authentification reducer', () => {
  global.localStorage = {
    getItem: () => {},
    setItem: () => {},
    removeItem: () => {}
  };

  it('should handle LOGIN_PENDING', () => {
    expect(authReducer(null, LOGIN_PENDING))
      .to.deep.equal({
        authenticated: false,
        error: null,
        loading: true
      });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(authReducer(null, LOGIN_SUCCESS))
      .to.deep.equal({
        authenticated: true,
        error: null,
        loading: false
      });
  });

  it('should handle LOGIN_FAIL', () => {
    expect(authReducer(null, LOGIN_FAIL))
      .to.deep.equal({
        authenticated: false,
        error: 'Error, login failed',
        loading: false
    });
  });

  it('should handle LOGOUT_PENDING', () => {
    expect(authReducer(null, LOGOUT_PENDING))
      .to.deep.equal({
        authenticated: false,
        error: null,
        loading: true
      });
  });

  it('should handle LOGOUT_SUCCESS', () => {
    expect(authReducer(null, LOGOUT_SUCCESS))
      .to.deep.equal({
        authenticated: false,
        error: null,
        loading: false
      });
  });

  it('should handle LOGOUT_FAIL', () => {
    expect(authReducer(null, LOGOUT_FAIL))
      .to.deep.equal({
        authenticated: false,
        error: 'Error, logout failed',
        loading: false
      });
  });
});
