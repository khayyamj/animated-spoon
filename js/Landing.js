import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
const { string, func, object } = React.PropTypes

const Landing = React.createClass({
  contextType: {
    router: object
  },
  propType: {
    searchTerm: string,
    dispatch: func
  },
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  },
  handleSearchSubmit (event) {
    event.preventDefault()
    this.context.router.transitionTo('/search')
  },
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermChange} />
        </form>
        <Link to='/search'>or Browse All</Link>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
