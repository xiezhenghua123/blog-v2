import templateVue from './index.vue'
import Vue from 'vue'

export default function openDialog(options) {
  const DialogConstructor = Vue.extend(templateVue)
  const instance = new DialogConstructor({
    propsData: options
  })
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}
