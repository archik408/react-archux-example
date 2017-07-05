const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const SUB_SECTORS = [
  {
    id: '1',
    name: 'sub sector name 1'
  },
  {
    id: '2',
    name: 'sub sector name 2'
  }
];
const [SUB_SECTOR] = SUB_SECTORS;

// ********************* GET_SUB_SECTORS ******************************
export const GET_SUB_SECTORS_PENDING = {
  type: 'GET_SUB_SECTORS_PENDING',
  payload: []
};

export const GET_SUB_SECTORS_SUCCESS = {
  type: 'GET_SUB_SECTORS_SUCCESS',
  payload: SUB_SECTORS
};

export const GET_SUB_SECTORS_FAIL = {
  type: 'GET_SUB_SECTORS_FAIL',
  payload: SERVER_ERROR
};

export const GET_SUB_SECTORS_FAIL_WITHOUT_ERR = {
  type: 'GET_SUB_SECTORS_FAIL'
};

// ********************* CREATE_SUB_SECTOR ******************************
export const CREATE_SUB_SECTOR_PENDING = {
  type: 'CREATE_SUB_SECTOR_PENDING',
  payload: []
};

export const CREATE_SUB_SECTOR_SUCCESS = {
  type: 'CREATE_SUB_SECTOR_SUCCESS',
  payload: SUB_SECTOR
};

export const CREATE_SUB_SECTOR_FAIL = {
  type: 'CREATE_SUB_SECTOR_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_SUB_SECTOR_FAIL_WITHOUT_ERR = {
  type: 'CREATE_SUB_SECTOR_FAIL'
};

// ********************* UPDATE_SUB_SECTOR ******************************
export const UPDATE_SUB_SECTOR_PENDING = {
  type: 'UPDATE_SUB_SECTOR_PENDING',
  payload: []
};

export const UPDATE_SUB_SECTOR_SUCCESS = {
  type: 'UPDATE_SUB_SECTOR_SUCCESS',
  payload: { ...SUB_SECTOR, name: 'updated sub sector name 1' }
};

export const UPDATE_SUB_SECTOR_FAIL = {
  type: 'UPDATE_SUB_SECTOR_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_SUB_SECTOR_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_SUB_SECTOR_FAIL'
};

// ********************* DELETE_SUB_SECTORS ******************************
export const DELETE_SUB_SECTORS_PENDING = {
  type: 'DELETE_SUB_SECTORS_PENDING',
  payload: null
};

export const DELETE_SUB_SECTORS_SUCCESS = {
  type: 'DELETE_SUB_SECTORS_SUCCESS',
  payload: { count: 1 },
  meta: [[SUB_SECTOR.id]]
};

export const DELETE_SUB_SECTORS_FAIL = {
  type: 'DELETE_SUB_SECTORS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_SUB_SECTORS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_SUB_SECTORS_FAIL'
};
