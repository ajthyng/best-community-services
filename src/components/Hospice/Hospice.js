import React, { Component } from 'react'
import styled from 'styled-components'
import HospiceServices from '../Services'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class Hospice extends Component {
  render () {
    return (
      <Container>
        <Typography style={{ marginTop: 16 }} variant='h2'>
          Hospice Services
        </Typography>
        <HospiceServices title='Hospice Service' />
      </Container>
    )
  }
}

export default Hospice
