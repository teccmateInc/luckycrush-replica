import React from 'react'

const TextWithFlag = ({ text, alt, src }) => {
  const size = '30'

  return (
    <React.Fragment>
      <img alt={alt} src={src} width={size} height={size} />
      {'  '}
      {text}
    </React.Fragment>
  )
}

export default TextWithFlag
