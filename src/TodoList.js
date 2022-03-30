import { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  state = {
    listData: []
  }
  handleAddTodo = (e) => {
    if(e.keyCode === 13 && e.target && e.target.value) {
      let todoData = {
        id: new Date().getTime(),
        title: e.target.value,
        completed: false
      }
      this.state.listData.push(todoData);
      this.setState({
        listData: this.state.listData
      })
      e.target.value = '';
    }
  }
  handleDestroyTodo = (id) => {
    let destroyIndex;
    this.state.listData.map((item,index) => {
      if(item.id === id) destroyIndex = index;
    })
    
    this.state.listData.splice(destroyIndex,1);
    this.setState({
      listData: this.state.listData
    })
  }
  handleChangeTodoStatus = (id,status) => {
    this.state.listData.map((item) => {
      if(item.id === id) item.completed = status;
    })
    this.setState({
      listData: this.state.listData
    })
  }
  render() {
    const {listData} = this.state;
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo"
              autoFocus autoComplete="off"
              placeholder="What needs to be done?"
              onKeyDown={ this.handleAddTodo }/>
          </header>
          {
            listData.length !== 0 && (
              <>
                <section className="main">
                  <input id="toggle-all" className="toggle-all" type="checkbox" />
                  <label htmlFor="toggle-all">Mark all as complete</label>
                  <ul className="todo-list">
                    {listData.map((item) => {
                      return (
                        <TodoItem 
                          todoData={item}
                          key={item.id}
                          handleDestroyTodo={this.handleDestroyTodo}
                          handleChangeTodoStatus={this.handleChangeTodoStatus}>
                        </TodoItem>
                      )
                    })}
                  </ul>
                </section>
                <footer className="footer" v-show="state.todos.length">
                  <span className="todo-count">
                    <strong>{listData.filter((item) => !item.completed).length}</strong>
                    <span>items left</span>
                  </span>
                  <ul className="filters">
                    <li><a href="#/all">All</a></li>
                    <li><a href="#/active">Active</a></li>
                    <li><a href="#/completed">Completed</a></li>
                  </ul>
                  <button className="clear-completed">
                    Clear completed
                  </button>
                </footer>
              </>
            )
          }
        </section>
      </div>
    );
  }
}

export default TodoList;
