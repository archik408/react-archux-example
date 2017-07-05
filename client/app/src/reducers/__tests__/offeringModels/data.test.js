const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const OFFERING_MODELS = [
  {
    id: '1',
    name: 'offeringModel name 1'
  },
  {
    id: '2',
    name: 'offeringModel name 2'
  }
];
const [OFFERING_MODEL] = OFFERING_MODELS;

// ********************* GET_OFFERING_MODELS ******************************
export const GET_OFFERING_MODELS_PENDING = {
  type: 'GET_OFFERING_MODELS_PENDING',
  payload: []
};

export const GET_OFFERING_MODELS_SUCCESS = {
  type: 'GET_OFFERING_MODELS_SUCCESS',
  payload: OFFERING_MODELS
};

export const GET_OFFERING_MODELS_FAIL = {
  type: 'GET_OFFERING_MODELS_FAIL',
  payload: SERVER_ERROR
};

export const GET_OFFERING_MODELS_FAIL_WITHOUT_ERR = {
  type: 'GET_OFFERING_MODELS_FAIL'
};

// ********************* CREATE_OFFERING_MODEL ******************************
export const CREATE_OFFERING_MODEL_PENDING = {
  type: 'CREATE_OFFERING_MODEL_PENDING',
  payload: []
};

export const CREATE_OFFERING_MODEL_SUCCESS = {
  type: 'CREATE_OFFERING_MODEL_SUCCESS',
  payload: OFFERING_MODEL
};

export const CREATE_OFFERING_MODEL_FAIL = {
  type: 'CREATE_OFFERING_MODEL_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_OFFERING_MODEL_FAIL_WITHOUT_ERR = {
  type: 'CREATE_OFFERING_MODEL_FAIL'
};

// ********************* UPDATE_OFFERING_MODEL ******************************
export const UPDATE_OFFERING_MODEL_PENDING = {
  type: 'UPDATE_OFFERING_MODEL_PENDING',
  payload: []
};

export const UPDATE_OFFERING_MODEL_SUCCESS = {
  type: 'UPDATE_OFFERING_MODEL_SUCCESS',
  payload: { ...OFFERING_MODEL, name: 'updated offeringModel name 1' }
};

export const UPDATE_OFFERING_MODEL_FAIL = {
  type: 'UPDATE_OFFERING_MODEL_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_OFFERING_MODEL_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_OFFERING_MODEL_FAIL'
};

// ********************* DELETE_OFFERING_MODELS ******************************
export const DELETE_OFFERING_MODELS_PENDING = {
  type: 'DELETE_OFFERING_MODELS_PENDING',
  payload: null
};

export const DELETE_OFFERING_MODELS_SUCCESS = {
  type: 'DELETE_OFFERING_MODELS_SUCCESS',
  payload: { count: 1 },
  meta: [[OFFERING_MODEL.id]]
};

export const DELETE_OFFERING_MODELS_FAIL = {
  type: 'DELETE_OFFERING_MODELS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_OFFERING_MODELS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_OFFERING_MODELS_FAIL'
};
