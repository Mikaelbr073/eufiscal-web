import styled from 'styled-components';

export const Container = styled.div`
    background-color: pink;
    height: 100vh;

  .header {
    height: 96px;
    background-color: #FFF;

    box-sizing: border-box;
    border-bottom: 1px solid #F2F2F2;

    display: flex;
    align-items: center;


    padding: 00 80px;
  }

  .container-main {
    display: flex;
	flex-direction: row;
    background-color: yellow;
    max-height: calc(100% - 96px);
    /* height: 100%; */
    justify-content: center;
    align-items: stretch;
    align-content: center;
  }

  .mapa {
    background-color: blue;
    width: 100%;
    /* height: 100%; */
  }
  .section {
    background-color: #fff;
    width: 500px;
    padding: 16px;
    overflow-y: scroll;
    border-top: 1px solid #F2F2F2;
  }

  .card {
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
  }

  .card__imagem {
    background-color: beige;
    background: rgba(0, 0, 0, 0.49) 24%;
    border-radius: 8px;
    height: 80px;
    width: 128px;
    margin-right: 8px;
  }

  .card__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .card__subtitulo {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 8px;
    /* identical to box height */


    color: #6D7788;
  }

  .card__titulo {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 8px;
    /* identical to box height */


    color: #344055;
  }

  .card__categoria {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3.66667px 7.33333px;
    gap: 12.22px;

    background: rgba(243, 36, 36, 0.19);
    border-radius: 4px;
  }
`;
