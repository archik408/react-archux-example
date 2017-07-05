const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const COMPANIES = [
  {
    id: '1',
    name: 'company name 1'
  },
  {
    id: '2',
    name: 'company name 2'
  }
];
const [COMPANY] = COMPANIES;

// ********************* GET_COMPANIES ******************************
export const GET_COMPANIES_PENDING = {
  type: 'GET_COMPANIES_PENDING',
  payload: []
};

export const GET_COMPANIES_SUCCESS = {
  type: 'GET_COMPANIES_SUCCESS',
  payload: COMPANIES
};

export const GET_COMPANIES_FAIL = {
  type: 'GET_COMPANIES_FAIL',
  payload: SERVER_ERROR
};

export const GET_COMPANIES_FAIL_WITHOUT_ERR = {
  type: 'GET_COMPANIES_FAIL'
};

// ********************* CREATE_COMPANY ******************************
export const CREATE_COMPANY_PENDING = {
  type: 'CREATE_COMPANY_PENDING',
  payload: []
};

export const CREATE_COMPANY_SUCCESS = {
  type: 'CREATE_COMPANY_SUCCESS',
  payload: COMPANY
};

export const CREATE_COMPANY_FAIL = {
  type: 'CREATE_COMPANY_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_COMPANY_FAIL_WITHOUT_ERR = {
  type: 'CREATE_COMPANY_FAIL'
};

// ********************* UPDATE_COMPANY ******************************
export const UPDATE_COMPANY_PENDING = {
  type: 'UPDATE_COMPANY_PENDING',
  payload: []
};

export const UPDATE_COMPANY_SUCCESS = {
  type: 'UPDATE_COMPANY_SUCCESS',
  payload: { ...COMPANY, name: 'updated company name 1' }
};

export const UPDATE_COMPANY_FAIL = {
  type: 'UPDATE_COMPANY_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_COMPANY_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_COMPANY_FAIL'
};

// ********************* DELETE_COMPANIES ******************************
export const DELETE_COMPANIES_PENDING = {
  type: 'DELETE_COMPANIES_PENDING',
  payload: null
};

export const DELETE_COMPANIES_SUCCESS = {
  type: 'DELETE_COMPANIES_SUCCESS',
  payload: { count: 1 },
  meta: [[COMPANY.id]]
};

export const DELETE_COMPANIES_FAIL = {
  type: 'DELETE_COMPANIES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_COMPANIES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_COMPANIES_FAIL'
};
