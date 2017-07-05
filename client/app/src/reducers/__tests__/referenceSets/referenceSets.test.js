import { expect } from 'chai';
import { referenceSetsReducer } from '../../referenceSets';
import {
  UPDATED_REFERENCE_SET,
  INIT_STATE,
  DIRTY_STATE,
  GET_REFERENCE_SETS_BY_PROJECT_ID_PENDING,
  GET_REFERENCE_SETS_BY_PROJECT_ID_SUCCESS,
  GET_REFERENCE_SETS_BY_PROJECT_ID_FAIL,
  CREATE_REFERENCE_SET_PENDING,
  CREATE_REFERENCE_SET_SUCCESS,
  CREATE_REFERENCE_SET_FAIL,
  UPDATE_REFERENCE_SET_PENDING,
  UPDATE_REFERENCE_SET_SUCCESS,
  UPDATE_REFERENCE_SET_FAIL,
  UPDATE_REFERENCE_SETS_PENDING,
  UPDATE_REFERENCE_SETS_SUCCESS,
  UPDATE_REFERENCE_SETS_FAIL,
  DELETE_REFERENCE_SET_PENDING,
  DELETE_REFERENCE_SET_SUCCESS,
  DELETE_REFERENCE_SET_FAIL,
  CREATE_REF_SET_TO_KPI_DEFINITION_PENDING,
  CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS,
  CREATE_REF_SET_TO_KPI_DEFINITION_FAIL,
  DELETE_REF_SET_TO_KPI_DEFINITION_PENDING,
  DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS,
  DELETE_REF_SET_TO_KPI_DEFINITION_FAIL,
  UPDATE_REF_SET_TO_PROJECT_DATA_PENDING,
  UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS,
  UPDATE_REF_SET_TO_PROJECT_DATA_FAIL,
  GET_CALCULATED_KPI_VALUES_PENDING,
  GET_CALCULATED_KPI_VALUES_SUCCESS,
  GET_CALCULATED_KPI_VALUES_FAIL,
  GET_AGGREGATED_RAW_DATA_PENDING,
  GET_AGGREGATED_RAW_DATA_SUCCESS,
  GET_AGGREGATED_RAW_DATA_FAIL,
  GET_RAW_DATA_PENDING,
  GET_RAW_DATA_SUCCESS,
  GET_RAW_DATA_FAIL,
  SERVER_ERROR,
  CLONE_REFERENCE_SET_PENDING,
  CLONE_REFERENCE_SET_SUCCESS,
  CLONE_REFERENCE_SET_FAIL,
  GET_REF_SET_TO_KPI_DEFINITIONS_SUCCESS,
  GET_REF_SET_TO_KPI_DEFINITIONS_FAIL,
  GET_REF_SET_TO_KPI_DEFINITIONS_PENDING
} from './data.test';

