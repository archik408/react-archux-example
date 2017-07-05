import React from 'react';
import { subscribeToStore } from '../../store';
import { actions } from './ProjectLanding.ctrl';
import styles from './styles.scss';
import {
  ActiveProjectsTable,
  PageProgressBar,
  Button,
  ButtonGroup
} from '../../components';

/**
 * Class represents ProjectLanding Page
 *
 * @extends {React.Component}
 */
export class ProjectLanding extends React.Component {
  /**
   * Create new ProjectLanding
   *
   * @param {Object} props - The initial properties
   * @see ProjectLanding.propTypes
   */
  constructor(props) {
    super(props);
    this.state = {
      selectedProjectId: null
    };

    this.openCreateProject = this.openCreateProject.bind(this);
    this.selectProject = this.selectProject.bind(this);
    this.openProjectInformation = this.openProjectInformation.bind(this);
  }

  /**
   * Fetch active projects
   *
   * @returns {void}
   */
  componentDidMount() {
    actions.performGetActiveProjects();
  }

  /**
   * Get selected project data with extended owner
   *
   * @returns {Object | Undefined} Project data
   */
  getSelectedProject() {
    const { activeProjects } = this.props;
    const { selectedProjectId } = this.state;

    return activeProjects.find(project => project.id == selectedProjectId);
  }

  /**
   * Select or deselect project
   *
   * @param {String} projectId - Selected project id
   *
   * @returns {void}
   */
  selectProject(projectId) {
    const selectedProjectId = this.state.selectedProjectId == projectId ? null : projectId;
    this.setState({ selectedProjectId });
  }

  /**
   * Open project information page
   *
   * @returns {void}
   */
  openProjectInformation() {
    const { selectedProjectId } = this.state;
    if (selectedProjectId) {
      actions.goToProjectPage(selectedProjectId);
    }
  }

  /**
   * Open create project page
   *
   * @returns {void}
   */
  openCreateProject() {
    actions.goToProjectPage();
  }

  /**
   * Renders the component
   *
   * @returns {XML} Markup for the component
   */
  render() {
    const { selectedProjectId } = this.state;
    const { activeProjects, loading } = this.props;

    return (
      <div className={styles.activeProjectsContainer}>

        <PageProgressBar isActive={loading} />

        <div className={styles.headerContainer}>
          <p className={styles.header}>Active Projects</p>
        </div>

        <ActiveProjectsTable
          projects={activeProjects}
          selectedProjectId={selectedProjectId}
          onSelectProject={this.selectProject}
        />

        <div className={styles.groupButtonContainer}>
          <ButtonGroup theme={styles}>
            <Button
              theme={styles}
              title="PROJECT INFORMATION"
              type="button"
              variant={selectedProjectId ? 'primary' : 'forbidden'}
              onClick={this.openProjectInformation}
            />
            <Button
              theme={styles}
              title="CREATE PROJECT"
              type="button"
              variant="warning"
              onClick={this.openCreateProject}
            />
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

/**
 * @prop {Object} propTypes - Properties of the component
 * @prop {Boolean} propTypes.loading - Indicate that data is loading
 * @prop {Array} propTypes.activeProjects - List of active project
 */
ProjectLanding.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  activeProjects: React.PropTypes.array.isRequired
};

/**
 * Map state to properties
 *
 * @param {Object} state - Application state
 *
 * @returns {Object} Data from state
 * @private
 */
function mapStateToProps(state) {
  return {
    activeProjects: state.Projects.activeProjects.data,
    loading: state.Projects.activeProjects.loading
  };
}

export default subscribeToStore(ProjectLanding, mapStateToProps);
