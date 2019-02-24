import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import VolunteerServices from '../Services'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class Volunteer extends Component {
  render () {
    return (
      <Container>
        <Typography style={{ marginTop: 16 }} variant='h2'>
          Volunteer Services
        </Typography>
        <VolunteerServices title='Volunteers Needed!' count={25} />
      </Container>
    )
  }
}

export default Volunteer
