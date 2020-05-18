<template>
    <div id="app">
        <Layout>
            <template #header = "self">
                <router-link to="/home"><h1 id ="title">{{self.title}}</h1></router-link>
                <router-link to="/join"><span id = "join">{{self.join}}</span></router-link>
                <router-link to = "/login"><span id = "login">{{self.login}}</span></router-link>
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
            <template #footer="self">
                <h3 id = "footer"> {{self.footer}}</h3>
            </template>
        </Layout>
    </div>
</template>

<script>
    import Layout from "./common/Layout.vue"
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
    #title{width: 300px;margin: 0 auto}
    #login{margin-right: 50px; float: right}
    #join{margin-right: 50px; float: right}
    #footer{width: 300px; margin: 0 auto}
</style>