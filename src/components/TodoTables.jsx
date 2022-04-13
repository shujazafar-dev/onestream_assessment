import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'
import { completeReminder, deleteReminder } from '../AppRedux/actions/todos.actions';
import { connect } from 'react-redux';
import { REMINDER_STATUSES } from '../constants';

function TodoTables(props) {

  const completeReminder = (id) => {
    props.completeReminder(id);
  }

  const updateReminder = (reminder) => {
    props.setSelectedReminder(reminder)
  }

  const deleteReminder = (id) => {
    props.deleteReminder(id);
  }

  const { reminders } = props;

  return (<Table variant='striped' colorScheme='linkedin'>
    <TableCaption>Made with ❤️ to choose a right person. @ OneStream.live</TableCaption>
    <Thead>
      <Tr>
        <Th>#id</Th>
        <Th>Reminder text</Th>
        <Th>Status</Th>
        <Th isNumeric>Date & time</Th>
        <Th isNumeric>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        reminders && reminders.length > 0 ? reminders?.map(
          (reminder, key) => (
            <Tr key={key}>
              <Td>{key + 1}</Td>
              <Td>{reminder.todoText}</Td>
              <Td>{reminder.status}</Td>
              <Td isNumeric>{new Date(reminder.time)?.toString()?.substr(0, 25)}</Td>
              <Td isNumeric>
                <button className="btn" style={{ margin: '5px' }} onClick={completeReminder.bind(this, reminder._id)}>Done</button>
                <button className="btn" style={{ margin: '5px', background: "blue" }} onClick={updateReminder.bind(this, reminder)}>Update</button>
                {reminder.status === REMINDER_STATUSES.PENDING && (
                  <button className="btn" style={{ margin: '5px', background: "gray" }} onClick={deleteReminder.bind(this, reminder._id)}>Delete</button>
                )}
              </Td>
            </Tr>
          )
        ) : (
          <>
            No {props.status} Reminders
          </>
        )
      }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>#id</Th>
        <Th>Reminder text</Th>
        <Th>Status</Th>
        <Th isNumeric>Date & time</Th>
        <Th isNumeric>Action</Th>
      </Tr>
    </Tfoot>
  </Table>);
}

const mapDispatchToProps = {
  completeReminder,
  deleteReminder
}

export default connect(null, mapDispatchToProps)(TodoTables)