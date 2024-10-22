import store from '../redux/store';
import axios from 'axios';
axios.defaults.baseURL = 'http://rpm.demo.app24h.net:81/api/v1';
const getDataBody = config => {
  let data = '';
  if (
    config.data &&
    config.header['Content-Type'] === 'application/x-www-form-urlencoded'
  ) {
    for (const key in config.data) {
      data = data + `${key} = ${config.data[key]}&`;
    }
    data = data.slice(0, data.length - 1);
  } else {
    data = config.data;
  }
  return data;
};

//REQUEST
axios.interceptors.request.use(
  config => {
    const data = getDataBody(config);
    if (__DEV__ && config.url) {
      console.log(`%C [REQUEST] ${config?.url}`, config);
      console.log('url:', config.url);
      console.log('method:', config.method);
      console.log('data:', config.data);
      console.log('params:', config.params);
    }
    return {...config, data};
  },
  error => {
    return Promise.reject(error);
  },
);
//RESPONSE
axios.interceptors.response.use(
    respone =>{
        if(__DEV__ && respone.config.url){
            console.log(
                `%C [RESPONSE] ${respone.config.url}`,
                respone,
            );
            console.log('status:', respone.status);
            console.log('data:', respone.data)
        }
        return respone
    },
    error => {
        if(__DEV__){
            console.log(
                `%C [RESPONSE ERROR] ${error.config.url}`,
                {dataHeader: error.config.data},
                {paramsHeader: error.config.params},
                JSON.stringify(error.respone.data, null, 2)
            );
        }
        return Promise.reject(error)
    }
)
export default class HttpService{
    static generateHeader(headers){
        const token = store.getState()?.appToken?.data;
        let option = {
            'Content-Type': headers || 'application/x-www-form-urlencoded',
            Accept: 'application/json'
        }
        if(token !== null){
            option ={
                ...option,
                'Authorization': `Bearer ${token}`
            }
        }
        return option
    }
    static async get(url, params ={}) {
        try{
            return await axios
            .get(url, {
                headers: {
                    get: this.generateHeader()
                },
                params: {...params}
            })
            .then(response => response.data)
        } catch (error){
            throw error.respone
        }
    }
    static async post(url, body, params ={}) {
        try{
            return await axios
            .post(url, body, {
                headers: {
                    post: this.generateHeader()
                },
                params: {...params}
            })
            .then(response => response.data)
        }catch(error){
            throw error.respone
        }
    }
    
}
