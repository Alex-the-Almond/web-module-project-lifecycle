import React from 'react';
import Form from './Form.js';
import axios from 'axios'
import TodoList from './TodoList';
const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      error: '',
      todoNameInput: '',
      completed: false
    }
  }
  
  resetForm = () => this.setState({...this.state, todoNameInput: '' })

  onTodoNameInputChange = (evt) => {
    const {value} = evt.target
    this.setState({...this.state, todoNameInput: value})
  }

  fetchAllTodos = () => {
    axios.get(URL)
    .then(res =>{
      this.setState({...this.state, todos: res.data.data})
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchAllTodos();
  }
  
  postNewTodos = () => {
    axios.post(URL, {name: this.state.todoNameInput})
    .then(res => {
      this.setState({...this.state, todos:  [...this.state.todos,res.data.data]})
    })
    .catch(err => console.log(err))
  } 

  onTodoFormSubmit = (evt) => {
    evt.preventDefault();
    this.postNewTodos()
  }

  toggleCompleted = id => () => {
    axios.patch(`${URL}/${id}`)
    .then(res => {
      this.setState({
        ...this.state, todos: this.state.todos.map(td => {
          if(td.id !== id) return td
          return res.data.data
        })
      })
    })
    .catch(err => console.log(err))
  }

  toggleDisplayCompleted = () => {
    this.setState({...this.state, completed: !this.state.completed})
  }
  
  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <Form  restForm={this.resetForm} postNewTodos={this.postNewTodos} todos={this.state.todos} onTodoNameInputChange={this.onTodoNameInputChange} />

        <TodoList toggleDisplayCompleted={this.toggleDisplayCompleted} fetchAllTodos={this.fetchAllTodos} todos={this.state.todos} /> 
       </div>
    )
  }
}
