import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  context.keys().forEach((filename) => context(filename))
}

configure(loadStories, module)
