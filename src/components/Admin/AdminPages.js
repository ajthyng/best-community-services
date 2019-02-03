import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex: 1;
  min-width: 100%;
  align-items: center;
  justify-content: center;
`

class AdminPages extends Component {
  render () {
    const { page } = this.props
    return (
      <Container>
        <Typography variant='h3'>{page.label}</Typography>
      </Container>
    )
  }
}

export default AdminPages
