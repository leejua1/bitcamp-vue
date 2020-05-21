<template>
    <div id="app">
        <div v-if="auth">

        <Layout>
            <template #header = "self">
                <router-link to="/home"><h1 class ="title">{{self.title}}</h1></router-link>
                <router-link to="/mypage"><span class = "join">{{self.mypage}}</span></router-link>
                <span @click ="logout" class = "login">{{self.logout}}</span>
            </template>
            <template #sidebar>

                <ul class = "menu">
                    <li v-for="i of sidebars" :key="i.menu">
                        <router-link :to="i.link">{{i.menu}}</router-link>
                    </li>
                </ul>
            </template>
            <template #content>
                <router-view/>

            </template>


            <template #content>
                <router-view/>

            </template>
            <template #footer="self">
                <h3 class = "footer"> {{self.footer}}</h3>
            </template>
        </Layout>
        </div>
        <div v-else>

        <Layout>

            <template #header = "self">
                <router-link to="/home"><h1 class ="title">{{self.title}}</h1></router-link>
                <router-link to="/join"><span class = "join">{{self.join}}</span></router-link>
                <router-link to = "/login"><span class = "login">{{self.login}}</span></router-link>

            </template>
            <template #sidebar>

           <h1>광고판</h1>
           </template>
            <template #content>
                <router-view/>

            </template>
            <template #footer="self">
                <h3 class = "footer"> {{self.footer}}</h3>
            </template>
        </Layout>
        </div>
    </div>
</template>

<script>
    import Layout from "./common/Layout.vue"
    import {mapState} from "vuex";
    export default {
        components : {Layout},
        data (){
            return {
                sidebars: [
                        {menu: '등록',link :'/register' },
                        {menu: '목록', link : '/list'},
                        {menu: '검색', link : '/search'},
                        {menu: '수정', link : '/update'},
                        {menu: '삭제', link : '/delete'},
                    {menu : '회원수', link : '/counter'}
                ]
            }
        },
        computed : {
            ...mapState(
                {
                    auth : state => state.player.auth
                }
            )
        },
        methods : {
            logout(){
                alert('로그아웃')
                this.$store.dispatch('player/logout')
            }
        }



    }
</script>
<style scoped>
    ul.menu{
        position: relative;
        padding: 5px;
        list-style: none;
        font-style: italic;
    }
    .title{width: 300px;margin: 0 auto}
    .login{margin-right: 50px; float: right}
    .join{margin-right: 50px; float: right}
    .footer{width: 300px; margin: 0 auto}
</style>