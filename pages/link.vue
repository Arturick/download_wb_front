<template>
  <div>
    <header class="header">
      Img Download
    </header>
    <div class="main">
      <div class="main_title">Paste your link on image</div>
      <div class="input_main">
        <input type="text" name="" id="" v-model="link" placeholder="Link">
      </div>
      <div class="main_i">
        <input class="btn_main" type="button" @click="downloadImg"  value="Download">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      link: '',
      userId: '',
      userRole: ''
    }
  },
  methods: {
    downloadImg(){
      this.$store.dispatch('request/download_img', {link: this.link, userId: this.userId}).then((x) => {
        let link = document.createElement('a');
        link.setAttribute('href', '/sample.zip');
        link.click();
        console.log(1);
        this.$store.dispatch('request/add_log', {userId: this.userId}).then((x) => {
        });
      });
    }
  },
  mounted() {
    this.userId = window.localStorage.getItem('id')
  }
}

</script>
