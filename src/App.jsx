import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const tasks = ['Помыть посуду', 'Сделать домашнее задание', 'Прочитать книгу'];
  return (
    <div id='root'>
      <h1>Список дел</h1>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}



export default App
