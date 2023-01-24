import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
const URL = 'http://localhost:9000/api/todos'




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      error: '',
      displayCompleteds: true
    }
  }

  fetchData() {
    return axios.get(URL)
      .then(res => {
        this.setState({
          ...this.state,
          todoList: res.data.data
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          error: err.response.data.message
        })
      })
  }

  PostData(data) {
    return axios.post(URL, { name: data })
      .then(res => {
        this.fetchData();

      })
      .catch(err => {
        this.setState({
          ...this.state,
          error: err.response.data.message
        })
      })
  }

  componentDidMount() {
    this.fetchData()
  }

  addTodo = (todo) => {
    this.PostData(todo)
  }


  toggleTodo = id => evt => {
    axios.patch(`${URL}/${id}`)
      .then(res => {
        this.setState({
          ...this.state,
          todoList: this.state.todoList.map(todo => {
            if (todo.id === id) {
              return { ...todo, completed: !todo.completed }

            }
            return todo;
          })
        })
      })
      .catch(err => {
        this.setState({
          ...this.state,
          error: err.response.data.message
        })
      })
  }

  toggleDisplayCompleteds = () => {
    this.setState({
      ...this.state, 
      displayCompleteds: !this.state.displayCompleteds
      })
   
  }

  render() {
    const { todoList } = this.state;
    return (
      <>
        <p id='error'>{this.state.error}</p>
        <TodoList todoList={todoList} toggleTodo={this.toggleTodo} displayCompleteds={this.state.displayCompleteds} />
        <Form displayCompleteds={this.state.displayCompleteds} addTodo={this.addTodo} PostData={this.PostData} toggleDisplayCompleteds={this.toggleDisplayCompleteds}/>
      </>
    )
  }
}
