import React from 'react';
import {load, add, del} from '../actions/TodoActions';

class Home extends React.Component {
    constructor(props, contexts) {
        super(props);
        props.dispatch(load());
        this.state = {newTodo: ''};
    }

    handleInputChange = (event) => {
        this.setState({
            newTodo: event.target.value
        });
    }

    handleInputEnter = (event) => {
        if( event.key !== 'Enter' )
            return;

        this.props.dispatch(add(this.state.newTodo));
        this.setState({newTodo: ''});
    }

    handleDeleteTodo = (id) => {
        return (event) => {
            this.props.dispatch(del(id));
        }
    }

    render() {
        var todos = this.props.todos.map((todo) =>
            <div>{todo.body}</div>
        );

        return (
            <div style={styles.paper}>
                <input hintText="New Todo" 
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
