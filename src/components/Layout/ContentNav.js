import React, { Fragment } from 'react'
import { FaHeadset } from 'react-icons/fa'
import { IoLanguageSharp } from 'react-icons/io5'
import { Menu, Dropdown, Button } from 'antd'

const menu = (
  <Menu>
    <Menu.Item>
      <a href='https://www.antgroup.com'>English</a>
    </Menu.Item>
    <Menu.Item>
      <a href='https://www.antgroup.com'>Français</a>
    </Menu.Item>
  </Menu>
)

const ContentNav = () => {
  return (
    <Fragment>
      <div class='sc-kfYoZR lpaEYv module-header'>
        <div class='sc-fKgJPI cxbltl'>
          <a class='sc-ksluID kFmqyc menu-header' href='#0'>
            <FaHeadset />
            <span class='sc-ezzafa dvHFX'>
              <i
                class='icon-support'
                style={{
                  color: 'rgb(170, 170, 170)',
                  fontSize: '28px',
                  marginRight: '5px',
                }}
              ></i>
              <span>Support</span>
            </span>
          </a>
          <a className='sc-ksluID kFmqyc menu-header'>
            <IoLanguageSharp />
            <span class='sc-ezzafa dvHFX'>
              <i
                class='icon-support'
                style={{
                  color: 'rgb(170, 170, 170)',
                  fontSize: '28px',
                }}
              ></i>
              <span>
                <Dropdown overlay={menu} placement='bottomCenter' arrow>
                  <Button className='btnLanguage'>Language</Button>
                </Dropdown>
              </span>
            </span>
          </a>
        </div>
        <div class='sc-bCwfaz hzzSzX'>
          <a class='sc-ksluID kFmqyc menu-header' href='#0' id='login'>
            Login
          </a>
          <a
            class='sc-ksluID kFmqyc menu-header color-pink'
            href='#0'
            id='register'
          >
            Register
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentNav
