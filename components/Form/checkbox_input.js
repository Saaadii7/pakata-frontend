const CheckboxInput = ({ paramName, stateToUpdate, callback }) => {
  return (
    <>
      <div className='mb-5 flex whitespace-no-wrap'>
        <label className='font-bold py-2 text-gray-700 w-4/12' htmlFor={paramName}>{paramName}</label>
        <div className='flex w-8/12'>
          <input
            className='bg-gray-200 focus:outline-none pr-3 py-2 self-center text-argo-primary-1'
            id={paramName}
            name={paramName}
            onChange={(event) => callback(event.target.checked)}
            type='checkbox'
            checked={stateToUpdate}
            value={stateToUpdate}
          />
        </div>
      </div>
    </>
  )
}

export default CheckboxInput
