NEW

# Redux

we have 3 main components **Redux Store Action Reducer**

- **Redux Store**: we'll be storing data inside redux store state
- **Action** we'll define an operation which will be done on the data saved in store ( `createAction {type : 'CREATE' and payload: newObjectInserted }` )
- in order to excute the operation we have to call dispatch(createAction)
- the dispatch will reach up to the reducer
- inside **Reducer** and based on the operation we passed(Switch statement), it'll update the data inside Redux Store
- an updated state object will be returned from reducer and replaced inside Redux Store
- we can access Redux State Data inside React Components/UI with **react-redux**

![react-redux](https://i.ibb.co/TbnQmbJ/reduxschema.png)

l
