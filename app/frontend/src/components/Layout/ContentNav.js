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
import { logout, clearErrors } from '../../actions/authAction'
import { LanguageContext } from '../../helper/providers/language'

const { TabPane } = Tabs

const ContentNav = () => {
  const { lang, setLanguage } = React.useContext(LanguageContext)
  const { code, language: content } = lang

  const [showModal, setShowModal] = React.useState(false)
  const [tabKey, setTabKey] = React.useState('1')

  const dispatch = useDispatch()

  const { isAuthenticated, loggedIn, loggedOut, user, error } = useSelector(
    (state) => state.auth
  )

  const minutesMenu = (
    <Menu>
      <Menu.Item>
        <span className='center-align'>
          <a href='/' className='color-grey'>
            0 {content.minute}
          </a>
        </span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <BuyMinutes
          className={['color-pink', 'btn-transparent']}
          text={content.buyMinutes}
        />
      </Menu.Item>
    </Menu>
  )

  const languageMenu = (
    <Menu>
      <Menu.Item>
        <a onClick={() => setLanguage('en')}>
          <TextWithFlag text={'English'} alt={'US'} src={'/img/flag-us.svg'} />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={() => setLanguage('fr')}>
          <TextWithFlag text={'Français'} alt={'FR'} src={'/img/flag-fr.svg'} />
        </a>
      </Menu.Item>
    </Menu>
  )

  const logInSuccess = () => message.success('Login Successful')

  const authModal = (defaultKey) => {
    setShowModal(true)
    setTabKey(defaultKey)
  }

  React.useEffect(() => {
    if (loggedOut) message.info('Logout Successful')
    if (error) {
      message.error('Login Failed, ' + error)
      dispatch(clearErrors())
    }
  }, [loggedOut])

  const userMenu = (
    <Menu>
      <Menu.Item>
        <Button
          onClick={() => dispatch(logout())}
          className={['btn-transparent', 'btn-hover']}
        >
          {content.logout}
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
              {code === 'en' ? (
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
              {content.login}
            </a>
            <a
              className='sc-ksluID kFmqyc menu-header color-pink'
              id='register'
              onClick={() => authModal('2')}
            >
              {content.register}
            </a>
            <Modal
              className='auth-modal'
              visible={showModal}
              footer={null}
              onCancel={() => setShowModal(false)}
              width={360}
            >
              <Tabs
                type='card'
                activeKey={tabKey}
                onTabClick={() => setTabKey(tabKey === '1' ? '2' : '1')}
              >
                <TabPane tab={content.login} key='1'>
                  <Login setShowModal={setShowModal} setTabKey={setTabKey} />
                </TabPane>
                <TabPane tab={content.register} key='2'>
                  <Register setShowModal={setShowModal} setTabKey={setTabKey} />
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
