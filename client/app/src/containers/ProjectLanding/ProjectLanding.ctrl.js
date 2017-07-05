/**
 * Action Invoker (Component Controller)
 */

import {
  performGetActiveProjects
} from '../../actions/projects';
import {
  goToProjectPage
} from '../../services/router';

export const actions = {
  performGetActiveProjects,
  goToProjectPage
};
