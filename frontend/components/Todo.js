import React from 'react'

export default class Todo extends React.Component {

  

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
