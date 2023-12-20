import React from 'react'
import Blockchain from '../assets/icons/blockchain.svg'
import Housing from '../assets/icons/housing.svg'
import Ecommerce from '../assets/icons/ecommerce.svg'
import Iot from '../assets/icons/iot.svg'
import Community from '../assets/icons/community.svg'
import Music from '../assets/icons/music.svg'

export type TimelineItemIconProps =
  | 'blockchain'
  | 'housing'
  | 'ecommerce'
  | 'iot'
  | 'community'
  | 'Music'

const icons = new Map()

icons.set('blockchain', <Blockchain />)
icons.set('housing', <Housing />)
icons.set('ecommerce', <Ecommerce />)
icons.set('iot', <Iot />)
icons.set('community', <Community />)
icons.set('music', <Music />)

export const TimelineItemIcon = (props: { name: TimelineItemIconProps }) => {
  return (
    <img
      className="w-[45px] h-[45px]"
      src={icons.get(props.name.toLowerCase()).type}
      alt={props.name}
    />
  )
}
