import React from 'react';

import TodoList from '../TodoList/TodoList';
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import './App.css';

const todoData = [
  {lable: 'Learn React', important: true},
  {lable: 'Drink Coffee', important: false},
  {lable: 'Do exercises', important: true},
  {lable: 'Take a rest', important: false},
  {lable: 'Read a book', important: false},
];

const App = () => {
  return (
    <container className='container app-container'>
      <div className='row justify-content-center'>
        <div className='col-5'>
          <AppHeader />
          <SearchPanel />
          <TodoList todoData={todoData}/>
        </div>
      </div>
    </container>
  );
};

export default App;