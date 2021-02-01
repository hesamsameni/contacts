var app = new Vue({
  el: '#app',
  data: {
    errorMsg: '',
    loading: true,
    contacts: [{ name: '', email: '', phoneNumber: '' }],
  },
  mounted() {
    this.getContacts()
  },
  methods: {
    getContacts() {
      axios.get('http://localhost:3434/contacts').then(function (res) {
        if (res.data.error) {
          app.errorMsg = res.data.message
        } else {
          app.contacts = res.data
          app.loading = false
        }
      })
    },
  },
})
