import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Link } from 'react-router-dom'; 
  
  const TicketsTable = () => {
    return (
      <div>
        <Table>
  <TableCaption>A list of your recent tickets.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="font-bold">Ticket number</TableHead>
      <TableHead className="font-bold">Description</TableHead>
      <TableHead className="font-bold">Date</TableHead>
      <TableHead className="font-bold">Ticket level</TableHead>
      <TableHead className="text-right font-bold">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
 
      <TableCell>INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell>Level 1</TableCell>
      <TableCell className="text-right">$250.00</TableCell>

    </TableRow>

    <TableRow>
 
        <TableCell>INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell>Level 1</TableCell>
        <TableCell className="text-right">$250.00</TableCell>

</TableRow>

<TableRow>
 
 <TableCell>INV001</TableCell>
 <TableCell>Paid</TableCell>
 <TableCell>Credit Card</TableCell>
 <TableCell>Level 1</TableCell>
 <TableCell className="text-right">$250.00</TableCell>

</TableRow>
  </TableBody>
</Table>

      </div>
    )
  }
  
  export default TicketsTable
  