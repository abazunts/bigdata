import {apiInstance} from "./apiInstance";

const loginApi = {
    login(values) {
        return new Promise((res, rej) => {
            if (values.username === 'test' && values.password === 'test') {
                res({status: 'ok', user: {userId: '1', userName: 'test', role: 'admin'}})
            }
        })
    },

    logout() {
        return new Promise((res, rej) => {
                res({status: 'ok'})
        })
    },


};

export default loginApi;