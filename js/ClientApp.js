/* global React ReactDOM */

  var div = React.DOM.div
  var h1 = React.DOM.h1

  var MyTitle = React.createClass({
    render: function() {
      return (
        div(null,
          h1(null, "Check out my second component!")
        )
      )
    }
  })
  var MyFirstComponent = (
    div(null,
      React.createElement(MyTitle, null),
      React.createElement(MyTitle, null),
      React.createElement(MyTitle, null)
    )
  )
  ReactDOM.render(MyFirstComponent, document.getElementById('app'))
