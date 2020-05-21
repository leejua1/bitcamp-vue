import axios from 'axios'
import router from '../router'
const state = {
    context : 'http://localhost:3000/',
   player : {},
    fail : false, //로그인 성공하면 false 실패하면 true?
    auth : false //접근권한
}
const actions = {
   async  login({commit},payload){
       const url = state.context + `players/${payload.playerId}/access`
       const headers = {
           authorization: 'JWT fefege..',
           Accept : 'application/json',
           'Content-Type': 'application/json'
       }
       axios.post(url, payload, headers)
           .then(({data})=>{
               if(data.result){
                   commit('LOGIN_COMMIT', data)
               }else{
                   commit('FAIL_COMMIT')
               }

           })
           .catch(()=>{
               alert('서버 전송 실패')
               state.fail = true
           })
},
    async logout({commit}){commit('LOGOUT_COMMIT')},
    async join({commit}){commit('join')}
}
const mutations = {
    LOGIN_COMMIT(state,data){
        state.auth = true
        state.player = data.player
        localStorage.setItem('token', data.token)
        localStorage.setItem('playerId', data.player.playerId)
        if (data.player.teamId === 'K10'){
            alert('일반 사용자')
            router.push('/home')
        }else{
            alert('관리자')
            /*관리자*/
        }
    },
    FAIL_COMMIT(state){
        state.fail = true
    }
    ,LOGOUT_COMMIT(state){
       localStorage.clear()
       state.auth = false
       state.player = {}
       router.push('/')
    },
    join(){
        alert('회원가입 성공')
    }
}
const getters = {}
export default {
    name : 'player',
    namespaced : true, //인스턴스로 만들 것이다
    state,
    actions,
    mutations,
    getters
}