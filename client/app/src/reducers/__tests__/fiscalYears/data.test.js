const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};

export const FISCAL_YEARS = [
  {
    id: '1',
    year: 2014
  },
  {
    id: '2',
    year: 2015
  }
];

const [FISCAL_YEAR] = FISCAL_YEARS;

export const INIT_STATE = {
  fiscalYears: { data: [], error: null, loading: false }
};

// ********************* GET_FISCAL_YEARS ******************************
export const GET_FISCAL_YEARS_PENDING = {
  type: 'GET_FISCAL_YEARS_PENDING',
  payload: []
};

export const GET_FISCAL_YEARS_SUCCESS = {
  type: 'GET_FISCAL_YEARS_SUCCESS',
  payload: FISCAL_YEARS
};

export const GET_FISCAL_YEARS_FAIL = {
  type: 'GET_FISCAL_YEARS_FAIL',
  payload: SERVER_ERROR
};
// ********************* CREATE_FISCAL_YEAR ******************************
export const CREATE_FISCAL_YEAR_PENDING = {
  type: 'CREATE_FISCAL_YEAR_PENDING',
  payload: []
};

export const CREATE_FISCAL_YEAR_SUCCESS = {
  type: 'CREATE_FISCAL_YEAR_SUCCESS',
  payload: FISCAL_YEAR
};

export const CREATE_FISCAL_YEAR_FAIL = {
  type: 'CREATE_FISCAL_YEAR_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_FISCAL_YEAR_FAIL_WITHOUT_ERR = {
  type: 'CREATE_FISCAL_YEAR_FAIL'
};

// ********************* UPDATE_FISCAL_YEAR ******************************
export const UPDATE_FISCAL_YEAR_PENDING = {
  type: 'UPDATE_FISCAL_YEAR_PENDING',
  payload: []
};

export const UPDATE_FISCAL_YEAR_SUCCESS = {
  type: 'UPDATE_FISCAL_YEAR_SUCCESS',
  payload: { ...FISCAL_YEAR, name: 'updated fiscal year name 1' }
};

export const UPDATE_FISCAL_YEAR_FAIL = {
  type: 'UPDATE_FISCAL_YEAR_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_FISCAL_YEAR_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_FISCAL_YEAR_FAIL'
};

// ********************* DELETE_FISCAL_YEARS ******************************
export const DELETE_FISCAL_YEARS_PENDING = {
  type: 'DELETE_FISCAL_YEARS_PENDING',
  payload: null
};

export const DELETE_FISCAL_YEARS_SUCCESS = {
  type: 'DELETE_FISCAL_YEARS_SUCCESS',
  payload: { count: 1 },
  meta: [[FISCAL_YEAR.id]]
};

export const DELETE_FISCAL_YEARS_FAIL = {
  type: 'DELETE_FISCAL_YEARS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_FISCAL_YEARS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_FISCAL_YEARS_FAIL'
};
