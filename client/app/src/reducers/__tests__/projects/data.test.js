export const INIT_STATE = {
  activeProjects: { data: [], error: null, loading: false },
  foundProjects: { data: [], error: null, loading: false },
  project: { data: {}, error: null, loading: false },
  loadedProjectData: { data: [], error: null, loading: false },
  modifiedProject: { data: {}, error: null, loading: false },
  deletedProject: { data: {}, error: null, loading: false },
  deletedProjectData: { data: {}, error: null, loading: false },
  updatedProjectData: { data: [], error: null, loading: false },
  projectData: { data: [], error: null, loading: false },
  createdProject: { data: {}, error: null, loading: false },
  updatedProject: { data: {}, error: null, loading: false },
  projectFilter: {
    search: {},
    sort: {
      field: 'creationDate',
      type: 'ASC'
    }
  },
  benchmark: { data: {}, error: null, loading: false },
  report: { data: {}, error: null, loading: false }
};

const SERVER_ERROR = {
  message: 'Error'
};

const DELETED_PROJECT_ID = '2b5fede6-e485-44df-b51e-6d06121174b8';
const MODIFIED_PROJECT_ID = '2b5fede6-e485-44df-b51e-6d06121174b8';

const PROJECT = {
  id: '2b5fede6-e485-44df-b51e-6d06121174b8',
  name: 'Project 3',
  creationDate: '2016-02-14T00:00:00.000Z',
  archived: false,
  owner: '824fc276-cc1d-489f-8496-996ce471ea88',
  cstContact: 'CST Contact 3',
  fiscalYear: 2016,
  fiscalYearDescription: 'Fiscal Year Description 2016',
  companyId: 'dea100ce-5ef4-4c68-abd5-3b7c0e14da33',
  projectTypeId: '3fefca32-3843-4e2a-8909-af0f80303747',
  deploymentTypeId: 'd40dbd44-9b22-4929-875e-2a07813933ef',
  projectStatusId: 'a5f37034-27d9-4f1c-af1d-22b238488a96',
  deploymentType: {
    id: 'd40dbd44-9b22-4929-875e-2a07813933ef',
    name: 'Standard',
    projectTypeId: '3fefca32-3843-4e2a-8909-af0f80303747'
  },
  projectStatus: {
    id: 'a5f37034-27d9-4f1c-af1d-22b238488a96',
    name: 'Reference Set Selection',
    projectTypeId: '3fefca32-3843-4e2a-8909-af0f80303747'
  }
};

const FOUND_PROJECT = {
  id: '2b5fede6-e485-44df-b51e-6d06121174b8',
  name: 'Project 1',
  creationDate: '2016-02-14T00:00:00.000Z',
  archived: false,
  owner: '824fc276-cc1d-489f-8496-996ce471ea88',
  cstContact: 'CST Contact 3',
  fiscalYear: 2016,
  fiscalYearDescription: 'Fiscal Year Description 2016',
  companyId: 'dea100ce-5ef4-4c68-abd5-3b7c0e14da33',
  projectTypeId: '3fefca32-3843-4e2a-8909-af0f80303747',
  deploymentTypeId: 'd40dbd44-9b22-4929-875e-2a07813933ef',
  projectStatusId: 'a5f37034-27d9-4f1c-af1d-22b238488a96',
  deploymentType: {
    id: 'd40dbd44-9b22-4929-875e-2a07813933ef',
    name: 'Standard',
    projectTypeId: '3fefca32-3843-4e2a-8909-af0f80303747'
  },
  projectStatus: {
    id: 'a5f37034-27d9-4f1c-af1d-22b238488a96',
    name: 'Reference Set Selection',
    projectTypeId: '3fefca32-3843-4e2a-8909-af0f80303747'
  }
};

const SEARCH_PARAMS = {
  search: {
    name: 'Project 1'
  },
  sort: {
    field: 'creationDate',
    type: 'ASC'
  }
};

const SORT_PARAMS = {
  sort: {
    field: 'name',
    type: 'DESC'
  }
};

