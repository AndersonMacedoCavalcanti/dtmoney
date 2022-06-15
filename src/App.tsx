import React, {useState} from 'react';
import {GloablStyle} from './styles/global'
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import {NewTransactionModal} from "./components/NewTransactionModal";
import { TransactionsPrivider} from "./transactionsContext";


export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }
    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
    <TransactionsPrivider>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>
        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
        <GloablStyle/>
    </TransactionsPrivider>
  );
}

