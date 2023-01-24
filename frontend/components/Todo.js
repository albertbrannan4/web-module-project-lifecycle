import React from 'react'

export default class Todo extends React.Component {

  render() {
    const { todo } = this.props
    return (

      <div onClick={this.props.toggleTodo(todo.id)}>{todo.name} {todo.completed ? "✅" : ""}</div>
    )
  }
}
