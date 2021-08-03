import React, { useEffect, Fragment } from 'react'
import { SiClockify } from 'react-icons/si'
import { FaHeadset } from 'react-icons/fa'
import { message, Menu, Dropdown, Modal, Tabs, Button } from 'antd'
import { BiChevronDown } from 'react-icons/bi'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import BuyMinutes from './BuyMinutes'
import TextWithFlag from './TextWithFlag'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/authAction'
const { TabPane } = Tabs

const minutesMenu = (
  <Menu>
    <Menu.Item>
      <a href='/' className='color-grey'>
        0 Minute(s)
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <BuyMinutes
        className={['color-pink', 'btn-transparent']}
        text='Buy Minutes'
      />
    </Menu.Item>
  </Menu>
)

const languageMenu = (
  <Menu>
    <Menu.Item>
      <a href='/'>
        <TextWithFlag text={'English'} alt={'US'} src={'/img/flag-us.svg'} />
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href='/'>
        <TextWithFlag text={'Français'} alt={'FR'} src={'/img/flag-fr.svg'} />
      </a>
    </Menu.Item>
  </Menu>
)

const ContentNav = () => {
  const [showModal, setShowModal] = React.useState(false)
  const [tabKey, setTabKey] = React.useState('1')
  // const [language, setLanguage] = React.useState('English')
  const language = 'English'

  const dispatch = useDispatch()

  const { isAuthenticated, loggedIn, loggedOut, user } = useSelector(
    (state) => state.auth
  )

  const logInSuccess = () => message.success('Login Successful')

  const authModal = (defaultKey) => {
    setShowModal(true)
    setTabKey(defaultKey)
  }

  React.useEffect(() => {
    if (loggedOut) message.info('Logout Successful')
  }, [loggedOut])

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button
          onClick={() => dispatch(logout())}
          className={['btn-transparent', 'btn-hover']}
        >
          Logout
        </Button>
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  )

  useEffect(() => {
    if (loggedIn) logInSuccess()
  }, [isAuthenticated])

  return (
    <Fragment>
      <div className='sc-kfYoZR lpaEYv module-header'>
        <div className='sc-fKgJPI cxbltl'>
          <a className='sc-ksluID kFmqyc menu-header' href='#0'>
            <FaHeadset />
            <span className='sc-ezzafa dvHFX'>
              <i
                className='icon-support'
                style={{
                  color: 'rgb(170, 170, 170)',
                  fontSize: '28px',
                  marginRight: '5px',
                }}
              ></i>
              <span>Support</span>
            </span>
          </a>
          <Dropdown overlay={languageMenu} placement='bottomCenter' arrow>
            <a className='sc-ksluID option-language menu-header'>
              {language === 'English' ? (
                <TextWithFlag
                  text={'English'}
                  alt={'US'}
                  src={'/img/flag-us.svg'}
                />
              ) : (
                <TextWithFlag
                  text={'Français'}
                  alt={'FR'}
                  src={'/img/flag-fr.svg'}
                />
              )}
              <span className='sc-ezzafa dvHFX'>
                <i
                  className='icon-support'
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
        {isAuthenticated ? (
          <div className='sc-bCwfaz hzzSzX'>
            <Dropdown overlay={minutesMenu} placement='bottomCenter' arrow>
              <a className='sc-ksluID option-language menu-header'>
                <SiClockify className='color-pink' />
              </a>
            </Dropdown>
            <Dropdown overlay={userMenu} placement='bottomCenter' arrow>
              <a className='sc-ksluID kFmqyc menu-header'>
                {user.username && user.username.toString().toUpperCase()}
              </a>
            </Dropdown>
          </div>
        ) : (
          <div className='sc-bCwfaz hzzSzX'>
            <a
              className='sc-ksluID kFmqyc menu-header'
              id='login'
              onClick={() => authModal('1')}
            >
              Login
            </a>
            <a
              className='sc-ksluID kFmqyc menu-header color-pink'
              id='register'
              onClick={() => authModal('2')}
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
              <Tabs type='card' defaultActiveKey={tabKey}>
                <TabPane tab='Login' key='1'>
                  <Login setShowModal={setShowModal} />
                </TabPane>
                <TabPane tab='Register' key='2'>
                  <Register setShowModal={setShowModal} />
                </TabPane>
              </Tabs>
            </Modal>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default ContentNav
