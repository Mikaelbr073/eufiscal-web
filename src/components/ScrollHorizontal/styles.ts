import styled from 'styled-components';

export const Container = styled.div`
    /* display: flex;
    flex-direction: row;
    
    overflow-x: scroll;
    white-space: nowrap;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    padding-left: 32px;
    padding-right: 32px;

    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0px;
    } */
`;

export const Scroll = styled.div`
    display: flex;
    flex-direction: row;
    
    overflow-x: scroll;
    white-space: nowrap;

    /* -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    } */

    padding-left: 32px;
    padding-right: 32px;

    margin-bottom: 16px;

    &:last-child {
        margin-bottom: 0px;
    }
`;

export const Titulo = styled.h2`
    padding-left: 32px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */


    color: #344055;

`;
