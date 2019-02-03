import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

class Services extends Component {
  render () {
    return (
      <Container>
        <Typography variant='h3'>Community Services</Typography>
      </Container>
    )
  }
}

export default Services