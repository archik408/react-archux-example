const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const COUNTRIES = [
  {
    id: '1',
    name: 'country name 1'
  },
  {
    id: '2',
    name: 'country name 2'
  }
];
const [COUNTRY] = COUNTRIES;

// ********************* GET_COUNTRIES ******************************
export const GET_COUNTRIES_PENDING = {
  type: 'GET_COUNTRIES_PENDING',
  payload: []
};

export const GET_COUNTRIES_SUCCESS = {
  type: 'GET_COUNTRIES_SUCCESS',
  payload: COUNTRIES
};

export const GET_COUNTRIES_FAIL = {
  type: 'GET_COUNTRIES_FAIL',
  payload: SERVER_ERROR
};

export const GET_COUNTRIES_FAIL_WITHOUT_ERR = {
  type: 'GET_COUNTRIES_FAIL'
};

// ********************* CREATE_COUNTRY ******************************
export const CREATE_COUNTRY_PENDING = {
  type: 'CREATE_COUNTRY_PENDING',
  payload: []
};

export const CREATE_COUNTRY_SUCCESS = {
  type: 'CREATE_COUNTRY_SUCCESS',
  payload: COUNTRY
};

export const CREATE_COUNTRY_FAIL = {
  type: 'CREATE_COUNTRY_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_COUNTRY_FAIL_WITHOUT_ERR = {
  type: 'CREATE_COUNTRY_FAIL'
};

// ********************* UPDATE_COUNTRY ******************************
export const UPDATE_COUNTRY_PENDING = {
  type: 'UPDATE_COUNTRY_PENDING',
  payload: []
};

export const UPDATE_COUNTRY_SUCCESS = {
  type: 'UPDATE_COUNTRY_SUCCESS',
  payload: { ...COUNTRY, name: 'updated country name 1' }
};

export const UPDATE_COUNTRY_FAIL = {
  type: 'UPDATE_COUNTRY_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_COUNTRY_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_COUNTRY_FAIL'
};

// ********************* DELETE_COUNTRIES ******************************
export const DELETE_COUNTRIES_PENDING = {
  type: 'DELETE_COUNTRIES_PENDING',
  payload: null
};

export const DELETE_COUNTRIES_SUCCESS = {
  type: 'DELETE_COUNTRIES_SUCCESS',
  payload: { count: 1 },
  meta: [[COUNTRY.id]]
};

export const DELETE_COUNTRIES_FAIL = {
  type: 'DELETE_COUNTRIES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_COUNTRIES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_COUNTRIES_FAIL'
};