const LOADED_PROJECT_DATA = [
  {
    id: '1',
    name: 'Input1',
    businessUnitId: 'c0f5aee0-2411-11e7-be3b-378963a5e175',
    businessLine: null,
    exchangeRate: 0.78,
    fiscalYearId: 'c0f4eb90-2411-11e7-be3b-378963a5e175',
    fiscalYearDesc: 'October-September',
    contactName: 'Tom Tomson',
    contactTitle: 'BA',
    contactPhone: null,
    contactEmail: 'test@test.com',
    projectId: '2b5fede6-e485-44df-b51e-6d06121174b8',
    sectorId: '846d2b51-2184-403d-a8ba-f1d59a25f3bd',
    subSectorId: 'bf38ff36-419d-4c09-ae15-7ed48dfa459d',
    granularSectorId: '1a7635be-95aa-4f48-becf-e91407101dfe',
    regionId: '88115a72-33ae-482f-9f0e-24f343912560',
    countryId: '513d4e99-c911-4e73-a881-5dd9b1344957',
    localCurrencyId: 'de5f4325-129e-4083-9a34-9d916611ecb8',
    offeringModelId: '50201b0b-e7b2-4cac-a3ab-ac9b7a0e6d0f',
    channelTypeId: '1262504d-4d18-44fb-8ba4-b505f8776706',
    customerSegmentId: 'd1b88265-f73b-4acd-a7ff-b44e1175f87a'
  }
];

const PROJECT_DATA = [
  {
    id: '3',
    name: 'Input1',
    businessUnit: {
      description: 'BU 1 description',
      id: 'a39ba330-20f2-11e7-b618-0175a06918a5',
      name: 'BU 1 name'
    },
    businessLine: null,
    exchangeRate: 0.78,
    fiscalYear: {
      id: 'a39b06f0-20f2-11e7-b618-0175a06918a5',
      year: 2014
    },
    fiscalYearDesc: 'October-September',
    contactName: 'Tom Tomson',
    contactTitle: 'BA',
    contactPhone: null,
    contactEmail: 'test@test.com',
    projectId: '6526d916-c2d5-4b6d-8e94-6043d6bca3b4',
    sectorId: '846d2b51-2184-403d-a8ba-f1d59a25f3bd',
    subSectorId: 'bf38ff36-419d-4c09-ae15-7ed48dfa459d',
    granularSectorId: '1a7635be-95aa-4f48-becf-e91407101dfe',
    regionId: '938f7aa0-fbca-4050-a5b4-57157244398c',
    countryId: '8dc0bc9a-8c5f-48f6-9157-259149dc2ba0',
    localCurrencyId: 'a3e9eedc-9c32-4fc4-9687-341dd8904b70',
    offeringModelId: '28514fba-fb95-4eb7-8f06-06fd07edaa3b',
    channelTypeId: '90b727ad-5ffd-475c-93df-f5e8486cc20b',
    customerSegmentId: 'adbc0b77-27f7-49c8-969e-513d060d4667',
    project: {
      id: '6526d916-c2d5-4b6d-8e94-6043d6bca3b4',
      name: 'Project 3',
      creationDate: '2016-02-14T00:00:00.000Z',
      archived: false,
      owner: '2ef16e73-afa6-44e5-ad61-cbdefaab8b4e',
      cstContact: 'CST Contact 3',
      fiscalYear: 2016,
      fiscalYearDescription: 'Fiscal Year Description 2016',
      companyId: '0831883d-9f04-44f1-af52-959176bd4770',
      projectTypeId: 'd5eaa29b-813b-4b16-8ab5-d278df0d4eed',
      deploymentTypeId: '811ee247-78e1-4a09-8e51-a61d3577db56',
      projectStatusId: '03436c40-e4d1-47a6-abfb-5a8fa91b6052',
      company: {
        id: '0831883d-9f04-44f1-af52-959176bd4770',
        name: 'Europe - IT Hardware / Computer',
        sectorId: '846d2b51-2184-403d-a8ba-f1d59a25f3bd',
        subSectorId: 'bf38ff36-419d-4c09-ae15-7ed48dfa459d',
        granularSectorId: '1a7635be-95aa-4f48-becf-e91407101dfe'
      }
    },
    parameterValues: [
      {
        id: 'd363a540-1ee0-11e7-a3f5-3f4cc11184f3',
        value: 1500,
        projectDataId: 'bc1597fd-f628-42fa-a2c9-23bac3281f87',
        parameterId: '376117b0-e925-4ef9-8110-1f0c68b61a16',
        parameter: {
          id: '376117b0-e925-4ef9-8110-1f0c68b61a16',
          name: 'Total company number of FTE',
          code: 'A1',
          description: 'Employees (at end of FY)',
          uomId: '2b2c59aa-5a76-49dc-8f99-b6e0b9e973d4'
        }
      },
      {
        id: 'd364b6b0-1ee0-11e7-a3f5-3f4cc11184f3',
        value: 400000,
        projectDataId: 'bc1597fd-f628-42fa-a2c9-23bac3281f87',
        parameterId: '9ecfd8f9-b1e0-4371-8412-f0ba43e5e8ae',
        parameter: {
          id: '9ecfd8f9-b1e0-4371-8412-f0ba43e5e8ae',
          name: 'Total company revenues in FY',
          code: 'A2',
          description: null,
          uomId: '12965a4b-caf3-483c-b3f5-43e5f5dc84ea'
        }
      },
      {
        id: 'd365c820-1ee0-11e7-a3f5-3f4cc11184f3',
        value: 35,
        projectDataId: 'bc1597fd-f628-42fa-a2c9-23bac3281f87',
        parameterId: 'f83abca7-d036-45ea-a981-43318132b0e9',
        parameter: {
          id: 'f83abca7-d036-45ea-a981-43318132b0e9',
          name: 'Total company SG&A',
          code: 'A3',
          description: null,
          uomId: 'f85f3297-31a6-4a25-9cae-1f13dc5f32b4'
        }
      }
    ],
    channelType: {
      id: '90b727ad-5ffd-475c-93df-f5e8486cc20b',
      name: 'Value-added resellerss'
    },
    country: {
      id: '8dc0bc9a-8c5f-48f6-9157-259149dc2ba0',
      name: '(CIS) Conf of Ind St'
    },
    customerSegment: {
      id: 'adbc0b77-27f7-49c8-969e-513d060d4667',
      name: 'Large enterprise'
    },
    granularSector: {
      id: '1a7635be-95aa-4f48-becf-e91407101dfe',
      name: 'Central bodies & government institutions',
      subSectorId: 'bf38ff36-419d-4c09-ae15-7ed48dfa459d'
    },
    offeringModel: {
      id: '28514fba-fb95-4eb7-8f06-06fd07edaa3b',
      name: 'Customized solution provider'
    },
    region: {
      id: '938f7aa0-fbca-4050-a5b4-57157244398c',
      name: 'Americas'
    },
    sector: {
      id: '846d2b51-2184-403d-a8ba-f1d59a25f3bd',
      name: 'Banking'
    },
    subSector: {
      id: 'bf38ff36-419d-4c09-ae15-7ed48dfa459d',
      name: 'Banking',
      sectorId: '846d2b51-2184-403d-a8ba-f1d59a25f3bd'
    },
    currency: {
      id: 'a3e9eedc-9c32-4fc4-9687-341dd8904b70',
      name: 'USD'
    }
  }
];
const [FIRST_PROJECT_DATA] = LOADED_PROJECT_DATA;

