import * as chai from 'chai'
import * as dirtyChai from 'dirty-chai'

import {EventMapField} from './mate'
import {eventMap, flatEventMapField} from './utils'

const {expect} = chai
chai.use(dirtyChai)

describe('Function createEventMap should', () => {
  it('exist', () => expect(eventMap).to.be.a('function'))

  it('create a valid event map', () => {
    const age: EventMapField = flatEventMapField('age', true, () => 99)
    const color: EventMapField = flatEventMapField('color', true, () => 'orange')
    const ageAndColorMap = eventMap(age, color)
    expect(ageAndColorMap).to.deep.equal([age, color])
  })
})
