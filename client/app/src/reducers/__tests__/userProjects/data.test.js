export const INIT_STATE = {
  userProjects: { data: [], error: null, loading: false },
  deletedUserProject: { data: {}, error: null, loading: false },
  modifiedUserProjects: { data: [], error: null, loading: false },
  user: { data: {}, error: null, loading: false }
};

export const GET_USER_PROJECTS_BY_USER_ID_SUCCESS = {
  type: 'GET_USER_PROJECTS_BY_USER_ID_SUCCESS',
  payload: [
    {
      userId: '2',
      projectId: '5',
      accessRights: 'Read and Write',
      id: '3',
      project: {
        name: 'Project 1',
        creationDate: '02/14/2014',
        owner: '0',
        cstContact: 'CST Contact 1',
        fiscalYear: 2014,
        fiscalYearDescription: 'Fiscal Year Description 2014',
        companyId: '1',
        projectTypeId: '2',
        deploymentTypeId: '2',
        projectStatusId: '1',
        id: '5',
        projectStatus: {
          name: 'Benchmark',
          id: '1',
          projectTypeId: '1'
        }
      }
    },
    {
      userId: '2',
      projectId: '6',
      accessRights: 'Read and Write',
      id: '4',
      project: {
        name: 'Project 2',
        creationDate: '01/12/2015',
        owner: '0',
        cstContact: 'CST Contact 2',
        fiscalYear: 2015,
        fiscalYearDescription: 'Fiscal Year Description 2015',
        companyId: '1',
        projectTypeId: '1',
        deploymentTypeId: '1',
        projectStatusId: '2',
        id: '6',
        projectStatus: {
          name: 'Report',
          id: '2',
          projectTypeId: '1'
        }
      }
    },
    {
      userId: '2',
      projectId: '7',
      accessRights: 'Read and Write',
      id: '5',
      project: {
        name: 'Project 3',
        creationDate: '02/14/2016',
        owner: '1',
        cstContact: 'CST Contact 3',
        fiscalYear: 2016,
        fiscalYearDescription: 'Fiscal Year Description 2016',
        companyId: '2',
        projectTypeId: '2',
        deploymentTypeId: '1',
        projectStatusId: '3',
        id: '7',
        projectStatus: {
          name: 'New',
          id: '3',
          projectTypeId: '2'
        }
      }
    }
  ]
};

export const DELETE_USER_PROJECT_SUCCESS = {
  type: 'DELETE_USER_PROJECT_SUCCESS',
  payload: {
    data: { count: 1 },
    userProjectId: '9'
  },
  meta: ['9']
};

export const MODIFY_USER_PROJECT_ACCESS_RIGHTS_SUCCESS = {
  type: 'MODIFY_USER_PROJECT_ACCESS_RIGHTS_SUCCESS',
  payload: [
    { userId: '2', projectId: '5', accessRights: 'Read only', id: '3' }
  ]
};
