## Test Project Example (React.js + Archux)

[![npm version](https://img.shields.io/npm/v/react-archux-example.svg?style=flat-square)](https://npmjs.com/package/react-archux-example)

>These are the depersonalized fragments from our real small project

>It is just for acquaintance with our approach and unidirectional data flow organization with react.js and archux (our little flux-implementation)

We believe that for medium and small projects with little interactivity there is no need for *flux*, *mobx* or *redux* with *thunk* or *sagas*

It is enough to realize its simple [storage (observer)](https://github.com/archik408/react-archux-example/blob/master/client/app/src/store/Store.js) and [dispatcher](https://github.com/archik408/react-archux-example/blob/master/client/app/src/store/Dispatcher.js), which will work strictly in the [unidirectional dataflow](https://en.wikipedia.org/wiki/Dataflow_programming) style (without callbacks in thenable and middlewares)

Bad (Non Unidirectional Dataflow):
```javascript
  /**
   * Fetch active projects
   *
   * @returns {void}
   */
  componentDidMount() {
    // handle properly in reducer  
    actions.performGetActiveProjects()
      .then((response) => {
        // do something with response here
      })
      .catch((err) => {
        // handle error
      });
  }
```

Good (Unidirectional Dataflow):
```javascript
  /**
   * Fetch active projects
   *
   * @returns {void}
   */
  componentDidMount() {
    // handle properly in reducer  
    actions.performGetActiveProjects();
  }
  
  /**
   * Check next container properties
   * 
   * @param {Object} nextProps - New properties
   * @param {Object} nextCtx - New context
   * 
   * @returns {void}
   */
  componentWillReceiveProps(nextProps, nextCtx) {
    const { activeProjects } = nextProps;
    // do something with response here  
  }
```

#### Diagram

![screen img](https://raw.githubusercontent.com/archik408/react-archux-example/master/media/dgrm.png)
    
#### Infrastructure

+ `actions` - contains entity action functions, specific for archux

```javascript
/**
 * Perform getActiveProjects action
 *
 * @returns {void}
 */
export function performGetActiveProjects() {
  dispatcher.dispatchPromise(
    getActiveProjects,
    'GET_ACTIVE_PROJECTS',
    (state) => state.Projects.activeProjects.loading
  );
}
```

+ `services` - contains different services for local storage, api, app navigation ant etc.

+ `reducers` - contains pure functions for handling actions and updating store state

+ `store` - archux implementation (similar to flux and redux)


#### Component Types

We are using pure, classic and functional react components and splitting they on following types:

+ `/components/_common` - *fundamental components* (like Buttons, Checkboxes, Selects);

+ `/components` - *specific components* for domain and project (like DataGrids, Sliders, Panels);

+ `/containers` - *top components* which works with data and subscribed to store (Pages, Modals);

#### Testing

We are trying to test all aspects from components to services through reducers and actions:

+ `__tests__` - unit tests (using enzyme)

+ `e2e` - end-to-end and functional tests (using protractor and page-object pattern)

#### Documentation

We are using beautiful tool for that - JSDoc


### Screen

![screen img](https://raw.githubusercontent.com/archik408/react-archux-example/master/media/screen.png)
