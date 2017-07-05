/**
 * @module Components
 *
 * @desc Components let you split the UI into independent,
 * reusable pieces, and think about each piece in isolation
 */


import Layout from './Layout';
import ActiveProjectsTable from './ActiveProjectsTable';

import {
  ReactDOMComponent,
  Button,
  ButtonGroup,
  PageProgressBar
} from './_common';

export {
  /**
   * Web component
   * @see PageProgressBar
   */
  PageProgressBar,
  /**
   * Web component
   * @see Layout
   */
  Layout,
  /**
   * Web component
   * @see ReactDOMComponent
   */
  ReactDOMComponent,
  /**
   * Web component
   * @see ActiveProjectsTable
   */
  ActiveProjectsTable,
  /**
   * Web component
   * @see Button
   */
  Button,
  /**
   * Web component
   * @see ButtonGroup
   */
  ButtonGroup
};
