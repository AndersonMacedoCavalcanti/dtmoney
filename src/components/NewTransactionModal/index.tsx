import Modal from "react-modal";
import React, {FormEvent, useContext, useState} from "react";
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeimg from '../../assets/income.svg'
import {Container, RadioBox, TransactionsTypeContainer} from "./style";
import {api} from "../../services/api";
import {TransactionsContext} from "../../transactionsContext";

interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps){

    const {createTransaction} = useContext(TransactionsContext)

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [type, setType] = useState('deposit')




    async function HandleCreateNewTransaction(event:FormEvent) {
        event.preventDefault()
        await createTransaction({title,type,value,category})
        setTitle('')
        setCategory('')
        setValue(0)
        onRequestClose()
    }




    return(
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}
                overlayClassName='react-modal-overlay'
               className='react-modal-content'
        >

            <button type='button' onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="fechar modal"/>
            </button>
            <Container onSubmit={HandleCreateNewTransaction}>
            <h1>Cadastrar transacao</h1>
                <input value={title} onChange={event => setTitle(event.target.value)} type='text' placeholder="Ttulo"/>
                <input value={value} onChange={event => setValue(Number(event.target.value))} type='number' placeholder="Valor"/>
                <TransactionsTypeContainer>


                    <RadioBox
                              isActive={type=='deposit'}
                              type="button"
                              onClick={()=>{setType('deposit')}}
                              activeColor="green" >

                        <img src={incomeimg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox >


                    <RadioBox
                        isActive={type=='withdraw'}
                        type="button"
                        onClick={()=>{setType('withdraw')}}
                        activeColor="red">

                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </RadioBox>


                    </TransactionsTypeContainer>
                <input value={category} onChange={event => setCategory(event.target.value)} type='text' placeholder="Categoria"/>
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}