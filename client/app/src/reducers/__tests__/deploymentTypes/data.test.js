const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const DEPLOYMENT_TYPES = [
  {
    id: '1',
    name: 'deployment type name 1'
  },
  {
    id: '2',
    name: 'deployment type name 2'
  }
];
const [DEPLOYMENT_TYPE] = DEPLOYMENT_TYPES;

// ********************* GET_DEPLOYMENT_TYPES ******************************
export const GET_DEPLOYMENT_TYPES_PENDING = {
  type: 'GET_DEPLOYMENT_TYPES_PENDING',
  payload: []
};

export const GET_DEPLOYMENT_TYPES_SUCCESS = {
  type: 'GET_DEPLOYMENT_TYPES_SUCCESS',
  payload: DEPLOYMENT_TYPES
};

export const GET_DEPLOYMENT_TYPES_FAIL = {
  type: 'GET_DEPLOYMENT_TYPES_FAIL',
  payload: SERVER_ERROR
};

export const GET_DEPLOYMENT_TYPES_FAIL_WITHOUT_ERR = {
  type: 'GET_DEPLOYMENT_TYPES_FAIL'
};

// ********************* CREATE_DEPLOYMENT_TYPE ******************************
export const CREATE_DEPLOYMENT_TYPE_PENDING = {
  type: 'CREATE_DEPLOYMENT_TYPE_PENDING',
  payload: []
};

export const CREATE_DEPLOYMENT_TYPE_SUCCESS = {
  type: 'CREATE_DEPLOYMENT_TYPE_SUCCESS',
  payload: DEPLOYMENT_TYPE
};

export const CREATE_DEPLOYMENT_TYPE_FAIL = {
  type: 'CREATE_DEPLOYMENT_TYPE_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_DEPLOYMENT_TYPE_FAIL_WITHOUT_ERR = {
  type: 'CREATE_DEPLOYMENT_TYPE_FAIL'
};

// ********************* UPDATE_DEPLOYMENT_TYPE ******************************
export const UPDATE_DEPLOYMENT_TYPE_PENDING = {
  type: 'UPDATE_DEPLOYMENT_TYPE_PENDING',
  payload: []
};

export const UPDATE_DEPLOYMENT_TYPE_SUCCESS = {
  type: 'UPDATE_DEPLOYMENT_TYPE_SUCCESS',
  payload: { ...DEPLOYMENT_TYPE, name: 'updated deployment type name 1' }
};

export const UPDATE_DEPLOYMENT_TYPE_FAIL = {
  type: 'UPDATE_DEPLOYMENT_TYPE_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_DEPLOYMENT_TYPE_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_DEPLOYMENT_TYPE_FAIL'
};

// ********************* DELETE_DEPLOYMENT_TYPES ******************************
export const DELETE_DEPLOYMENT_TYPES_PENDING = {
  type: 'DELETE_DEPLOYMENT_TYPES_PENDING',
  payload: null
};

export const DELETE_DEPLOYMENT_TYPES_SUCCESS = {
  type: 'DELETE_DEPLOYMENT_TYPES_SUCCESS',
  payload: { count: 1 },
  meta: [[DEPLOYMENT_TYPE.id]]
};

export const DELETE_DEPLOYMENT_TYPES_FAIL = {
  type: 'DELETE_DEPLOYMENT_TYPES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_DEPLOYMENT_TYPES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_DEPLOYMENT_TYPES_FAIL'
};
