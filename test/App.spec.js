import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 6,
  }
})

describe('App', () => {
  it('accesses store', () => {
    console.log('+++ App:', App)
    const wrapper = shallowMount(App, { store, localVue })
    let out = wrapper.findAll('.test-1')
    console.log('+++ out:', out)
  })
})
