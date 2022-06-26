<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-button @click="handle">导出</el-button>
</template>

<script lang="ts" setup>
import { GenerateCSV } from 'utils/excel/csv'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189-Grove St-Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189-Grove St-Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189-Grove St-Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189-Grove St-Los Angeles'
  }
]

const handle = () =>
  GenerateCSV(tableData, [
    { name: '时间', key: 'date' },
    { name: '姓名', key: 'name' },
    { name: '地址', key: 'address' }
  ])
</script>