export const DIRTY_STATE = {
  deletedProjectData: { data: { ids: ['3', '4'] }, error: 'Error message', loading: true },
  loadedProjectData: { data: LOADED_PROJECT_DATA, error: 'Error', loading: true },
  projectData: { data: [...LOADED_PROJECT_DATA, { ...FIRST_PROJECT_DATA, id: '3' }], error: 'Error', loading: true }
};

export const PROJECT_BENCHMARK = {
  client: {
    total: [
      {
        kpiDefId: '1',
        value: null,
        denumValue: 1,
        numValue: 0
      }
    ],
    businessUnits: [
      {
        name: 'BU1',
        kpiDefinitions: [
          {
            kpiDefId: '1',
            value: 1222,
            numValue: null,
            denumValue: null
          }
        ]
      }
    ]
  },
  referenceSets: [
    {
      count: 3,
      name: 'Reference set 1',
      lowPercentile: [
        {
          kpiDefId: '1',
          value: 1444
        }
      ],
      lowQuartile: [
        {
          kpiDefId: '1',
          value: 1555
        }
      ],
      median: [
        {
          kpiDefId: '1',
          value: 1666
        },
        {
          kpiDefId: '2',
          value: 2666
        }
      ],
      highQuartile: [
        {
          kpiDefId: '1',
          value: 1777
        }
      ],
      highPercentile: [
        {
          kpiDefId: '1',
          value: 1888
        }
      ],
      average: [
        {
          kpiDefId: '1',
          value: 1999
        }
      ]
    }
  ]
};

