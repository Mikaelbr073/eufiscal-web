import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    /* margin: auto; */
    
    /* position: relative; */
    left: 0px;
    /* right: 522px;
    top: 0px; */
    /* bottom: -110px; */
`;

export const ListaSugestoes = styled.div`
    background-color: #FFF;
    width: 100%;
    position: absolute;
    top: 85px;

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
    width: 522px;
    height: 77px;
    background-color: blue;
    border-radius: 22px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

    input {
        /* width: 100%; */
        font-family: 'Inter';
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
        flex: 1;
    }

    button {
        background: #764BF1;
        border-radius: 19px;
        width: 56px;
        height: 56px;
        margin: 0px 16px;
        border: none;
        padding: 0px;
    }



`;