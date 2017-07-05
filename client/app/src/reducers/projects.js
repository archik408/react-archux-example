/**
 * @module Model Reducers/Projects
 */

/**
 * Initial State
 * @type {Object}
 */
const initialState = {
  activeProjects: { data: [], error: null, loading: false },
  project: { data: {}, error: null, loading: false }
};

/**
 * Projects Reducer
 *
 * @param {Object} state - Application state
 * @param {Object} action - Specific action
 *
 * @returns {Object} New state
 */
export function projectsReducer(state = initialState, action) {
  switch (action.type) {
    // ********************* GET_ACTIVE_PROJECTS ******************************
    case 'GET_ACTIVE_PROJECTS_PENDING':
      return {
        ...state,
        activeProjects: {
          ...state.activeProjects,
          error: null,
          loading: true
        }
      };
    case 'GET_ACTIVE_PROJECTS_SUCCESS':
      return {
        ...state,
        activeProjects: {
          data: action.payload,
          error: null,
          loading: false
        }
      };
    case 'GET_ACTIVE_PROJECTS_FAIL':
      return {
        ...state,
        activeProjects: {
          ...state.activeProjects,
          error: action.payload.message || 'Error, get active projects failed',
          loading: false
        }
      };
    // ********************* GET_PROJECT ******************************
    case 'GET_PROJECT_PENDING':
      return {
        ...state,
        project: {
          ...state.project,
          error: null,
          loading: true
        }
      };
    case 'GET_PROJECT_SUCCESS':
      return {
        ...state,
        project: {
          data: action.payload,
          error: null,
          loading: false
        }
      };
    case 'GET_PROJECT_FAIL':
      return {
        ...state,
        project: {
          ...state.project,
          error: action.payload.message || 'Error, get user project failed',
          loading: false
        }
      };
    default:
      return state;
  }
}
