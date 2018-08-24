import React from 'react'
import { Router } from '../index.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('RouterLink', () => {
  it('should match the routes', () => {
    const routes = [
      { path: '/', view: 'Home' },
      { path: '/about', view: 'About' },
      { path: '/login', view: 'Login' },
      { path: '/chat', view: 'Chat' },
      { path: '*', view: 'NotFound' }
    ]

    const component = renderer.create(
      <Router routes={ routes }/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    function ss (path) {
      window.history.pushState({}, '', path)
      window.dispatchEvent(new Event('pushstate'))
      tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }
    ss('/about')
    ss('/login')
    ss('/chat')
    ss('/awefoijo23j')
  })
})