describe('Reference sets reducer', () => {
  // ********************* GET_REFERENCE_SETS_BY_PROJECT_ID ******************************
  it('should handle GET_REFERENCE_SETS_BY_PROJECT_ID_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_REFERENCE_SETS_BY_PROJECT_ID_PENDING);
    expect(result.referenceSets.loading).to.be.equal(true);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.have.length(0);
  });

  it('should handle GET_REFERENCE_SETS_BY_PROJECT_ID_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_REFERENCE_SETS_BY_PROJECT_ID_SUCCESS);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.have.length(1);
    expect(result.referenceSets.data).to.deep.equal(GET_REFERENCE_SETS_BY_PROJECT_ID_SUCCESS.payload);
  });

  it('should handle GET_REFERENCE_SETS_BY_PROJECT_ID_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_REFERENCE_SETS_BY_PROJECT_ID_FAIL);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal('Error');
    expect(result.referenceSets.data).to.have.length(0);
  });

  // ********************* CREATE_REFERENCE_SET ******************************
  it('should handle CREATE_REFERENCE_SET_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, CREATE_REFERENCE_SET_PENDING);
    expect(result.createdReferenceSet.loading).to.be.equal(true);
    expect(result.createdReferenceSet.error).to.be.equal(null);
    expect(result.createdReferenceSet.data).to.deep.equal({});
    expect(result.referenceSets.data).to.have.length(0);
  });

  it('should handle CREATE_REFERENCE_SET_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, CREATE_REFERENCE_SET_SUCCESS);
    expect(result.createdReferenceSet.loading).to.be.equal(false);
    expect(result.createdReferenceSet.error).to.be.equal(null);
    expect(result.createdReferenceSet.data).to.be.equal(CREATE_REFERENCE_SET_SUCCESS.payload);
    expect(result.referenceSets.data).to.deep.equal([CREATE_REFERENCE_SET_SUCCESS.payload]);
  });

  it('should handle CREATE_REFERENCE_SET_SUCCESS with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CREATE_REFERENCE_SET_SUCCESS);
    expect(result.createdReferenceSet.loading).to.be.equal(false);
    expect(result.createdReferenceSet.error).to.be.equal(null);
    expect(result.createdReferenceSet.data).to.be.equal(CREATE_REFERENCE_SET_SUCCESS.payload);
    expect(result.referenceSets.data).to.deep.equal([
      CREATE_REFERENCE_SET_SUCCESS.payload,
      ...DIRTY_STATE.referenceSets.data
    ]);
  });

  it('should handle CREATE_REFERENCE_SET_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, CREATE_REFERENCE_SET_FAIL);
    expect(result.createdReferenceSet.loading).to.be.equal(false);
    expect(result.createdReferenceSet.error).to.be.equal('Error');
    expect(result.createdReferenceSet.data).to.deep.equal({});
    expect(result.referenceSets.data).to.have.length(0);
  });

  // ********************* CLONE_REFERENCE_SET INIT_STATE ******************************
  it('should handle CLONE_REFERENCE_SET_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, CLONE_REFERENCE_SET_PENDING);
    expect(result.clonedReferenceSet.loading).to.be.equal(true);
    expect(result.clonedReferenceSet.error).to.be.equal(null);
    expect(result.clonedReferenceSet.data).to.deep.equal({});
    expect(result.referenceSets.data).to.have.length(0);
  });

  it('should handle CLONE_REFERENCE_SET_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, CLONE_REFERENCE_SET_SUCCESS);
    expect(result.clonedReferenceSet.loading).to.be.equal(false);
    expect(result.clonedReferenceSet.error).to.be.equal(null);
    expect(result.clonedReferenceSet.data).to.be.equal(CREATE_REFERENCE_SET_SUCCESS.payload);
    expect(result.referenceSets.data).to.deep.equal([CREATE_REFERENCE_SET_SUCCESS.payload]);
  });

  it('should handle CLONE_REFERENCE_SET_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, CLONE_REFERENCE_SET_FAIL);
    expect(result.clonedReferenceSet.loading).to.be.equal(false);
    expect(result.clonedReferenceSet.error).to.be.equal('Error');
    expect(result.clonedReferenceSet.data).to.deep.equal({});
    expect(result.referenceSets.data).to.have.length(0);
  });

  // ********************* CLONE_REFERENCE_SET DIRTY_STATE ******************************
  it('should handle CLONE_REFERENCE_SET_PENDING', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CLONE_REFERENCE_SET_PENDING);
    expect(result.clonedReferenceSet.loading).to.be.equal(true);
    expect(result.clonedReferenceSet.error).to.be.equal(null);
    expect(result.clonedReferenceSet.data).to.deep.equal(DIRTY_STATE.clonedReferenceSet.data);
    expect(result.referenceSets.data).to.have.length(1);
  });

  it('should handle CLONE_REFERENCE_SET_SUCCESS', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CLONE_REFERENCE_SET_SUCCESS);
    expect(result.clonedReferenceSet.loading).to.be.equal(false);
    expect(result.clonedReferenceSet.error).to.be.equal(null);
    expect(result.clonedReferenceSet.data).to.be.equal(CREATE_REFERENCE_SET_SUCCESS.payload);
    expect(result.referenceSets.data).to.deep.equal([CREATE_REFERENCE_SET_SUCCESS.payload, ...DIRTY_STATE.referenceSets.data]);
  });

  it('should handle CLONE_REFERENCE_SET_FAIL', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CLONE_REFERENCE_SET_FAIL);
    expect(result.clonedReferenceSet.loading).to.be.equal(false);
    expect(result.clonedReferenceSet.error).to.be.equal('Error');
    expect(result.clonedReferenceSet.data).to.deep.equal(DIRTY_STATE.clonedReferenceSet.data);
    expect(result.referenceSets.data).to.have.length(1);
  });

  // ********************* UPDATE_REFERENCE_SET ******************************
  it('should handle UPDATE_REFERENCE_SET_PENDING', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REFERENCE_SET_PENDING);
    expect(result.referenceSets.loading).to.be.equal(true);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  it('should handle UPDATE_REFERENCE_SET_SUCCESS', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REFERENCE_SET_SUCCESS);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.deep.equal([UPDATED_REFERENCE_SET]);
  });

  it('should handle UPDATE_REFERENCE_SET_FAIL', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REFERENCE_SET_FAIL);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal('Error');
    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  // ********************* UPDATE_REFERENCE_SETS ******************************
  it('should handle UPDATE_REFERENCE_SETS_PENDING', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REFERENCE_SETS_PENDING);
    expect(result.referenceSets.loading).to.be.equal(true);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  it('should handle UPDATE_REFERENCE_SETS_SUCCESS', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REFERENCE_SETS_SUCCESS);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.deep.equal([UPDATED_REFERENCE_SET]);
  });

  it('should handle UPDATE_REFERENCE_SETS_FAIL', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REFERENCE_SETS_FAIL);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal('Error');
    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  // ********************* DELETE_REFERENCE_SET INIT_STATE ******************************
  it('should handle DELETE_REFERENCE_SET_PENDING INIT_STATE', () => {
    const result = referenceSetsReducer(INIT_STATE, DELETE_REFERENCE_SET_PENDING);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.have.length(0);

    expect(result.deletedReferenceSet.data).to.deep.equal({});
    expect(result.deletedReferenceSet.loading).to.be.equal(true);
    expect(result.deletedReferenceSet.error).to.be.equal(null);
  });

  it('should handle DELETE_REFERENCE_SET_SUCCESS INIT_STATE', () => {
    const result = referenceSetsReducer(INIT_STATE, DELETE_REFERENCE_SET_SUCCESS);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.have.length(0);

    const [id] = DELETE_REFERENCE_SET_SUCCESS.meta;
    expect(result.deletedReferenceSet.data).to.deep.equal({ id });
    expect(result.deletedReferenceSet.loading).to.be.equal(false);
    expect(result.deletedReferenceSet.error).to.be.equal(null);
  });

  it('should handle DELETE_REFERENCE_SET_FAIL INIT_STATE', () => {
    const result = referenceSetsReducer(INIT_STATE, DELETE_REFERENCE_SET_FAIL);
    expect(result.referenceSets.loading).to.be.equal(false);
    expect(result.referenceSets.error).to.be.equal(null);
    expect(result.referenceSets.data).to.have.length(0);

    expect(result.deletedReferenceSet.loading).to.be.equal(false);
    expect(result.deletedReferenceSet.error).to.be.equal('Error');
    expect(result.deletedReferenceSet.data).to.deep.equal({});
  });

  // ********************* DELETE_REFERENCE_SET DIRTY_STATE ******************************
  it('should handle DELETE_REFERENCE_SET_PENDING DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, DELETE_REFERENCE_SET_PENDING);
    expect(result.referenceSets.loading).to.be.equal(true);
    expect(result.referenceSets.error).to.be.equal('Error');
    expect(result.referenceSets.data).to.have.length(1);

    expect(result.deletedReferenceSet.data).to.deep.equal({ id: '1' });
    expect(result.deletedReferenceSet.loading).to.be.equal(true);
    expect(result.deletedReferenceSet.error).to.be.equal(null);
  });

  it('should handle DELETE_REFERENCE_SET_SUCCESS DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, DELETE_REFERENCE_SET_SUCCESS);
    expect(result.referenceSets.loading).to.be.equal(true);
    expect(result.referenceSets.error).to.be.equal('Error');
    expect(result.referenceSets.data).to.have.length(0);

    const [id] = DELETE_REFERENCE_SET_SUCCESS.meta;
    expect(result.deletedReferenceSet.data).to.deep.equal({ id });
    expect(result.deletedReferenceSet.loading).to.be.equal(false);
    expect(result.deletedReferenceSet.error).to.be.equal(null);
  });

  it('should handle DELETE_REFERENCE_SET_FAIL DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, DELETE_REFERENCE_SET_FAIL);
    expect(result.referenceSets.loading).to.be.equal(true);
    expect(result.referenceSets.error).to.be.equal('Error');
    expect(result.referenceSets.data).to.have.length(1);

    expect(result.deletedReferenceSet.loading).to.be.equal(false);
    expect(result.deletedReferenceSet.error).to.be.equal('Error');
    expect(result.deletedReferenceSet.data).to.deep.equal({ id: '1' });
  });

  // ********************* CREATE_REF_SET_TO_KPI_DEFINITION INIT_STATE******************************
  it('should handle CREATE_REF_SET_TO_KPI_DEFINITION_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, CREATE_REF_SET_TO_KPI_DEFINITION_PENDING);
    expect(result.createdRefSetToKpiDefinition.loading).to.be.equal(true);
    expect(result.createdRefSetToKpiDefinition.error).to.be.equal(null);
    expect(result.createdRefSetToKpiDefinition.data).to.deep.equal({});
  });

  it('should handle CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS);
    expect(result.createdRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.createdRefSetToKpiDefinition.error).to.be.equal(null);
    expect(result.createdRefSetToKpiDefinition.data).to.deep.equal(
      CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS.payload
    );
  });

  it('should handle CREATE_REF_SET_TO_KPI_DEFINITION_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, CREATE_REF_SET_TO_KPI_DEFINITION_FAIL);
    expect(result.createdRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.createdRefSetToKpiDefinition.error).to.be.equal('Error');
    expect(result.createdRefSetToKpiDefinition.data).to.deep.equal({});
  });

  // ********************* CREATE_REF_SET_TO_KPI_DEFINITION DIRTY_STATE ******************************
  it('should handle CREATE_REF_SET_TO_KPI_DEFINITION_PENDING with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CREATE_REF_SET_TO_KPI_DEFINITION_PENDING);
    expect(result.createdRefSetToKpiDefinition.loading).to.be.equal(true);
    expect(result.createdRefSetToKpiDefinition.error).to.be.equal(null);
    expect(result.createdRefSetToKpiDefinition.data).to.deep.equal(DIRTY_STATE.createdRefSetToKpiDefinition.data);

    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  it('should handle CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS);
    expect(result.createdRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.createdRefSetToKpiDefinition.error).to.be.equal(null);

    const [refSetId] = CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS.meta;
    const { payload } = CREATE_REF_SET_TO_KPI_DEFINITION_SUCCESS;

    expect(result.createdRefSetToKpiDefinition.data).to.deep.equal(payload);

    const updatedReferenceSets = DIRTY_STATE.referenceSets.data.map(item => {
      if (item.id !== refSetId) {
        return item;
      }
      return { ...item, refSetToKpiDefinitions: [...item.refSetToKpiDefinitions, payload] };
    });

    expect(result.referenceSets.data).to.deep.equal(updatedReferenceSets);
  });

  it('should handle CREATE_REF_SET_TO_KPI_DEFINITION_FAIL with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, CREATE_REF_SET_TO_KPI_DEFINITION_FAIL);
    expect(result.createdRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.createdRefSetToKpiDefinition.error).to.be.equal('Error');

    expect(result.createdRefSetToKpiDefinition.data).to.deep.equal(DIRTY_STATE.createdRefSetToKpiDefinition.data);

    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  // ********************* DELETE_REF_SET_TO_KPI_DEFINITION ******************************
  it('should handle DELETE_REF_SET_TO_KPI_DEFINITION_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, DELETE_REF_SET_TO_KPI_DEFINITION_PENDING);
    expect(result.deletedRefSetToKpiDefinition.loading).to.be.equal(true);
    expect(result.deletedRefSetToKpiDefinition.error).to.be.equal(null);
    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal({});

    expect(result.referenceSets.data).to.deep.equal([]);
  });

  it('should handle DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS);
    expect(result.deletedRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.deletedRefSetToKpiDefinition.error).to.be.equal(null);

    const [, id] = DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS.meta;
    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal({ id });

    expect(result.referenceSets.data).to.deep.equal([]);
  });

  it('should handle DELETE_REF_SET_TO_KPI_DEFINITION_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, DELETE_REF_SET_TO_KPI_DEFINITION_FAIL);
    expect(result.deletedRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.deletedRefSetToKpiDefinition.error).to.be.equal('Error');
    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal({});

    expect(result.referenceSets.data).to.deep.equal([]);
  });

  // ********************* DELETE_REF_SET_TO_KPI_DEFINITION DIRTY_STATE******************************
  it('should handle DELETE_REF_SET_TO_KPI_DEFINITION_PENDING with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, DELETE_REF_SET_TO_KPI_DEFINITION_PENDING);
    expect(result.deletedRefSetToKpiDefinition.loading).to.be.equal(true);
    expect(result.deletedRefSetToKpiDefinition.error).to.be.equal(null);
    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal(DIRTY_STATE.deletedRefSetToKpiDefinition.data);
    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  it('should handle DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS);
    expect(result.deletedRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.deletedRefSetToKpiDefinition.error).to.be.equal(null);

    const [refSetId, refSetKPIId] = DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS.meta;

    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal({ id: refSetKPIId });

    const deletedReferenceSets = DIRTY_STATE.referenceSets.data.map(item => {
      if (item.id !== refSetId) {
        return item;
      }
      return {
        ...item,
        refSetToKpiDefinitions: item.refSetToKpiDefinitions.filter(kpi => kpi.id !== refSetKPIId)
      };
    });

    expect(result.referenceSets.data).to.deep.equal(deletedReferenceSets);

    const [, id] = DELETE_REF_SET_TO_KPI_DEFINITION_SUCCESS.meta;
    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal({ id });
  });

  it('should handle DELETE_REF_SET_TO_KPI_DEFINITION_FAIL with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, DELETE_REF_SET_TO_KPI_DEFINITION_FAIL);
    expect(result.deletedRefSetToKpiDefinition.loading).to.be.equal(false);
    expect(result.deletedRefSetToKpiDefinition.error).to.be.equal('Error');
    expect(result.deletedRefSetToKpiDefinition.data).to.deep.equal(DIRTY_STATE.deletedRefSetToKpiDefinition.data);
    expect(result.referenceSets.data).to.deep.equal(DIRTY_STATE.referenceSets.data);
  });

  // ********************* GET_CALCULATED_KPI_VALUES ******************************
  it('should handle GET_CALCULATED_KPI_VALUES_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_CALCULATED_KPI_VALUES_PENDING);
    expect(result.calculatedKpiValues.loading).to.be.equal(true);
    expect(result.calculatedKpiValues.error).to.be.equal(null);
    expect(result.calculatedKpiValues.data).to.have.length(0);
  });

  it('should handle GET_CALCULATED_KPI_VALUES_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_CALCULATED_KPI_VALUES_SUCCESS);
    expect(result.calculatedKpiValues.loading).to.be.equal(false);
    expect(result.calculatedKpiValues.error).to.be.equal(null);
    expect(result.calculatedKpiValues.data).to.deep.equal(GET_CALCULATED_KPI_VALUES_SUCCESS.payload);
  });

  it('should handle GET_CALCULATED_KPI_VALUES_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_CALCULATED_KPI_VALUES_FAIL);
    expect(result.calculatedKpiValues.loading).to.be.equal(false);
    expect(result.calculatedKpiValues.error).to.be.equal('Error');
    expect(result.calculatedKpiValues.data).to.have.length(0);
  });

  // ********************* GET_AGGREGATED_RAW_DATA ******************************
  it('should handle GET_AGGREGATED_RAW_DATA_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_AGGREGATED_RAW_DATA_PENDING);
    expect(result.aggregatedRawData.loading).to.be.equal(true);
    expect(result.aggregatedRawData.error).to.be.equal(null);
    expect(result.aggregatedRawData.data).to.deep.equal([]);
    expect(result.aggregatedRawData.meta).to.deep.equal({});
  });

  it('should handle GET_AGGREGATED_RAW_DATA_SUCCESS', () => {
    const { data, meta } = GET_AGGREGATED_RAW_DATA_SUCCESS.payload.aggregated;
    const result = referenceSetsReducer(INIT_STATE, GET_AGGREGATED_RAW_DATA_SUCCESS);
    expect(result.aggregatedRawData.loading).to.be.equal(false);
    expect(result.aggregatedRawData.error).to.be.equal(null);
    expect(result.aggregatedRawData.data).to.deep.equal(data);
    expect(result.aggregatedRawData.meta).to.deep.equal(meta);
  });

  it('should handle GET_AGGREGATED_RAW_DATA_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_AGGREGATED_RAW_DATA_FAIL);
    expect(result.aggregatedRawData.loading).to.be.equal(false);
    expect(result.aggregatedRawData.error).to.be.equal('Error');
    expect(result.aggregatedRawData.data).to.deep.equal([]);
    expect(result.aggregatedRawData.meta).to.deep.equal({});
  });

  // ********************* GET_RAW_DATA ******************************
  it('should handle GET_RAW_DATA_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_RAW_DATA_PENDING);
    expect(result.rawData.loading).to.be.equal(true);
    expect(result.rawData.error).to.be.equal(null);
    expect(result.rawData.data).to.deep.equal({inputs: []});
  });

  it('should handle GET_RAW_DATA_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_RAW_DATA_SUCCESS);
    expect(result.rawData.loading).to.be.equal(false);
    expect(result.rawData.error).to.be.equal(null);
    expect(result.rawData.data).to.deep.equal({ data: [ { test: 'test' } ] });
  });

  it('should handle GET_RAW_DATA_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_RAW_DATA_FAIL);
    expect(result.rawData.loading).to.be.equal(false);
    expect(result.rawData.error).to.be.equal(SERVER_ERROR);
    expect(result.rawData.data).to.deep.equal({inputs: []});
  });

  // ********************* GET_REF_SET_TO_KPI_DEFINITIONS ******************************
  it('should handle GET_REF_SET_TO_KPI_DEFINITIONS_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_REF_SET_TO_KPI_DEFINITIONS_PENDING);
    expect(result.refSetToKpiDefinitions.loading).to.be.equal(true);
    expect(result.refSetToKpiDefinitions.error).to.be.equal(null);
    expect(result.refSetToKpiDefinitions.data).to.deep.equal([]);
  });

  it('should handle GET_REF_SET_TO_KPI_DEFINITIONS_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_REF_SET_TO_KPI_DEFINITIONS_SUCCESS);
    expect(result.refSetToKpiDefinitions.loading).to.be.equal(false);
    expect(result.refSetToKpiDefinitions.error).to.be.equal(null);
    expect(result.refSetToKpiDefinitions.data).to.deep.equal({ data: [ { test: 'test' } ] });
  });

  it('should handle GET_REF_SET_TO_KPI_DEFINITIONS_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, GET_REF_SET_TO_KPI_DEFINITIONS_FAIL);
    expect(result.refSetToKpiDefinitions.loading).to.be.equal(false);
    expect(result.refSetToKpiDefinitions.error).to.be.equal(SERVER_ERROR);
    expect(result.refSetToKpiDefinitions.data).to.deep.equal([]);
  });

  // ********************* UPDATE_REF_SET_TO_PROJECT_DATA ******************************
  it('should handle UPDATE_REF_SET_TO_PROJECT_DATA_PENDING', () => {
    const result = referenceSetsReducer(INIT_STATE, UPDATE_REF_SET_TO_PROJECT_DATA_PENDING);
    expect(result.updatedRefSetToProjectData.loading).to.be.equal(true);
    expect(result.updatedRefSetToProjectData.error).to.be.equal(null);
    expect(result.updatedRefSetToProjectData.data).to.deep.equal({});
  });

  it('should handle UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS', () => {
    const result = referenceSetsReducer(INIT_STATE, UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS);
    expect(result.updatedRefSetToProjectData.loading).to.be.equal(false);
    expect(result.updatedRefSetToProjectData.error).to.be.equal(null);
    const [pdId] = result.updatedRefSetToProjectData.data.projectDataIds;
    expect(pdId.id).to.be.equal('1');
    expect(pdId.include).to.be.equal(false);
    expect(result.rawData.data.inputs.length).to.be.equal(0);
  });

  it('should handle UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS with DIRTY_STATE', () => {
    const result = referenceSetsReducer(DIRTY_STATE, UPDATE_REF_SET_TO_PROJECT_DATA_SUCCESS);
    expect(result.updatedRefSetToProjectData.loading).to.be.equal(false);
    expect(result.updatedRefSetToProjectData.error).to.be.equal(null);
    const [pdId] = result.updatedRefSetToProjectData.data.projectDataIds;
    expect(pdId.id).to.be.equal('1');
    expect(pdId.include).to.be.equal(false);
    expect(result.rawData.data.inputs.length).to.be.equal(1);
    const [input] = result.rawData.data.inputs;
    expect(input.id).to.be.equal('1');
    expect(input.include).to.be.equal(false);
  });

  it('should handle UPDATE_REF_SET_TO_PROJECT_DATA_FAIL', () => {
    const result = referenceSetsReducer(INIT_STATE, UPDATE_REF_SET_TO_PROJECT_DATA_FAIL);
    expect(result.updatedRefSetToProjectData.loading).to.be.equal(false);
    expect(result.updatedRefSetToProjectData.error).to.be.equal(SERVER_ERROR);
    expect(result.updatedRefSetToProjectData.data).to.deep.equal({});
  });
});
