import React from 'react'
import { Table } from 'semantic-ui-react'

const Datagrid = ({ headers, data, renderBodyRow }) => (
  <Table celled headerRow={headers} renderBodyRow={renderBodyRow} tableData={data} />
)

export default Datagrid
