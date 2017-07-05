import { expect } from 'chai';
import { userProjectsReducer } from '../../useProjects';
import {
  INIT_STATE,
  GET_USER_PROJECTS_BY_USER_ID_SUCCESS,
  DELETE_USER_PROJECT_SUCCESS,
  MODIFY_USER_PROJECT_ACCESS_RIGHTS_SUCCESS
} from './data.test';

describe('User Projects reducer', () => {
  it('should handle GET_USER_PROJECTS_BY_USER_ID_SUCCESS', () => {
    const result = userProjectsReducer(INIT_STATE, GET_USER_PROJECTS_BY_USER_ID_SUCCESS);
    expect(result.userProjects.data).to.be.equal(GET_USER_PROJECTS_BY_USER_ID_SUCCESS.payload);
  });
  it('should handle DELETE_USER_PROJECT_SUCCESS', () => {
    const result = userProjectsReducer(INIT_STATE, DELETE_USER_PROJECT_SUCCESS);
    expect(result.deletedUserProject.data).to.deep.equal(DELETE_USER_PROJECT_SUCCESS.payload);
  });
  it('should handle MODIFY_USER_PROJECT_ACCESS_RIGHTS_SUCCESS', () => {
    const result = userProjectsReducer(INIT_STATE, MODIFY_USER_PROJECT_ACCESS_RIGHTS_SUCCESS);
    expect(result.modifiedUserProjects.data).to.equal(
      MODIFY_USER_PROJECT_ACCESS_RIGHTS_SUCCESS.payload.data
    );
  });
});
