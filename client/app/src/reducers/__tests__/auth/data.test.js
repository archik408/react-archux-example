export const LOGIN_PENDING = {
  type: 'LOGIN_PENDING',
  payload: {}
};

export const LOGIN_SUCCESS = {
  type: 'LOGIN_SUCCESS',
  payload: {}
};

export const LOGIN_FAIL = {
  type: 'LOGIN_FAIL',
  payload: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};

export const LOGOUT_PENDING = {
  type: 'LOGOUT_PENDING',
  payload: {}
};

export const LOGOUT_SUCCESS = {
  type: 'LOGOUT_SUCCESS',
  payload: {}
};

export const LOGOUT_FAIL = {
  type: 'LOGOUT_FAIL',
  payload: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
