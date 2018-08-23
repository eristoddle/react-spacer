// import React, { Component } from 'react'

// export class Spacer extends Component {
  
//   render() {
//     return (
//       <div>
      
//       </div>
//     )
//   }
// }

export const Spacer = (props) => {
  const style = {
    width: (typeof props.width === 'number' ? `${props.width}px` : (props.width || '1px')),
    height: (typeof props.height === 'number' ? `${props.height}px` : (props.height || '1px')),
    flexGrow: props.grow,
    flexShrink: props.shrink
  }
  
  return (
    <div style=style>
      {props.children}
    </div>
  )
}

// module.exports = function Spacer (props) {
//   const style = {
//     width: (typeof props.width === 'number' ? `${props.width}px` : (props.width || '1px')),
//     height: (typeof props.height === 'number' ? `${props.height}px` : (props.height || '1px')),
//     flexGrow: props.grow,
//     flexShrink: props.shrink
//   }

//   return React.createElement('div', { style }, props.children)
// }
