// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `...styles`
function Box({className, style, children}) {
  return (
    <div className={className} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  )
}

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', ...styles}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div className="box box--medium" style={{backgroundColor: 'pink', ...styles}}>
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', ...styles}}
//   >
//     large orange box
//   </div>
// )

function App() {
  return (
    <div>
      <Box className="box--small box" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium box" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large box" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
