const state = {
    count : 0,
    history:[],
    limit : 5
}
const actions = {
    increment({commit}){commit('increment')},
    decrement({commit}){commit('decrement')},
    incrementIfOdd({commit},state){
        if((state.count +1)%2 ===0)
            commit('increment')
    },
    incrementAsync({commit}){
        setTimeout(() => {
            commit('increment')
        },  1000)
    }
}
const mutations = {
    increment(state){
        state.count++
        state.history.push('increment')
    },
    decrement(state){
        state.count--
        state.history.push('decrement')
    }
}
const getters = {
    count(state){return state.count},

    recentHistory(state){
        const end = state.history.length//세션 기록의 길이를 나타내는 정수 반환
        const begin = end - state.limit < 0? 0 :end - state.limit//end-limit가 1이 됐을 때 1번째 값
        return state.history.slice(begin,end).join(' , ')// slice : 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
    }


}
export default {
    name : 'counter',
    namespace : true,
    state,
    actions,
    mutations,
    getters
}
