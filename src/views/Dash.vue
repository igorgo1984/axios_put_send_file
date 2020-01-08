<template>
  <Layout>
    <h1>Welcome</h1>
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" />
      </label>
      <v-text-field  v-model="token"/>
      <v-btn @click="() => submitFile()">Submit</v-btn>
    </div>
  </Layout>
</template>

<script>
  import axios from 'axios'
  import Layout from '../layouts/base/Layout'

  export default {
    components: {
      Layout
    },
    data () {
      return {
        token  : ''
      }
    },
    methods : {
      async submitFile () {
        try {
          let formData = new FormData();
          formData.append('file',  this.$refs.file.files[0]);

          const resp = await axios.put( 'http://localhost:8080/single-file',
                  formData,
                  {
                    headers: {
                      'Authorization' : `Bearer ${this.token}`,
                      'Content-Type': 'multipart/form-data'
                    }
                  }
          )

          // TODO: clear
          console.log('resp is ', resp);
        } catch (e) {
          // TODO: Back
          console.error(e);
          alert(e.message || e);
        }


      }
    }
  }
</script>
