import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";

import EditForm from './EditForm';
import editicon from "../assets/icons/edit.png";
import { Link } from 'react-router-dom';

  const TicketsTable = () => {
    const [displayForm, setDisplayForm] = useState("form-display-false");
    const [selectedTicketId, setSelectedTicketId] = useState("");

    // const toggleFormDisplay = () => {
    //   if (displayForm == "form-display-false") {
    //     setDisplayForm("form-display-true")
    //   }

    //   else {
    //     setDisplayForm("form-display-false");
    //   }

    //   console.log(displayForm);
    // }


    const showEditForm = (ticketId) => {
        setSelectedTicketId(ticketId); 
        setDisplayForm("form-display-true"); // Display the edit form
      };

    const closeEditForm = () => {
          setDisplayForm("form-display-false");
          console.log(displayForm);
        };


    const allTickets = [
          {
            "id": 1,
            "ticket_number": "#454433",
            "description": "Network card malfunctional.",
            "date_created": "06/07/2024",
            "ticket_level": "Level 1",
            "status": "pending",
        
            
          },

          {
            "id": 2,
            "ticket_number": "#45676",
            "description": "I cannot access my page in the printer.",
            "date_created": "Bret",
            "ticket_level": "Level 1",
            "status": "completed",
        
            
          },]

    return (
      <div>
        <EditForm displayForm={displayForm} closeForm = {closeEditForm} selectedTicketId = {selectedTicketId}/>
        <Table>
  <TableCaption>A list of your recent tickets.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="font-bold">Ticket number</TableHead>
      <TableHead className="font-bold">Description</TableHead>
      <TableHead className="font-bold">Date</TableHead>
      <TableHead className="font-bold">Ticket level</TableHead>
      <TableHead className="text-right font-bold">Status</TableHead>
      <TableHead className="text-right font-bold">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>

    {allTickets.map((ticket) => (
    
        <TableRow key = {ticket.id}>
          <TableCell>{ticket.ticket_number}</TableCell>
          <TableCell>{ticket.description}</TableCell>
          <TableCell>{ticket.date_created}</TableCell>
          <TableCell>{ticket.ticket_level}</TableCell>
          <TableCell className="text-right">{ticket.status}</TableCell>
          <TableCell className="text-right relative">
            <Link onClick={() => showEditForm(ticket.id)}>
                  <img className="w-5 inline-block" src={editicon} alt="Edit Icon" />
            </Link>
        </TableCell>
          </TableRow>
    ))}

  </TableBody>
</Table>

      </div>
    )
  }
  
  export default TicketsTable
  