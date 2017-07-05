/**
 * @module Actions/Projects
 */

import {
  getProject,
  getActiveProjects
} from '../services/api/project';

import { dispatcher } from '../store';

/**
 * Perform getActiveProjects action
 *
 * @returns {void}
 */
export function performGetActiveProjects() {
  dispatcher.dispatchPromise(
    getActiveProjects,
    'GET_ACTIVE_PROJECTS',
    (state) => state.Projects.activeProjects.loading
  );
}

/**
 * Perform getProject action
 *
 * @param {String} projectId - Project identifier
 *
 * @returns {void}
 */
export function performGetProject(projectId) {
  dispatcher.dispatchPromise(
    getProject,
    'GET_PROJECT',
    (state) => state.Projects.project.loading,
    [projectId]
  );
}
