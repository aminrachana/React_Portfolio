import React, { useEffect, useState } from 'react'
import skills from './data/skills.json'

const About = () => {
    
    const [skillsList, setSkillsList] = useState();

    useEffect(() => {
        let skillsArr = skills.filter((item) => item?.user_id === 2)
        setSkillsList(skillsArr);
    }, []);
    
  return (
    <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center green-bg py-5">
                    <h2 class="h2-name">Skills</h2>
                    {skillsList && skillsList.map((item, index) => {
                        return(
                            <p key={index}>{item?.name}</p>
                        )
                    })}
                </div>
                <div className="col-md-8 align-self-center py-5 pl-4">
                    <h2>ABOUT ME</h2>
                    <h2 className="my-3" class="r-name">Rachana Amin</h2>
                    <p>I am currently studying Web Development (Post-Graduate certificate) at Humber College. I have completed my Bachelor in Dairy Technology (B.Tech). I am from Gujarat, India. I belong to Hindu culture and my native language is Gujarati but I have fluency in English as well. I am highly Detail-Oriented, Enthusiastic team player with strong communication skills. I am fresher developer who is willing to grab an opportunities to work as web developer. I am interested in learning new frameworks and libraries. Always keep engage myself in learning and exploring new things.</p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About