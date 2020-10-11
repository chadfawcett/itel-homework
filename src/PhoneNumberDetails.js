import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@material-ui/core'

const Container = styled.div`
  margin-top: 4rem;
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PhoneNumberDetails = ({ phoneNumbers, onClear }) => (
  <Container>
    <HeaderContainer>
      <h2>Results</h2>
      <Button onClick={onClear}>Clear</Button>
    </HeaderContainer>

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
          {phoneNumbers.map((numberInfo, index) => (
            <TableRow key={`${numberInfo.international_number}${index}`}>
              <TableCell>{numberInfo.international_number}</TableCell>
              <TableCell align="right">{numberInfo.phone_region}</TableCell>
              <TableCell align="right">{numberInfo.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
)

PhoneNumberDetails.propTypes = {
  phoneNumbers: PropTypes.arrayOf(
    PropTypes.shape({
      international_number: PropTypes.string.isRequired,
      phone_region: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired
    })
  ),
  onClear: PropTypes.func.isRequired
}

export default PhoneNumberDetails
