import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
// import and use stylex to style the components
import { stylex } from "stylex";

function Todo() {
 
  // using stylex to style the components
  const styles = stylex.create({
    header: {
      color: "white",
      backgroundColor: "black",
      padding: "10px",
      textAlign: "center",
      fontSize: "30px",
    },
  });
  const [todos, setTodos] = useState([]);

  //function to add items once user click add button
  const addTodo = (todo) => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  //function to update items once user click update button
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //function to remove items once user click remove icons
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  //function to show items as completed once user click on completed task
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (

    <div >
      //we will use stylex to style the components
      <h1 className={stylex(styles.header)}>Add your Plan for Today?</h1>

      <h1 className="header">Add your Plan for Today?</h1>

      {/*once we display header to the webpage 
      we will pass the function as props to TodoForm and TodoList to display the data to user*/}

      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default Todo;
