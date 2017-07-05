const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};

export const CURRENCIES = [
  {
    id: '1',
    name: 'USD'
  },
  {
    id: '2',
    name: 'EUR'
  }
];

const [CURRENCY] = CURRENCIES;

// ********************* GET_CURRENCIES ******************************
export const GET_CURRENCIES_PENDING = {
  type: 'GET_CURRENCIES_PENDING',
  payload: []
};

export const GET_CURRENCIES_SUCCESS = {
  type: 'GET_CURRENCIES_SUCCESS',
  payload: CURRENCIES
};

export const GET_CURRENCIES_FAIL = {
  type: 'GET_CURRENCIES_FAIL',
  payload: SERVER_ERROR
};

export const GET_CURRENCIES_FAIL_WITHOUT_ERR = {
  type: 'GET_CURRENCIES_FAIL'
};
// ********************* CREATE_CURRENCY ******************************
export const CREATE_CURRENCY_PENDING = {
  type: 'CREATE_CURRENCY_PENDING',
  payload: []
};

export const CREATE_CURRENCY_SUCCESS = {
  type: 'CREATE_CURRENCY_SUCCESS',
  payload: CURRENCY
};

export const CREATE_CURRENCY_FAIL = {
  type: 'CREATE_CURRENCY_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_CURRENCY_FAIL_WITHOUT_ERR = {
  type: 'CREATE_CURRENCY_FAIL'
};

// ********************* UPDATE_CCURRENCY ******************************
export const UPDATE_CURRENCY_PENDING = {
  type: 'UPDATE_CURRENCY_PENDING',
  payload: []
};

export const UPDATE_CURRENCY_SUCCESS = {
  type: 'UPDATE_CURRENCY_SUCCESS',
  payload: { ...CURRENCY, name: 'updated currency name 1' }
};

export const UPDATE_CURRENCY_FAIL = {
  type: 'UPDATE_CURRENCY_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_CURRENCY_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_CURRENCY_FAIL'
};

// ********************* DELETE_CURRENCIES ******************************
export const DELETE_CURRENCIES_PENDING = {
  type: 'DELETE_CURRENCIES_PENDING',
  payload: null
};

export const DELETE_CURRENCIES_SUCCESS = {
  type: 'DELETE_CURRENCIES_SUCCESS',
  payload: { count: 1 },
  meta: [[CURRENCY.id]]
};

export const DELETE_CURRENCIES_FAIL = {
  type: 'DELETE_CURRENCIES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_CURRENCIES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_CURRENCIES_FAIL'
};

