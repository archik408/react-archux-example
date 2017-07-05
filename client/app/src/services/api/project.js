/**
 * @module API/Projects Service
 */

import Axios from 'axios';

/**
 * Get active projects
 *
 * @returns {Promise} Promise to return active projects
 */
export function getActiveProjects() {
  // const endpoint = `${SESSION_API_URL}/projects`;
  // return Axios.get(endpoint);
  return Promise.resolve({
    data: [
      {
        id: '1',
        name: 'Project 1',
        type: {
          name: 'Pulse',
        },
        status: {
          name: 'Final',
        }
      },
      {
        id: '2',
        name: 'Project 2',
        type: {
          name: 'Standard',
        },
        status: {
          name: 'Selection',
        }
      }
    ]
  });
}
