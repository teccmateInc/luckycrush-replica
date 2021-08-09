import React from 'react'
import { LanguageContext } from './'
import { content } from '../../../data/'

const LanguageProvider = ({ children }) => {
  const pickLanguage = content

  const existingLanguage = localStorage.getItem('lucky-crush-lang')
  const currentLanguage = existingLanguage ? existingLanguage : 'en'
  const [lang, setLang] = React.useState({
    code: currentLanguage,
    language: pickLanguage[currentLanguage],
  })

  const setLanguage = React.useCallback(
    (lang_) => {
      localStorage.setItem('lucky-crush-lang', lang_)
      setLang({
        code: lang_,
        language: pickLanguage[lang_],
      })
    },
    [pickLanguage]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