// ********************* GET_ACTIVE_PROJECTS ******************************
export const GET_ACTIVE_PROJECTS_PENDING = {
  type: 'GET_ACTIVE_PROJECTS_PENDING',
  payload: []
};

export const GET_ACTIVE_PROJECTS_SUCCESS = {
  type: 'GET_ACTIVE_PROJECTS_SUCCESS',
  payload: [PROJECT]
};

export const GET_ACTIVE_PROJECTS_FAIL = {
  type: 'GET_ACTIVE_PROJECTS_FAIL',
  payload: SERVER_ERROR
};

// ********************* SEARCH_PROJECTS ******************************
export const SEARCH_PROJECTS_PENDING = {
  type: 'SEARCH_PROJECTS_PENDING',
  payload: []
};

export const SEARCH_PROJECTS_SUCCESS = {
  type: 'SEARCH_PROJECTS_SUCCESS',
  payload: [FOUND_PROJECT],
  meta: [SEARCH_PARAMS]
};

export const SEARCH_PROJECTS_FAIL = {
  type: 'SEARCH_PROJECTS_FAIL',
  payload: SERVER_ERROR
};

// ********************* GET_PROJECT ******************************
export const GET_PROJECT_PENDING = {
  type: 'GET_PROJECT_PENDING',
  payload: {}
};

export const GET_PROJECT_SUCCESS = {
  type: 'GET_PROJECT_SUCCESS',
  payload: PROJECT
};

export const GET_PROJECT_FAIL = {
  type: 'GET_PROJECT_FAIL',
  payload: SERVER_ERROR
};

// ********************* CREATE_PROJECT ******************************
export const CREATE_PROJECT_PENDING = {
  type: 'CREATE_PROJECT_PENDING',
  payload: {}
};

export const CREATE_PROJECT_SUCCESS = {
  type: 'CREATE_PROJECT_SUCCESS',
  payload: PROJECT
};

export const CREATE_PROJECT_FAIL = {
  type: 'CREATE_PROJECT_FAIL',
  payload: SERVER_ERROR
};

// ********************* UPDATE_PROJECT ******************************
export const UPDATE_PROJECT_PENDING = {
  type: 'UPDATE_PROJECT_PENDING',
  payload: {}
};

export const UPDATE_PROJECT_SUCCESS = {
  type: 'UPDATE_PROJECT_SUCCESS',
  payload: PROJECT
};

export const UPDATE_PROJECT_FAIL = {
  type: 'UPDATE_PROJECT_FAIL',
  payload: SERVER_ERROR
};

// ********************* MODIFY_PROJECT ******************************
export const MODIFY_PROJECT_PENDING = {
  type: 'MODIFY_PROJECT_PENDING',
  payload: {}
};

export const MODIFY_PROJECT_SUCCESS = {
  type: 'MODIFY_PROJECT_SUCCESS',
  payload: MODIFIED_PROJECT_ID
};

export const MODIFY_PROJECT_FAIL = {
  type: 'MODIFY_PROJECT_FAIL',
  payload: SERVER_ERROR
};

// ********************* DELETE_USER_PROJECT_BY_PROJECT_ID ******************************
export const DELETE_USER_PROJECT_BY_PROJECT_ID_PENDING = {
  type: 'DELETE_USER_PROJECT_BY_PROJECT_ID_PENDING',
  payload: {},
  meta: ['123']
};

export const DELETE_USER_PROJECT_BY_PROJECT_ID_SUCCESS = {
  type: 'DELETE_USER_PROJECT_BY_PROJECT_ID_SUCCESS',
  payload: {},
  meta: [DELETED_PROJECT_ID]
};

export const DELETE_USER_PROJECT_BY_PROJECT_ID_FAIL = {
  type: 'DELETE_USER_PROJECT_BY_PROJECT_ID_FAIL',
  payload: SERVER_ERROR,
  meta: ['123']
};

// ********************* LOAD_PROJECT_DATA ******************************
export const LOAD_PROJECT_DATA_PENDING = {
  type: 'LOAD_PROJECT_DATA_PENDING',
  payload: {}
};

export const LOAD_PROJECT_DATA_SUCCESS = {
  type: 'LOAD_PROJECT_DATA_SUCCESS',
  payload: { data: [LOADED_PROJECT_DATA] }
};

