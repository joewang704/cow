import reducer from '../../src/reducers/entities.js'
import { ADD_TODO, REMOVE_TODO } from '../../src/constants'
import { expect } from 'chai'

describe('entities reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({})
  })

  it('should handle ADD_TODO', () => {
    expect(reducer({}, {
      type: ADD_TODO,
      payload: {
        id: 1,
        text: 'ur mom',
      },
    })).to.deep.equal({
      1: {
        text: 'ur mom',
        start_time: undefined,
        end_time: undefined,
        date: undefined,
      }
    })
  })
})
