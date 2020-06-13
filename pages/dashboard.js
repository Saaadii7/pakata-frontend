import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = ({ query, props }) => {
  // const dispatch = useDispatch()
  const { loading, hasErrors, user, role } = useSelector(state => state.session)

  useEffect(() => {
    let mounted = true

    // mounted && dispatch(reset())

    return () => {
      mounted = false
    }
  }, [])

  // NOTE:: ADD THIS LINE OF CODE BEFORE LOGIN FORM TO ADD SNOW EFFECT.
  // <SnowStorm followMouse={false} vMaxX={4} vMaxY={4} />
  return (
    <div className='p-4 shadow rounded bg-white'>
      Permission granted!!
      Tapa Tap, Tapa tap
      <p>I am panda's {role} too</p>
    </div>
  )
}

Dashboard.getInitialProps = async ({ query }) => ({
  query
})

export default Dashboard
