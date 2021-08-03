import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('has header', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toMatch(
      '<h1 class="text-4xl font-bold my-6">Hello Vue 3 + TypeScript + Vite + TailwindCSS</h1>'
    )
  })
})
