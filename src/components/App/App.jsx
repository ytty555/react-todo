import React, {Component} from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemAdd from '../ItemAdd/ItemAdd';
import './App.css';

class App extends Component {
  state = {
    todoData: [
      this.createItem('Learn React'),
      this.createItem('Drink Coffee'),
      this.createItem('Do exercises'),
      this.createItem('Take a rest'),
      this.createItem('Read a book')
    ]
  };

  handleToggleItemDone = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = [...todoData];
      const index = newTodoData.findIndex((el) => el.id === id);
      newTodoData[index].done = !newTodoData[index].done;
      return {todoData: newTodoData};
    });
  }
  
  handleToggleItemImportant = (id) => {
    this.setState(({todoData}) => {
      const newTodoData = [...todoData];
      const index = newTodoData.findIndex((el) => el.id === id);
      newTodoData[index].important = !newTodoData[index].important;
      return {todoData: newTodoData}
    })
  }

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

  createItem(text) {
    const id = parseInt(Math.random() * 1000000000000000);
    const newItemObj = {
      lable: text,
      done: false,
      important: false,
      id: id
    }

    return newItemObj;
  }

  handleAddItem = (text) => {
    const newItemObj = this.createItem(text);
    this.setState(({todoData}) => {
      const newTodoData = [...todoData, newItemObj]
      return {
        todoData: newTodoData
      }
    })
  }
  
  
  render() {
    const {todoData} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <section className="container app-container">
        <div className="row justify-content-center">
          <div className="col-5">
            <AppHeader todo={todoCount} done={doneCount}/>
            <SearchPanel />
            <TodoList
              todoData={this.state.todoData}
              onDelete={this.handleDelete}
              onToggleItemDone={this.handleToggleItemDone}
              onToggleItemImportant={this.handleToggleItemImportant}
            />
            <ItemAdd onAddItem={this.handleAddItem} />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
