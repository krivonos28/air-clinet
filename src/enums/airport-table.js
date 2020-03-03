import React from 'react';
import { Popconfirm } from 'antd';


export const columns = [
    {
        title: 'Airport ID',
        dataIndex: 'airportId',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'City',
        dataIndex: 'city',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Country',
        dataIndex: 'country',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'IATA',
        dataIndex: 'iata',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'ICAO',
        dataIndex: 'icao',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Latitude',
        dataIndex: 'latitude',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Longitude',
        dataIndex: 'longitude',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Altitude',
        dataIndex: 'altitude',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Timezone',
        dataIndex: 'timezone',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'DST',
        dataIndex: 'dst',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'tzdatabasetimezone',
        dataIndex: 'tzdatabasetimezone',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Type',
        dataIndex: 'type',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'Source',
        dataIndex: 'source  ',
        editable: true,
        defaultValue: 'none',
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
              <a>Delete</a>
            </Popconfirm>
      },
]