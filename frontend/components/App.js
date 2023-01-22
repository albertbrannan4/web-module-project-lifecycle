import React from 'react'
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';
import { v4 as uuidv4} from 'uuid';
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

function PostData(data){
  return axios.post('http://localhost:9000/api/todos',data)
  .then(res=>{
    console.log(res);
    return res
    
  })
  .catch(err=>{
    console.error(err);
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

  addTodo=(todo)=>{
    const newTodo = {
      id: uuidv4(),
      name: todo,
      completed:false
    }
   
   // this.submitTodo(newTodo)
    this.setState({todoList:[...this.state.todoList,newTodo]})
  }

  submitTodo=(data)=>{
   
    PostData(data)
  }

  componentDidUpdate(prevProps,prevState){
      console.log('component did update runs');
      console.log('this previous state',prevState);
  }

  render() {
    const {todoList}= this.state;
    console.log(this.state)
    return (
    <>
      <TodoList todoList={todoList}/>
      <Form addTodo={this.addTodo} submitTodo={this.submitTodo}/>
    </>
    )
  }
}
