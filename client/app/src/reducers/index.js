/**
 * @module Model Reducers
 *
 * @desc Actions describe the fact that something happened,
 * but don't specify how the application's state changes in response.
 * This is the job of a model reducers
 */

import { projectsReducer } from './projects';

export default {
  Projects: projectsReducer
};
