import React from "react";
import PostForm from '../Forms/PostForm'
import { ModalBackground, ModalCloseButton, ModalContainer } from "./CreatePostModal.styled";

export default function CreatePostModal({setIsOpen}){
 
    return (
        <ModalBackground onClick={() => setIsOpen(false)}>
            <ModalContainer>
                <div>
                    <p>Post</p>
                    <ModalCloseButton onClick={() => setIsOpen(false)}>
                        <img src="./assets/images/cancel.png" alt="cancel x" />
                    </ModalCloseButton>
                </div>
            <PostForm />
            </ModalContainer>
        </ModalBackground>
    )
}