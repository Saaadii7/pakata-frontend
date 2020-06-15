import React, { useEffect, useState } from 'react'
import { useTranslation } from '../../modules/I18n'
import Form from '../Form'

const languages = [
  { value: 'en', text: 'English' },
  { value: 'fr', text: 'Urdu' }
]

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
