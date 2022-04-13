import React from "react";
// import TimePicker from 'react-time-picker';
import Datetime from 'react-datetime';
import { connect } from 'react-redux';
import { addReminder } from '../AppRedux/actions/todos.actions';

class TodoForm extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    const {
      onChangeText,
      time,
      todoText,
      title,
      onTimeChange,
      errMessaege,
      onSubmit,
      selectedTodo,
      onUpdate,
      onCancel
    } = this.props

    let inputProps = {
      placeholder: 'dd/mm/yyyy hh:mm ',
      disabled: false,
      style: {
        width: '100%'
      },
    };

    return (<>
      <span className="os-todo-form-title">{title}</span>
      <section className='box'>
        <input className='input-field' value={todoText} placeholder='type something to remind...' onChange={onChangeText} />
        <span className='os-time-picker-container'>
          {/* <TimePicker hourPlaceholder='hh' minutePlaceholder='mm' format={'hh:mm'} className={'os-time-picker'} disableClock onChange={onChangeHandler} /> */}
          <Datetime
            value={(time) ? new Date(time) : ''}
            onChange={onTimeChange}
            className={'os-time-picker'}
            inputProps={inputProps}
            renderInput={(props) => {
              return <input {...props} value={(time) ? props.value : ''} />
            }}
          />
        </span>
        <span style={{ width: '15%' }}>
          <button className="btn" onClick={selectedTodo ? onUpdate : onSubmit}> {selectedTodo ? "Update " : "Add "} Reminder</button>
          {selectedTodo && (
            <button className="btn" style={{ background: 'gray' }} onClick={onCancel}>Cancel</button>
          )}
        </span>
      </section>
      {errMessaege && <span className="os-err-msg">{errMessaege}</span>}
    </>);
  }
}

const mapStateToProps = (state) => ({
  reminders: state.reminders
})

const mapDispatchToProps = {
  addReminder
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)