import React, { Component } from 'react'
import { IconType } from './interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

// maps between hospital run icon names and font awesome
const iconMap = {
  add: 'plus',
  admin: 'user-shield',
  appointment: 'calendar',
  'appointment-add': 'calendar-plus',
  'appointment-remove': 'calendar-minus',
  calendar: 'calendar-alt',
  image: 'camera',
  incident: 'file-alt',
  lab: 'microscope',
  'left-arrow': 'chevron-left',
  medication: 'pills',
  patient: 'user',
  'patient-add': 'user-plus',
  'patient-remove': 'user-minus',
  patients: 'users',
  remove: 'minus',
  'right-arrow': 'chevron-right',
  save: 'save',
  setting: 'cog',
}

function getFontAwesomeIcon(icon: IconType): string {
  return iconMap[icon]
}

interface Props {
  /** The type of icon to display */
  icon: IconType
}

/**
 * Icons provide contextual clues to users to make it easier to recognize functionality
 */
class Icon extends Component<Props, {}> {
  render() {
    return <FontAwesomeIcon icon={getFontAwesomeIcon(this.props.icon) as IconProp} />
  }
}

export { Icon }
