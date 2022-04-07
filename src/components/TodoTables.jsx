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

export function TodoTables({
  size,
  status,
  todoList = new Array(size).fill('❤️')
}) {
  let date = new Date()
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
        todoList && todoList.map(
          (todo, key) => (
            <Tr key={key}>
              <Td>{key + 1}</Td>
              <Td>Some importan work to do in assignment.</Td>
              <Td>{status}</Td>
              <Td isNumeric>{new Date()?.toString()?.substr(0, 25)}</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
          )
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
