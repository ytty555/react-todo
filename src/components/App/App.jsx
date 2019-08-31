import React, {Component} from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import ItemAdd from '../ItemAdd/ItemAdd';
import './App.css';

class App extends Component {
  state = {
    todoData: [
      this.createItemObj('Learn React'),
      this.createItemObj('Drink Coffee'),
      this.createItemObj('Do exercises'),
      this.createItemObj('Take a rest'),
      this.createItemObj('Read a book')
    ],
    search: '', // any symbols
    filter: 'all' // 'all', 'active', 'done'
  };

  visibleItems(items, search) {
    if (!search) return items;
    
    const regexp = new RegExp(search, 'i');
    return items.filter((item) => item.lable.search(regexp) > -1);
  }

  filterItems(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
          return items.filter((item) => !item.done);
          case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }

  }

  handleToggleItemDone = id => {
    this.setState(({todoData}) => {
      const newTodoData = [...todoData];
      const index = newTodoData.findIndex(el => el.id === id);
      newTodoData[index].done = !newTodoData[index].done;
      return {todoData: newTodoData};
    });
  };

  handleToggleItemImportant = id => {
    this.setState(({todoData}) => {
      const newTodoData = [...todoData];
      const index = newTodoData.findIndex(el => el.id === id);
      newTodoData[index].important = !newTodoData[index].important;
      return {todoData: newTodoData};
    });
  };

  handleDelete = id => {
    this.setState(({todoData}) => {
      // Создаем копию массива todoData из state
      const todoDataCopy = todoData.slice();
      // Получаем индекс элемента, который нужно удалить
      const index = todoDataCopy.findIndex(el => el.id === id);
      // Удаляем элемент по индексу
      todoDataCopy.splice(index, 1);
      return {
        todoData: todoDataCopy
      };
    });
  };

  createItemObj(text) {
    const id = parseInt(Math.random() * 1000000000000000);
    const newItemObj = {
      lable: text,
      done: false,
      important: false,
      id: id
    };

    return newItemObj;
  }

  handleAddItemToList = text => {
    const newItemObj = this.createItemObj(text);
    this.setState(({todoData}) => {
      const newTodoData = [...todoData, newItemObj];
      return {
        todoData: newTodoData
      };
    });
  };

  handleSearchString = text => {
    this.setState(({search}) => {
      return {search: text};
    })
  }

  handleOnFilter = value => {
    this.setState(({filter}) => {
      return {filter: value};
    })
  }

  render() {
    const {todoData, search, filter} = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    
    return (
      <section className="container app-container">
        <div className="row justify-content-center">
          <div className="col-5">
            <AppHeader todo={todoCount} done={doneCount} />
            <SearchPanel
              activeButton={filter}
              onSearchString={this.handleSearchString}
              onFilter={this.handleOnFilter}
            />
            <TodoList
              todoData={this.filterItems(this.visibleItems(todoData, search), filter)}
              onDelete={this.handleDelete}
              onToggleItemDone={this.handleToggleItemDone}
              onToggleItemImportant={this.handleToggleItemImportant}
              />
              <ItemAdd onAddItem={this.handleAddItemToList} />
              </div>
              </div>
              </section>
              );
            }
          }
          
          export default App;
          