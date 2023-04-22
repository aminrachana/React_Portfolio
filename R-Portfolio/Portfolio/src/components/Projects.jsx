import React, { useEffect, useState } from 'react'
import project from './data/projects.json';

const Projects = () => {    
    const [projectList, setProjectList] = useState();

    useEffect(() => {
        let projectArr = project.filter((item) => item?.user_id === 2)
        setProjectList(projectArr);
    }, []);

  return (
    <section id="projects">
                <h2 className="topic" class="h2-name">Projects</h2>
                {/*<h2 className="my-3">Creative and efficient developer</h2>*/}
                <div className="row">
                {projectList && projectList.map((item, index) => {
                    return(
    
                        <div key={index} className="col-md-4">
                        <div className="m-3">
                            <div className="text-center">
                                {item?.image && <img src={item?.image} className="img-fluid project-img" />}
                                <div className="project-description p-4">
                                    <h6 className="card-title">{item?.title}</h6>
                                    <p className="card-text mt-2">{item?.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )})}
                </div>
            </section>

  )
}

export default Projects