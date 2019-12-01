
<template>
<!-- <template functional> -->
    <li>
        <!-- 일반 컴포넌트 -->
        <h4>{{  post.title }}</h4>
        <p>{{ post.contents }}</p>
        <!-- <span>{{ formatDate('2019-11-25') }}</span> -->
        <!-- <button @click="formateDate">날짜 형식 바꾸기</button> -->

        <!-- 메소드를 이용한 날짜 포맷팅 -->
        <!-- <p>{{ formatDate(post.createdAt) }}</p> -->

        <!-- 필터를 이용한 날짜 포맷팅 -->
        <p>{{ post.createdAt | formatDate }}</p>

        <!-- functional 컴포넌트 -->
        <!-- <h4>{{  props.post.title }}</h4>
        <p>{{ props.post.contents }}</p>
        <span>{{ props.post.createdAt }}</span> -->
    </li>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
            // default: () => { 
            //     title: '',
            //     contents: '',
            //     createAt: ''
            // }
        }
    },
    filters: {
        formatDate(date) {
            return new Date(date).toLocaleString;
        }
    },
    methods: {
        formatDate(date) {
            return new Date(date).toLocaleString;
        }
    }

}
</script>

<style>

</style>