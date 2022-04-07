import { TodoTables } from './TodoTables';
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


export class TodoList extends React.Component {



  render() {
    return <div className="os-tab-container">
      <Tabs size='md' variant='enclosed'>
        <TabList>
          <Tab _focus={{ boxShadow: "none", }}>Pending</Tab>
          <Tab _focus={{ boxShadow: "none", }}>Completed</Tab>
          <Tab _focus={{ boxShadow: "none", }}>All</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <TodoTables size={5} status={'Pending'} />
          </TabPanel>
          <TabPanel>
            <TodoTables size={3} status={'Completed'} />
          </TabPanel>
          <TabPanel>
            <TodoTables size={8} status={'(--)'} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>;
  }
}
/*





*/