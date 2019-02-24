import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ServiceItem from './ServiceItem'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  margin: 12px;
  justify-content: space-around;
`

class Services extends Component {
  services = new Array(this.props.count || 20).fill(null).map((_, i) => {
    let size = `${i}`.padStart(1, '0')
    if (i >= 10) {
      size = `${i}`
    }
    if (i >= 100) {
      size = `${i % 100}`
    }
    return `https://source.unsplash.com/random/8${size}x600`
  })

  renderService = (service, index) => {
    return (
      <Grid key={`${index}`} item xs={12} sm={6} md={4} lg={3} xl={2}>
        <ServiceItem
          onClick={this.onClick}
          title={this.props.title || 'Service Title'}
          alt='This is a service we provide'
          src={service}
        />
      </Grid>
    )
  }

  render () {
    return (
      <Container>
        <Grid container spacing={16}>
          {this.services.map(this.renderService)}
        </Grid>
      </Container>
    )
  }
}

export default Services
