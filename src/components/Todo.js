import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';

class Todo extends Component {
  state = {
    todos: []
  }
  componentDidMount(){
    this.getTodos();
  }
  getTodos = () => {
    axios.get('https://todo-react-node-server.herokuapp.com/todos')
      .then(res => {
        if(res.data){
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }
  deleteTodo = (id) => {
    axios.delete(`https://todo-react-node-server.herokuapp.com/todos/${id}`)
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
      .catch(err => console.log(err))
  }
  render() {
    let { todos } = this.state;
    return(
        <div className='main-container'>
        <Input getTodos={this.getTodos}></Input>
        <ListTodo todos={this.state.todos} deleteTodo={this.deleteTodo}></ListTodo>
        </div>
    );
  }
}

export default Todo;