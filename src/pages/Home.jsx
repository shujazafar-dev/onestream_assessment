import { TodoList } from './../components/TodoList';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TodoForm } from './../components/TodoForm';


export class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      time          : null,
      todoText      : null
    }
  }

  onChangeHandler = (value) => {
    this.setState({ time: value })
  }
  onChangeText = (e) => {
    this.setState({ todoText: e.target.value })
  }

  render() {
    const locale = new Date()
    return (
      <div className='home-container'>
        <TodoForm locale={locale} onChangeText={this.onChangeText} onChangeHandler={this.onChangeHandler} />
        <TodoList     />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}



export default connect(mapStateToProps, mapDispatchToProps)(Home)