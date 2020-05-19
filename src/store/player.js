

const state = {
    userid : '',
    passwd:''
}
const actions = {
    login({commit}){
        commit('login')
    },
    join({commit}){commit('join')}
}
const mutations = {
    login (){
        alert('로그인 성공')
    },
    join(){
        alert('회원가입 성공')
    }
}
const getters = {}
export default {
    name : 'player',
    namespace : true, //인스턴스로 만들 것이다
    state,
    actions,
    mutations,
    getters
}