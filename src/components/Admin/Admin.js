import React, { Component } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AdminPages from './AdminPages'

const Container = styled.div`
  display: flex;
  flex: 1;
  padding: 24px;
`

const ContentZone = styled(Paper)`
  display: flex;
  flex: 1
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const adminPages = [
  { label: 'Create Account' },
  { label: 'Manage Accounts' },
  { label: 'Create New Service' },
  { label: 'Manage Services' }
]

class Admin extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render () {
    const { value } = this.state
    return (
      <Container>
        <ContentZone elevation={4}>
          <AppBar position='static' color='default'>
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor='primary'
              textColor='primary'
              variant='scrollable'
              scrollButtons='auto'
            >
              {adminPages.map(({ label }) => (
                <Tab label={label} />
              ))}
            </Tabs>
          </AppBar>
          <AdminPages page={adminPages[value]} />
        </ContentZone>
      </Container>
    )
  }
}

export default Admin
