  import sinon from 'sinon';
  import { expect } from 'chai';
  import Axios from 'axios';
  import { SESSION_API_URL } from '../../../../constants';

  import {
    getActiveProjects
  } from '../../project';


  describe('Project Service', () => {
    it('should build correct request for getting projects ', (done) => {
      Axios.get = sinon.spy();
      getActiveProjects();
      const [[url]] = Axios.get.args;
      expect(url).to.be.equal(`${SESSION_API_URL}/projects`);
      expect(Axios.get).to.have.property('callCount', 1);
      done();
    });
  });
  
