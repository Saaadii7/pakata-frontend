import React, { useEffect, useState } from 'react'
import { useTranslation } from '../../modules/I18n'
import Form from '../Form'

const languages = [
  { value: 'en', text: 'English' },
  { value: 'fr', text: 'Urdu' }
]

const LanguageOption = ({ name, locale, handleClick }) => {
  return (
    <option data-language={locale}>{name}</option>
  )
}

const SelectedFlag = ({ currentLocale }) => {
  const { locale, flagPath } = options.find((option) => option.locale === currentLocale)

  return (
    <div className='flex items-start justify-between'>
      <img src={flagPath} className='mr-1 w-8' />
      <span className='text-xs font-bold uppercase'>{locale}</span>
    </div>
  )
}

const LanguageSelect = () => {
  const { t, i18n } = useTranslation(['common'])
  const [language, setLanguage] = useState(i18n.language)
  const SelectInput = Form.SelectInput

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  return (
    <div className='inline-block relative w-64'>
      <SelectInput
        callback={setLanguage}
        options={languages}
        label={t('language')}
        name='language'
        required
        stateToUpdate={language}
      />
    </div>
  )
}

export default LanguageSelect
