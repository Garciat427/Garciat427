const initState = {
   projects:[
      {id: '1', title: 'help me find the thingy', content: 'blah blah blah'},
      {id: '2', title: 'Actually, help me find the other thingy', content: 'blah blah blah'},
      {id: '3', title: 'NVMIND! help me find the last thingy', content: 'blah blah blah'},
   ]
}

const projectReducer = (state = initState, action) => {
   switch (action.type) {
      case 'CREATE_PROJECT':
         console.log('created project', action.project)
   }
   return state
}

export default projectReducer