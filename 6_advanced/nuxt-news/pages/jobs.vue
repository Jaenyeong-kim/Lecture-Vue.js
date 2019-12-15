<template>
  <div>
      {{jobs}}
  </div>
</template>

<script>
import { axios } from 'axios';

export default {
    async asyncData() {
        const url = "https://api.hnpwa.com/v0/jobs/1.json";
        const { data } = await axios.get(url);
        return  {jobs : data }
    }
}
</script>

<style>

</style>