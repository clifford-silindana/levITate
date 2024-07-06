import React from 'react';
import { Link } from 'react-router-dom';
import TicketsTable from '@/components/TicketsTable';

const AllMyTickets = () => {
  return (
    <div>
        <div className = {`flex justify-between mb-10 p-5`}>
            <h1 className = {`text-white`}>Hello user</h1>
        <h1 className = {` text-white`}>Balance: R100.00</h1>
        </div>
        <div className = {`text-left text-white p-5`}>
            {/* <Link className = {`flex justify-around group bg-blue-950 hover:scale-105`} to = "#">
            <h1 className = {`text-white group-hover:scale-105`}>
                Ticket no
            </h1>

            <h1 className = {`text-white group-hover:scale-105`}>
                Ticket no
            </h1>
            </Link> */}

            <TicketsTable/>
        </div>
    </div>
  )
}

export default AllMyTickets