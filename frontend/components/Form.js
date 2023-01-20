import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state={
      todoInput:''
    }
  }

  changeHandler =(e)=>{
    this.setState({
      ...this.state,
      todoInput:e.target.value
    })
  };

  submit=(e)=>{
    e.preventDefault();
    console.log(this.state.todoInput);
    //Need a submit method to come through here 
    //from props to pass state upward.
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type='text' name='todoInput' value={this.state.todoInput} onChange={this.changeHandler}/>
        <input type='submit' value='Add todo'/>
      </form>
    )
  }
}
