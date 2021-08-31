<template>
  <div id="article">

<el-form ref="form" :model="form" label-width="4%">
<el-form-item label="标题">
    <el-input v-model="form.name"></el-input>
</el-form-item>
<el-form-item label="内容">
     <editor id="2" ref="ueditor" v-model="value1" :options="options" @change="onContentChange" />
</el-form-item>

 <el-form-item>
    <el-button type="primary" @click="onSubmit">创建文章</el-button>
    <el-button>取消</el-button>
  </el-form-item>

</el-form>
    <!-- <label for="3">1</label>
    <input id="3" v-model="value3" type="radio" name="3" value="3">
    <label for="4">2</label>
    <input id="4" v-model="value3" type="radio" name="4" value="4"> -->
    <!-- <editor v-if="value3 == '3'" id="1" ref="ueditor" v-model="value" :options="options" @change="onContentChange" /> -->
   
  


  </div>
</template>

<script>
import Editor from '@/components/Editor.vue'
export default {
  name: 'Article',
  components: {
    Editor
  },
  data() {
    return {
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      // value3: '3',
      // value: '',
      // value1: '',
      // options: {
      //    serverUrl: '/editor/'
      // }
    }
  },
  created() {
    // setTimeout(() => {
    //   this.value = '1'
    // }, 100)
  },
  methods: {
    onContentChange(content) {
      console.log('编辑器内容：' + content)
    }
  }
}
</script>

<style>
#article {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 98%;
  margin: 0 auto;

  /* padding-bottom: 25px; */
}
</style>
