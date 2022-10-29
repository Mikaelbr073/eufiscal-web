import styled from 'styled-components';

export const Container = styled.div`
  background-color: pink;
  height: 100vh;

  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 48px;
    padding: 00 16px;
    box-sizing: border-box;
    
    border-bottom: 1px solid #F2F2F2;
    
    background-color: #FFF;
  }

  .header__menu-mobile {
  }

  .header__menu {
    display: none;
  }

  .header__menu-mobile > button {
    border: none;
    border-radius: 8px;

    height: 32px;
    width: 32px;
    margin-right: 8px;
    padding: 0px;
  }

  .header__menu-mobile > button:last-child {
    margin-right: 0px;
  }

  .container-main {
      display: flex;
      flex-direction: row;
      /* background-color: yellow; */
      /* height: calc(100vh - 96px); */
      /* height: 100%; */
      justify-content: center;
      align-items: stretch;
      align-content: center;

      flex: 1;
  }

  .mapa {
      /* background-color: blue; */
      width: 100%;
      /* height: 100%; */
  }

  .section {
      display: none;
      background-color: #fff;
      width: 500px;
      padding: 16px;
      overflow-y: scroll;
      border-top: 1px solid #F2F2F2;
  }

  @media (min-width: 576px) {
    background-color: red;
    .header {
      height: 56px;
      padding: 00 24px;
    }

    .container-main {
      max-height: calc(100% - 56px);
    }
  }

  @media (min-width: 768px) {
    background-color: yellowgreen;
    .header {
      height: 64px;
      padding: 00 32px;
      justify-content: flex-start;
      /* display: flex; */
    }

    .container-main {
      max-height: calc(100% - 64px);
    }

    .header__logo {
      margin-right: 16px;
    }

    .header__menu {
      display: flex;
      flex-direction: row;
      /* background-color: red; */
      /* width: 100%; */
      flex: 1;
    }

    .header__pesquisar {
      flex: 1;

      height: 40px;
      padding: 0px 14px;

      border: none;
      border-radius: 4px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      
      background: rgba(136, 71, 241, 0.06);
      color: #CCCCCC;
      border: none;
      /* outline-color: #764BF105; */

      /* border: 1px solid #ced4da; */
      /* outline: #764BF1; */

      margin-right: 16px;
    }

    .header__pesquisar:focus {
      color: #212529;
      background-color: #fff;
      border-color: #764bf1ba;
      outline: 0;
      box-shadow: 0 0 0 0.25rem #764bf140;
    }

    .header__select {
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
    }

    .header__container-select > .header__select {
      margin-right: 8px;
    }

    .header__container-select > .header__select:last-child {
      margin-right: 0px;
    }

    .header__select:focus {
      color: #212529;
      background-color: #fff;
      border-color: #764bf1ba;
      outline: 0;
      box-shadow: 0 0 0 0.25rem #764bf140;
    }

    .header__menu-mobile {
      display: none;
    }

    .section {
      display: flex;
      flex-direction: column;
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
  }

  @media (min-width: 992px) {
    background-color: green;
    .header {
      height: 72px;
      padding: 00 40px;
    }

    .container-main {
      max-height: calc(100% - 72px);
    }
  }

  @media (min-width: 1200px) {
    background-color: blue;
    .header {
      height: 80px;
      padding: 00 48px;
    }

    .container-main {
      max-height: calc(100% - 80px);
    }
  }

  @media (min-width: 1400px) {
    background-color: chocolate;
    .header {
      height: 96px;
      padding: 00 80px;
    }

    .container-main {
      max-height: calc(100% - 96px);
    }

    .mapa { }

    .section { }


  }


`;
