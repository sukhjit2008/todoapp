import React, { Component } from 'react'
import './AddForm.css'
 class AddForm extends Component {
     state={
        content:''
     }
     valueChangeHandler=(e)=>{
        this.setState({ content:e.target.value});
     }
     onSubmitHandler=(e)=>{
        e.preventDefault();
        this.props.AddTodoHandler(this.state);
        this.setState({content:''});
     }
  render() {
    
    return (
      <div className="AddForm">
        <form onSubmit={this.onSubmitHandler}>
            <label >Enter a new Todo:</label>
            <input type="text" value={this.state.content} onChange={this.valueChangeHandler}/>
            <button type="submit" disabled={!this.state.content.length>0} className="btn waves-effect waves-light">Add Todo</button>
        </form>
        
      </div>
    )
  }
}
export default AddForm;