export default class DefaultReducer {
  constructor(actions) {
    this.reduce = (state, action) => {
      var newState = Object.assign({}, state)
      var availableReducers = actions.filter((a) => a.canHandleAction(state, action));
      // if(availableReducers.length ===0){
      //   console.log(action);
      //   throw "no reducer available for this action";
      // }
      for (var actionHandler of availableReducers) {
          Object.assign(newState, actionHandler.reduce(state, action));
      }
      return newState;
    }
  }
}
