import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Layout from '../Layout';

describe('Layout component', () => {
  it('should render Layout', () => {
    const component = shallow(
      <Layout />
    );
    expect(component).to.be.a('object');
  });
});
