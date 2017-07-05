const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const PARAMETERS = [
  {
    id: '1',
    name: 'parameter name 1'
  },
  {
    id: '2',
    name: 'parameter name 2'
  }
];
const [PARAMETER] = PARAMETERS;

// ********************* GET_PARAMETERS ******************************
export const GET_PARAMETERS_PENDING = {
  type: 'GET_PARAMETERS_PENDING',
  payload: []
};

export const GET_PARAMETERS_SUCCESS = {
  type: 'GET_PARAMETERS_SUCCESS',
  payload: PARAMETERS
};

export const GET_PARAMETERS_FAIL = {
  type: 'GET_PARAMETERS_FAIL',
  payload: SERVER_ERROR
};

export const GET_PARAMETERS_FAIL_WITHOUT_ERR = {
  type: 'GET_PARAMETERS_FAIL'
};

// ********************* CREATE_PARAMETER ******************************
export const CREATE_PARAMETER_PENDING = {
  type: 'CREATE_PARAMETER_PENDING',
  payload: []
};

export const CREATE_PARAMETER_SUCCESS = {
  type: 'CREATE_PARAMETER_SUCCESS',
  payload: PARAMETER
};

export const CREATE_PARAMETER_FAIL = {
  type: 'CREATE_PARAMETER_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_PARAMETER_FAIL_WITHOUT_ERR = {
  type: 'CREATE_PARAMETER_FAIL'
};

// ********************* UPDATE_PARAMETER ******************************
export const UPDATE_PARAMETER_PENDING = {
  type: 'UPDATE_PARAMETER_PENDING',
  payload: []
};

export const UPDATE_PARAMETER_SUCCESS = {
  type: 'UPDATE_PARAMETER_SUCCESS',
  payload: { ...PARAMETER, name: 'updated parameter name 1' }
};

export const UPDATE_PARAMETER_FAIL = {
  type: 'UPDATE_PARAMETER_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_PARAMETER_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_PARAMETER_FAIL'
};

// ********************* DELETE_PARAMETERS ******************************
export const DELETE_PARAMETERS_PENDING = {
  type: 'DELETE_PARAMETERS_PENDING',
  payload: null
};

export const DELETE_PARAMETERS_SUCCESS = {
  type: 'DELETE_PARAMETERS_SUCCESS',
  payload: { count: 1 },
  meta: [[PARAMETER.id]]
};

export const DELETE_PARAMETERS_FAIL = {
  type: 'DELETE_PARAMETERS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_PARAMETERS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_PARAMETERS_FAIL'
};
