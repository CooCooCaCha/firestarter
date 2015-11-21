import React from "react";
import {connect} from "react-redux";
import {load, add, del} from "../actions/TodoActions";

@connect(state => ({todos: state.todos}))
class Home extends React.Component {
    constructor(props, contexts) {
      super(props);
      props.dispatch(load());
      this.state = {newTodo: ""};
    }

    handleInputChange = (event) => {
      this.setState({
        newTodo: event.target.value
      });
    }

    handleInputEnter = (event) => {
      if( event.key !== "Enter" )
        return;

      this.props.dispatch(add(this.state.newTodo));
      this.setState({newTodo: ""});
    }

    handleDeleteTodo = (id) => {
      return (event) => {
        this.props.dispatch(del(id));
      };
    }

    render() {
      var todos = this.props.todos.map((todo) =>
            <div key={todo.id} onClick={this.handleDeleteTodo(todo.id)}>{todo.body}</div>
        );

      return (
            <div>
                <div>Welcome to Firestarter!</div>
                <input placeholder="New Todo" 
                          value={this.state.newTodo} 
                       onChange={this.handleInputChange}
                      onKeyDown={this.handleInputEnter}
                />
                <div>
                    {todos}
                </div>
            </div>
        );
    }
}

export default Home;
