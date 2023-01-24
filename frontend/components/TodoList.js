import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todoList,displayCompleteds}=this.props
    console.log(displayCompleteds);
    return (
      <>
        {
          todoList.reduce((acc,todo)=>{
            if(displayCompleteds || !todo.completed) return acc.concat(
              <Todo todo={todo} key={todo.id} toggleTodo={this.props.toggleTodo} displayCompleteds={this.props.displayCompleteds}/>
            )
            return acc;
          },[])
        }
      </>
    )
  }
}
