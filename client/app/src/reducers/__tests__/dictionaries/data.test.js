export const INIT_STATE = {
  deploymentTypes: { data: [], error: null, loading: false },
  projectStatuses: { data: [], error: null, loading: false },
  projectTypes: { data: [], error: null, loading: false }
};

export const GET_PROJECT_TYPES_FAIL = {
  type: 'GET_PROJECT_TYPES_FAIL',
  payload: {
    message: 'Error'
  }
};

export const GET_PROJECT_TYPES_PENDING = {
  type: 'GET_PROJECT_TYPES_PENDING'
};

export const GET_PROJECT_TYPES_SUCCESS = {
  type: 'GET_PROJECT_TYPES_SUCCESS',
  payload: [
    {
      name: 'Project Type 1',
      projectStatuses: [
        {
          id: 1,
          name: 'Benchmark',
          projectTypeId: 1
        },
        {
          id: 2,
          name: 'Report',
          projectTypeId: 1
        }
      ],
      deploymentTypes: [
        {
          id: 1,
          name: 'Pulse',
          projectTypeId: 1
        }
      ]
    }
  ]
};

export const GET_SECTORS_PENDING = {
  type: 'GET_SECTORS_PENDING'
};

export const GET_SECTORS_SUCCESS = {
  type: 'GET_SECTORS_SUCCESS',
  payload: [
    {
      name: 'Telecommunications',
      id: 1
    },
    {
      name: 'High Tech',
      id: 2
    }
  ]
};

export const GET_SECTORS_FAIL = {
  type: 'GET_SECTORS_FAIL',
  payload: {
    message: 'Error'
  }
};

// ********************* GET_GRANULAR_SECTORS ******************************
export const GET_GRANULAR_SECTORS_PENDING = {
  type: 'GET_GRANULAR_SECTORS_PENDING'
};

export const GET_GRANULAR_SECTORS_SUCCESS = {
  type: 'GET_GRANULAR_SECTORS_SUCCESS',
  payload: [
    {
      id: '1666sdds5d-7b35-435a-81f0-ae0f33e2283b',
      name: 'Granular sector 1'
    },
    {
      id: '1ebfsdsdse-23af-4498-a43f-23138c07e578',
      name: 'Granular sector 2'
    }
  ]
};

export const GET_GRANULAR_SECTORS_FAIL = {
  type: 'GET_GRANULAR_SECTORS_FAIL',
  payload: {
    message: 'Error'
  }
};

// ********************* GET_COUNTRIES ******************************
export const GET_COUNTRIES_PENDING = {
  type: 'GET_COUNTRIES_PENDING'
};

export const GET_COUNTRIES_SUCCESS = {
  type: 'GET_COUNTRIES_SUCCESS',
  payload: [
    {
      id: '01b6f807-0a1a-4853-bcac-ea4b205c6bc4',
      name: 'Zimbabwe'
    },
    {
      id: '01c52a21-a2ed-4778-8149-7f2e92d83bf0',
      name: 'South Africa'
    }
  ]
};

export const GET_COUNTRIES_FAIL = {
  type: 'GET_COUNTRIES_FAIL',
  payload: {
    message: 'Error'
  }
};
