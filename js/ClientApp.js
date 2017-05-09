var React = require('react')
var render = require('react-dom').render
var MyTitle = require('./MyTitle')

var MyTitleFact = React.createFactory(MyTitle)

// replace render method
var MyFirstComponent = React.createClass({
  render () {
    return (
      div(null,
        MyTitleFact({title: 'Props are great!'}),
        MyTitleFact({title: 'Use props everywhere!'}),
        MyTitleFact({title: 'Props are the best!'})
      )
    )
  }
})

render(React.createElement(MyFirstComponent), document.getElementById('app'))
