import React from 'react'

const ProjectDetails = (props) => {
   const id = props.match.params.id;
   console.log(props)
   return (
    <div className="container section project-details">
       <div className="card z-deph-0">
          <div className="card-content">
             <span className="card-title">Project Title- {id} </span>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos odit asperiores, neque odio possimus natus dolorem, obcaecati provident id assumenda similique repudiandae, tempore nemo commodi officia ullam? Accusamus, id assumenda?</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
             <div>Posted by Troy</div>
             <div>30rd March, 6pm</div>
          </div>
       </div>
    </div>
   )
}

export default ProjectDetails
