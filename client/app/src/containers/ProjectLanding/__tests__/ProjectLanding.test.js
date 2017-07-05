import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { actions } from '../ProjectLanding.ctrl';
import { ProjectLanding } from '../ProjectLanding';
import {
  PageProgressBar,
  ActiveProjectsTable,
  ButtonGroup,
  Button
} from '../../../components';
import { ACTIVE_PROJECTS } from './data.test';

describe('ProjectLanding container component', () => {
  function renderComponent({
    activeProjects = [],
    loading = false
  } = {}) {
    actions.boundGetActiveProjects = sinon.spy();
    actions.goToProjectPage = sinon.spy();

    const component = mount(
      <ProjectLanding
        activeProjects={activeProjects}
        loading={loading}
      />
    );
    return { component, actions };
  }

  it(`should render 
      - 1 PageProgressBar
      - 1 ActiveProjectsTable
      - 1 ButtonGroup
      - 2 Button components`, () => {
    const { component } = renderComponent();
    expect(component.find(PageProgressBar)).to.have.length(1);
    expect(component.find(ActiveProjectsTable)).to.have.length(1);
    expect(component.find(ButtonGroup)).to.have.length(1);
    expect(component.find(Button)).to.have.length(2);
  });

  it('should render 1 PageProgressBar must have not active state', () => {
    const { component } = renderComponent();
    const progressBar = component.find(PageProgressBar).at(0);
    expect(progressBar.props().isActive).to.equal(false);
  });

  it('should render 1 ActiveProjectsTable with specific props', () => {
    const { component } = renderComponent({ activeProjects: ACTIVE_PROJECTS });
    const activeProjectsTable = component.find(ActiveProjectsTable).at(0);
    expect(activeProjectsTable.props().projects).to.equal(ACTIVE_PROJECTS);
    expect(activeProjectsTable.props().selectedProjectId).to.equal(null);
    expect(activeProjectsTable.props().onSelectProject).to.be.a('function');
  });

  it('should render 2 Button with specific props', () => {
    const { component } = renderComponent();
    const buttons = component.find(Button);

    expect(buttons).to.have.length(2);

    const secondButton = buttons.at(0);
    expect(secondButton.props().title).to.equal('PROJECT INFORMATION');
    expect(secondButton.props().type).to.equal('button');

    const thirdButton = buttons.at(1);
    expect(thirdButton.props().title).to.equal('CREATE PROJECT');
    expect(thirdButton.props().type).to.equal('button');
  });

  it('should call specific actions (get active projects)', () => {
    const { actions } = renderComponent();
    expect(actions.performGetActiveProjects).to.have.property('callCount', 1);
  });

  it('should call action callback after click on create project button', () => {
    const { component, actions } = renderComponent();
    const buttons = component.find(Button);

    const createProjectButton = buttons.at(2);
    createProjectButton.simulate('click');
    expect(actions.goToProjectPage).to.have.property('callCount', 1);
  });

  it('should call action callback after click on project information button', () => {
    const { component, actions } = renderComponent();
    const buttons = component.find(Button);
    const table = component.find('table').at(1);

    component.setProps({
      activeProjects: ACTIVE_PROJECTS,
    });

    const updateProjectButton = buttons.at(1);
    const firstRow = table.find('tr').at(0);

    firstRow.simulate('click');
    updateProjectButton.simulate('click');
    expect(actions.goToProjectPage).to.have.property('callCount', 1);
  });
});
