import { expect } from 'chai';
import buildParamsForRequest from '../buildParamsForRequest';

describe('Build params for request', () => {
  it('should return params for request with search query', () => {
    const filterParams = { searchQuery: 'some' };
    const filter = {
      where: {
        and: [{ name: { regexp: 'some/i' } }]
      }
    };
    const params = {
      params: {
        filter: JSON.stringify(filter)
      }
    };
    expect(buildParamsForRequest(filterParams)).to.deep.equal(params);
  });

  it('should return params for request with search query and sat field', () => {
    const field = 'year';
    const filterParams = { searchQuery: 'some' };
    const filter = {
      where: {
        and: [{ year: 'some' }]
      }
    };
    const params = {
      params: {
        filter: JSON.stringify(filter)
      }
    };
    expect(buildParamsForRequest(filterParams, field)).to.deep.equal(params);
  });

  it('should return params for request with search query and include', () => {
    const filterParams = {
      include: ['projectStatuses'],
      searchQuery: 'some'
    };
    const filter = {
      where: {
        and: [{ name: { regexp: 'some/i' } }]
      },
      include: ['projectStatuses']
    };
    const params = {
      params: {
        filter: JSON.stringify(filter)
      }
    };
    expect(buildParamsForRequest(filterParams)).to.deep.equal(params);
  });
});

