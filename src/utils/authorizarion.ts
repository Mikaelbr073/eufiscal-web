import { GetServerSidePropsContext } from "next";
import { parseCookies } from "nookies";
global.atob = require("atob");

const authorization = (ctx: GetServerSidePropsContext): boolean => {
  return false // parseCookies(ctx, options)
  // return (getCookie("token.eufiscal-web") || false) && true
}

export default authorization
