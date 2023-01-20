import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';
const URL = 'http://localhost:9000/api/todos'

function fetchData(url){
  return axios.get(url)
  .then(res=>{
    return res
  })
  .catch(err=>{
    console.error(err)
  })
}

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todoList:[]
    }
  }

  componentDidMount(){
    fetchData(URL)
    .then(res=>{
      this.setState({
        todoList:res.data.data
      })
    })
    .catch(err=>{
      console.error(err);
    })
  }


  render() {
    const {todoList}= this.state;
    return (
    <>
      <TodoList todoList={todoList}/>
      <Form/>
    </>
    )
  }
}
