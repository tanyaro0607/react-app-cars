import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars] //получаем новый массив - клон, разворачивая старый
    cars[index] = car
    //setState - метод для изменения состояния state
    this.setState({
      cars: cars
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars //инверсия true-false
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat() //concat создает копию массива
    cars.splice(index, 1) //splice - удаляет элемент из массива(с какого, сколько шт)
    
    this.setState({
      cars: cars 
    })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggleCarsHandler}
          >Toggle cars</button>

        { this.state.showCars ?
            this.state.cars.map((car, index) => {
              return (
                <Car 
                  key={index}
                  name={car.name}
                  year={car.year}
                  onDelete={this.deleteHandler.bind(this, index)}
                  onChangeName={(event) => this.onChangeName(event.target.value, index)}
                />
              )
            }) : null
      }
      
      </div>
    );
  }
}

export default App;
