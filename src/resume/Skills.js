import React, {Component} from 'react';

const languageList = ['JavaScript', 'HTML', 'CSS', 'SASS', 'Node.js', 'jQuery', 'Bootstrap', 'React', 'Ruby', 'Rails', 'React Native', 'Unity', 'C#', 'VB'];
const systemList = ['Git', 'GitHub', 'Bitbucket', 'MongoDB', 'MySql', 'PostgreSQL', 'Expo', 'Heroku', 'Trello'];
const otherList = ['Adaptable', 'Flexible', 'Problem Solving', 'Leadership', 'Teamwork']

export default class Skills extends Component {


  render() {
    let langs = languageList.map((skill) => {
      return (
        <div key={skill} className='skill-item'>
          {skill}
        </div>
      )
    })

    let systems = systemList.map((skill) => {
      return (
        <div key={skill} className='skill-item'>
          {skill}
        </div>
      )
    })

    let others = otherList.map((skill) => {
      return (
        <div key={skill} className='skill-item'>
          {skill}
        </div>
      )
    })

    return (
      <div className='section'>
        <h1 className='heading'>Skills</h1>
        <h4 className='sub-heading'>Languages & Frameworks</h4>
        <div className='skill-list'>
          {langs}  
        </div>
        <h4 className='sub-heading'>Systems & Databases</h4>
        <div className='skill-list'>
          {systems}  
        </div>
        <h4 className='sub-heading'>General SKills</h4>
        <div className='skill-list'>
          {others}  
        </div>
        
      </div>
    )
  }
}