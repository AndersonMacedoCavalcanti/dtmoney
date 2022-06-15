import {createContext, ReactNode, useEffect, useState} from 'react'
import {api} from "./services/api";


interface transactions{
    id: number;
    title: string;
    category: string;
    type:string;
    value:number;
    createdAt:string;
}

interface transactionsPrividerProps{
    children:ReactNode;
}

interface transactionsInput{
    title:string;
    category:string;
    value:number
    type:string
}

interface TransactionsContextData{
    transactions : transactions[];
    createTransaction: (transaction:transactionsInput) => Promise<void>
}


export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsPrivider({children}:transactionsPrividerProps){
    
    const [transactions, sertTransactions] = useState<transactions[]>([]);


    useEffect(()=>{
        api.get('/transactions')
            .then(res => sertTransactions(res.data.transactions))
    },[]);


    async function createTransaction(transactionInput:transactionsInput){
       const response = await api.post('/transactions', transactionInput)
        const {transaction} = response.data;

       sertTransactions([
           ...transactions,transaction
       ])
    }

    
    return (
        <TransactionsContext.Provider value={{transactions,createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}