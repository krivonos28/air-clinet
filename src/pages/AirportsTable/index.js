import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditableTable from '../../components/common/table'
import { columns } from '../../enums/airport-table'

export const AirportsTable = () => {
    const [airports, setAirports] = useState([])

    useEffect(() => {
        const fetchData = async() => {
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
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        console.log('newdata', newData)
        setAirports(newData)
    }

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
