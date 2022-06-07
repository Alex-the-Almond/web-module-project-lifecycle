import React from 'react'



export default class Form extends React.Component {
constructor() {
  super();
  this.state = {
    todoName: ''
  }
}

handleSubmit = (evt) => {
  evt.preventDefault();
  this.props.postNewTodos(this.state.todoName)
  this.setState({todoName: ''})
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <label>
            <input type='text' placeholder='Add Todos Here' onChange={this.props.onTodoNameInputChange}></input>
          </label>
          <label>
            <button value='submit'>Submit</button>
          </label>
          <label>
            <button value='clear'>Clear</button>
          </label>
        </form>
    )
  }
}
