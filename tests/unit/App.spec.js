import { shallowMount } from '@vue/test-utils'
import App from '@/App'

describe('App.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(App, {
      data: () => ({
        messages: ['Cat']
      })
    })
  })

  it('equals messages to ["Cat"]', () => {
    expect(wrapper.vm.messages).toEqual(["Cat"])
  })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
