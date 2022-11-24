import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Marcador = styled.div`
    background-color: red;

    img {
        position: absolute;
        top: -32px;
        width: 32px;
        height: 32px;
    }

    &:hover {
        cursor: pointer;
    }
`;