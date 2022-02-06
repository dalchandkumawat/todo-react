import React, { Component } from 'react';
import axios from 'axios';
class Input extends Component {
  state = {
    action: ""
  }
  addTodo = () => {
    const task = {action: this.state.action};
    if(task.action && task.action.length > 0){
      axios.post('https://cors-anywhere.herokuapp.com/https://todo-react-node-server.herokuapp.com/todos', task)
        .then(res => {
          if(res.data){
            this.props.getTodos();
            this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }
  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }
  render() {
    return (
        <>
            <input type="text" onChange={(e)=>this.handleChange(e)} value={this.state.action}/>
            <button onClick={()=>this.addTodo()}>Add</button>
        </>      
    )
  }
}

export default Input