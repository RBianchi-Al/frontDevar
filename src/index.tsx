import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs'

createServer({

  routes(){
    


    this.namespace = 'classes';

    this.get('/classes', () =>{
      return this.schema.all('classes')
    })

    this.post('/classes', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      console.log(data)
      return schema.create('classes', data)

    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

