import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;



export const Imagem = styled.div`
    background-color: beige;
    background: rgba(0, 0, 0, 0.49) 24%;
    border-radius: 8px;
    height: 80px;
    width: 128px;
    margin-right: 8px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Data = styled.div`

    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 8px;

    color: #344055;
`;

export const Titulo = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 8px;

    color: #6D7788;
`;

export const Categoria = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3.66667px 7.33333px;
    gap: 12.22px;

    background: rgba(243, 36, 36, 0.19);
    border-radius: 4px;
`;