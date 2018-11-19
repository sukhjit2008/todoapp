import React, { Component } from 'react';
import Todos from './Todos/Todos';
import AddForm from './AddForm/AddForm';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
class App extends Component {
  
  state={
    todos:[
      {id:1,content:'Take Mannat to Gym',done:false},
      {id:2 , content:'Drink water',done:false}
    ],
    showButtons:true
    
  }
  onDeleteTodoHandler=(id)=>{
   const todos= this.state.todos.filter(
      (todo)=>{
        return todo.id !==id;
      }
    );
    this.setState({todos})
  }

  AddTodoHandler =(todo)=>{
    todo.id = Math.random();
    const todos = [...this.state.todos,todo];
    this.setState({todos});
  }
  
 todoDone=(event,index)=>{
  const todos = [...this.state.todos];
  todos[index]={...this.state.todos[index]};
  todos[index].done = event.target.checked;
  this.setState({todos});
 }
 allDone=()=>{
   let undo = this.state.showButtons;
 const todos= this.state.todos.map(
     (todo)=>{
      return {...todo,done:undo}
     }
   );
   this.setState({todos});
   this.setState({showButtons:!undo});
 }
  render() {
    return (
      <div className="App container">
      <div className="center blue-text">
      <h1>Todo's</h1>
      </div>
      <button className="btn waves-effect waves-light blue right btn-small" onClick={this.allDone}>{this.state.showButtons?'All Done':'Undo'}</button>
      <br/>
      <br/>
       <Todos 
        todos={this.state.todos}  
        onDeleteTodoHandler={this.onDeleteTodoHandler} 
        todoDone={this.todoDone}
        />
        <AddForm AddTodoHandler={this.AddTodoHandler}/>
        
      </div>
    );
  }
}

export default App;
