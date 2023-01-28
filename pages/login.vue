<template>
  <div>
    <div class="form">
      <input class="inpt" type="text" placeholder="LOGIN" v-model="login">
      <input class="inpt" type="password" placeholder="PASSWORD" v-model="pass">
      <button class="btn" @click="auth">ВОЙТИ</button>
    </div>
  </div>
</template>

<script>
export default {

  name: 'LoginPage',
  data(){
    return {
     login: '',
      pass: ''
    }
  },
  methods: {
      auth(){
        this.$store.dispatch('request/auth', {login: this.login, password: this.pass}).then((x) => {
          if(x.data.error){
            this.$toast.error(x.data.error)
            return;
          }
          let id = x.data.user['id'];

          window.localStorage.setItem('id', id);
          window.localStorage.setItem('role', x.data.user['role']);
          this.$auth.setUserToken('Bearer ' + x.data.token);
          if(x.data.user['role'] != 0){
            this.$router.push('/link');
          } else {
            this.$router.push('/admin');
          }


          this.pass = '';
          this.login = '';
      });
      }
  },
  mounted() {

  }
}

</script>
<style>
  .form{
    display: block;
    width: 400px;
    height: 300px;
    margin: 100px auto;
  }

  .inpt{
    width: 100%;
    height: 40px;
    margin-top: 20px;
    font-size: 25px;
    padding: 15px;
  }

  .btn{
    font-size: 25px;
      width: 100%;
      height: 40px;
      cursor: pointer;
      transition: 0.4s;
      margin-top: 50px;
    border-radius: 15px;
  }

  .btn:hover{
    background: #355b5b;
  }
</style>
