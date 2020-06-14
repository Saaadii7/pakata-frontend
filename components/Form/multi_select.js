import dynamic from 'next/dynamic'

const Select = dynamic(() => import('react-dropdown-select'), {
  ssr: false
})

const MultiSelect = ({ allOptions, label, multi, onChange, placeholder, selectedOptions }) => {
  const options = allOptions.map(({ id, name }) => ({ id, label: name, value: name }))

  const handleChange = optionFromSelect => onChange && onChange(optionFromSelect)

  return (
    <div className='flex p-2 w-full'>
      {label && <label className='capitalize font-bold py-2 text-gray-700 w-4/12' htmlFor='multiSelect'>{label}</label>}
      <div className={`${label ? 'w-8/12' : 'w-full'}`}>
        <Select
          className='search with-icon bg-white'
          dropdownGap={0}
          dropdownHandle={false}
          dropdownHeight='200px'
          dropdownPosition='auto'
          handleKeyDownFn={({ event }) => event.which === 13 && event.preventDefault()}
          multi={multi}
          name='multiSelect'
          onChange={handleChange}
          options={options}
          placeholder={placeholder}
          searchable
          searchBy='label'
          style={{
            borderRadius: '0.5rem',
            paddingTop: '0.3rem',
            paddingBottom: '0.3rem',
            paddingLeft: '2rem'
          }}
          values={selectedOptions}
        />
      </div>
    </div>
  )
}

export default MultiSelect
