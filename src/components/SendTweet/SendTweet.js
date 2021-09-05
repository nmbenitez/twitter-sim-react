import React, { useState } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import moment from 'moment'
import './SendTweet.scss';
import ModalContainer from '../ModalContainer';
import FormSendTweet from '../FormSendTweet/FormSendTweet';
import { TWEETS_STORAGE } from '../../utils/constant';

export default function SendTweet(props) {
    const [isOpenModal, setIsOpenModal ] = useState(false);
    const { setToastProps, allTweets } = props;
    const openModal = () => {
        setIsOpenModal(true);
    }
    
    const closeModal = () => {
        setIsOpenModal(false);
    }

    const sendTweet = (event, formValue) => {
        event.preventDefault();
        const { name, tweet } = formValue;
        let allTweetsArray = [];

        if(allTweets){
            allTweetsArray = allTweets;
        }

        if(!name || !tweet){
            setToastProps({
                open: true,
                text: "Cuidado! Todos los campos de este formulario son obligatorios."
            });
        }else{
            formValue.time = moment();
            allTweetsArray.push(formValue);
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
            setToastProps({
                open: true,
                text: "Tweet enviado correctamente"
            });
            closeModal();
        }
        allTweetsArray = [];
    }

    return(
        <div className="send-tweet">
            <Fab className="send-tweet__open-modal" color="primary" aria-label="add" onClick={openModal} > 
                <AddIcon/> 
            </Fab>
        <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
            <FormSendTweet sendTweet={sendTweet} />
        </ModalContainer>
        </div>
    );
}