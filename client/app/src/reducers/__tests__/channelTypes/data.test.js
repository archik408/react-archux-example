export const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const CHANNEL_TYPES = [
  {
    id: '1',
    name: 'cht name 1'
  },
  {
    id: '2',
    name: 'cht name 2'
  }
];
const [CHN1] = CHANNEL_TYPES;

// ********************* GET_CHANNEL_TYPES ******************************
export const GET_CHANNEL_TYPES_PENDING = {
  type: 'GET_CHANNEL_TYPES_PENDING',
  payload: []
};

export const GET_CHANNEL_TYPES_SUCCESS = {
  type: 'GET_CHANNEL_TYPES_SUCCESS',
  payload: CHANNEL_TYPES
};

export const GET_CHANNEL_TYPES_FAIL = {
  type: 'GET_CHANNEL_TYPES_FAIL',
  payload: SERVER_ERROR.response.data.error.message
};

export const GET_CHANNEL_TYPES_FAIL_WITHOUT_ERR = {
  type: 'GET_CHANNEL_TYPES_FAIL'
};

// ********************* CREATE_CHANNEL_TYPE ******************************
export const CREATE_CHANNEL_TYPE_PENDING = {
  type: 'CREATE_CHANNEL_TYPE_PENDING',
  payload: {}
};

export const CREATE_CHANNEL_TYPE_SUCCESS = {
  type: 'CREATE_CHANNEL_TYPE_SUCCESS',
  payload: CHN1
};

export const CREATE_CHANNEL_TYPE_FAIL = {
  type: 'CREATE_CHANNEL_TYPE_FAIL',
  payload: SERVER_ERROR.response.data.error.message
};

export const CREATE_CHANNEL_TYPE_FAIL_WITHOUT_ERR = {
  type: 'CREATE_CHANNEL_TYPE_FAIL'
};

// ********************* UPDATE_CHANNEL_TYPE ******************************
export const UPDATE_CHANNEL_TYPE_PENDING = {
  type: 'UPDATE_CHANNEL_TYPE_PENDING',
  payload: {}
};

export const UPDATE_CHANNEL_TYPE_SUCCESS = {
  type: 'UPDATE_CHANNEL_TYPE_SUCCESS',
  payload: { ...CHN1, name: 'updated channel type name 1' }
};

export const UPDATE_CHANNEL_TYPE_FAIL = {
  type: 'UPDATE_CHANNEL_TYPE_FAIL',
  payload: SERVER_ERROR.response.data.error.message
};

export const UPDATE_CHANNEL_TYPE_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_CHANNEL_TYPE_FAIL'
};

// ********************* DELETE_CHANNEL_TYPES ******************************
export const DELETE_CHANNEL_TYPES_PENDING = {
  type: 'DELETE_CHANNEL_TYPES_PENDING',
  payload: {}
};

export const DELETE_CHANNEL_TYPES_SUCCESS = {
  type: 'DELETE_CHANNEL_TYPES_SUCCESS',
  payload: { deletedChannelTypeIds: '1' },
  meta: [CHN1.id]
};

export const DELETE_CHANNEL_TYPES_FAIL = {
  type: 'DELETE_CHANNEL_TYPES_FAIL',
  payload: SERVER_ERROR.response.data.error.message
};

export const DELETE_CHANNEL_TYPES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_CHANNEL_TYPES_FAIL'
};
