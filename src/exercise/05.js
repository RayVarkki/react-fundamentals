// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

function Box(props){

  let size = '';
  switch(props.size){
    case 'small':
      size = 'box--small'
      break;
    case 'medium':
      size = 'box--medium'
      break;
    case 'large':
      size = 'box--large';
      break;
    default:
      break;
  }
  const div = <div className={'box ' + size} style={props.style}>{props.children}</div>;
  // const div = <div className={'Box ' + className} style={style}>{props.children}</div>
  return div;
}

// function Box({size, style, children}) {
//   return (
//     <div className={`box box--${size}`} style={style}>{children}</div>
//   )
// }

const blueStyle = {backgroundColor : "lightblue"};
const pinkStyle = {backgroundColor : "pink"};
const orangeStyle = {backgroundColor : "orange"};
const italicStyle = {fontStyle: "italic"};
const smallBox = <div className='box box--small' style={{...blueStyle, ...italicStyle}}>small lightblue box</div>
const mediumBox = <div className='box box-medium' style={{...pinkStyle, ...italicStyle}}>medium pink box</div>
const largeBox = <div className='box box--large' style={{...orangeStyle, ...italicStyle}}>large orange box</div>
const smallBoxStyle = {className: "box box--small"};


function App() {
  return (
    <div>
      {/* {smallBox}
      {mediumBox}
      {largeBox} */}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>
    </div>
  )
}

export default App
