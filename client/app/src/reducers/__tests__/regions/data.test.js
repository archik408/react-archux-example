const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const REGIONS = [
  {
    id: '1',
    name: 'region name 1'
  },
  {
    id: '2',
    name: 'region name 2'
  }
];
const [REGION] = REGIONS;

// ********************* GET_REGIONS ******************************
export const GET_REGIONS_PENDING = {
  type: 'GET_REGIONS_PENDING',
  payload: []
};

export const GET_REGIONS_SUCCESS = {
  type: 'GET_REGIONS_SUCCESS',
  payload: REGIONS
};

export const GET_REGIONS_FAIL = {
  type: 'GET_REGIONS_FAIL',
  payload: SERVER_ERROR
};

export const GET_REGIONS_FAIL_WITHOUT_ERR = {
  type: 'GET_REGIONS_FAIL'
};

// ********************* CREATE_REGION ******************************
export const CREATE_REGION_PENDING = {
  type: 'CREATE_REGION_PENDING',
  payload: []
};

export const CREATE_REGION_SUCCESS = {
  type: 'CREATE_REGION_SUCCESS',
  payload: REGION
};

export const CREATE_REGION_FAIL = {
  type: 'CREATE_REGION_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_REGION_FAIL_WITHOUT_ERR = {
  type: 'CREATE_REGION_FAIL'
};

// ********************* UPDATE_REGION ******************************
export const UPDATE_REGION_PENDING = {
  type: 'UPDATE_REGION_PENDING',
  payload: []
};

export const UPDATE_REGION_SUCCESS = {
  type: 'UPDATE_REGION_SUCCESS',
  payload: { ...REGION, name: 'updated region name 1' }
};

export const UPDATE_REGION_FAIL = {
  type: 'UPDATE_REGION_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_REGION_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_REGION_FAIL'
};

// ********************* DELETE_REGIONS ******************************
export const DELETE_REGIONS_PENDING = {
  type: 'DELETE_REGIONS_PENDING',
  payload: null
};

export const DELETE_REGIONS_SUCCESS = {
  type: 'DELETE_REGIONS_SUCCESS',
  payload: { count: 1 },
  meta: [[REGION.id]]
};

export const DELETE_REGIONS_FAIL = {
  type: 'DELETE_REGIONS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_REGIONS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_REGIONS_FAIL'
};
