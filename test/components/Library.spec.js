/*import React from 'react'
import { createRenderer } from 'react-addons-test-utils'
import Library from '../../src/components/Libraries/Library.js'
import { expect } from 'chai'

const NAME = 'Joe'

function setup() {
  const props = {
    library: {
      name: NAME,
      id: 489,
    }
  }

  const renderer = createRenderer();
  renderer.render(<Library {...props} />)
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
  }
}

describe('library component', () => {
  it('should render correctly',() => {
    const { output, props } = setup()
    const outputProps = output.props;

    expect(output.type).to.equal('div')
    expect(outputProps.children).to.equal(NAME)
  })
})*/
