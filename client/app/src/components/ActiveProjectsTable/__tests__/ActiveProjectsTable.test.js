import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import { ACTIVE_PROJECTS } from './data.test';
import ActiveProjectsTable from '../ActiveProjectsTable';

describe('ActiveProjectsTable component', () => {

  it('should render 1 table with specific columns', () => {
    const component = shallow(
      <ActiveProjectsTable
        projects={ACTIVE_PROJECTS}
        selectedProjectId={null}
        onSelectProject={() => {}}
      />
    );
    const table = component.find('.table');
    expect(table).to.have.length(1);

    const ths = table.find('th');
    expect(ths).to.have.length(3);

    const firstTh = ths.at(0);
    expect(firstTh.text()).to.equal('Project 1');

    const secondTh = ths.at(1);
    expect(secondTh.text()).to.equal('Final');

    const thirdTh = ths.at(2);
    expect(thirdTh.text()).to.equal('Pulse');
  });

  it('should render 1 table with selected project', () => {
    const [firstProject] = ACTIVE_PROJECTS;
    const component = shallow(
      <ActiveProjectsTable
        projects={ACTIVE_PROJECTS}
        selectedProjectId={firstProject.id}
        onSelectProject={() => {}}
      />
    );
    const table = component.find('.table');

    const tbody = table.find('tbody');

    const trs = tbody.find('tr');
    expect(trs).to.have.length(2);

    const firstTr = trs.at(0);
    expect(firstTr.hasClass('selectedProject')).to.equal(true);

    const secondTr = trs.at(1);
    expect(secondTr.hasClass('selectedProject')).to.equal(false);
  });
});
