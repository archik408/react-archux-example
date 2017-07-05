import uuid from 'uuid';

const id = uuid();
export const SERVER_ERROR = {
  response: {
    data: {
      error: {
        message: 'Error'
      }
    }
  }
};
export const REFERENCE_SET = {
  id,
  projectId: uuid(),
  name: 'Reference set 1',
  sectorIds: [],
  subSectorIds: [],
  granularSectorIds: [],
  companyIds: [],
  regionIds: [],
  countryIds: [],
  channelTypeIds: [],
  offeringModelIds: [],
  customerSegmentIds: [],
  businessUnitIds: [],
  fiscalYearFromId: null,
  fiscalYearToId: null,
  refSetToKpiDefinitions: [
    {
      id: '2',
      value: 0,
      referenceSetId: '3',
      kpiDefinitionId: '4'
    },
    {
      id: '3',
      value: 0,
      referenceSetId: '4',
      kpiDefinitionId: '5'
    },
    {
      id: '5',
      value: 0,
      referenceSetId: '4',
      kpiDefinitionId: '5'
    }
  ]
};

export const CALCULATED_KPI_VALUES = [{
  refeerenceSetId: '11',
  kpis: [
    {
      id: '1',
      name: 'kpi1',
      value: 2
    },
    {
      id: '2',
      name: 'kpi2',
      value: 3
    }
  ]
}];

export const UPDATED_REFERENCE_SET = {
  ...REFERENCE_SET,
  name: 'Reference set 2'
};
export const DEFAULT_REFERENCE_SET_KPI_DEFINITION = {
  id: '6',
  value: 6,
  referenceSetId: '6',
  kpiDefinitionId: '6'
};
export const REF_SET_TO_KPI_DEFINITION = {
  id: '5',
  referenceSetId: '1',
  kpiDefinitionId: '3',
  value: null
};
export const INIT_STATE = {
  referenceSets: { data: [], error: null, loading: false },
  createdReferenceSet: { data: {}, error: null, loading: false },
  clonedReferenceSet: { data: {}, error: null, loading: false },
  deletedReferenceSet: { data: {}, error: null, loading: false },
  createdRefSetToKpiDefinition: { data: {}, error: null, loading: false },
  deletedRefSetToKpiDefinition: { data: {}, error: null, loading: false },
  updatedRefSetToProjectData: { data: {}, error: null, loading: false },
  calculatedKpiValues: { data: [], error: null, loading: false },
  aggregatedRawData: { data: [], meta: {}, error: null, loading: false },
  rawData: { data: { inputs: [] }, meta: {}, error: null, loading: false },
  refSetToKpiDefinitions: { data: [], meta: {}, error: null, loading: false }
};
export const DIRTY_STATE = {
  referenceSets: { data: [REFERENCE_SET], error: 'Error', loading: true },
  createdReferenceSet: { data: REFERENCE_SET, error: 'Error', loading: true },
  clonedReferenceSet: { data: REFERENCE_SET, error: 'Error', loading: true },
  deletedReferenceSet: { data: { id: '1' }, error: 'Error', loading: true },
  createdRefSetToKpiDefinition: { data: DEFAULT_REFERENCE_SET_KPI_DEFINITION, error: 'Error', loading: true },
  deletedRefSetToKpiDefinition: { data: { id: '6' }, error: 'Error', loading: true },
  rawData: { data: { inputs: [{ id: '1', include: true }] }, meta: {}, error: null, loading: false },
};

