export const createProject = (project) => {
   return (dispatch, getState) => {
      //Make Async Call to db
      dispatch({type: 'CREATE_PROJECT', project})
   }
}