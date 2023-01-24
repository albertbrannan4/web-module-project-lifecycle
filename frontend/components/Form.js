import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: ''
    }
  }

  changeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      todoInput: value
    })

  };



  submit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoInput)
    this.setState({
      todoInput: ''
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.submit}>
          <input type='text' name='todoInput' value={this.state.todoInput} onChange={this.changeHandler} />
          <input type='submit' value='Add todo' />
        </form>
        <button onClick={this.props.toggleDisplayCompleteds}>{this.props.displayCompleteds?"Hide":"Show"} Complete</button>
        </>
    )
  }
}
