import React, { useEffect, useState } from 'react'
import educations from './data/educations.json'
const Education = () => {

    const [educationList, setEducationList] = useState();

    useEffect(() => {
        let educationArr = educations.filter((item) => item?.user_id === 2)
        setEducationList(educationArr);
    }, []);
    
  return (
    <section id="education">
        <h2 className="topic" class="h2-name">Education</h2>
        {/*<h2 className="my-3">Creative and efficient developer</h2>*/}
        {educationList && educationList.map((item, index) => {
            return(           
                <div key={index} className="row ">
                    <div className="col-md-8 offset-md-1">
                        <div className="bullet-card">
                            <img src="./new-moon.png" className="bullet" />
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{item?.institution}</h5>
                                    <span>{item?.start_year} - {item?.end_year}</span><br />
                                    <em>{item?.degree}</em>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </section>
  )
}

export default Education