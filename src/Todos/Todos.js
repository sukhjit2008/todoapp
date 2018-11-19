import React,{Component} from 'react';

class Todos extends Component{
  state={
      done:true
  }
   
   
    render(){
        
        const todoList = this.props.todos.length>0?(this.props.todos.map(
            (todo,index)=>{
                return (
                    <div className="collection-item" key={todo.id}          style={{textDecoration:todo.done?'line-through':''}} >
                    <h6>
                        <label>
                            <input 
                                type="checkbox" 
                                className="filled-in"
                                onChange={(event)=>{this.props.todoDone(event,index)}}
                                    checked={todo.done}
                            />
                            <span><br/></span>
                        </label>{todo.content}<i        className="material-icons right" 
                                onClick={()=>{this.props.onDeleteTodoHandler(todo.id)}}>cancel</i>
                    </h6>
                 </div>
                    
                );
            }
        )):(<div className="collection-item center"><h5>Enter a todo</h5></div>);


        return (
            <div className="Todos collection" >
               {todoList}
            </div>
        );
    }
}
export default Todos ;