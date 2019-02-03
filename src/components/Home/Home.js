import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const UpcomingEventsArea = styled.div`
  display: flex;
  margin: 8px 8px 4px 8px;
  flex: 3;
`

const ColumnArea = styled.div`
  display: flex;
  flex: 9;
`

const ListingArea = styled.div`
  display: inherit;
  margin: 4px 4px 8px 8px;
  flex: 10;
`

const DonationsArea = styled.div`
  display: inherit;
  margin: 4px 8px 8px 4px;
  flex: 2;
`

const ContentZone = styled(Paper)`
  flex: 1
  display: flex;
  align-items: center;
  justify-content: center;
`

class Home extends Component {
  render () {
    return (
      <Container>
        <UpcomingEventsArea>
          <ContentZone>
            <Typography variant='h4'>Upcoming Events</Typography>
          </ContentZone>
        </UpcomingEventsArea>
        <ColumnArea>
          <ListingArea>
            <ContentZone>
              <Typography variant='h4'>Services</Typography>
            </ContentZone>
          </ListingArea>
          <DonationsArea>
            <ContentZone>
              <Typography variant='h4'>Donations</Typography>
            </ContentZone>
          </DonationsArea>
        </ColumnArea>
      </Container>
    )
  }
}

export default Home
