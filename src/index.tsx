import React from 'react';
import ReactDOM from 'react-dom';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({
    models: {
        transaction: Model,
    },


    seeds(server){
        server.db.loadData({
            transactions:[
                {
                    id:1,
                    title:'Desenvolvimento de Website',
                    category:'Desenvolvimento',
                    type:'deposit',
                    value:6000,
                    createdAt: new Date('2022-05-14 11:00:00')
                },
                {
                    id:2,
                    title:'Aluguel',
                    type:'withdraw',
                    category:'Casa',
                    value:1100,
                    createdAt: new Date('2022-05-14 07:00:00')
                }
            ],
        })
    },

    routes(){
        this.namespace = 'api';

        this.get('/transactions', ()=>{
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction',{...data,createdAt:new Date()})
        })
    }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
