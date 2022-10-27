import styled from 'styled-components';

function getWidthGrid(value: number) {
    if (!value) return;

    let width = value / 12 * 100;

    return `width: ${width}%;`;
}

export const Container = styled.div`
    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;

    &:before,
    &:after {
        content: "";
        display: table;
    }

    &:after {
        clear: both;
    }
`;

export const Row = styled.div`
    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;

    &::before,
    &::after {
        content: "";
        display: table;
    }

    &::after {
        clear: both;
    }
`;

interface IColumn {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
  }

export const Column = styled.div<IColumn>`
    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;

    @media (min-width: 576px) {
        ${({ sm }) => sm && getWidthGrid(sm)}
    }

    @media (min-width: 768px) {
        ${({ md }) => md && getWidthGrid(md)}
    }

    @media (min-width: 992px) {
        ${({ lg }) => lg && getWidthGrid(lg)}
    }

    @media (min-width: 1200px) {
        ${({ xl }) => xl && getWidthGrid(xl)}
    }

    @media (min-width: 1400px) {
        ${({ xxl }) => xxl && getWidthGrid(xxl)}
    }
`;