const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const PROJECT_STATUSES = [
  {
    id: '1',
    name: 'project status name 1'
  },
  {
    id: '2',
    name: 'project status name 2'
  }
];
const [PROJECT_STATUS] = PROJECT_STATUSES;

// ********************* GET_PROJECT_STATUSES ******************************
export const GET_PROJECT_STATUSES_PENDING = {
  type: 'GET_PROJECT_STATUSES_PENDING',
  payload: []
};

export const GET_PROJECT_STATUSES_SUCCESS = {
  type: 'GET_PROJECT_STATUSES_SUCCESS',
  payload: PROJECT_STATUSES
};

export const GET_PROJECT_STATUSES_FAIL = {
  type: 'GET_PROJECT_STATUSES_FAIL',
  payload: SERVER_ERROR
};

export const GET_PROJECT_STATUSES_FAIL_WITHOUT_ERR = {
  type: 'GET_PROJECT_STATUSES_FAIL'
};

// ********************* CREATE_PROJECT_STATUS ******************************
export const CREATE_PROJECT_STATUS_PENDING = {
  type: 'CREATE_PROJECT_STATUS_PENDING',
  payload: []
};

export const CREATE_PROJECT_STATUS_SUCCESS = {
  type: 'CREATE_PROJECT_STATUS_SUCCESS',
  payload: PROJECT_STATUS
};

export const CREATE_PROJECT_STATUS_FAIL = {
  type: 'CREATE_PROJECT_STATUS_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_PROJECT_STATUS_FAIL_WITHOUT_ERR = {
  type: 'CREATE_PROJECT_STATUS_FAIL'
};

// ********************* UPDATE_PROJECT_STATUS ******************************
export const UPDATE_PROJECT_STATUS_PENDING = {
  type: 'UPDATE_PROJECT_STATUS_PENDING',
  payload: []
};

export const UPDATE_PROJECT_STATUS_SUCCESS = {
  type: 'UPDATE_PROJECT_STATUS_SUCCESS',
  payload: { ...PROJECT_STATUS, name: 'updated project status name 1' }
};

export const UPDATE_PROJECT_STATUS_FAIL = {
  type: 'UPDATE_PROJECT_STATUS_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_PROJECT_STATUS_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_PROJECT_STATUS_FAIL'
};

// ********************* DELETE_PROJECT_STATUSES ******************************
export const DELETE_PROJECT_STATUSES_PENDING = {
  type: 'DELETE_PROJECT_STATUSES_PENDING',
  payload: null
};

export const DELETE_PROJECT_STATUSES_SUCCESS = {
  type: 'DELETE_PROJECT_STATUSES_SUCCESS',
  payload: { count: 1 },
  meta: [[PROJECT_STATUS.id]]
};

export const DELETE_PROJECT_STATUSES_FAIL = {
  type: 'DELETE_PROJECT_STATUSES_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_PROJECT_STATUSES_FAIL_WITHOUT_ERR = {
  type: 'DELETE_PROJECT_STATUSES_FAIL'
};
