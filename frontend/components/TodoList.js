import React from 'react'
import Todo from './Todo.js';



export default class TodoList extends React.Component {
 
  
render() {
    return (
      <div>
        {
         this.props.todos.map(td => (
           <Todo id={td.id} name={td.name} completed={td.completed} key={td.id} onClick={this.toggleDisplayCompleted} {...td.completed ? '' : '✔️'} />
         ))
        }
      </div>

      
    )
  }
}
