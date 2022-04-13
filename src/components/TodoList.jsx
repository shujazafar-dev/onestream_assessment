import TodoTables from './TodoTables';
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { getReminders } from '../AppRedux/actions/todos.actions';
import { connect } from 'react-redux';
import { REMINDER_STATUSES } from '../constants';

class TodoList extends React.Component {

  componentDidMount = () => {
    this.props.getReminders();
  }

  render() {
    localStorage.setItem("reminders", JSON.stringify(this.props.reminders));
    return <div className="os-tab-container">
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab _focus={{ boxShadow: "none", }}>Pending</Tab>
          <Tab _focus={{ boxShadow: "none", }}>Completed</Tab>
          <Tab _focus={{ boxShadow: "none", }}>All</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TodoTables
              reminders={this.props.reminders?.todos && this.props.reminders?.todos.length > 0 && this.props.reminders?.todos?.filter(remind => remind.status === REMINDER_STATUSES.PENDING)}
              status={'Pending'}
              setSelectedReminder={this.props.setSelectedReminder}
            />
          </TabPanel>
          <TabPanel>
            <TodoTables
              reminders={this.props.reminders?.todos && this.props.reminders?.todos.length > 0 && this.props.reminders?.todos?.filter(remind => remind.status === REMINDER_STATUSES.COMPLETED)}
              status={'Completed'}
              setSelectedReminder={this.props.setSelectedReminder}
            />
          </TabPanel>
          <TabPanel>
            <TodoTables
              reminders={this.props.reminders?.todos}
              status={'All'}
              setSelectedReminder={this.props.setSelectedReminder}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>;
  }
}

const mapStateToProps = (state) => ({
  reminders: state.reminders
})

const mapDispatchToProps = {
  getReminders
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList) 