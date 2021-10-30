import React from 'react'
import './Car.css'

export default props => {
  const inputClasses = ['input']

  //если поле не пустое
  if (props.name !== '') {
    inputClasses.push('green') //то доб класс
  } else {
    inputClasses.push('red')
  }

  //если длина имени больше 4
  if (props.name.length > 4 ) {
    inputClasses.push('bold')
  }

  return (
    <div className='Car'>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input 
        type='text' 
        onChange={props.onChangeName} 
        value={props.name} 
        className={inputClasses.join(' ')} //join - соединение элементов в строку (' ' - через пробел)
        />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}