import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './todo.css';
import axios from 'axios';

function Todo() {
    const [todos, setTodos] = useState([
        {
            text: "Intial",
            isCompleted: false
        },

    ]);

    const addTodo = text => {
        const newTodos = [...todos, {
            text: text,
            isCompleted: false
        }];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        console.log(newTodos[index].isCompleted);
        if (newTodos[index].isCompleted === false) {
            newTodos[index].isCompleted = true;
        } else {
            newTodos[index].isCompleted = false;
        }

        setTodos(newTodos);
    };

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };
    const updateTodo = (index, newText) => {
        const newTodos = [...todos];
        newTodos[index].text = newText;
        setTodos(newTodos);
        console.log('update todo index ' + index + " = " + newTodos[index].text);
    };
    return (
        <div className="todo-list">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-lg-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <h4 className="card-title">TODO</h4>
                                    <div className="add-items d-flex">
                                        <TodoForm addTodo={addTodo} />
                                    </div>
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
                                            {
                                                todos.map((todo, index) => (
                                                    <TodoList
                                                        key={index}
                                                        index={index}
                                                        todo={todo}
                                                        completeTodo={completeTodo}
                                                        removeTodo={removeTodo}
                                                        updateTodo={updateTodo}
                                                    />
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Todo; 