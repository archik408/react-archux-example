const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const GRANULAR_SECTORS = [
  {
    id: '1',
    name: 'granular sector name 1'
  },
  {
    id: '2',
    name: 'granular sector name 2'
  }
];
const [GRANULAR_SECTOR] = GRANULAR_SECTORS;

// ********************* GET_GRANULAR_SECTORS ******************************
export const GET_GRANULAR_SECTORS_PENDING = {
  type: 'GET_GRANULAR_SECTORS_PENDING',
  payload: []
};

export const GET_GRANULAR_SECTORS_SUCCESS = {
  type: 'GET_GRANULAR_SECTORS_SUCCESS',
  payload: GRANULAR_SECTORS
};

export const GET_GRANULAR_SECTORS_FAIL = {
  type: 'GET_GRANULAR_SECTORS_FAIL',
  payload: SERVER_ERROR
};

export const GET_GRANULAR_SECTORS_FAIL_WITHOUT_ERR = {
  type: 'GET_GRANULAR_SECTORS_FAIL'
};

// ********************* CREATE_GRANULAR_SECTOR ******************************
export const CREATE_GRANULAR_SECTOR_PENDING = {
  type: 'CREATE_GRANULAR_SECTOR_PENDING',
  payload: []
};

export const CREATE_GRANULAR_SECTOR_SUCCESS = {
  type: 'CREATE_GRANULAR_SECTOR_SUCCESS',
  payload: GRANULAR_SECTOR
};

export const CREATE_GRANULAR_SECTOR_FAIL = {
  type: 'CREATE_GRANULAR_SECTOR_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_GRANULAR_SECTOR_FAIL_WITHOUT_ERR = {
  type: 'CREATE_GRANULAR_SECTOR_FAIL'
};

// ********************* UPDATE_GRANULAR_SECTOR ******************************
export const UPDATE_GRANULAR_SECTOR_PENDING = {
  type: 'UPDATE_GRANULAR_SECTOR_PENDING',
  payload: []
};

export const UPDATE_GRANULAR_SECTOR_SUCCESS = {
  type: 'UPDATE_GRANULAR_SECTOR_SUCCESS',
  payload: { ...GRANULAR_SECTOR, name: 'updated granular sector name 1' }
};

export const UPDATE_GRANULAR_SECTOR_FAIL = {
  type: 'UPDATE_GRANULAR_SECTOR_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_GRANULAR_SECTOR_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_GRANULAR_SECTOR_FAIL'
};

// ********************* DELETE_GRANULAR_SECTORS ******************************
export const DELETE_GRANULAR_SECTORS_PENDING = {
  type: 'DELETE_GRANULAR_SECTORS_PENDING',
  payload: null
};

export const DELETE_GRANULAR_SECTORS_SUCCESS = {
  type: 'DELETE_GRANULAR_SECTORS_SUCCESS',
  payload: { count: 1 },
  meta: [[GRANULAR_SECTOR.id]]
};

export const DELETE_GRANULAR_SECTORS_FAIL = {
  type: 'DELETE_GRANULAR_SECTORS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_GRANULAR_SECTORS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_GRANULAR_SECTORS_FAIL'
};
