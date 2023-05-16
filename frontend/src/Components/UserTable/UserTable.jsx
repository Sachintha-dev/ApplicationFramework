import React, { useMemo, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Flex,
  Input,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

const UserTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "",
        accessor: "delete",
        Cell: () => <RiDeleteBinLine />,
      },
      {
        Header: "",
        accessor: "update",
        Cell: () => <AiFillEdit />,
      },
    ],
    []
  );

  const defaultColumn = useMemo(() => ({ Filter: () => null }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useGlobalFilter
  );

  const [searchValue, setSearchValue] = useState("");

  const { globalFilter } = state;

  const handleSearchChange = (e) => {
    const value = e.target.value || "";
    setSearchValue(value);
    setGlobalFilter(value);
  };

  return (
    <Box m={25}>
      <Box mt={4}>
        <Flex>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search"
              className="form-control"
              value={searchValue}
              onChange={handleSearchChange}
            />
          </InputGroup>
          <Button colorScheme="blue" ml={4}>
            Search
          </Button>
        </Flex>
      </Box>
      <Box mt={4}>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default UserTable;
