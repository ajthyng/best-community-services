import React, { Component } from 'react'
import styled from 'styled-components'
import Events from './Events'
import Donations from './Donations'
import Services from '../Services'

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
  overflow: auto;
`

const DonationsArea = styled.div`
  display: inherit;
  margin: 4px 8px 8px 4px;
  flex: 2;
`

const DonationZone = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContentZone = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const EventsZone = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

class Home extends Component {
  render () {
    return (
      <Container>
        <UpcomingEventsArea>
          <EventsZone>
            <Events />
          </EventsZone>
        </UpcomingEventsArea>
        <ColumnArea>
          <ListingArea>
            <ContentZone>
              <Services />
            </ContentZone>
          </ListingArea>
          <DonationsArea>
            <DonationZone>
              <Donations />
            </DonationZone>
          </DonationsArea>
        </ColumnArea>
      </Container>
    )
  }
}

export default Home
