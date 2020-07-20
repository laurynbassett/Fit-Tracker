import React from 'react'
import moment from 'moment'
import { Badge, Calendar as ADCalendar } from 'antd'

const Calendar = () => {
  const handleSelect = e => {
    console.log('E', moment(e).format('D'))
  }

  return <ADCalendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={handleSelect} />
}

function getListData(value) {
  let listData
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul className='events'>
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  )
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394
  }
}

function monthCellRender(value) {
  const num = getMonthData(value)
  return num ? (
    <div className='notes-month'>
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null
}

export default Calendar
