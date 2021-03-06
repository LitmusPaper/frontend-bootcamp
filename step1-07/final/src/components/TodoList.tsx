import React from 'react';
import { TodoListItem } from './TodoListItem';
import { FilterTypes, Todos } from '../TodoApp.types';

interface TodoListProps {
  complete: (id: string) => void;
  todos: Todos;
  filter: FilterTypes;
}

export class TodoList extends React.Component<TodoListProps, any> {
  render() {
    const { filter, todos, complete } = this.props;

    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });

    return (
      <ul className="todos">
        {filteredTodos.map(id => (
          <TodoListItem key={id} id={id} complete={complete} {...todos[id]} />
        ))}
      </ul>
    );
  }
}
