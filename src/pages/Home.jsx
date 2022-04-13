import TodoList from './../components/TodoList';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoForm from './../components/TodoForm';
import { addReminder, updateReminder } from '../AppRedux/actions/todos.actions';
import { REMINDER_STATUSES } from '../constants';

export class Home extends Component {

  constructor (props) {
    super(props)

    this.state = {
      time: null,
      todoText: null,
      errMessaege: "",
      selectedTodo: null
    }
  }

  onChangeHandler = (value) => {
    this.setState({ time: value })
  }
  onChangeText = (e) => {
    this.setState({ todoText: e.target.value })
  }

  onSubmit = (e) => {
    if (!this.state.todoText) {
      this.setState({ ...this.state, errMessaege: "Todo Text is required" })
      return false;
    } else if (!this.state.time) {
      this.setState({ ...this.state, errMessaege: "Time is required" })
      return false;
    }

    this.setState({ ...this.state, errMessaege: "" })


    const data = {
      time: this.state.time,
      status: REMINDER_STATUSES.PENDING,
      todoText: this.state.todoText,
      _id: Math.floor(Math.random() * 100000)
    }

    this.props.addReminder(data);
    this.setState({
      ...this.state,
      time: null,
      todoText: "",
      errMessaege: ""
    })
  }

  onUpdate = () => {
    const tempObj = JSON.parse(JSON.stringify(this.state.selectedTodo));
    tempObj.time = this.state.time;
    tempObj.todoText = this.state.todoText;
    this.props.updateReminder(tempObj);
    this.onCancel();
  }

  setSelectedReminder = (data) => {
    this.setState({
      ...this.state.state, selectedTodo: data,
      time: data.time,
      todoText: data.todoText
    });
  }

  onCancel = () => {
    this.setState({
      selectedTodo: null,
      time: "",
      todoText: "",
      errMessaege: ""
    })
  }

  render() {
    const { time, todoText } = this.state;

    return (
      <div className='home-container'>
        <TodoForm
          onChangeText={this.onChangeText}
          time={time}
          todoText={todoText}
          title="Add Reminder"
          onTimeChange={this.onChangeHandler}
          onSubmit={this.onSubmit}
          errMessaege={this.state.errMessaege}
          onUpdate={this.onUpdate}
          selectedTodo={this.state.selectedTodo}
          onCancel={this.onCancel}
        />
        <TodoList setSelectedReminder={this.setSelectedReminder} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
  addReminder,
  updateReminder
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)