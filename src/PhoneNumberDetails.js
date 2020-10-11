import React from 'react'
import styled from 'styled-components'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core'

const Container = styled.div`
  margin-top: 4rem;
`

const PhoneNumberDetails = () => (
  <Container>
    <h2>Results</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell align="right">Region</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>+1 250 574 0456</TableCell>
            <TableCell align="right">British Columbia</TableCell>
            <TableCell align="right">Canada</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>+49 1512 3577723</TableCell>
            <TableCell align="right">Germany</TableCell>
            <TableCell align="right">Germany</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
)

export default PhoneNumberDetails
