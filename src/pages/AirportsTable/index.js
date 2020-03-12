import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditableTable from '../../components/common/table'
import { getColumns } from '../../enums/airport-table'

export const AirportsTable = () => {
    const [airports, setAirports] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("http://localhost:3001/airports/get-all-airports");
            console.log(data);
            setAirports(data)
        }
        fetchData();
    }, [])
    const saveData = async (row) => {
        console.log('save dasta ', row);
        const { data } = await axios.put("http://localhost:3001/airports/", {
            ...row
        })
    }
    const handleSave = (row) => {
        saveData(row);
        const newData = [...airports];
        console.log('newdata', newData)
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        console.log('newdata', newData)
        setAirports(newData)
    }
    const handleDelete = airport_id => {
        console.log(airport_id)
        const dataSource = [...airports];
        console.log(dataSource)
        const newData = dataSource.filter(item => {
            console.log(airport_id, item.airport_id, airport_id === item.airport_id);
            return item.airport_id !== airport_id
        });
        console.log(newData)
        // setAirports(newData);
    };

    const columns = getColumns(handleDelete);

    return (
        <div>
            airports table
            <EditableTable
                columns={columns}
                data={airports}
                handleSave={handleSave}
            />
        </div>
    )
}
