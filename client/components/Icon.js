import React from 'react'

import './Icon.css'

const Icon = props => {
  const { icon, className } = props
  const Icon = icon
  return <Icon className={className} />
}
export default Icon
