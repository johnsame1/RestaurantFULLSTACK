import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BlogsProvider } from './Components/context/BlogsContext';
import { MenuProvider } from './Components/context/Menucontext';
import { UsersProvider } from './Components/context/AlluserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
      <BlogsProvider>
        <MenuProvider>
          <App />
        </MenuProvider>
      </BlogsProvider>
    </UsersProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
