// import App from '@components/App/App.jsx'
import App from './App.jsx'
import React from 'react'
import {shallow} from 'enzyme'

describe('App', () => {
  test('should match snapshot', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper.find('span').text()).toBe('App Title')
    expect(wrapper).toMatchSnapshot()
  })
})