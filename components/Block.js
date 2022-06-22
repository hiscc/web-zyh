import React from 'react'

export default function Block(props) {
  const handleSize = () => {
    const { h = null, w = null, fixed = null } = props
    if (h || w) {
      return {
        height: h,
        width: w,
      }
    }
    if (fixed) {
      return {
        width: fixed,
        height: fixed,
      }
    }
  }
  const handleMargins = () => {
    const { margin } = props
    if (typeof margin === 'number') {
      return {
        'margin-top': margin,
        'margin-right': margin,
        'margin-bottom': margin,
        'margin-left': margin,
      }
    }

    if (typeof margin === 'object') {
      const marginSize = Object.keys(margin).length
      switch (marginSize) {
        case 1:
          return {
            'margin-top': margin[0],
            'margin-right': margin[0],
            'margin-bottom': margin[0],
            'margin-left': margin[0],
          }
        case 2:
          return {
            'margin-top': margin[0],
            'margin-right': margin[1],
            'margin-bottom': margin[0],
            'margin-left': margin[1],
          }
        case 3:
          return {
            'margin-top': margin[0],
            'margin-right': margin[1],
            'margin-bottom': margin[2],
            'margin-left': margin[1],
          }
        default:
          return {
            'margin-top': margin[0],
            'margin-right': margin[1],
            'margin-bottom': margin[2],
            'margin-left': margin[3],
          }
      }
    }
  }

  const handlePaddings = () => {
    const { padding } = props
    if (typeof padding === 'number') {
      return {
        'padding-top': padding,
        'padding-right': padding,
        'padding-bottom': padding,
        'padding-left': padding,
      }
    }

    if (typeof padding === 'object') {
      const paddingSize = Object.keys(padding).length
      switch (paddingSize) {
        case 1:
          return {
            'padding-top': padding[0],
            'padding-right': padding[0],
            'padding-bottom': padding[0],
            'padding-left': padding[0],
          }
        case 2:
          return {
            'padding-top': padding[0],
            'padding-right': padding[1],
            'padding-bottom': padding[0],
            'padding-left': padding[1],
          }
        case 3:
          return {
            'padding-top': padding[0],
            'padding-right': padding[1],
            'padding-bottom': padding[2],
            'padding-left': padding[1],
          }
        default:
          return {
            'padding-top': padding[0],
            'padding-right': padding[1],
            'padding-bottom': padding[2],
            'padding-left': padding[3],
          }
      }
    }
  }

  const styles = {
    block: {
      position: 'relative',
    },
    border: {
      border: '1px solid #666',
      // 'border-width': '1px',
    },
    row: {
      'flex-direction': 'row',
    },
    column: {
      'flex-direction': 'column',
    },
    card: {
      'border-radius': '4px',
    },

    middle: {
      'justify-content': 'center',
    },
    top: {
      'justify-content': 'flex-start',
    },
    bottom: {
      'align-items': 'flex-end',
    },

    center: {
      'align-items': 'center',
    },
    left: {
      'align-items': 'flex-start',
    },
    right: {
      'align-items': 'flex-end',
    },

    shadow: {
      overflow: 'visible',
      shadowOpacity: 0.2,
      shadowRadius: '10px',
    },
  }

  const {
    node = 'div',
    flex,
    fBasis,
    fShrink,
    row,
    column,
    center,
    middle,
    h,
    w,
    fixed,
    s,
    wmax,
    wmin,
    lineHeight,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    bg,
    space,
    padding,
    margin,
    animated,
    border,
    radius,
    borderColor,
    borderWidth,
    wrap,
    style,
    children,
    opacity,
    touchProps,
    ...reset
  } = props

  const blockStyles = [
    styles.block,
    (h || w || fixed) && handleSize(),
    s && { 'font-size': s },
    wmax && { 'max-width': wmax },
    wmin && { 'min-width': wmin },
    lineHeight && { 'line-height': lineHeight },
    flex && { display: 'flex', 'flex-grow': flex },
    fBasis && { 'flex-basis': fBasis },
    fShrink && { 'flex-shrink': fShrink },
    border && styles.border,
    borderColor && { 'border-color': borderColor },
    borderWidth && { 'border-width': borderWidth },
    radius && { 'border-radius': radius },
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && { ...handleMargins() },
    padding && { ...handlePaddings() },
    card && styles.card,
    shadow && styles.shadow,
    space && { 'justify-content': `space-${space}` },
    wrap && { 'flex-wrap': 'wrap' },
    color && { color: color },
    bg && { 'background-color': bg },
    style,
  ]
  const finStyle = {}
  blockStyles.map((item) => {
    for (const key in item) {
      if (Object.hasOwnProperty.call(item, key)) {
        const val = item[key]
        finStyle[key] = val
      }
    }
  })

  const whichRender = (node) => {
    return React.createElement(node, { style: finStyle, ...reset }, props.children)
  }

  return whichRender(node)

  // return (
  //   <div style={finStyle} {...reset}>
  //     {children}
  //   </div>
  // )
}
