import React from 'react'
import {IState as IProps} from '../App'
import "../App.css"

 

const List: React.FC<IProps> = ({people}) => {

      const renderList = (): JSX.Element[] => {
    return people.map((person) => {
        return (
            <li className='List' key={person.id}>
            <div className='List-header'>
                <img className='List-img' src={person.url} alt="profile" />
                <h2>{person.name}</h2>
            </div>
            <p>{person.age} year's old</p>
            <p className='List-note'>{person.note}</p>
            
        </li>
        )
    })
  }

   
  return (
    <ul>
        {renderList()}
    </ul>
  )
}

export default List