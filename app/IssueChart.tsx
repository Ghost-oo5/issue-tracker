"use client"
import { Card } from '@radix-ui/themes';
import React from 'react'
import {Bar, BarChart, ResponsiveContainer, XAxis, YAxis} from 'recharts'
interface Props {
  open: number;
  inprogress: number;
  closed: number;
}

const IssueChart = ({ closed, inprogress, open }: Props) => {

    const data = [
        {label:"Open", value:open},
        {label:"In Progress", value:inprogress},
        {label:"Closed", value:closed},
    ]
    
  return (
   <>
   <Card>
    <ResponsiveContainer width={"100%"} height={300}>
        <BarChart data={data}>
            <XAxis dataKey={"label"}/>
            <YAxis/>
            <Bar dataKey={"value"} barSize={60} style={{fill:"var(--accent-9)"}}/>
        </BarChart>
    </ResponsiveContainer>
   </Card>
   </>
  )
}

export default IssueChart