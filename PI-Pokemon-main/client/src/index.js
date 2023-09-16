import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // importamos el provider
import { store } from "./redux/Store"; 
// Importar los estilos de materialize para que funcione correctamente con react

ReactDOM.render(
  <Provider store ={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
</Provider>,
document.getElementById("root")
);
function handleWebVitals(metric) {
  console.log(metric); // Log the performance metric
  // You can also send it to an analytics endpoint here
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(handleWebVitals);
