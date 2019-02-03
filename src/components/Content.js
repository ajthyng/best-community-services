import React, { Component } from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import Home from './Home/Home'
import Admin from './Admin/Admin'
import Hospice from './Hospice/Hospice'
import Volunteer from './Volunteer/Volunteer'
import Rentals from './Rentals/Rentals'
import Reservations from './Reservations/Reservations'
import Services from './Services/Services'

const Container = styled.div`
  display: flex;
  flex: 1;
`

class Content extends Component {
  render () {
    return (
      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/volunteer' component={Volunteer} />
        <Route path='/rentals' component={Rentals} />
        <Route path='/reservations' component={Reservations} />
        <Route path='/hospice' component={Hospice} />
        <Route path='/admin' component={Admin} />
      </Container>
    )
  }
}

export default Content
