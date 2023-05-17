import axios from "axios";
import axiosRetry from 'axios-retry';

import {
  handleChangeRequestHeader,
  handleConfigureAuth,
  handleAuthError,
  handleGeneralError,
  handleNetworkError,
} from "./tools";

// 当请求失败后，自动重新请求，只有3次失败后才真正失败
axiosRetry(axios, { retries: 3 });

axios.interceptors.request.use((config) => {
  config = handleChangeRequestHeader(config);
  config = handleConfigureAuth(config);
  return config;
});

axios.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    handleAuthError(response.data.errno);
    handleGeneralError(response.data.errno, response.data.errmsg);
    return response.data;
  },
  (err) => {
    handleNetworkError(err.response.status);
    return Promise.reject(err.response);
  }
);

export const Get = (url, params = {}, clearFn) =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((result) => {
        console.log(result);
        let res;
        if (clearFn !== undefined) {
          res = clearFn(result.result);
        } else {
          res = result.result;
        }
        
        resolve([null, res]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

export const Post = (url, data, params = {}) => {
  return new Promise((resolve) => {
    axios
      .post(url, data, { params })
      .then((result) => {
        console.log(result)
        resolve([null, result]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
