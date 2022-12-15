import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContainerIndex = styled.div`
  min-height: 100vh;
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

  .header__logo img {
    height: 40px;
    width: 100px;
  }

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


  .container-section-hero {
    margin: 40px 80px 115px 80px;
    margin: 40px 0px 115px 0px;
  }

  
  @media (min-width: 576px) {
    .header {
      height: 56px;
      padding: 00 24px;
    }
  }

  @media (min-width: 768px) {
    .header {
      height: 64px;
      padding: 00 32px;
    }

    .header__logo {
      margin-right: 16px;
    }
  }

  @media (min-width: 992px) {
    .header {
      height: 72px;
      padding: 00 40px;
    }
  }

  @media (min-width: 1200px) {
    .header {
      height: 80px;
      padding: 00 48px;
    }
  }

  @media (min-width: 1400px) {
    .header {
      height: 96px;
      padding: 00 80px;
    }
  }


  
  .login__container {
    display: flex;
    flex-direction: column;
    background-color: red;
  }

  .login__container > input,
  .login__container > button {
    margin-bottom: 8px;
  }

  .login__container > input:last-child,
  .login__container > button:last-child {
    margin-bottom: 0px;
  }

  input {
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

  button {
      height: 40px;
      padding: 0px 14px;

      border: none;
      border-radius: 4px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      background: #8847F1;
      border: 1px solid transparent;
      color: #FFFFFF;
      border-radius: 8px;
  }

  button:hover {
    cursor: pointer;
    background-color: #8847f1;
  }
`;


export const ContainerSignIn = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    height: 48px;
    padding: 00 16px;
    box-sizing: border-box;
    
    border-bottom: 1px solid #F2F2F2;
    
    background-color: #FFF;
  }

  .header__logo img {
    height: 40px;
    width: 100px;
  }

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


  .container-section-hero {
    margin: 40px 80px 115px 80px;
    margin: 40px 0px 115px 0px;
  }

  
  @media (min-width: 576px) {
    .header {
      height: 56px;
      padding: 00 24px;
    }
  }

  @media (min-width: 768px) {
    .header {
      height: 64px;
      padding: 00 32px;
    }

    .header__logo {
      margin-right: 16px;
    }
  }

  @media (min-width: 992px) {
    .header {
      height: 72px;
      padding: 00 40px;
    }
  }

  @media (min-width: 1200px) {
    .header {
      height: 80px;
      padding: 00 48px;
    }
  }

  @media (min-width: 1400px) {
    .header {
      height: 96px;
      padding: 00 80px;
    }
  }


  
  .login__container {
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    margin-top: 100px;
    text-align: center;
  }

  .login__container > input,
  .login__container > button {
    margin-bottom: 8px;
  }

  .login__container > input:last-child,
  .login__container > button:last-child {
    margin-bottom: 0px;
  }

  input {
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

  button {
      height: 40px;
      padding: 0px 14px;

      border: none;
      border-radius: 4px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      background: #8847F1;
      border: 1px solid transparent;
      color: #FFFFFF;
      border-radius: 8px;
  }

  button:hover {
    cursor: pointer;
    background-color: #8847f1;
  }
`;

export const ContainerLogin = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  .login__container {
    display: flex;
    flex-direction: column;
  }

  .login__container > input,
  .login__container > button {
    margin-bottom: 8px;
  }

  .login__container > input:last-child,
  .login__container > button:last-child {
    margin-bottom: 0px;
  }

  input {
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

  button {
      height: 40px;
      padding: 0px 14px;

      border: none;
      border-radius: 4px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;

      background: #8847F1;
      border: 1px solid transparent;
      color: #FFFFFF;
      border-radius: 8px;
  }

  button:hover {
    cursor: pointer;
    background-color: #8847f1;
  }
`

export const SectionCardMarcadores = styled.div`
  display: none;
  background-color: #fff;
  width: 500px;
  padding: 16px;
  overflow-y: scroll;
  border-top: 1px solid #F2F2F2;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerMapa = styled.div`

  display: flex;
  flex-direction: row;
  /* background-color: yellow; */
  /* height: calc(100vh - 96px); */
  /* height: 100%; */
  justify-content: center;
  align-items: stretch;
  align-content: center;

  flex: 1;

  @media (min-width: 576px) {
    max-height: calc(100% - 56px);
  }

  @media (min-width: 768px) {
    max-height: calc(100% - 64px);
  }

  @media (min-width: 992px) {
    max-height: calc(100% - 72px);
  }

  @media (min-width: 1200px) {
    max-height: calc(100% - 80px);
  }

  @media (min-width: 1400px) {
    max-height: calc(100% - 96px);
  }
`;