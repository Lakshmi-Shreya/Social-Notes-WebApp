// create initialState
export const initialState={
    user:null
}
//diSpatching actions in datalayer
export const actionTypes={
    SET_USER:"SET_USER"
}
// Reducer -Listening to different actions 
 const reducer=(state,action)=>{
switch (action.type){
  case actionTypes.SET_USER:
      return {
          ...state,
          user:action.user
      }
      default:
          return state


}
}
export default reducer
