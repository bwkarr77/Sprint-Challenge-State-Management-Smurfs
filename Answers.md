1. What problem does the context API help solve? -
   It allows us to pass data to a component without having to pass properties DOWN through multiple levels.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application? -
   Actions are objects of information called payloads that contain property types that define the action.
   Reducers specify how the state changes depending on what the action sends to the store.
   The Store is an object that: holds the state, allows access to state, allows state to be modified, registers listeners, and handles listener functions.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Component state is local to a single component, and application state is global/applicable to All sub-components.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   It allows us to return functions instead of actions. It is a middleware, and allows us to do things like async functions/methods.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   Context API because I like storing the data in a central location instead of having to back-track where it is getting used/passed into.