export const LOAD_PROJECT_DATA_FAIL = {
  type: 'LOAD_PROJECT_DATA_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  }
};

// ********************* GET_PROJECT_DATA ******************************
export const GET_PROJECT_DATA_PENDING = {
  type: 'GET_PROJECT_DATA_PENDING',
  payload: []
};

export const GET_PROJECT_DATA_SUCCESS = {
  type: 'GET_PROJECT_DATA_SUCCESS',
  payload: PROJECT_DATA
};

export const GET_PROJECT_DATA_FAIL = {
  type: 'GET_PROJECT_DATA_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  }
};

// ********************* UPDATE_PROJECT_FILTER ******************************
export const UPDATE_PROJECT_FILTER = {
  type: 'UPDATE_PROJECT_FILTER',
  payload: SORT_PARAMS
};

// ********************* UNLOAD_PROJECT_DATA ******************************
export const UNLOAD_PROJECT_DATA_PENDING = {
  type: 'UNLOAD_PROJECT_DATA_PENDING',
  payload: {},
  meta: [['1', '2']]
};

export const UNLOAD_PROJECT_DATA_SUCCESS = {
  type: 'UNLOAD_PROJECT_DATA_SUCCESS',
  payload: {},
  meta: [['1', '2']]
};

export const UNLOAD_PROJECT_DATA_FAIL = {
  type: 'UNLOAD_PROJECT_DATA_FAIL',
  payload: {
    response: {
      data: {
        error: SERVER_ERROR
      }
    }
  },
  meta: [['1', '2']]
};

// ********************* CLEAR_PROJECT_DATA ******************************
export const CLEAR_PROJECT_DATA = {
  type: 'CLEAR_PROJECT_DATA'
};

// ********************* GET_PROJECT_BENCHMARK ******************************
export const GET_PROJECT_BENCHMARK_PENDING = {
  type: 'GET_PROJECT_BENCHMARK_PENDING',
  payload: []
};

export const GET_PROJECT_BENCHMARK_SUCCESS = {
  type: 'GET_PROJECT_BENCHMARK_SUCCESS',
  payload: PROJECT_BENCHMARK
};

export const GET_PROJECT_BENCHMARK_FAIL = {
  type: 'GET_PROJECT_BENCHMARK_FAIL',
  payload: SERVER_ERROR
};

// ********************* CREATE_BENCHMARK_REPORT ******************************
export const CREATE_BENCHMARK_REPORT_PENDING = {
  type: 'CREATE_BENCHMARK_REPORT_PENDING',
  payload: []
};

export const CREATE_BENCHMARK_REPORT_SUCCESS = {
  type: 'CREATE_BENCHMARK_REPORT_SUCCESS',
  payload: 'BENCHMARK_REPORT'
};

export const CREATE_BENCHMARK_REPORT_FAIL = {
  type: 'CREATE_BENCHMARK_REPORT_FAIL',
  payload: SERVER_ERROR
};

// ********************* UPDATE_PROJECT_DATA ******************************
export const UPDATE_PROJECT_DATA_PENDING = {
  type: 'UPDATE_PROJECT_DATA_PENDING',
  payload: []
};

export const UPDATE_PROJECT_DATA_SUCCESS = {
  type: 'UPDATE_PROJECT_DATA_SUCCESS',
  payload: [PROJECT_DATA]
};

export const UPDATE_PROJECT_DATA_FAIL = {
  type: 'UPDATE_PROJECT_DATA_FAIL',
  payload: SERVER_ERROR
};

// ********************* GET_PROJECT_DATA_BY_PROJECT_ID ******************************
export const GET_PROJECT_DATA_BY_PROJECT_ID_PENDING = {
  type: 'GET_PROJECT_DATA_BY_PROJECT_ID_PENDING',
  payload: []
};

export const GET_PROJECT_DATA_BY_PROJECT_ID_SUCCESS = {
  type: 'GET_PROJECT_DATA_BY_PROJECT_ID_SUCCESS',
  payload: [PROJECT_DATA]
};

export const GET_PROJECT_DATA_BY_PROJECT_ID_FAIL = {
  type: 'GET_PROJECT_DATA_BY_PROJECT_ID_FAIL',
  payload: SERVER_ERROR
};
