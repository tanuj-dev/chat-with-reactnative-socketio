import axios from 'axios';
const $http = axios.create({
  baseURL: '',
  timeout: 18000,
  headers: {
    'Content-Type': 'application/json',
  },
  // httpsAgent: httpsAgent
  // withCredentials: true
});
const createInterceptors = instan => {
  instan.interceptors.request.use(
    request => {
      console.log(
        'INTERCEPTOR REQUEST DATA $HTTP',
        request.baseURL + '/' + request.url,
        request,
      );
      return request;
    },
    error => {
      console.log('INTERCEPTOR REQUEST ERROR $HTTP', error);
      return error;
    },
  );

  instan.interceptors.response.use(
    response => {
      console.log(
        'INTERCEPTOR RESPONSE DATA $HTTP',
        response.config.baseURL + '/' + response.config.url,
        response,
      );
      return response;
    },
    error => {
      console.log('INTERCEPTOR RESPONSE ERROR $HTTP', error);
      return error;
    },
  );
};
createInterceptors($http);

export default {
  axiosInstance: $http,
};
