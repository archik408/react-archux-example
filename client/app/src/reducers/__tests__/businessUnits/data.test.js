const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const BUSINESS_UNITS = [
  {
    id: '1',
    name: 'businessUnit name 1'
  },
  {
    id: '2',
    name: 'businessUnit name 2'
  }
];
const [BUSINESS_UNIT] = BUSINESS_UNITS;

// ********************* GET_BUSINESS_UNITS ******************************
export const GET_BUSINESS_UNITS_PENDING = {
  type: 'GET_BUSINESS_UNITS_PENDING',
  payload: []
};

export const GET_BUSINESS_UNITS_SUCCESS = {
  type: 'GET_BUSINESS_UNITS_SUCCESS',
  payload: BUSINESS_UNITS
};

export const GET_BUSINESS_UNITS_FAIL = {
  type: 'GET_BUSINESS_UNITS_FAIL',
  payload: SERVER_ERROR
};

export const GET_BUSINESS_UNITS_FAIL_WITHOUT_ERR = {
  type: 'GET_BUSINESS_UNITS_FAIL'
};

// ********************* CREATE_BUSINESS_UNIT ******************************
export const CREATE_BUSINESS_UNIT_PENDING = {
  type: 'CREATE_BUSINESS_UNIT_PENDING',
  payload: []
};

export const CREATE_BUSINESS_UNIT_SUCCESS = {
  type: 'CREATE_BUSINESS_UNIT_SUCCESS',
  payload: BUSINESS_UNIT
};

export const CREATE_BUSINESS_UNIT_FAIL = {
  type: 'CREATE_BUSINESS_UNIT_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_BUSINESS_UNIT_FAIL_WITHOUT_ERR = {
  type: 'CREATE_BUSINESS_UNIT_FAIL'
};

// ********************* UPDATE_BUSINESS_UNIT ******************************
export const UPDATE_BUSINESS_UNIT_PENDING = {
  type: 'UPDATE_BUSINESS_UNIT_PENDING',
  payload: []
};

export const UPDATE_BUSINESS_UNIT_SUCCESS = {
  type: 'UPDATE_BUSINESS_UNIT_SUCCESS',
  payload: { ...BUSINESS_UNIT, name: 'updated businessUnit name 1' }
};

export const UPDATE_BUSINESS_UNIT_FAIL = {
  type: 'UPDATE_BUSINESS_UNIT_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_BUSINESS_UNIT_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_BUSINESS_UNIT_FAIL'
};

// ********************* DELETE_BUSINESS_UNITS ******************************
export const DELETE_BUSINESS_UNITS_PENDING = {
  type: 'DELETE_BUSINESS_UNITS_PENDING',
  payload: null
};

export const DELETE_BUSINESS_UNITS_SUCCESS = {
  type: 'DELETE_BUSINESS_UNITS_SUCCESS',
  payload: { count: 1 },
  meta: [[BUSINESS_UNIT.id]]
};

export const DELETE_BUSINESS_UNITS_FAIL = {
  type: 'DELETE_BUSINESS_UNITS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_BUSINESS_UNITS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_BUSINESS_UNITS_FAIL'
};
