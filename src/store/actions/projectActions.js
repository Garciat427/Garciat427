export const createProject = (project) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      //Make Async Call to db
      dispatch({type: 'CREATE_PROJECT', project})
   }
}