export const AGGREGATED_RAW_DATA = {
  aggregated: {
    data: [
      {
        id: null,
        name: 'Input1 + Input2',
        businessUnitId: '5c2cd390-4120-11e7-a287-b3c858f7315d',
        businessLine: null,
        exchangeRate: 0.78,
        fiscalYearId: null,
        fiscalYearDesc: 'October-September',
        contactName: 'Tom Tomson',
        contactTitle: 'BA',
        contactPhone: null,
        contactEmail: 'test@test.com',
        projectId: 'a5b75d3f-a8dc-4212-9373-fa64ada3135c',
        sectorId: 'c91fbdf9-35ee-4d22-bac6-46bc99038fa8',
        subSectorId: '2cda0fd8-833e-4542-9e4b-e92186fd1699',
        granularSectorId: '09dff4e3-e81d-4e3d-a50d-de1981372c43',
        regionId: 'bd941095-7987-4729-b015-082ebc68efc7',
        countryId: 'b3f44fcc-0665-4c6a-ae85-73f37cb4af5c',
        localCurrencyId: '792648f4-099e-4915-89f9-3f318e0921c9',
        offeringModelId: null,
        channelTypeId: 'a14b7575-f1dd-4a47-9ad4-fe515e79fac1',
        customerSegmentId: '5c8f0bfa-a9f5-428c-ab6a-aec1a2afcf7d',
        parameterValues: [
          {
            code: 'A1',
            value: 3000
          },
          {
            code: 'A2',
            value: 800000
          },
          {
            code: 'A3',
            value: 70
          }
        ]
      },
      {
        id: 'd6425642-0a4d-47fa-9027-293a62189307',
        name: 'Input3',
        businessUnitId: '5c2cd390-4120-11e7-a287-b3c858f7315d',
        businessLine: null,
        exchangeRate: 0.78,
        fiscalYearId: '5c3d2740-4120-11e7-a287-b3c858f7315d',
        fiscalYearDesc: 'October-September',
        contactName: 'Tom Tomson',
        contactTitle: 'BA',
        contactPhone: null,
        contactEmail: 'test@test.com',
        projectId: 'a5b75d3f-a8dc-4212-9373-fa64ada3135c',
        sectorId: 'c91fbdf9-35ee-4d22-bac6-46bc99038fa8',
        subSectorId: '2cda0fd8-833e-4542-9e4b-e92186fd1699',
        granularSectorId: '09dff4e3-e81d-4e3d-a50d-de1981372c43',
        regionId: '834e95d8-9f9c-4bf0-b029-211d71b9324a',
        countryId: 'b3f44fcc-0665-4c6a-ae85-73f37cb4af5c',
        localCurrencyId: '792648f4-099e-4915-89f9-3f318e0921c9',
        offeringModelId: 'e2e30ee0-de1d-4f28-920f-51c36e4284f3',
        channelTypeId: 'a14b7575-f1dd-4a47-9ad4-fe515e79fac1',
        customerSegmentId: '5c8f0bfa-a9f5-428c-ab6a-aec1a2afcf7d',
        parameterValues: [
          {
            code: 'A1',
            value: 1500
          },
          {
            code: 'A2',
            value: 400000
          },
          {
            code: 'A3',
            value: 35
          }
        ]
      }
    ],
    meta: {
      distOfRelGrossMargin_25ile: 50000,
      distOfRelGrossMargin_50ile: 50000,
      distOfRelGrossMargin_75ile: 50000,
      distOfRelSellingCost_25ile: 22500,
      distOfRelSellingCost_50ile: 25000,
      distOfRelSellingCost_75ile: 27500,
      distOfSalesEmp_25ile: 110,
      distOfSalesEmp_50ile: 110,
      distOfSalesEmp_75ile: 110,
      numberOfDataSets: 3,
      numberOfEntities: 3,
      revenue_25ile: 80000,
      revenue_50ile: 100000,
      revenue_75ile: 110000
    }
  }
};

// ********************* GET_REFERENCE_SETS_BY_PROJECT_ID ******************************
export const GET_REFERENCE_SETS_BY_PROJECT_ID_PENDING = {
  type: 'GET_REFERENCE_SETS_BY_PROJECT_ID_PENDING',
  payload: []
};

export const GET_REFERENCE_SETS_BY_PROJECT_ID_SUCCESS = {
  type: 'GET_REFERENCE_SETS_BY_PROJECT_ID_SUCCESS',
  payload: [REFERENCE_SET]
};

