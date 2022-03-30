import { Component } from "react";

class TodoItem extends Component{
  clickDestroyTodo = () => {
    const {handleDestroyTodo,todoData} = this.props
    handleDestroyTodo(todoData.id)
  }
  changeTodoStatus =(e) => {
    const {handleChangeTodoStatus,todoData} = this.props
    if (e.target) {
      handleChangeTodoStatus(todoData.id,e.target.checked);
    }
  }
  render() {
    const {todoData,handleDestroyTodo} = this.props;
    return (
      <li className={todoData.completed ? "todo completed" : "todo"}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.changeTodoStatus}/>
          <label>{todoData.title}</label>
          <button className="destroy" onClick={() => {handleDestroyTodo(todoData.id)}}></button>
        </div>
        <input className="edit" type="text" />
      </li>
    )
  }
}

export default TodoItem;