import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DOM from 'react-dom'
import { Motion, spring, presets } from 'react-motion'

class ScrollingRetail extends Component {
  constructor(props) {
    super(props)

    this.state = { animValues: window.outerWidth  ,autoscroll : 100 }


    this.onScrollStart = this.onScrollStart.bind(this)
    this.resetMin = this.resetMin.bind(this)
    this.resetMax = this.resetMax.bind(this)
    
  }

  componentDidMount() {

    setTimeout(()=>{

        this.setState({animValues : window.outerWidth})

    },1000)
    
    
    
    
      
    // Place the 'lock__' class on the HTML element - if toggled
    if (this.props.pageLock) {
      const orig = document.firstElementChild.className
      document.firstElementChild.className = orig + (orig ? ' ' : '') + 'locked__'
    }
  }

  componentWillUnmount() {


    if (this.props.pageLock) {
      document.firstElementChild.className = document.firstElementChild.className.replace(
        / ?locked__/,
        ''
      )
    }
  }

  componentDidUpdate = () => this.calculate()

  onScrollStart(e) {
    e.preventDefault()
    // If scrolling on x axis, change to y axis. Otherwise, just get the y deltas.
    // (Basically, this for Apple mice that allow horizontal scrolling by default)
    var rawData = e.deltaY ? e.deltaY : e.deltaX
    var mouseY = Math.floor(rawData)
    console.log(mouseY);

    // Bring in the existing animation values
    var animationValue = this.state.animValues
    
    var newAnimationValue = animationValue + mouseY
   
    var newAnimationValueNegative = animationValue - mouseY
   

    if (!this.caniscroll()) {
      return
    }

    var scrolling = () => {
      this.props.reverseScroll
        ? this.setState({ animValues: newAnimationValueNegative })
        : this.setState({ animValues: newAnimationValue })
    }

    // Begin Scrolling Animation
    window.requestAnimationFrame(scrolling)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      true &&
      // Ensure component has been loaded
      this.calculate.timer !== void 0 &&
      this.props.children === nextProps.children &&
      this.state.animValues === nextState.animValues
    ) {
      return false
    }

    if (true && this.props.children === nextProps.children && this.caniscroll() === false) {
      return false
    }

    return true
  }

  caniscroll() {
    let el = DOM.findDOMNode(this.hScrollParent)
    let rect = el.getBoundingClientRect()
    let scroller = el.firstElementChild

    return (
      scroller.offsetLeft < rect.left || scroller.offsetLeft + scroller.offsetWidth > rect.width
    )
  }

  calculate() {

    
    // Cancel the previous calculate
    clearTimeout(this.calculate.timer)

    // Lazy to calculate, prevent max recurse call
    this.calculate.timer = setTimeout(() => {
      // Calculate the bounds of the scroll area
      let el = DOM.findDOMNode(this.hScrollParent)

      let max = el.lastElementChild.scrollWidth
      let win = el.offsetWidth

      // Get the new animation values
      var curr = this.state.animValues

      // Establish the bounds. We do this every time b/c it might change.
      var bounds = -(max - win)
        console.log(window.outerWidth);

      // Logic to hold everything in place
      if (curr >= window.innerWidth) {
        this.resetMin()
      } else if (curr <= bounds) {
        var x = bounds + 1
        this.resetMax(x)
        console.log(x);
      }
    })
  }

  /**
   * Add event listener
  //  */
  // componentDidMount() {
  //   this.calculate();
  //   window.addEventListener("resize", this.calculate.bind(this));
  // }

  // /**
  //  * Remove event listener
  //  */
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.calculate.bind(this));
  // }


  resetMin() {
    this.setState({ animValues: window.outerWidth-(window.outerWidth * 0.04)})
  }

  resetMax(x) {
    this.setState({ animValues: x } )
  }

  render() {
    const { config, style, children } = this.props
    const { width, height } = style
    const springConfig = config || presets.noWobble

    // Styles
    const styles = {
      height: height || `100%`,
      width: width || `100%`,
      overflow: `hidden`,
      position: `relative`,
      ...style
    }

    return (
      <div
        onWheel={this.onScrollStart}
        ref={r => {
          this.hScrollParent = r
        }}
        style={styles}
        className={`scroll-horizontal ${this.props.className || ''}`}
      >
        <Motion style={{ z: spring(this.state.animValues, springConfig) }}>
          {({ z }) => {
            const scrollingElementStyles = {
              transform: `translate3d(${z}px, 0,0)`,
              display: `inline-flex`,
              height: `100%`,
              position: `absolute`,
              willChange: `transform`,
              transition: 'all 0.2s ease-out'
            }

            return <div style={scrollingElementStyles}>{children}</div>
          }}
        </Motion>
      </div>
    )
  }
}

ScrollingRetail.propTypes = {
  reverseScroll: PropTypes.bool,
  pageLock: PropTypes.bool,
  config: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.array.isRequired
}

ScrollingRetail.defaultProps = {
  reverseScroll: true,
  pageLock: true,
  config: null,
  style: { width: `100%`, height: `100%` },
  className: null
}

export default ScrollingRetail;




