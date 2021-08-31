import Editor from './Editor.vue'

export default {
  version: '1.0.2',
  install: Vue => {
    Vue.component(Editor.name, Editor)
  },
  Editor
}
