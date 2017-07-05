/**
 * @module Router Service
 *
 * @desc Describe application routes,
 * define application history and
 * provide opportunity to navigate
 * between routes.
 */

import React from 'react';
import { Route, IndexRoute, useRouterHistory } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';
import App from '../containers/App';
import ProjectLanding from '../containers/ProjectLanding';


const canUseDOM =
  !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Create Router History
 *
 * @param {function()} createHistory - History Factory Method
 *
 * @returns {Object} Application History
 */
function createRouterHistory(createHistory) {
  if (canUseDOM) {
    return useRouterHistory(createHistory)({ queryKey: false });
  }
  return void 0;
}

export const history = createRouterHistory(createHashHistory);

export const routes = (
  <div>
    <Route path="/" component={App}>
      <IndexRoute component={ProjectLanding} />
    </Route>
  </div>
);

/**
 * Open Project Page
 *
 * @param {String} projectId - Project identifier
 *
 * @returns {void}
 */
export function goToProjectPage(projectId = '') {
  // TODO Uncomment after implementation
  // history.push(`/${PROJECT_PAGE_URI}/${projectId}`);
  console.log(projectId);
}

/**
 * Go back (step back in state history)
 *
 * @returns {void}
 */
export function goBack() {
  history.goBack();
}
