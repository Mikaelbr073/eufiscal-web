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
    }

    .content__image {
        background-color: #EFEFEF;
        flex: 1;
        margin-right: 16px;
        border-radius: 8px;
    }

    .content__info {
        background-color: #185adb;
        flex: 2;
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



`;
