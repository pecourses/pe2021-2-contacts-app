import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';

/* ------- Краткая формулировка задания:------------
Форма:
- имя
- тел номер
- дата рождения
- (isFavourite)

Список контактов:
 - просмотр инфы о контактах
 - подсветка контакта с ДР сегодня
 - добавление контакта в изборанное
 - удаление контакта
 - фильтрация списка контактов: все/избранные/не избранные
------------------------------------------/--------*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
