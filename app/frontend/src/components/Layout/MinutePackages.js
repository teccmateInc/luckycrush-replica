import React from 'react'
import { Radio, Space } from 'antd'

const MinutePackages = () => {
  return (
    <Radio.Group size='large' onChange={''} defaultValue='a'>
      <Space direction='vertical'>
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
      </Space>
    </Radio.Group>
  )
}

export default MinutePackages
