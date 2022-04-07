import React from "react";
// import TimePicker from 'react-time-picker';
import Datetime from 'react-datetime';


// pls dont change this from class component to a functional based component...
// Try to solove problem in class component
export class TodoForm extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    value:  null
  }
}

  render() {
    const {
      title,
      onChangeReminderText,
      onChangeHandler,
      errMessaege,
      onSubmitHandler
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
        <input className='input-field' placeholder='type something to remind...' onChange={onChangeReminderText} />
        <span className='os-time-picker-container'>
          {/* <TimePicker hourPlaceholder='hh' minutePlaceholder='mm' format={'hh:mm'} className={'os-time-picker'} disableClock onChange={onChangeHandler} /> */}
          <Datetime inputProps={inputProps} className={'os-time-picker'} value={this.state.value} onChange={onChangeHandler} />
        </span>
        <span style={{ width: '15%' }}>
          <button className="btn" onClick={onSubmitHandler}>Add Reminder</button>
        </span>
      </section>
      {errMessaege && <span className="os-err-msg">{errMessaege}</span>}
    </>);
  }
}

