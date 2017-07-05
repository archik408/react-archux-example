export const INIT_STATE = {
  users: { data: [], error: null, loading: false, filter: { search: '', sort: 'ASC' } },
  createdUser: { data: {}, error: null, loading: false },
  deletedUser: { data: {}, error: null, loading: false },
  updatedUser: { data: {}, error: null, loading: false },
  roles: { data: [], error: null, loading: false },
  currentUserRole: { data: {}, error: null, loading: false },
  user: { data: {}, error: null, loading: false }
};

export const DIRTY_STATE = {
  createdUser: { data: {}, error: null, loading: false }
};

const SERVER_ERROR = {
  message: 'Error'
};

const USERS = [
  {
    username: 'adgmin',
    email: 'ardmin@admin.com',
    id: 1
  },
  {
    username: 'test',
    email: 'test@admin.com',
    id: 2
  }
];

const USER = {
  username: 'test',
  email: 'test@admin.com',
  id: 2
};

// ********************* GET_USERS ******************************
export const GET_USERS_PENDING = {
  type: 'GET_USERS_PENDING',
  payload: [],
  meta: []
};

export const GET_USERS_SUCCESS = {
  type: 'GET_USERS_SUCCESS',
  payload: USERS,
  meta: []
};

export const GET_USERS_FAIL = {
  type: 'GET_USERS_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  },
  meta: []
};

// ********************* GET_USER ******************************
export const GET_USER_PENDING = {
  type: 'GET_USER_PENDING',
  payload: [],
  meta: []
};

export const GET_USER_SUCCESS = {
  type: 'GET_USER_SUCCESS',
  payload: USER,
  meta: []
};

export const GET_USER_FAIL = {
  type: 'GET_USER_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  },
  meta: []
};

// ********************* DELETE_USER ******************************
export const DELETE_USER_PENDING = {
  type: 'DELETE_USER_PENDING',
  payload: {},
  meta: ['1']
};

export const DELETE_USER_SUCCESS = {
  type: 'DELETE_USER_SUCCESS',
  payload: {
    count: 1
  },
  meta: ['1']
};

export const DELETE_USER_FAIL = {
  type: 'DELETE_USER_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  },
  meta: ['1']
};

// ********************* CREATE_USER ******************************
export const CREATE_USER_PENDING = {
  type: 'CREATE_USER_PENDING',
  payload: {},
  meta: [USER]
};

export const CREATE_USER_SUCCESS = {
  type: 'CREATE_USER_SUCCESS',
  payload: USER,
  meta: [USER]
};

export const CREATE_USER_FAIL = {
  type: 'CREATE_USER_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  },
  meta: [USER]
};

// ********************* UPDATE_USER ******************************
export const UPDATE_USER_PENDING = {
  type: 'UPDATE_USER_PENDING',
  payload: {},
  meta: [USER]
};

export const UPDATE_USER_SUCCESS = {
  type: 'UPDATE_USER_SUCCESS',
  payload: USER,
  meta: [USER]
};

export const UPDATE_USER_FAIL = {
  type: 'UPDATE_USER_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  },
  meta: [USER]
};

// ********************* CHANGE_USER_FILTER ******************************
export const CHANGE_USER_FILTER = {
  type: 'CHANGE_USER_FILTER',
  payload: {
    sort: 'ASC',
    search: 'admin'
  }
};
