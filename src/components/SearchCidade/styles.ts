import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    input {
        height: 40px;
        padding: 0px 14px;
        border: none;
        border-radius: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        background: rgba(136, 71, 241, 0.06);
        border: none;
        color: #CCCCCC;
    }

    input:focus {
        color: #212529;
        background-color: #fff;
        border-color: #764bf1ba;
        outline: 0;
        box-shadow: 0 0 0 0.25rem #764bf140;
    }

    margin: 0;
`;

export const ListaSugestoes = styled.div`
    background-color: #FFF;
    width: inherit;
    position: absolute;
    top: 45px;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    

    .suggestions {
        border-top-width: 0;
        list-style: none;
        margin-top: 0;
        max-height: 143px;
        overflow-y: auto;
        padding-left: 0;
        width: 100%;
    }

    .suggestions li {
        padding: 0.5rem;
    }

    .suggestion-active,
    .suggestions li:hover {
        background-color: #764BF1;
        color: #FFF;
        cursor: pointer;
        font-weight: 700;
    }
`;

export const ContainerInputPesquisar = styled.div`
    /* width: 522px;
    height: 77px; */
    /* background-color: blue;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center; */
    display: flex;
    flex: 1;


    input {
        width: 100%;
        /* font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #344055;
        outline: none;

        border-radius: 22px;
        border: none;
        padding: 0px 40px;
        padding-right: 0px;

        height: 100%;
        flex: 1; */
    }
`;

