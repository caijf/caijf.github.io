const delay = require("doly-cli/mocker-api/delay"); // eslint-disable-line
const api = require("../src/services/api");

const noMock = process.env.MOCK === "none";

// mock数据
const mocks = {};

// 响应数据结构
const responseDataStructure = {
  errCode: "00",
  errMsg: "mock api success"
};

/**
 * 创建mock接口
 * @param {Object} apiInfo 接口信息
 * @param {String} apiInfo.url 接口地址
 * @param {String} apiInfo.method 请求方法
 * @param {Object|String|Function} res 响应
 */
const createApi = (apiInfo, res) => {
  const { url, method } = apiInfo;
  let ret;

  if (typeof res === "function") {
    ret = res;
  } else if (typeof res === "string") {
    ret = { ...responseDataStructure, ...require(res) }; // eslint-disable-line
  } else {
    ret = { ...responseDataStructure, res };
  }

  mocks[`${method.toUpperCase()} ${url}`] = ret;
};

createApi(api.login);
createApi(api.getNotices, "./getNotices.js");

module.exports = noMock ? {} : delay(mocks, 1000);
