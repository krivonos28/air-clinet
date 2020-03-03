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
    return (
        <div>
            airports table
            <EditableTable
                columns={columns}
                data={airports}
            />
        </div>
    )
}
