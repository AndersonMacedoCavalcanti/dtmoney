import logoimg from '../../assets/logo.svg'
import {Container, Content} from './style'
import React, {useState} from "react";
import Modal from 'react-modal'

interface HeaderProps{
    onOpenNewTransactionModal:()=> void;
}

export function Header({onOpenNewTransactionModal}:HeaderProps){
    return(
        <Container>
            <Content>
            <img src={logoimg} alt="dt money"/>
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transacao
            </button>
            </Content>
        </Container>
    )
}