import React from 'react'
import { Button, Table, Space } from 'antd'
import moment from 'moment'

const ActivityList = props => {
  const { activities, removeActivity, editActivity, setIsEditing, user } = props

  const handleEdit = (record, idx) => {
    console.log('RECORD EDIT', record)
    editActivity(record, idx)
  }

  const handleDelete = idx => {
    removeActivity(idx)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration'
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (text, record) => <div>{moment(record.date).format('MM-DD-YYYY')}</div>
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record, idx) => (
        <Space size='middle' key={idx}>
          <Button onClick={() => handleEdit(record, idx)}>Edit</Button>
          <Button onClick={() => handleDelete(idx)}>Delete</Button>
        </Space>
      )
    }
  ]

  return <Table columns={columns} dataSource={activities} rowKey={record => record.id} />
}

export default ActivityList
