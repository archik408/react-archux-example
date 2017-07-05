const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const CUSTOMER_SEGMENTS = [
  {
    id: '1',
    name: 'cs 1'
  },
  {
    id: '2',
    name: 'cs 2'
  }
];
const [CUSTOMER_SEGMENT] = CUSTOMER_SEGMENTS;

// ********************* GET_CUSTOMER_SEGMENTS ******************************
export const GET_CUSTOMER_SEGMENTS_PENDING = {
  type: 'GET_CUSTOMER_SEGMENTS_PENDING',
  payload: []
};

export const GET_CUSTOMER_SEGMENTS_SUCCESS = {
  type: 'GET_CUSTOMER_SEGMENTS_SUCCESS',
  payload: CUSTOMER_SEGMENTS
};

export const GET_CUSTOMER_SEGMENTS_FAIL = {
  type: 'GET_CUSTOMER_SEGMENTS_FAIL',
  payload: SERVER_ERROR
};

export const GET_CUSTOMER_SEGMENTS_FAIL_WITHOUT_ERR = {
  type: 'GET_CUSTOMER_SEGMENTS_FAIL'
};

// ********************* CREATE_CUSTOMER_SEGMENT ******************************
export const CREATE_CUSTOMER_SEGMENT_PENDING = {
  type: 'CREATE_CUSTOMER_SEGMENT_PENDING',
  payload: []
};

export const CREATE_CUSTOMER_SEGMENT_SUCCESS = {
  type: 'CREATE_CUSTOMER_SEGMENT_SUCCESS',
  payload: CUSTOMER_SEGMENT
};

export const CREATE_CUSTOMER_SEGMENT_FAIL = {
  type: 'CREATE_CUSTOMER_SEGMENT_FAIL',
  payload: SERVER_ERROR
};

export const CREATE_CUSTOMER_SEGMENT_FAIL_WITHOUT_ERR = {
  type: 'CREATE_CUSTOMER_SEGMENT_FAIL'
};

// ********************* UPDATE_CUSTOMER_SEGMENT ******************************
export const UPDATE_CUSTOMER_SEGMENT_PENDING = {
  type: 'UPDATE_CUSTOMER_SEGMENT_PENDING',
  payload: []
};

export const UPDATE_CUSTOMER_SEGMENT_SUCCESS = {
  type: 'UPDATE_CUSTOMER_SEGMENT_SUCCESS',
  payload: { ...CUSTOMER_SEGMENT, name: 'updated customer segment name 1' }
};

export const UPDATE_CUSTOMER_SEGMENT_FAIL = {
  type: 'UPDATE_CUSTOMER_SEGMENT_FAIL',
  payload: SERVER_ERROR
};

export const UPDATE_CUSTOMER_SEGMENT_FAIL_WITHOUT_ERR = {
  type: 'UPDATE_CUSTOMER_SEGMENT_FAIL'
};

// ********************* DELETE_CUSTOMER_SEGMENTS ******************************
export const DELETE_CUSTOMER_SEGMENTS_PENDING = {
  type: 'DELETE_CUSTOMER_SEGMENTS_PENDING',
  payload: null
};

export const DELETE_CUSTOMER_SEGMENTS_SUCCESS = {
  type: 'DELETE_CUSTOMER_SEGMENTS_SUCCESS',
  payload: { count: 1 },
  meta: [[CUSTOMER_SEGMENT.id]]
};

export const DELETE_CUSTOMER_SEGMENTS_FAIL = {
  type: 'DELETE_CUSTOMER_SEGMENTS_FAIL',
  payload: SERVER_ERROR
};

export const DELETE_CUSTOMER_SEGMENTS_FAIL_WITHOUT_ERR = {
  type: 'DELETE_CUSTOMER_SEGMENTS_FAIL'
};
