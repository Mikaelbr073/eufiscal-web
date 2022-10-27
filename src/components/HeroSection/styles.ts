import styled from 'styled-components';

export const Container = styled.header`
    margin-bottom: 115px;
    padding: 64px;
    
    display: flex;
    align-items: center;

    height: 237px;

    background: linear-gradient(89.96deg, #764AF1 0.07%, rgba(121, 78, 241, 0.94) 37.06%, rgba(121, 78, 241, 0.88) 44.06%, rgba(140, 103, 243, 0.8425) 51.33%, rgba(255, 255, 255, 0) 99.46%), url(image.png);
    border-radius: 32px;
`;

export const Mensagem = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;

    position: absolute;

    color: #FFFFFF;
    width: 500px;
`;

export const ContainerInputPesquisar = styled.div`
    width: 522px;
    height: 77px;
    background-color: blue;
    border-radius: 22px;
    background-color: #fff;
    position: relative;
    display: flex;
    justify-self: center;
    align-self: center;
    bottom: -110px;
    margin: auto;

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;