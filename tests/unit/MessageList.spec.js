import { mount } from '@vue/test-utils'
import MessageList from '@/components/MessageList'

describe('MessageList.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(MessageList, {
      propsData: {
        messages: ['Cat']
      }
    })
  })

  it('has received [\'Cat\'] as the message property', () => {
    expect(wrapper.vm.messages).toEqual(['Cat'])
  })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
