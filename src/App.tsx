import React from 'react';
import { useMediaQuery } from 'react-responsive'
import './App.css';

const App = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(pointer:coarse), (hover:none)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <>
    <h1>Device Test!</h1>
    <div>
      {isTabletOrMobile ? <h2>You are a tablet or mobile phone</h2> : <h2>You are a desktop or laptop</h2>}
      <p>{((isTabletOrMobile && isPortrait) || (!isTabletOrMobile && !isPortrait)) ? 'and' : 'but'} you are in {isPortrait ? 'portrait' : 'landscape'} orientation.</p>
      {isRetina && <p>You are retina!</p>}
      {isBigScreen && <p>You  have a huge screen!</p>}
    </div>
    </>
  )
}

export default App;
