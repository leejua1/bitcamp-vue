export const count = state => state.count
const limit = 5
export const recentHistory = state =>{
    const end = state.history.length//세션 기록의 길이를 나타내는 정수 반환
    const begin = end - limit < 0? 0 :end - limit//end-limit가 1이 됐을 때 1번째 값
    return state.history.slice(begin,end).join(' , ')// slice : 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다.
}