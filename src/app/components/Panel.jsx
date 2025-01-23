import React from 'react'
import Transition1 from '../Transitions/Transition1'
import Transition2 from '../Transitions/Transition2'
import Transition3 from '../Transitions/Transition3'
import TransitionGameExplain from '../Transitions/TransitionGameExplain'
import TransitionGame from '../Transitions/TransitionGame'
import TransitionTest from '../Transitions/TransitionTest'

const TRANSITION_LIST = [
  <Transition1 />,
  <Transition2 />,
  <Transition3 />,
  <TransitionGameExplain />,
  <TransitionGame />,
]


const Panel = ({order = 0}) => {
  return TRANSITION_LIST[order]
  // return <TransitionTest />
}

export default Panel