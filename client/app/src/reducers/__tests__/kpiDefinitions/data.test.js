const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};

const INIT_KPI_DEFINITIONS = {
  id: '07c1a140-151b-11e7-9302-7f7478269c56',
  name: 'User1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  numerator: 'numeratorId',
  denominator: 'denumenatorId',
  slnValueId: 'slnValueId'
};

const SECOND_KPI_DEFINITIONS = {
  id: '08c1a140-151b-11e7-9302-7f7478269c57',
  name: 'User2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  numerator: 'numeratorId',
  denominator: 'denumenatorId',
  slnValueId: 'slnValueId'
};

const UPDATED_KPI_DEFINITIONS = {
  id: '07c1a140-151b-11e7-9302-7f7478269c56',
  name: 'User1 updated',
  description: 'Lorem ipsum updated',
  numerator: 'numeratorId',
  denominator: 'denumenatorId',
  slnValueId: 'slnValueId'
};

export const INIT_STATE = {
  data: [], error: null, loading: false
};

export const NEXT_STATE = {
  data: [INIT_KPI_DEFINITIONS], error: null, loading: false
};

export const UPDATED_STATE = {
  data: [UPDATED_KPI_DEFINITIONS], error: null, loading: false
};

export const MULTIPLE_DATA_STATE = {
  data: [INIT_KPI_DEFINITIONS, SECOND_KPI_DEFINITIONS],
  error: null,
  loading: false
};

// ********************* GET_KPI_DEFINITIONS ******************************
export const GET_KPI_DEFINITIONS_PENDING = {
  type: 'GET_KPI_DEFINITIONS_PENDING',
  payload: []
};

export const GET_KPI_DEFINITIONS_SUCCESS = {
  type: 'GET_KPI_DEFINITIONS_SUCCESS',
  payload: [INIT_KPI_DEFINITIONS]
};

export const GET_KPI_DEFINITIONS_FAIL = {
  type: 'GET_KPI_DEFINITIONS_FAIL',
  payload: SERVER_ERROR
};

// ********************* CREATE_KPI_DEFINITIONS ******************************
export const CREATE_KPI_DEFINITIONS_PENDING = {
  type: 'CREATE_KPI_DEFINITIONS_PENDING',
  payload: []
};

export const CREATE_KPI_DEFINITIONS_SUCCESS = {
  type: 'CREATE_KPI_DEFINITIONS_SUCCESS',
  payload: INIT_KPI_DEFINITIONS
};

export const CREATE_KPI_DEFINITIONS_FAIL = {
  type: 'CREATE_KPI_DEFINITIONS_FAIL',
  payload: SERVER_ERROR
};

// ********************* UPDATE_KPI_DEFINITIONS ******************************
export const UPDATE_KPI_DEFINITIONS_PENDING = {
  type: 'UPDATE_KPI_DEFINITIONS_PENDING',
  payload: []
};

export const UPDATE_KPI_DEFINITIONS_SUCCESS = {
  type: 'UPDATE_KPI_DEFINITIONS_SUCCESS',
  payload: UPDATED_KPI_DEFINITIONS,
  meta: [INIT_KPI_DEFINITIONS]
};

export const UPDATE_KPI_DEFINITIONS_FAIL = {
  type: 'UPDATE_KPI_DEFINITIONS_FAIL',
  payload: SERVER_ERROR
};

// ********************* DELETE_KPI_DEFINITIONS ******************************
export const DELETE_KPI_DEFINITIONS_PENDING = {
  type: 'DELETE_KPI_DEFINITIONS_PENDING',
  payload: []
};

export const DELETE_KPI_DEFINITIONS_SUCCESS = {
  type: 'DELETE_KPI_DEFINITIONS_SUCCESS',
  payload: [],
  meta: [INIT_KPI_DEFINITIONS.id]
};

export const DELETE_KPI_DEFINITIONS_FAIL = {
  type: 'DELETE_KPI_DEFINITIONS_FAIL',
  payload: SERVER_ERROR
};

// ********************* DELETE_KPI_DEFINITIONS_MULTIPLY ******************************
export const DELETE_KPI_DEFINITIONS_MULTIPLY_PENDING = {
  type: 'DELETE_KPI_DEFINITIONS_PENDING',
  payload: []
};

export const DELETE_KPI_DEFINITIONS_MULTIPLY_SUCCESS = {
  type: 'DELETE_KPI_DEFINITIONS_SUCCESS',
  payload: [],
  meta: [[INIT_KPI_DEFINITIONS.id, SECOND_KPI_DEFINITIONS.id]]
};

export const DELETE_KPI_DEFINITIONS_MULTIPLY_FAIL = {
  type: 'DELETE_KPI_DEFINITIONS_FAIL',
  payload: SERVER_ERROR
};
