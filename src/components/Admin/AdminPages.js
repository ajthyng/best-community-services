import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 100%;
  align-items: center;
  justify-content: center;
`

class AdminPages extends Component {
  render () {
    const { page } = this.props
    const PageComponent = page.component || (() => null)
    return (
      <Container>
        <PageComponent />
      </Container>
    )
  }
}

export default AdminPages
