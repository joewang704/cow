import reducer from '../../src/reducers/sidebar'
import { CLOSE_SIDEBAR, TOGGLE_SIDEBAR } from '../../src/constants'
import { expect } from 'chai'

describe('sidebar reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.be.false
  })

  it('should handle CLOSE_SIDEBAR', () => {
    expect(reducer(true, {
      type: CLOSE_SIDEBAR,
    })).to.be.false
  })

  it('should handle TOGGLE_SIDEBAR', () => {
    expect(reducer(true, {
      type: TOGGLE_SIDEBAR,
    })).to.be.false
    expect(reducer(false, {
      type: TOGGLE_SIDEBAR,
    })).to.be.true
  })
})
