import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*function App() {
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
}*/

/*
1. Создай компонент `UserCard`, который принимает через пропсы имя пользователя (`name`) и его возраст (`age`).

2. Используй компонент `UserCard` в `App`, чтобы отобразить трёх разных пользователей. Пример вызова:
<UserCard name="Мария" age={25} /> 
*/

function UserCard({name, age}){
  return (
    <div className='userCard'>
      <h3>User: {name}</h3>
      <p>age: {age}</p>
    </div>
  )
}

function App(){
  /* return (
    <div>
      <UserCard name="Anna" age={22} />
      <UserCard name="Mane" age={21} />
      <UserCard name="Irene" age={19} />
    </div>
  )*/

    const users =[
      {name: 'Anna', age:22 },
      {name: 'Mane', age:21 },
      {name: 'Irene', age:19 }
    ]

    return (
      <div>
        {users.map((user, index) => (
          <UserCard key={index} name={user.name} age={user.age}/>
        ))}
      </div>
    )
}



export default App
