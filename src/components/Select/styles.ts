import styled from 'styled-components';

export const Container = styled.select`
    height: 40px;
    padding: 0px 14px;

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
`;
