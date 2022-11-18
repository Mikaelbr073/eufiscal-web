import styled from 'styled-components';

export const Container = styled.div`

    background-color: #185adb;

    .background {
        background-color: rgba(0, 0, 0, 0.2);
        width: 100vw;
        height: 100vh;
        z-index: 0;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute; 
        z-index: 1000;
    }

    .container {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FFFFFF;
        width: 80%;
        height: 90%;
        border-radius: 8px;
        z-index: 1000;
    }

    .modal {
        height: 100%;
        width: 100%;
        padding: 32px 56px;
        display: flex;
        flex-direction: column;
    }

    .modal__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 16px;
        margin-bottom: 48px;
        border-bottom: 1px solid #EFEFEF;
    }

    .modal__header-meta {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .modal__header-titulo {
        margin: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #344055;

        margin-right: 8px;
    }

    .modal__header-badge {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 6px 13px;

        height: 29px;

        background: rgba(12, 144, 17, 0.19);
        border: 1px solid rgba(12, 144, 17, 0.48);
        border-radius: 8px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;

        color: #0C9111;


    }


    .content {
        display: flex;
        flex: 1;
        flex-direction: row;
        overflow-y: overlay;
    }

    .content__image {
        background-color: #000000;
        flex: 1;
        margin-right: 16px;
        border-radius: 8px;
        display: flex;
        align-items: center;
    }

    .content__image img {
        width: 100%;
        max-height: 100%;


        object-fit: cover;
    }







    .content__info {
        /* background-color: #185adb; */
        flex: 2;
    }

    .content__info-titulo {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        
        color: #344055;
        
        margin: 0px;
        margin-bottom: 16px;
    }

    .meta-content {
        display: flex;
        flex-direction: row;
        
        margin-bottom: 16px;
    }

    .meta-content__item {
        margin-right: 8px;
    }

    .meta-content__item:last-child {
        margin-right: 0px;
    }

    .meta-content__icone {
        margin-right: 4px;
        
        color: #344055;
    }

    .meta-content__info {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        color: #344055;
    }

    .content__descricao {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #344055;
    }




    .line {
        background-color: #EFEFEF;
        width: 100%;
        height: 1px;
        margin: 16px 0px;
    }







    .historico {

    }

    .historico__item {
        margin-bottom: 16px;
    }

    .historico__container-meta {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 8px;
    }

    .historico__badge {
        padding: 8px 16px;
        margin-right: 16px;

        border-radius: 8px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .historico__badge--abertura {
        background: rgba(118, 74, 241, 0.19);
        border: 1px solid rgba(118, 74, 241, 0.48);
        color: #764AF1;
    }

    .historico__badge--analise {
        background: rgba(241, 194, 74, 0.19);
        border: 1px solid rgba(241, 154, 74, 0.48);
        color: #F19A4A;
    }

    .historico__badge--resolvido {
        background: rgba(12, 144, 17, 0.19);
        border: 1px solid rgba(12, 144, 17, 0.48);
        color: #0C9111;
    }

    .historico__data {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        color: #6B768A;
    }


    .historico__descricao {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #344055;
    }






    .modalHeader {
    height: 50px;
    background: white;
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    }

    .heading {
    margin: 0;
    padding: 10px;
    color: #2c3e50;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    }

    .content {
    }


    .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: #2c3e50;
    background: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
    }

    .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
    }






    .action-bar {
    }
    
    .action-bar > .action-bar__button {
      margin-right: 8px;
    }

    .action-bar > .action-bar__button:last-child {
    margin-right: 0px;
    }

    .action-bar__button {
        height: 39px;
        padding: 11px 12px;

        border-radius: 5px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

    }

    .action-bar__button:hover {
        cursor: pointer;
    }

    .action-bar__button--desativado {
        background: #F3F3F3;
        border: 1px solid #E2E2E2;
        color: #788AA8;
    }

    .action-bar__button--desativado:hover {
        cursor: not-allowed;
    }

    .action-bar__button--ativado {
        background: #146850;
        border: 1px solid transparent;
        color: #FFF;
    }


`;
