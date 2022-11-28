import styled from 'styled-components';
import SearchCidade from '../SearchCidade';

export const Container = styled.div`

    position: relative;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 48px;
    padding: 00 16px;
    box-sizing: border-box;

    border-bottom: 1px solid #F2F2F2;

    background-color: #FFF;

    @media (min-width: 576px) {
        height: 56px;
        padding: 00 24px;
    }

    @media (min-width: 768px) {
        height: 64px;
        padding: 00 32px;
        justify-content: flex-start;

        

        .header__button {
        height: 40px;
        padding: 0px 14px;

        border: none;
        border-radius: 4px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        background: #F3474717;
        border: 1px solid transparent;
        color: #F34747;
        border-radius: 8px;
        }

        .header__button--signin {
        background: #47f36029;
        color: #176209;
        padding: 10px 14px;
        }

        

        .header__button:hover {
        cursor: pointer;
        background: #F3474727;
        }

        .header__button--signin:hover {
        cursor: pointer;
        background: #2cc04229;
        }

    

    }

    @media (min-width: 992px) {
        height: 72px;
        padding: 00 40px;
    }

    @media (min-width: 1200px) {
        height: 80px;
        padding: 00 48px;
    }

    @media (min-width: 1400px) {
        height: 96px;
        padding: 00 80px;
    }
`;

export const Logo = styled.div`
    img {
        height: 40px;
        width: 100px;
    }

    @media (min-width: 768px) {
        margin-right: 16px;
    }
`;

export const Menu = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex: 1;
    }
`;

export const MenuMobile = styled.div`

    z-index: 999;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: #FFF;
    padding: 16px;

    /* @media (min-width: 768px) {
        display: none;
    }

    & > button {
        border: none;
        border-radius: 8px;

        height: 32px;
        width: 32px;
        margin-right: 8px;
        padding: 0px;
    }

    & > button:last-child {
        margin-right: 0px;
    } */
`;

export const ContainerFiltro = styled.div`
    & > select {
      margin-right: 8px;
    }

    & > select:last-child {
      margin-right: 0px;
    }
`;

export const Search = styled(SearchCidade)`
    position: relative;
    width: 100%;
    z-index: 10;
    flex: 1;
    margin-right: 8px;
`;

export const SearchMobile = styled(SearchCidade)`
    position: relative;
    flex: 1;
    margin-bottom: 8px;
`;
export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;

    select {
        margin-bottom: 8px;
    }
`;

export const BtnFecharModal = styled.button`
    background: #764BF1;
    color: #FFF;
    border-radius: 4px;
    height: 40px;
    border: none;
    padding: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-size: 16px;

    &:hover {
        cursor: pointer;
    }
`;

export const MenuHamburguer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;

    border: none;
    border-radius: 4px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    border-radius: 8px;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      color: #212529;
      background-color: #fff;
      border-color: #764bf1ba;
      outline: 0;
      box-shadow: 0 0 0 0.25rem #764bf140;
    }

@media (min-width: 768px) {
    display: none;
}
`;