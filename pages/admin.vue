<template>
  <div>
    <div class="up_info" >
      <div class="up_info_i" v-for="i in logs">
        <div class="up_i">{{i.login}}</div>
        <div class="up_i">{{i.date}}</div>
        <div class="up_i">{{i.action}}</div>
      </div>
    </div>
    <div class="down_info">
      <div class="down_info_i">
        <div class="down_i">
          <input type="text" name="" id="" placeholder="Логин" v-model="newUser.login">
        </div>
        <div class="down_i">
          <input type="text" name="" id="" placeholder="Пароль" v-model="newUser.password">
        </div>
        <button @click="addNewUser">Добавить</button>
      </div>
      <div class="down_info_i" v-for="i in users">
        <div class="down_i">
          {{ i.login }}
        </div>
        <div class="down_i">
        {{i.password }}
        </div>
        <button @click="deleteUser(i.id)">Удалить</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      users: [],
      logs: [],
      newUser: {
          login: '',
          password: ''
      },
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
      });
    },
    addNewUser(){
      this.$store.dispatch('request/add_user', this.newUser).then((x) => {
        this.newUser.login = '';
        this.newUser.password = '';
        console.log(x);
        if(!x.data.error){
          this.getUsers();
          this.$toast.success('пользователь успешно зарегестрировался')
        } else {
          this.$toast.info(x.data.error)
        }
      });
    },
    getUsers(){
      this.$store.dispatch('request/get_user').then((x) => {
        console.log(x);
        this.users = x.data.answer;
      });
    },
    getLogs(){
      this.$store.dispatch('request/get_log').then((x) => {
        console.log(x);
        this.logs = x.data.answer;
      });
    },
    deleteUser(id){
      this.$store.dispatch('request/delete_user', {id: id}).then((x) => {
        this.$toast.success('спешно удален')
        this.getUsers();
      });
    }

  },
  mounted() {
    this.userId = window.localStorage.getItem('id');
    this.getUsers();
    this.getLogs()
  }
}

</script>
