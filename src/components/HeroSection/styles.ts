import styled from 'styled-components';

import bg from '../../../public/bgProblema.png'
import SearchCidade from '../SearchCidade';


export const Container = styled.header`
    padding: 64px;
    position: relative;
    
    display: none;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */

    height: 237px;

    background: linear-gradient(
        89.96deg,
        #764AF1 0.07%,
        rgba(121,  78, 241, 0.9400) 37.06%,
        rgba(121,  78, 241, 0.8800) 44.06%,
        rgba(140, 103, 243, 0.8425) 51.33%,
        rgba(255, 255, 255, 0.0000) 99.46%
    ), url('${bg.src}');
    border-radius: 32px;
    /* background-image: url('${bg.src}'); */
    background-repeat: no-repeat;
    background-size: cover;


    margin: 0px 32px;

    @media (min-width: 1400px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Mensagem = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 58px;

    /* position: absolute; */

    color: #FFFFFF;
    width: 500px;
`;

export const Search = styled(SearchCidade)`
    /* position: absolute  !important; */
    /* z-index: 1000; */
    /* flex: 1; */
    /* margin-right: 8px; */
    background-color: #FFF !important;
    width: 500px;
    border-radius: 8px;
    height: 50px;
    align-items: center;
    /* height: 80px; */

    
    /* display: flex;
    flex-direction: column;
    align-items: flex-end; */

    /* margin: auto; */
    
    /* position: relative; */
    /* right: 0px; */

    /* & > div:last-child {
        bottom: 0px;
        background-color: red;
    } */
`;