export const GET_REFERENCE_SETS_BY_PROJECT_ID_FAIL = {
  type: 'GET_REFERENCE_SETS_BY_PROJECT_ID_FAIL',
  payload: SERVER_ERROR
};

// ********************* CREATE_REFERENCE_SET ******************************
export const CREATE_REFERENCE_SET_PENDING = {
  type: 'CREATE_REFERENCE_SET_PENDING',
  payload: []
};

export const CREATE_REFERENCE_SET_SUCCESS = {
  type: 'CREATE_REFERENCE_SET_SUCCESS',
  payload: REFERENCE_SET
};

export const CREATE_REFERENCE_SET_FAIL = {
  type: 'CREATE_REFERENCE_SET_FAIL',
  payload: SERVER_ERROR
};

// ********************* CLONE_REFERENCE_SET ******************************
export const CLONE_REFERENCE_SET_PENDING = {
  type: 'CLONE_REFERENCE_SET_PENDING',
  payload: []
};

export const CLONE_REFERENCE_SET_SUCCESS = {
  type: 'CLONE_REFERENCE_SET_SUCCESS',
  payload: REFERENCE_SET
};

export const CLONE_REFERENCE_SET_FAIL = {
  type: 'CLONE_REFERENCE_SET_FAIL',
  payload: SERVER_ERROR
};

// ********************* UPDATE_REFERENCE_SET ******************************
export const UPDATE_REFERENCE_SET_PENDING = {
  type: 'UPDATE_REFERENCE_SET_PENDING',
  payload: []
};

export const UPDATE_REFERENCE_SET_SUCCESS = {
  type: 'UPDATE_REFERENCE_SET_SUCCESS',
  meta: [UPDATED_REFERENCE_SET]
};

export const UPDATE_REFERENCE_SET_FAIL = {
  type: 'UPDATE_REFERENCE_SET_FAIL',
  payload: SERVER_ERROR
};

// ********************* UPDATE_REFERENCE_SETS ******************************
export const UPDATE_REFERENCE_SETS_PENDING = {
  type: 'UPDATE_REFERENCE_SETS_PENDING',
  payload: []
};

export const UPDATE_REFERENCE_SETS_SUCCESS = {
  type: 'UPDATE_REFERENCE_SETS_SUCCESS',
  meta: [[UPDATED_REFERENCE_SET]]
};

export const UPDATE_REFERENCE_SETS_FAIL = {
  type: 'UPDATE_REFERENCE_SETS_FAIL',
  payload: SERVER_ERROR
};

// ********************* DELETE_REFERENCE_SET ******************************
export const DELETE_REFERENCE_SET_PENDING = {
  type: 'DELETE_REFERENCE_SET_PENDING',
  payload: []
};

export const DELETE_REFERENCE_SET_SUCCESS = {
  type: 'DELETE_REFERENCE_SET_SUCCESS',
  payload: { count: 1 },
  meta: [REFERENCE_SET.id]
};

export const DELETE_REFERENCE_SET_FAIL = {
  type: 'DELETE_REFERENCE_SET_FAIL',
  payload: SERVER_ERROR
};

// ********************* CREATE_REF_SET_TO_KPI_DEFINITION ******************************
export const CREATE_REF_SET_TO_KPI_DEFINITION_PENDING = {
  type: 'CREATE_REF_SET_TO_KPI_DEFINITION_PENDING',
  payload: {},
  meta: ['1', '3']
};

export const CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS = {
  type: 'CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS',
  payload: REF_SET_TO_KPI_DEFINITION,
  meta: ['1', '3']
};

export const CREATE_REF_SET_TO_KPI_DEFINITION_FAIL = {
  type: 'CREATE_REF_SET_TO_KPI_DEFINITION_FAIL',
  payload: SERVER_ERROR,
  meta: ['1', '3']
};

