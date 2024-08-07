import React, { Component } from 'react'

export class Users extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.
          props)}</pre>
        <h1>User id = {this.props.idname}</h1>
        <h2>User Name = {this.props.name}</h2>
      </div>
    )
  }
}

export default Users
