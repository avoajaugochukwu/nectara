import React from 'react'
import { TwoHalvesBox } from '../../stories/layout/TwoHalvesBox'

const args = {
  header1: 'Psychedelics 101 workshop',
  header2: 'Join a community experience',
  subText1: 'Next one will be in May 2022',
  subText2: 'Psychedelic wellness events',
  description1: 'Are you new to psychedelics or preparation and integration? Join us for a free monthly workshop with experienced psychedelic guides. We\'ll cover the basics and answer any questions you may have.',
  description2: 'Connect with others, deepen your knowledge, and experience wellness modalities in our online integration circles, webinars, yoga classes, breath work sessions, and group meditations. Our experiences are safe, intimate, and hosted with care by experienced Nectara guides.',
  buttonText1: 'Be notified',
  buttonText2: 'Discover experiences',
  buttonClick1: () => console.log('I was clicked'),
  buttonClick2: () => console.log('I was clicked'),
  buttonPrimary1: false,
  buttonPrimary2: true,
  backgroundColor1: '#fbf9f7',
  backgroundColor2: '#e3e1de'
}

const Events = () => {
  return (
    <TwoHalvesBox {...args} />
  )
}

export default Events