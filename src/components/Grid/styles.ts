import styled from 'styled-components';

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
export type TypeContainer = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' | 'container'

export interface IBreakpoints {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

function getWidthGrid(value: number) {
    if (!value) return;

    let width = value / 12 * 100;

    return `width: ${width}%;`;
}

function getWidthContainer(type: TypeContainer, breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl') {

    // Container fluid

    if (type === "fluid") {
        return `width: 100%;`;
    }

    // Container

    else if (type === "container") {
        if (breakpoint === 'sm') {
            return `max-width: 540px;`;
        } else if (breakpoint === 'md') {
            return `max-width: 720px;`;
        } else if (breakpoint === 'lg') {
            return `max-width: 960px;`;
        } else if (breakpoint === 'xl') {
            return `max-width: 1140px;`;
        } else if (breakpoint === 'xxl') {
            return `max-width: 1320px;`;
        // extra small
        } else {
            return `max-width: 100%;`;
        }
    }

    // Container breakpoint

    else {
        if (breakpoint === 'sm') {
            if (type === 'sm') {
                return `width: 540px;`;
            } else {
                return `width: 100%;`;
            }
        } else if (breakpoint === 'md') {
            if (type === 'sm' || type === "md") {
                return `width: 720px;`;
            } else {
                return `width: 100%;`;
            }
        } else if (breakpoint === 'lg') {
            if (type === 'sm' || type === "md" || type === "lg") {
                return `width: 960px;`;
            } else {
                return `width: 100%;`;
            }
        } else if (breakpoint === 'xl') {
            if (type === 'sm' || type === "md" || type === "lg" || type === "xl") {
                return `width: 1140px;`;
            } else {
                return `width: 100%;`;
            }
        } else if (breakpoint === 'xxl') {
            return `width: 1320px;`;
        // extra small
        } else {
            return `width: 100%;`;
        }
    }
}

interface IContainer {
    type: TypeContainer;
    margin?: number;
}

export const Container = styled.div<IContainer>`
    ${({ type }) => getWidthContainer(type, 'xs')}

    @media (min-width: 576px) {
        ${({ type }) => getWidthContainer(type, 'sm')}
    }

    @media (min-width: 768px) {
        ${({ type }) => getWidthContainer(type, 'md')}
    }

    @media (min-width: 992px) {
        ${({ type }) => getWidthContainer(type, 'lg')}
    }

    @media (min-width: 1200px) {
        ${({ type }) => getWidthContainer(type, 'xl')}
    }

    @media (min-width: 1400px) {
        ${({ type }) => getWidthContainer(type, 'xxl')}
    }

    ${({ margin }) => margin ? `padding-right: ${margin}px;` : 'padding-right: 15px;'}
    ${({ margin }) => margin ? `padding-left: ${margin}px;` : 'padding-left: 15px;'}

    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;

    &:before,
    &:after {
    box-sizing: border-box;
        /* content: "";
        display: table; */
    }

    /* &:after {
        clear: both;
    } */
`;

export const Row = styled.div<{
    gutter: number
}>`
    /* width: 100%; */
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;

    margin-right: ${({ gutter }) => gutter ? `-${gutter/2}px;` : '-4px;'};
    margin-left: ${({ gutter }) => gutter ? `-${gutter/2}px;` : '-4px;'};
    
    > div {
        padding-right:  ${({ gutter }) => gutter ? `${gutter/2}px;` : '4px;'};
        padding-left: ${({ gutter }) => gutter ? `${gutter/2}px;` : '4px;'};
    }
`;


interface IColumn extends IBreakpoints {
}

export const Column = styled.div<IColumn>`
    float: left;
    /* padding: .25rem; */
    min-height: 1px;
    box-sizing: border-box;

    /* flex: 1 0 0%; */

    @media (max-width: 575px) {
    /* @media (max-width: 576px) { */
        ${({ sm }) => sm && getWidthGrid(sm)}
    }

    @media (min-width: 576px) and (max-width: 767px) {
    /* @media (min-width: 768px) { */
        ${({ md }) => md && getWidthGrid(md)}
    }

    @media (min-width: 768px) and (max-width: 991px) {
    /* @media (min-width: 992px) { */
        ${({ lg }) => lg && getWidthGrid(lg)}
    }

    @media (min-width: 992px) and (max-width: 1199px) {
    /* @media (min-width: 1200px) { */
        ${({ xl }) => xl && getWidthGrid(xl)}
    }

    @media (min-width: 1200px) {
        ${({ xxl }) => xxl && getWidthGrid(xxl)}
    }
`;