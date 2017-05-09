var React = require('react')
var render = require('react-dom').render

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
         h1(null, this.props.title)
      )
    )
  }
})
var div = React.DOM.div
var h1 = React.DOM.h1

export default MyTitle;
