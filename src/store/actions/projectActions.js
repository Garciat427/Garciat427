
export const createProject = (project) => {
   return (dispatch, getState, { getFirebase, getFirestore }) => {
      //Make Async Call to db

      const firestore = getFirestore();
      firestore.collection('projects').add({
         ...project,
         authorFirstName:"NotTroy",
         authorLastName:"NotGarcia",
         authorID: 12345,
         createdAt: new Date()
      }).then(() => {
         dispatch({type: 'CREATE_PROJECT', project})
      }).catch((err) => {
         dispatch({type: 'CREATE_PROJECT_ERROR', err})
      })
      
   }
}