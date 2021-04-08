import './reset.css';
import './app.css';
import Todos from './components/todos';
import { Component } from 'react';
import Header from './components/header';

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Coding', count: 0 },
      { id: 2, name: 'Workout', count: 0 },
      { id: 3, name: 'Play Guitar', count: 0 },
    ],
  };

  handleAdd = (name) => {
    const todos = [...this.state.todos, { id: Date.now(), name, count: 0 }];
    this.setState({ todos });
  };

  handleIncrement = (todo) => {
    const todos = this.state.todos.map((item) => {
      if (item.id === todo.id) {
        return { ...todo, count: todo.count + 1 };
      }
      return item;
    });
    this.setState({ todos });
  };

  handleDecrement = (todo) => {
    const todos = this.state.todos.map((item) => {
      if (item.id === todo.id) {
        const count = todo.count - 1;
        return { ...todo, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ todos });
  };

  handleDelete = (todo) => {
    const todos = this.state.todos.filter((item) => item.id !== todo.id);
    this.setState({ todos });
  };

  handleReset = () => {
    const todos = this.state.todos.map((todo) => {
      if (todo.count !== 0) {
        return { ...todo, count: 0 };
      }
      return todo;
    });
    this.setState({ todos });
  };

  render() {
    return (
      <>
        <Header
          totalCount={this.state.todos.filter((item) => item.count > 0).length}
        />
        <Todos
          todos={this.state.todos}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
        <button className="reset" onClick={this.handleReset}>
          RESET
        </button>
      </>
    );
  }
}

export default App;
