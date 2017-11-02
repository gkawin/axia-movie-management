import React from 'react'
import { configure, addDecorator, setAddon } from '@storybook/react'

addDecorator(story => (
    <div style={{ padding: '20px' }}>
      {story()}
    </div>
  )
)

function loadStories () {
  const context = require.context('../src', true, /\.story\.js$/)
  context.keys().forEach((filename) => context(filename))
}

configure(loadStories, module)
