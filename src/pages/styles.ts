import styled from 'styled-components';

export const Container = styled.div`
    background-color: pink;
    height: 100vh;

  .header {
    height: 96px;
    background-color: red;
  }

  .container-main {
    display: flex;
	flex-direction: row;
    background-color: yellow;
    height: calc(100% - 96px);
    /* height: 100%; */
  justify-content: center;
  align-items: stretch; // <-- stretch vertical (default value, can be omitted here)
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
    padding: 32px;
  }

  .card {
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;
  }

  .card__imagem {
    background-color: beige;
    background: rgba(0, 0, 0, 0.49) 24%;
    border-radius: 8px;
    height: 74px;
    width: 128px;
    margin-right: 8px;
  }

  .card__meta {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card__subtitulo {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */


    color: #6D7788;
  }

  .card__titulo {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #344055;
  }

  .card__categoria {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 3.66667px 7.33333px;
    gap: 12.22px;

    width: 87.67px;
    height: 22.33px;

    background: rgba(243, 36, 36, 0.19);
    border-radius: 2.44444px;
  }
`;
