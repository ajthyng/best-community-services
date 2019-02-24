import React, { Component } from 'react'
import styled from 'styled-components'
import RentalsServices from '../Services'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

class Rentals extends Component {
  render () {
    return (
      <Container>
        <Typography style={{ marginTop: 16 }} variant='h2'>
          Rental Equipment
        </Typography>
        <RentalsServices title='Rental Equipment' count={30} />
      </Container>
    )
  }
}

export default Rentals
