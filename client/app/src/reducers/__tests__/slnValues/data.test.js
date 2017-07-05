const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const SLN_VALUES = [
  {
    id: '1',
    name: 'sln value name 1'
  },
  {
    id: '2',
    name: 'sln value name 2'
  }
];
const [SLN_VALUE] = SLN_VALUES;

// ********************* GET_SLN_VALUES ******************************
export const GET_SLN_VALUES_PENDING = {
  type: 'GET_SLN_VALUES_PENDING',
  payload: []
};

export const GET_SLN_VALUES_SUCCESS = {
  type: 'GET_SLN_VALUES_SUCCESS',
  payload: SLN_VALUES
};

export const GET_SLN_VALUES_FAIL = {
  type: 'GET_SLN_VALUES_FAIL',
  payload: SERVER_ERROR
};

export const GET_SLN_VALUES_FAIL_WITHOUT_ERR = {
  type: 'GET_SLN_VALUES_FAIL'
};

// ********************* CREATE_SLN_VALUE ******************************
export const CREATE_SLN_VALUE_PENDING = {
  type: 'CREATE_SLN_VALUE_PENDING',
  payload: []
};

export const CREATE_SLN_VALUE_SUCCESS = {
  type: 'CREATE_SLN_VALUE_SUCCESS',
  payload: SLN_VALUE
};

export const CREATE_SLN_VALUE_FAIL = {
  type: 'CREATE_SLN_VALUE_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_SLN_VALUE_FAIL_WITHOUT_ERR = {
  type: 'CREATE_SLN_VALUE_FAIL'
};

// ********************* UPDATE_SLN_VALUE ******************************
export const UPDATE_SLN_VALUE_PENDING = {
  type: 'UPDATE_SLN_VALUE_PENDING',
  payload: []
};

export const UPDATE_SLN_VALUE_SUCCESS = {
  type: 'UPDATE_SLN_VALUE_SUCCESS',
  payload: { ...SLN_VALUE, name: 'updated sln value name 1' }
};

export const UPDATE_SLN_VALUE_FAIL = {
  type: 'UPDATE_SLN_VALUE_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_SLN_VALUE_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_SLN_VALUE_FAIL'
};

// ********************* DELETE_SLN_VALUES ******************************
export const DELETE_SLN_VALUES_PENDING = {
  type: 'DELETE_SLN_VALUES_PENDING',
  payload: null
};

export const DELETE_SLN_VALUES_SUCCESS = {
  type: 'DELETE_SLN_VALUES_SUCCESS',
  payload: { count: 1 },
  meta: [[SLN_VALUE.id]]
};

export const DELETE_SLN_VALUES_FAIL = {
  type: 'DELETE_SLN_VALUES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_SLN_VALUES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_SLN_VALUES_FAIL'
};
