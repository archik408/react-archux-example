const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const SECTORS = [
  {
    id: '1',
    name: 'sector name 1'
  },
  {
    id: '2',
    name: 'sector name 2'
  }
];
const [SECTOR] = SECTORS;

// ********************* GET_SECTORS ******************************
export const GET_SECTORS_PENDING = {
  type: 'GET_SECTORS_PENDING',
  payload: []
};

export const GET_SECTORS_SUCCESS = {
  type: 'GET_SECTORS_SUCCESS',
  payload: SECTORS
};

export const GET_SECTORS_FAIL = {
  type: 'GET_SECTORS_FAIL',
  payload: SERVER_ERROR
};

export const GET_SECTORS_FAIL_WITHOUT_ERR = {
  type: 'GET_SECTORS_FAIL'
};

// ********************* CREATE_SECTOR ******************************
export const CREATE_SECTOR_PENDING = {
  type: 'CREATE_SECTOR_PENDING',
  payload: []
};

export const CREATE_SECTOR_SUCCESS = {
  type: 'CREATE_SECTOR_SUCCESS',
  payload: SECTOR
};

export const CREATE_SECTOR_FAIL = {
  type: 'CREATE_SECTOR_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_SECTOR_FAIL_WITHOUT_ERR = {
  type: 'CREATE_SECTOR_FAIL'
};

// ********************* UPDATE_SECTOR ******************************
export const UPDATE_SECTOR_PENDING = {
  type: 'UPDATE_SECTOR_PENDING',
  payload: []
};

export const UPDATE_SECTOR_SUCCESS = {
  type: 'UPDATE_SECTOR_SUCCESS',
  payload: { ...SECTOR, name: 'updated sector name 1' }
};

export const UPDATE_SECTOR_FAIL = {
  type: 'UPDATE_SECTOR_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_SECTOR_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_SECTOR_FAIL'
};

// ********************* DELETE_SECTORS ******************************
export const DELETE_SECTORS_PENDING = {
  type: 'DELETE_SECTORS_PENDING',
  payload: null
};

export const DELETE_SECTORS_SUCCESS = {
  type: 'DELETE_SECTORS_SUCCESS',
  payload: { count: 1 },
  meta: [[SECTOR.id]]
};

export const DELETE_SECTORS_FAIL = {
  type: 'DELETE_SECTORS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_SECTORS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_SECTORS_FAIL'
};
