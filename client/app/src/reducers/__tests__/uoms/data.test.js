const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const UOMS = [
  {
    id: '1',
    name: 'uom name 1'
  },
  {
    id: '2',
    name: 'uom name 2'
  }
];
const [UOM] = UOMS;

// ********************* GET_UOMS ******************************
export const GET_UOMS_PENDING = {
  type: 'GET_UOMS_PENDING',
  payload: []
};

export const GET_UOMS_SUCCESS = {
  type: 'GET_UOMS_SUCCESS',
  payload: UOMS
};

export const GET_UOMS_FAIL = {
  type: 'GET_UOMS_FAIL',
  payload: SERVER_ERROR
};

export const GET_UOMS_FAIL_WITHOUT_ERR = {
  type: 'GET_UOMS_FAIL'
};

// ********************* CREATE_UOM ******************************
export const CREATE_UOM_PENDING = {
  type: 'CREATE_UOM_PENDING',
  payload: []
};

export const CREATE_UOM_SUCCESS = {
  type: 'CREATE_UOM_SUCCESS',
  payload: UOM
};

export const CREATE_UOM_FAIL = {
  type: 'CREATE_UOM_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_UOM_FAIL_WITHOUT_ERR = {
  type: 'CREATE_UOM_FAIL'
};

// ********************* UPDATE_UOM ******************************
export const UPDATE_UOM_PENDING = {
  type: 'UPDATE_UOM_PENDING',
  payload: []
};

export const UPDATE_UOM_SUCCESS = {
  type: 'UPDATE_UOM_SUCCESS',
  payload: { ...UOM, name: 'updated uom name 1' }
};

export const UPDATE_UOM_FAIL = {
  type: 'UPDATE_UOM_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_UOM_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_UOM_FAIL'
};

// ********************* DELETE_UOMS ******************************
export const DELETE_UOMS_PENDING = {
  type: 'DELETE_UOMS_PENDING',
  payload: null
};

export const DELETE_UOMS_SUCCESS = {
  type: 'DELETE_UOMS_SUCCESS',
  payload: { count: 1 },
  meta: [[UOM.id]]
};

export const DELETE_UOMS_FAIL = {
  type: 'DELETE_UOMS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_UOMS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_UOMS_FAIL'
};
