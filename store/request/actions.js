export default {
  download_img({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('download-img', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
  auth({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('auth', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
  add_user({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('add-user', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
  get_user({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('get-user', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
  delete_user({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('delete-user', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
  get_log({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('get-log', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
  add_log({ commit }, state) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('add-log', state)
        .then((x) => {
          resolve(x)
        })
    })
  },
}

