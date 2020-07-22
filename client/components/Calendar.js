import React from 'react'
import moment from 'moment'
import { Badge, Calendar as ADCalendar } from 'antd'

const Calendar = props => {
  const { activities, setSelectedDay } = props

  function dateCellRender(value) {
    const formattedValue = moment(value).date(value.date() - 1).format('L')
    const matchingActivities = activities.filter(activity => moment(activity.date).format('L') === formattedValue)

    if (matchingActivities.length) {
      return (
        <ul className='events'>
          {matchingActivities.map(item => {
            const text = `name: ${item.name}
        description: ${item.description}
        time: ${item.time}`

            return (
              <li key={item.id}>
                <Badge status='default' text={text} />
              </li>
            )
          })}
        </ul>
      )
    }
  }

  const handleSelect = e => {
    const date = moment(e).toDate()
    console.dir(date)
    console.log('MTH', date.getDate(), date.getMonth())

    setSelectedDay(date)
  }

  return <ADCalendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={handleSelect} />
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
