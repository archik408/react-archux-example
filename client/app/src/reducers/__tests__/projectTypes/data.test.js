const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const PROJECT_TYPES = [
  {
    id: '1',
    name: 'project type name 1'
  },
  {
    id: '2',
    name: 'project type name 2'
  }
];
const [PROJECT_TYPE] = PROJECT_TYPES;

// ********************* GET_PROJECT_TYPES ******************************
export const GET_PROJECT_TYPES_PENDING = {
  type: 'GET_PROJECT_TYPES_PENDING',
  payload: []
};

export const GET_PROJECT_TYPES_SUCCESS = {
  type: 'GET_PROJECT_TYPES_SUCCESS',
  payload: PROJECT_TYPES
};

export const GET_PROJECT_TYPES_FAIL = {
  type: 'GET_PROJECT_TYPES_FAIL',
  payload: SERVER_ERROR
};

export const GET_PROJECT_TYPES_FAIL_WITHOUT_ERR = {
  type: 'GET_PROJECT_TYPES_FAIL'
};

// ********************* CREATE_PROJECT_TYPE ******************************
export const CREATE_PROJECT_TYPE_PENDING = {
  type: 'CREATE_PROJECT_TYPE_PENDING',
  payload: []
};

export const CREATE_PROJECT_TYPE_SUCCESS = {
  type: 'CREATE_PROJECT_TYPE_SUCCESS',
  payload: PROJECT_TYPE
};

export const CREATE_PROJECT_TYPE_FAIL = {
  type: 'CREATE_PROJECT_TYPE_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_PROJECT_TYPE_FAIL_WITHOUT_ERR = {
  type: 'CREATE_PROJECT_TYPE_FAIL'
};

// ********************* UPDATE_PROJECT_TYPE ******************************
export const UPDATE_PROJECT_TYPE_PENDING = {
  type: 'UPDATE_PROJECT_TYPE_PENDING',
  payload: []
};

export const UPDATE_PROJECT_TYPE_SUCCESS = {
  type: 'UPDATE_PROJECT_TYPE_SUCCESS',
  payload: { ...PROJECT_TYPE, name: 'updated project type name 1' }
};

export const UPDATE_PROJECT_TYPE_FAIL = {
  type: 'UPDATE_PROJECT_TYPE_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_PROJECT_TYPE_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_PROJECT_TYPE_FAIL'
};

// ********************* DELETE_PROJECT_TYPES ******************************
export const DELETE_PROJECT_TYPES_PENDING = {
  type: 'DELETE_PROJECT_TYPES_PENDING',
  payload: null
};

export const DELETE_PROJECT_TYPES_SUCCESS = {
  type: 'DELETE_PROJECT_TYPES_SUCCESS',
  payload: { count: 1 },
  meta: [[PROJECT_TYPE.id]]
};

export const DELETE_PROJECT_TYPES_FAIL = {
  type: 'DELETE_PROJECT_TYPES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_PROJECT_TYPES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_PROJECT_TYPES_FAIL'
};
