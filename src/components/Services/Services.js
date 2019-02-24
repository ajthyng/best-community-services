import React, { Component } from 'react'
import styled from 'styled-components'
import CommunityServices from '../Services'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class Services extends Component {
  render () {
    return (
      <Container>
        <Typography style={{ marginTop: 16 }} variant='h2'>
          Community Services
        </Typography>
        <CommunityServices count={30} title='Community Service' />
      </Container>
    )
  }
}

export default Services
