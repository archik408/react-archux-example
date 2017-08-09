import { expect } from 'chai';
import { projectsReducer } from '../../projects';
import {
  INIT_STATE,
  GET_ACTIVE_PROJECTS_PENDING,
  GET_ACTIVE_PROJECTS_SUCCESS,
  GET_ACTIVE_PROJECTS_FAIL,
  UPDATE_PROJECT_PENDING,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAIL,
  MODIFY_PROJECT_PENDING,
  MODIFY_PROJECT_SUCCESS,
  MODIFY_PROJECT_FAIL,
  SEARCH_PROJECTS_PENDING,
  SEARCH_PROJECTS_SUCCESS,
  SEARCH_PROJECTS_FAIL,
  GET_PROJECT_PENDING,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAIL,
  CREATE_PROJECT_PENDING,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  DELETE_USER_PROJECT_BY_PROJECT_ID_PENDING,
  DELETE_USER_PROJECT_BY_PROJECT_ID_SUCCESS,
  DELETE_USER_PROJECT_BY_PROJECT_ID_FAIL,
  LOAD_PROJECT_DATA_PENDING,
  LOAD_PROJECT_DATA_SUCCESS,
  LOAD_PROJECT_DATA_FAIL,
  GET_PROJECT_DATA_PENDING,
  GET_PROJECT_DATA_SUCCESS,
  GET_PROJECT_DATA_FAIL,
  UPDATE_PROJECT_FILTER,
  DIRTY_STATE,
  UNLOAD_PROJECT_DATA_PENDING,
  UNLOAD_PROJECT_DATA_SUCCESS,
  UNLOAD_PROJECT_DATA_FAIL,
  CLEAR_PROJECT_DATA,
  GET_PROJECT_BENCHMARK_PENDING,
  GET_PROJECT_BENCHMARK_SUCCESS,
  GET_PROJECT_BENCHMARK_FAIL,
  CREATE_BENCHMARK_REPORT_PENDING,
  CREATE_BENCHMARK_REPORT_SUCCESS,
  CREATE_BENCHMARK_REPORT_FAIL,
  UPDATE_PROJECT_DATA_PENDING,
  UPDATE_PROJECT_DATA_SUCCESS,
  UPDATE_PROJECT_DATA_FAIL,
  GET_PROJECT_DATA_BY_PROJECT_ID_PENDING,
  GET_PROJECT_DATA_BY_PROJECT_ID_SUCCESS,
  GET_PROJECT_DATA_BY_PROJECT_ID_FAIL
} from './data.test';

  describe('Projects reducer', () => {
    // ********************* GET_ACTIVE_PROJECTS ******************************
    it('should handle GET_ACTIVE_PROJECTS_PENDING', () => {
      const result = projectsReducer(INIT_STATE, GET_ACTIVE_PROJECTS_PENDING);
      expect(result.activeProjects.loading).to.be.equal(true);
      expect(result.activeProjects.error).to.be.equal(null);
      expect(result.activeProjects.data).to.have.length(0);
    });
    it('should handle GET_ACTIVE_PROJECTS_SUCCESS', () => {
      const result = projectsReducer(INIT_STATE, GET_ACTIVE_PROJECTS_SUCCESS);
      expect(result.activeProjects.data).to.have.length(1);
      expect(result.activeProjects.data).to.deep.equal(GET_ACTIVE_PROJECTS_SUCCESS.payload);

      expect(result.activeProjects.loading).to.be.equal(false);
      expect(result.activeProjects.error).to.be.equal(null);
    });
    it('should handle GET_ACTIVE_PROJECTS_FAIL', () => {
      const result = projectsReducer(INIT_STATE, GET_ACTIVE_PROJECTS_FAIL);
      expect(result.activeProjects.loading).to.be.equal(false);
      expect(result.activeProjects.error).to.equal('Error');
      expect(result.activeProjects.data).to.have.length(0);
    });

  // ********************* SEARCH_PROJECTS ******************************
  it('should handle SEARCH_PROJECTS_PENDING', () => {
    const result = projectsReducer(INIT_STATE, SEARCH_PROJECTS_PENDING);
    expect(result.foundProjects.loading).to.equal(true);
    expect(result.foundProjects.error).to.be.equal(null);
    expect(result.foundProjects.data).to.have.length(0);
  });
  it('should handle SEARCH_PROJECTS_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, SEARCH_PROJECTS_SUCCESS);
    expect(result.foundProjects.data).to.have.length(1);
    expect(result.foundProjects.data).to.deep.equal(SEARCH_PROJECTS_SUCCESS.payload);

    expect(result.foundProjects.loading).to.be.equal(false);
    expect(result.foundProjects.error).to.be.equal(null);

    const [filter] = SEARCH_PROJECTS_SUCCESS.meta;
    expect(result.projectFilter).to.deep.equal(filter);
  });
  it('should handle SEARCH_PROJECTS_FAIL', () => {
    const result = projectsReducer(INIT_STATE, SEARCH_PROJECTS_FAIL);
    expect(result.foundProjects.error).to.equal('Error');

    expect(result.foundProjects.loading).to.be.equal(false);
    expect(result.foundProjects.data).to.have.length(0);
  });

  // ********************* GET_PROJECT ******************************
  it('should handle GET_PROJECT_PENDING', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_PENDING);
    expect(result.project.loading).to.be.equal(true);
    expect(result.project.error).to.be.equal(null);
    expect(result.project.data).to.deep.equal({});
  });
  it('should handle GET_PROJECT_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_SUCCESS);
    expect(result.project.data).to.deep.equal(GET_PROJECT_SUCCESS.payload);
    expect(result.project.loading).to.be.equal(false);
    expect(result.project.error).to.be.equal(null);
  });
  it('should handle GET_PROJECT_FAIL', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_FAIL);
    expect(result.project.loading).to.be.equal(false);
    expect(result.project.error).to.equal('Error');
    expect(result.project.data).to.deep.equal({});
  });

  // ********************* CREATE_PROJECT ******************************
  it('should handle CREATE_PROJECT_PENDING', () => {
    const result = projectsReducer(INIT_STATE, CREATE_PROJECT_PENDING);
    expect(result.createdProject.loading).to.be.equal(true);
    expect(result.createdProject.error).to.be.equal(null);
    expect(result.createdProject.data).to.deep.equal({});
  });
  it('should handle CREATE_PROJECT_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, CREATE_PROJECT_SUCCESS);
    expect(result.createdProject.data).to.deep.equal(CREATE_PROJECT_SUCCESS.payload);
    expect(result.createdProject.loading).to.be.equal(false);
    expect(result.createdProject.error).to.be.equal(null);

    expect(result.activeProjects.data[0]).to.deep.equal(CREATE_PROJECT_SUCCESS.payload);
  });
  it('should handle CREATE_PROJECT_FAIL', () => {
    const result = projectsReducer(INIT_STATE, CREATE_PROJECT_FAIL);
    expect(result.createdProject.loading).to.be.equal(false);
    expect(result.createdProject.error).to.equal('Error');
    expect(result.createdProject.data).to.deep.equal({});
  });

  // ********************* UPDATE_PROJECT ******************************
  it('should handle UPDATE_PROJECT_PENDING', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_PENDING);
    expect(result.updatedProject.loading).to.equal(true);
    expect(result.updatedProject.error).to.be.equal(null);
    expect(result.updatedProject.data).to.deep.equal({});
  });
  it('should handle UPDATE_PROJECT_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_SUCCESS);
    expect(result.updatedProject.data).to.deep.equal(UPDATE_PROJECT_SUCCESS.payload);
    expect(result.updatedProject.loading).to.be.equal(false);
    expect(result.updatedProject.error).to.be.equal(null);
  });
  it('should handle UPDATE_PROJECT_FAIL', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_FAIL);
    expect(result.updatedProject.error).to.equal('Error');
    expect(result.updatedProject.loading).to.be.equal(false);
    expect(result.updatedProject.data).to.deep.equal({});
  });

  // ********************* MODIFY_PROJECT ******************************
  it('should handle MODIFY_PROJECT_PENDING', () => {
    const result = projectsReducer(INIT_STATE, MODIFY_PROJECT_PENDING);
    expect(result.modifiedProject.loading).to.equal(true);
    expect(result.modifiedProject.error).to.be.equal(null);
    expect(result.modifiedProject.data).to.deep.equal({});
  });
  it('should handle MODIFY_PROJECT_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, MODIFY_PROJECT_SUCCESS);
    expect(result.modifiedProject.loading).to.be.equal(false);
    expect(result.modifiedProject.error).to.be.equal(null);
    expect(result.modifiedProject.data).to.deep.equal(MODIFY_PROJECT_SUCCESS.payload);

    expect(result.activeProjects.data).to.deep.equal([]);
  });
  it('should handle MODIFY_PROJECT_FAIL', () => {
    const result = projectsReducer(INIT_STATE, MODIFY_PROJECT_FAIL);
    expect(result.modifiedProject.error).to.equal('Error');
    expect(result.modifiedProject.loading).to.be.equal(false);
    expect(result.modifiedProject.data).to.deep.equal({});
  });

  // ********************* DELETE_USER_PROJECT_BY_PROJECT_ID ******************************
  it('should handle DELETE_USER_PROJECT_BY_PROJECT_ID_PENDING', () => {
    const result = projectsReducer(INIT_STATE, DELETE_USER_PROJECT_BY_PROJECT_ID_PENDING);
    expect(result.deletedProject.loading).to.equal(true);
    expect(result.deletedProject.error).to.be.equal(null);
    expect(result.deletedProject.data).to.deep.equal({});
  });
  it('should handle DELETE_USER_PROJECT_BY_PROJECT_ID_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, DELETE_USER_PROJECT_BY_PROJECT_ID_SUCCESS);
    expect(result.deletedProject.loading).to.be.equal(false);
    expect(result.deletedProject.error).to.be.equal(null);

    const [id] = DELETE_USER_PROJECT_BY_PROJECT_ID_SUCCESS.meta;
    expect(result.deletedProject.data).to.deep.equal({ id });

    expect(result.activeProjects.data).to.deep.equal([]);
  });
  it('should handle DELETE_USER_PROJECT_BY_PROJECT_ID_FAIL', () => {
    const result = projectsReducer(INIT_STATE, DELETE_USER_PROJECT_BY_PROJECT_ID_FAIL);
    expect(result.deletedProject.error).to.equal('Error');
    expect(result.deletedProject.loading).to.be.equal(false);
    expect(result.deletedProject.data).to.deep.equal({});
  });

  // ********************* LOAD_PROJECT_DATA ******************************
  it('should handle LOAD_PROJECT_DATA_PENDING', () => {
    const result = projectsReducer(INIT_STATE, LOAD_PROJECT_DATA_PENDING);
    expect(result.loadedProjectData.loading).to.be.equal(true);
    expect(result.loadedProjectData.error).to.be.equal(null);
    expect(result.loadedProjectData.data).to.have.length(0);
  });
  it('should handle LOAD_PROJECT_DATA_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, LOAD_PROJECT_DATA_SUCCESS);
    expect(result.loadedProjectData.data).to.have.length(1);
    expect(result.loadedProjectData.data).to.deep.equal(LOAD_PROJECT_DATA_SUCCESS.payload.data);

    expect(result.loadedProjectData.loading).to.be.equal(false);
    expect(result.loadedProjectData.error).to.be.equal(null);
  });
  it('should handle LOAD_PROJECT_DATA_FAIL', () => {
    const result = projectsReducer(INIT_STATE, LOAD_PROJECT_DATA_FAIL);
    expect(result.loadedProjectData.loading).to.be.equal(false);
    expect(result.loadedProjectData.error).to.equal('Error');
    expect(result.loadedProjectData.data).to.have.length(0);
  });

  // ********************* GET_PROJECT_DATA ******************************
  it('should handle GET_PROJECT_DATA_PENDING', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_DATA_PENDING);
    expect(result.loadedProjectData.loading).to.be.equal(true);
    expect(result.loadedProjectData.error).to.be.equal(null);
    expect(result.loadedProjectData.data).to.have.length(0);
  });
  it('should handle GET_PROJECT_DATA_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_DATA_SUCCESS);
    expect(result.loadedProjectData.data).to.have.length(1);
    expect(result.loadedProjectData.data).to.deep.equal(GET_PROJECT_DATA_SUCCESS.payload);

    expect(result.loadedProjectData.loading).to.be.equal(false);
    expect(result.loadedProjectData.error).to.be.equal(null);
  });
  it('should handle GET_PROJECT_DATA_FAIL', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_DATA_FAIL);
    expect(result.loadedProjectData.loading).to.be.equal(false);
    expect(result.loadedProjectData.error).to.equal('Error');
    expect(result.loadedProjectData.data).to.have.length(0);
  });

  // ********************* UPDATE_PROJECT_FILTER ******************************
  it('should handle UPDATE_PROJECT_FILTER', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_FILTER);
    expect(result.projectFilter).to.deep.equal({ search: {}, ...UPDATE_PROJECT_FILTER.payload });
  });

  describe('Project data', () => {
    // ********************* UNLOAD_PROJECT_DATA INIT_STATE******************************
    it('should handle UNLOAD_PROJECT_DATA_PENDING with INIT_STATE', () => {
      const result = projectsReducer(INIT_STATE, UNLOAD_PROJECT_DATA_PENDING);
      expect(result.deletedProjectData.loading).to.be.equal(true);
      expect(result.deletedProjectData.error).to.be.equal(null);
      expect(result.deletedProjectData.data).to.deep.equal({});
    });

    it('should handle UNLOAD_PROJECT_DATA_SUCCESS with INIT_STATE', () => {
      const result = projectsReducer(INIT_STATE, UNLOAD_PROJECT_DATA_SUCCESS);
      expect(result.deletedProjectData.loading).to.be.equal(false);
      expect(result.deletedProjectData.error).to.be.equal(null);
      expect(result.deletedProjectData.data).to.deep.equal({ ids: ['1', '2'] });
    });

    it('should handle UNLOAD_PROJECT_DATA_FAIL with INIT_STATE', () => {
      const result = projectsReducer(INIT_STATE, UNLOAD_PROJECT_DATA_FAIL);
      expect(result.deletedProjectData.loading).to.be.equal(false);
      expect(result.deletedProjectData.error).to.be.equal('Error');
      expect(result.deletedProjectData.data).to.deep.equal({});
    });
    // ********************* UNLOAD_PROJECT_DATA DIRTY_STATE******************************
    it('should handle UNLOAD_PROJECT_DATA_PENDING with DIRTY_STATE', () => {
      const result = projectsReducer(DIRTY_STATE, UNLOAD_PROJECT_DATA_PENDING);
      expect(result.deletedProjectData.loading).to.be.equal(true);
      expect(result.deletedProjectData.error).to.be.equal(null);
      expect(result.deletedProjectData.data).to.deep.equal({ ids: ['3', '4'] });
    });

    it('should handle UNLOAD_PROJECT_DATA_SUCCESS with DIRTY_STATE', () => {
      const result = projectsReducer(DIRTY_STATE, UNLOAD_PROJECT_DATA_SUCCESS);
      expect(result.deletedProjectData.loading).to.be.equal(false);
      expect(result.deletedProjectData.error).to.be.equal(null);
      expect(result.deletedProjectData.data).to.deep.equal({ ids: ['1', '2'] });
      const changedProjectData = DIRTY_STATE.projectData.data.filter(pd => !['1', '2'].includes(pd.id));

      expect(result.projectData.data).to.deep.equal(changedProjectData);
    });

    it('should handle UNLOAD_PROJECT_DATA_FAIL with DIRTY_STATE', () => {
      const result = projectsReducer(DIRTY_STATE, UNLOAD_PROJECT_DATA_FAIL);
      expect(result.deletedProjectData.loading).to.be.equal(false);
      expect(result.deletedProjectData.error).to.be.equal('Error');
      expect(result.deletedProjectData.data).to.deep.equal({ ids: ['3', '4'] });
    });
  });

  // ********************* CLEAR_PROJECT_DATA INIT_STATE ******************************
  it('should handle CLEAR_PROJECT_DATA', () => {
    const result = projectsReducer(INIT_STATE, CLEAR_PROJECT_DATA);
    expect(result.loadedProjectData.data).to.deep.equal([]);
    expect(result.loadedProjectData.error).to.equal(INIT_STATE.loadedProjectData.error);
    expect(result.loadedProjectData.loading).to.equal(INIT_STATE.loadedProjectData.loading);

    expect(result.deletedProjectData.data).to.deep.equal({});
    expect(result.deletedProjectData.error).to.deep.equal(INIT_STATE.deletedProjectData.error);
    expect(result.deletedProjectData.loading).to.deep.equal(INIT_STATE.deletedProjectData.loading);
  });

  // ********************* CLEAR_PROJECT_DATA DIRTY_STATE ******************************
  it('should handle CLEAR_PROJECT_DATA', () => {
    const result = projectsReducer(DIRTY_STATE, CLEAR_PROJECT_DATA);
    expect(result.loadedProjectData.data).to.deep.equal([]);
    expect(result.loadedProjectData.error).to.equal(DIRTY_STATE.loadedProjectData.error);
    expect(result.loadedProjectData.loading).to.equal(DIRTY_STATE.loadedProjectData.loading);

    expect(result.deletedProjectData.data).to.deep.equal({});
    expect(result.deletedProjectData.error).to.deep.equal(DIRTY_STATE.deletedProjectData.error);
    expect(result.deletedProjectData.loading).to.deep.equal(DIRTY_STATE.deletedProjectData.loading);
  });

  // ********************* GET_PROJECT_BENCHMARK ******************************
  it('should handle GET_PROJECT_BENCHMARK_PENDING', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_BENCHMARK_PENDING);
    expect(result.benchmark.loading).to.be.equal(true);
    expect(result.benchmark.error).to.be.equal(null);
    expect(result.benchmark.data).to.deep.equal({});
  });
  it('should handle GET_PROJECT_BENCHMARK_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_BENCHMARK_SUCCESS);
    expect(result.benchmark.data).to.deep.equal(GET_PROJECT_BENCHMARK_SUCCESS.payload);
    expect(result.benchmark.loading).to.be.equal(false);
    expect(result.benchmark.error).to.be.equal(null);
  });
  it('should handle GET_PROJECT_BENCHMARK_FAIL', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_BENCHMARK_FAIL);
    expect(result.benchmark.loading).to.be.equal(false);
    expect(result.benchmark.error).to.equal('Error');
    expect(result.benchmark.data).to.deep.equal({});
  });

  // ********************* CREATE_BENCHMARK_REPORT ******************************
  it('should handle CREATE_BENCHMARK_REPORT_PENDING', () => {
    const result = projectsReducer(INIT_STATE, CREATE_BENCHMARK_REPORT_PENDING);
    expect(result.report.loading).to.be.equal(true);
    expect(result.report.error).to.be.equal(null);
    expect(result.report.data).to.deep.equal({});
  });
  it('should handle CREATE_BENCHMARK_REPORT_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, CREATE_BENCHMARK_REPORT_SUCCESS);
    expect(result.report.data).to.deep.equal(CREATE_BENCHMARK_REPORT_SUCCESS.payload);
    expect(result.report.loading).to.be.equal(false);
    expect(result.report.error).to.be.equal(null);
  });
  it('should handle CREATE_BENCHMARK_REPORT_FAIL', () => {
    const result = projectsReducer(INIT_STATE, CREATE_BENCHMARK_REPORT_FAIL);
    expect(result.report.loading).to.be.equal(false);
    expect(result.report.error).to.equal('Error');
    expect(result.report.data).to.deep.equal({});
  });

  // ********************* UPDATE_PROJECT_DATA ******************************
  it('should handle UPDATE_PROJECT_DATA_PENDING', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_DATA_PENDING);
    expect(result.updatedProjectData.loading).to.be.equal(true);
    expect(result.updatedProjectData.error).to.be.equal(null);
    expect(result.updatedProjectData.data).to.deep.equal([]);
  });
  it('should handle UPDATE_PROJECT_DATA_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_DATA_SUCCESS);
    expect(result.updatedProjectData.data).to.deep.equal(UPDATE_PROJECT_DATA_SUCCESS.payload);
    expect(result.updatedProjectData.loading).to.be.equal(false);
    expect(result.updatedProjectData.error).to.be.equal(null);
  });
  it('should handle UPDATE_PROJECT_DATA_FAIL', () => {
    const result = projectsReducer(INIT_STATE, UPDATE_PROJECT_DATA_FAIL);
    expect(result.updatedProjectData.loading).to.be.equal(false);
    expect(result.updatedProjectData.error).to.equal('Error');
    expect(result.updatedProjectData.data).to.deep.equal([]);
  });

  // ********************* GET_PROJECT_DATA_BY_PROJECT_ID ******************************
  it('should handle GET_PROJECT_DATA_BY_PROJECT_ID_PENDING', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_DATA_BY_PROJECT_ID_PENDING);
    expect(result.projectData.loading).to.be.equal(true);
    expect(result.projectData.error).to.be.equal(null);
    expect(result.projectData.data).to.deep.equal([]);
  });
  it('should handle GET_PROJECT_DATA_BY_PROJECT_ID_SUCCESS', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_DATA_BY_PROJECT_ID_SUCCESS);
    expect(result.projectData.data).to.deep.equal(GET_PROJECT_DATA_BY_PROJECT_ID_SUCCESS.payload);
    expect(result.projectData.loading).to.be.equal(false);
    expect(result.projectData.error).to.be.equal(null);
  });
  it('should handle GET_PROJECT_DATA_BY_PROJECT_ID_FAIL', () => {
    const result = projectsReducer(INIT_STATE, GET_PROJECT_DATA_BY_PROJECT_ID_FAIL);
    expect(result.projectData.loading).to.be.equal(false);
    expect(result.projectData.error).to.equal('Error');
    expect(result.projectData.data).to.deep.equal([]);
  });
});
