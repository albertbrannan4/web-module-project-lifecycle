import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const {todoList}=this.props

    return (
      <>
        {todoList.map((todo,idx)=>{
          return <Todo todo={todo} key={idx}/>
        })}
        
      </>
    )
  }
}
