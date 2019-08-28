import React from 'react';

import TodoList from '../TodoList'
import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'

const todoData = [
  {lable: 'Learn React', important: true},
  {lable: 'Drink Coffee', important: false},
  {lable: 'Do exercises', important: true},
  {lable: 'Take a rest', important: false},
  {lable: 'Read a book', important: false},
];

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todoData={todoData}/>
    </div>
  );
};

export default App;