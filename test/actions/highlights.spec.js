/*import { addHighlightToLibrary, removeHighlightFromLibrary, fetchSearchHighlights } from '../../src/actions/highlights.js'
import { ADD_HIGHLIGHT, REMOVE_HIGHLIGHT, REQUEST_SEARCH, RECEIVE_SEARCH } from '../../src/constants'
import { expect } from 'chai'

describe('highlight actions', () => {
  it('should create all actions correctly', () => {
    const highlight = {
      id: 1,
      text: 'Highlight text',
      title: 'Highlight title',
    }
    const libraryId = 5
    expect(addHighlightToLibrary(highlight, libraryId)).to.deep.equal({
      type: ADD_HIGHLIGHT,
      payload: {
        highlight: highlight,
        library_id: libraryId,
      }
    })
    const highlightId = 3
    expect(removeHighlightFromLibrary(highlightId, libraryId)).to.deep.equal({
      type: REMOVE_HIGHLIGHT,
      payload: {
        highlight_id: highlightId,
        library_id: libraryId,
      }
    })
    expect(fetchSearchHighlights('search query')).to.be.a('function')
  })
})*/
