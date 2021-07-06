import React, { Fragment } from 'react'
import { FaHeadset } from 'react-icons/fa'
import { IoLanguageSharp } from 'react-icons/io5'
import { Menu, Dropdown, Modal, Tabs } from 'antd'
import { BiChevronDown } from 'react-icons/bi'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
const { TabPane } = Tabs

const flagWidthHeight = '30'

const menu = (
  <Menu>
    <Menu.Item>
      <a href='https://www.antgroup.com'>
        <img
          alt='US'
          src='/img/flag-us.svg'
          width={flagWidthHeight}
          height={flagWidthHeight}
        />{' '}
        English
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href='https://www.antgroup.com'>
        <img
          alt='FR'
          src='/img/flag-fr.svg'
          width={flagWidthHeight}
          height={flagWidthHeight}
        />{' '}
        Français
      </a>
    </Menu.Item>
  </Menu>
)

const ContentNav = () => {
  const [showModal, setShowModal] = React.useState(false)

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
          <Dropdown overlay={menu} placement='bottomCenter' arrow>
            <a className='sc-ksluID option-language menu-header'>
              <IoLanguageSharp />
              <span class='sc-ezzafa dvHFX'>
                <i
                  class='icon-support'
                  style={{
                    color: 'rgb(170, 170, 170)',
                    fontSize: '28px',
                  }}
                ></i>
              </span>
              <BiChevronDown />
            </a>
          </Dropdown>
        </div>
        <div class='sc-bCwfaz hzzSzX'>
          <a
            class='sc-ksluID kFmqyc menu-header'
            id='login'
            onClick={() => setShowModal(true)}
          >
            Login
          </a>
          <a
            class='sc-ksluID kFmqyc menu-header color-pink'
            id='register'
            onClick={() => setShowModal(true)}
          >
            Register
          </a>

          <Modal
            className='auth-modal'
            visible={showModal}
            footer={null}
            onCancel={() => setShowModal(false)}
            width={360}
          >
            <Tabs type='card'>
              <TabPane tab='Login' key='1'>
                <Login />
              </TabPane>
              <TabPane tab='Register' key='2'>
                <Register />
              </TabPane>
            </Tabs>
          </Modal>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentNav
