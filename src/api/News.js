// 파일경로: src/api/News.js

// 작성한 axios 인터셉터를 가져옵니다.
import Send from '@/utils/Send.js'

export default {
    getNews() {
        /*
            프로미스를 반환합니다.
            promise는 체이닝이 가능해서 계속 이어줄 수 있습니다.
            resolve -> then
            reject -> catch
        */
        return new Promise((resolve, reject) => {
            // axios 요청을 생성합니다.
            /*
            axios 요청을 생성합니다.
            https://github.com/axios/axios axios API 챕터
            인터셉터를 안썼으면 다음과 같습니다.
            axios({
                baseURL: 'https://api.hnpwa.com/v0',
                url: '/news/1.json',
                method: 'get'  
            })
            */               
            Send({
                // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
                url: '/news/1.json',
                method: 'get'
            })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    getNewest() {
        return new Promise((resolve, reject) => {  
            Send({
                url: '/newest/1.json',
                method: 'get'
            })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    getAsk() {
        return new Promise((resolve, reject) => {  
            Send({
                url: '/ask/1.json',
                method: 'get'
            })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    getShow() {
        return new Promise((resolve, reject) => {  
            Send({
                url: '/show/1.json',
                method: 'get'
            })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
        })
    },
    getJobs() {
        return new Promise((resolve, reject) => {  
            Send({
                url: '/jobs/1.json',
                method: 'get'
            })
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
        })
    }        
}