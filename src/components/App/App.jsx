import React, {Component} from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemAdd from '../ItemAdd/ItemAdd';
import './App.css';

class App extends Component {
  state = {
    todoData: [
      {lable: 'Learn React', important: true, id: 556697656522165},
      {lable: 'Drink Coffee', important: false, id: 654651266558879},
      {lable: 'Do exercises', important: true, id: 546858566563664},
      {lable: 'Take a rest', important: false, id: 685285654144451},
      {lable: 'Read a book', important: false, id: 546542343324654}
    ]
  };

  handleDelete = id => {
    this.setState(({todoData}) => {
      // Создаем копию массива todoData из state
      const todoDataCopy = todoData.slice();
      // Получаем индекс элемента, который нужно удалить
      const index = todoDataCopy.findIndex((el) => el.id === id);
      // Удаляем элемент по индексу
      todoDataCopy.splice(index, 1);
      return {
        todoData: todoDataCopy
      };
    })
  };

  handleAddItem = () => {
    const id = parseInt(Math.random() * 1000000000000000);
    const newItemObj = {
      lable: 'New Item',
      important: false,
      id: id
    }
    this.setState(({todoData}) => {
      const newTodoData = [...todoData, newItemObj]
      return {
        todoData: newTodoData
      }
    })
  }

  render() {
    return (
      <section className="container app-container">
        <div className="row justify-content-center">
          <div className="col-5">
            <AppHeader />
            <SearchPanel />
            <TodoList
              todoData={this.state.todoData}
              onDelete={this.handleDelete}
            />
            <ItemAdd onAddItem={this.handleAddItem} />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
