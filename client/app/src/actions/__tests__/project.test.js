import sinon from 'sinon';
import { expect } from 'chai';


  import { dispatcher } from '../../store';
  import {
    performGetActiveProjects,
    performGetProject
  } from '../projects';

  describe('Project Actions', () => {

    beforeEach(() => {
      dispatcher.dispatchPromise = sinon.spy();
    });

    describe('getActiveProjects', () => {
      it('should call dispatch method with correct arguments', () => {
        performGetActiveProjects();

        expect(dispatcher.dispatchPromise).to.have.property('callCount', 1);
        const [[method, type, loadingFunc, meta]] = dispatcher.dispatchPromise.args;

        expect(method.name).to.be.equal('getActiveProjects');
        expect(type).to.be.equal('GET_ACTIVE_PROJECTS');
        expect(loadingFunc({ Projects: { activeProjects: { loading: 'TEST' } } })).to.be.equal('TEST');
      });
    });

    describe('getProject', () => {
      it('should call dispatch method with correct arguments', () => {
        performGetProject('1');

        expect(dispatcher.dispatchPromise).to.have.property('callCount', 1);
        const [[method, type, loadingFunc, meta]] = dispatcher.dispatchPromise.args;

        expect(method.name).to.be.equal('getProject');
        expect(type).to.be.equal('GET_PROJECT');
        expect(loadingFunc({ Projects: { project: { loading: 'TEST' } } })).to.be.equal('TEST');

        const [projectId] = meta;
        expect(projectId).to.be.equal('1');
      });
    });
  });
