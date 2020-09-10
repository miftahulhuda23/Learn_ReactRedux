import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo/Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((item, index) => {
        return <Todo {...item} key={index} />;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { todos, visibilityFilter } = state;
  return {
    todos: todos.filter((todo) => {
      switch (visibilityFilter) {
        case visibilityFilter.SHOW_ACTIVE:
          return !todo.completed;
        case visibilityFilter.SHOW_COMPLETED:
          return !todo.completed;
        case visibilityFilter.SHOW_ALL:
        default:
          return true;
      }
    }),
  };
};

export default connect(mapStateToProps, null)(TodoList);