// ********************* DELETE_REF_SET_TO_KPI_DEFINITION ******************************
export const DELETE_REF_SET_TO_KPI_DEFINITION_PENDING = {
  type: 'DELETE_REF_SET_TO_KPI_DEFINITION_PENDING',
  payload: {},
  meta: ['1', '2']
};

export const DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS = {
  type: 'DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS',
  payload: { count: 1 },
  meta: ['1', '2']
};

export const DELETE_REF_SET_TO_KPI_DEFINITION_FAIL = {
  type: 'DELETE_REF_SET_TO_KPI_DEFINITION_FAIL',
  payload: SERVER_ERROR,
  meta: ['1', '2']
};

// ********************* GET_CALCULATED_KPI_VALUES ******************************
export const GET_CALCULATED_KPI_VALUES_PENDING = {
  type: 'GET_CALCULATED_KPI_VALUES_PENDING',
  payload: [],
  meta: [REFERENCE_SET.id]
};

export const GET_CALCULATED_KPI_VALUES_SUCCESS = {
  type: 'GET_CALCULATED_KPI_VALUES_SUCCESS',
  payload: { calculated: CALCULATED_KPI_VALUES },
  meta: [REFERENCE_SET.id]
};

export const GET_CALCULATED_KPI_VALUES_FAIL = {
  type: 'GET_CALCULATED_KPI_VALUES_FAIL',
  payload: SERVER_ERROR,
  meta: [REFERENCE_SET.id]
};

// ********************* GET_AGGREGATED_RAW_DATA ******************************
export const GET_AGGREGATED_RAW_DATA_PENDING = {
  type: 'GET_AGGREGATED_RAW_DATA_PENDING',
  payload: []
};

export const GET_AGGREGATED_RAW_DATA_SUCCESS = {
  type: 'GET_AGGREGATED_RAW_DATA_SUCCESS',
  payload: AGGREGATED_RAW_DATA
};

export const GET_AGGREGATED_RAW_DATA_FAIL = {
  type: 'GET_AGGREGATED_RAW_DATA_FAIL',
  payload: SERVER_ERROR
};

// ********************* GET_RAW_DATA ******************************
export const GET_RAW_DATA_PENDING = {
  type: 'GET_RAW_DATA_PENDING',
  payload: []
};

export const GET_RAW_DATA_SUCCESS = {
  type: 'GET_RAW_DATA_SUCCESS',
  payload: { data: [{ test: 'test' }] }
};

export const GET_RAW_DATA_FAIL = {
  type: 'GET_RAW_DATA_FAIL',
  payload: SERVER_ERROR
};

// ********************* GET_REF_SET_TO_KPI_DEFINITIONS ******************************
export const GET_REF_SET_TO_KPI_DEFINITIONS_PENDING = {
  type: 'GET_REF_SET_TO_KPI_DEFINITIONS_PENDING',
  payload: []
};

export const GET_REF_SET_TO_KPI_DEFINITIONS_SUCCESS = {
  type: 'GET_REF_SET_TO_KPI_DEFINITIONS_SUCCESS',
  payload: { data: [{ test: 'test' }] }
};

export const GET_REF_SET_TO_KPI_DEFINITIONS_FAIL = {
  type: 'GET_REF_SET_TO_KPI_DEFINITIONS_FAIL',
  payload: SERVER_ERROR
};

// ********************* UPDATE_REF_SET_TO_PROJECT_DATA ******************************
export const UPDATE_REF_SET_TO_PROJECT_DATA_PENDING = {
  type: 'UPDATE_REF_SET_TO_PROJECT_DATA_PENDING',
  payload: {}
};

export const UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS = {
  type: 'UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS',
  payload: { projectDataIds: [{ id:'1', include: false }] }
};

export const UPDATE_REF_SET_TO_PROJECT_DATA_FAIL = {
  type: 'UPDATE_REF_SET_TO_PROJECT_DATA_FAIL',
  payload: SERVER_ERROR
};
