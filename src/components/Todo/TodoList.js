import React, { useState } from 'react';
import './todo.css';

function TodoList({ todo, index, completeTodo, removeTodo, updateTodo }) {
    return (
        <li>
            <div className="form-check" style={{ width: "100%" }}>
                <label className="form-check-label">
                    
                    <input key={todo.index} onClick={() => completeTodo(index)} className="checkbox" type="checkbox" />
                    <input
                        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                        className="input-todo"
                        type="text"
                        value={todo.text}
                        id={todo.index}
                        key={todo.index}
                        onChange={
                            (e) => {
                                updateTodo(index, e.target.value)
                            }
                        }
                    />

                    <i className="input-helper"></i>
                </label> </div>
            <i className="remove mdi mdi-close-circle-outline" onClick={() => removeTodo(index)}></i>
        </li>
    );
}
//*/

export default TodoList; 