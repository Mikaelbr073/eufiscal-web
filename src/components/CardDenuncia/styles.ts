import styled from 'styled-components';
import bg from '../../../public/bgProblema.png'

export const Container = styled.div<{
    imagem: string;
}>`
    background-color: blanchedalmond;
    display: flex;
    flex-direction: column;
    justify-content: end;
    min-width: 378px;
    height: 167px;
    margin-right: 16px;
    padding: 32px;

    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.81) 73.96%), url('${props => (props.imagem)}');
    background-size: cover;
    border-radius: 8px;
`;

export const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Titulo = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;

    margin-bottom: 8px;
`;

export const Subtitulo = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;
`;