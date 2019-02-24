import React, { Component } from 'react'
import styled from 'styled-components'
import ReservationSpaces from '../Services'
import Typography from '@material-ui/core/Typography'
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Reservations extends Component {
  render () {
    return (
      <Container>
        <Typography style={{ marginTop: 16 }} variant='h2'>
          Reservation Spaces
        </Typography>
        <ReservationSpaces title='Reservation Available' count={30} />
      </Container>
    )
  }
}

export default Reservations
