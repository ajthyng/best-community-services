import React, { Component } from 'react'
import styled from 'styled-components'
import { Typography, Paper } from '@material-ui/core'

const Container = styled.div`
  flex: 1;
  height: calc(100% - 10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 5px;
`

const donations = [
  { label: '$1,200 - Anonymous' },
  { label: '$650 - Business Two' },
  { label: '$550 - Business Three' },
  { label: '$450 - Business Four' },
  { label: '$350 - Business Five' },
  { label: '$250 - Business Six' },
  { label: '$150 - Business Seven' }
]

const Donation = styled(Paper)`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 50px;
  margin: 5px;
  padding: 0 0 0 8px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: none;
`

class Donations extends Component {
  renderDonation = (entry, index) => {
    return (
      <Donation elevation={1} key={index}>
        <Typography variant='h6'>{entry.label}</Typography>
      </Donation>
    )
  }

  render () {
    return (
      <Container>
        <Typography variant='h5'>Top Donators</Typography>
        {donations.map(this.renderDonation)}
      </Container>
    )
  }
}

export default Donations
