import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';
import { ReactDOMComponent } from '../_common';

/**
 * Class represents ActiveProjectsTable component
 * @extends {ReactDOMComponent}
 */
class ActiveProjectsTable extends ReactDOMComponent {
  /**
   * Create new ActiveProjectsTable
   * @param {Object} props - The initial properties
   * @see ActiveProjectsTable.propTypes
   */
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
    this.handleProjectSelect = this.handleProjectSelect.bind(this);
  }

  /**
   * Set DOM element width with scroll bar
   *
   * @returns {void}
   */
  componentDidMount() {
    const scrollWidth = this.getScrollbarWidth();

    if (this.node) {
      this.node.style.width = `calc(100% - ${scrollWidth}px`;
    }
  }

  /**
   * Render tbody active projects
   * @returns {Array} Array of project tr tags
   */
  renderRows() {
    const { projects, selectedProjectId } = this.props;

    return projects.map((project) => (
      <tr
        className={
          cx({ [styles.selectedProject]: project.id == selectedProjectId })
        }
        key={project.id}
        data-id={project.id}
      >
        <td className={styles.projectNameTd}>
          {project.name}
        </td>
        <td className={styles.projectStatusTd}>
          {project.status && project.status.name}
        </td>
        <td className={styles.projectTypeTd}>
          {project.type && project.type.name}
        </td>
      </tr>
    ));
  }

  /**
   * Handles select project
   * @param {Object} e - Event object
   * @returns {void}
   */
  handleProjectSelect(e) {
    const tr = this.findParent(e.target, 'TR');

    if (tr) {
      const projectId = tr.getAttribute('data-id');
      this.props.onSelectProject(projectId);
    }
  }

  /**
   * Renders the component
   * @returns {XML} Markup for the component
   */
  render() {
    const { selectedProjectId } = this.props;

    return (
      <div>
        <div
          className={
            cx(
              styles.tbodyContainer,
              { [styles.projectSelected]: selectedProjectId }
            )
          }
        >
          <table className={styles.table}>
            <tbody onClick={this.handleProjectSelect}>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

/**
 * @prop {Object} propTypes - Properties of the component
 * @prop {Array} projects - List of active project
 * @prop {String} selectedProjectId - Selected project id
 * @prop {Function} onSelectProject - Handle select project
 */
ActiveProjectsTable.propTypes = {
  projects: React.PropTypes.array.isRequired,
  selectedProjectId: React.PropTypes.string,
  onSelectProject: React.PropTypes.func.isRequired
};

export default ActiveProjectsTable;
