import Hello from '@/components/Hello'
import { mount } from 'avoriaz'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    let wrapper = mount(Hello)
    expect(wrapper.find('.hello h1')[0].text())
      .to.equal('Welcome to Your Vue.js App')
  })

  it('should render in green', () => {
    let wrapper = mount(Hello)
    expect(wrapper.find('.hello a')[0].hasStyle('color', 'green'))
      .to.equal(true)
  })

  it('should make the prop work', () => {
    let wrapper = mount(Hello, {
      propsData: {
        title: 'Oi pessoal do meetup.'
      }
    })
    expect(wrapper.find('.hello h6')[0].text())
      .to.equal('Oi pessoal do meetup.')
  })

  it('should say Hello', () => {
    let wrapper = mount(Hello)
    expect(wrapper.vm.sayHello())
      .to.equal('Hello!')
  })

  it('should click', () => {
    let wrapper = mount(Hello)
    wrapper.find('button')[0].simulate('click')
    expect(wrapper.vm.sayHello())
      .to.equal('Hello!')
  })
})
