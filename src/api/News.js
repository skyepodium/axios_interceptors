// 파일경로: src/api/News.js

// 작성한 axios 인터셉터를 가져옵니다.
import Send from '../utils/Send.js'

export default {
    getNews() {
        // axios 요청을 생성합니다.
        /*
        axios 요청을 생성합니다.
        https://github.com/axios/axios axios API 챕터
        인터셉터를 안썼으면 다음과 같습니다.
        axios({
            baseURL: 'https://api.hnpwa.com',
            url: '/news/1.json',
            method: 'get'  
        })
        */          
        return Send({
                // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
                url: '/news/1.json',
                method: 'get'
            })
    },
    getNewest() {
        return Send({
                url: '/newest/1.json',
                method: 'get'
            })
    },
    getAsk() {
        return Send({
                url: '/ask/1.json',
                method: 'get'
            })
    },
    getShow() {
        return Send({
                url: '/show/1.json',
                method: 'get'
            })
    },
    getJobs() {
            Send({
                url: '/jobs/1.json',
                method: 'get'
            })
    }        
}