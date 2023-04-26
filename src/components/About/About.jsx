import React from 'react'

const About = ({hero}) => {
  return (
    <div>
      <h2>About Me</h2>
      <ul>
        {hero.aboutMe.map((info, index) => (
          <li key={index}>{info.info}</li>
        ))}
      </ul>
    </div>
  )
}

export default About