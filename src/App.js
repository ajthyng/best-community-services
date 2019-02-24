import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Content from './components/Content'
import LeftDrawer from './components/LeftDrawer'
import { BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login'
import RightDrawer from './components/RightDrawer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

class App extends Component {
  state = {
    left: {
      open: false
    },
    login: {
      open: false
    }
  }

  handleClose = position => () => {
    this.setState({ [position]: { open: false } })
  }

  toggleModal = position => () => {
    const prev = this.state[position]
    if (this.state[position].open) {
      this.setState({ [position]: { ...prev, open: false } })
    } else {
      this.setState({ [position]: { ...prev, open: true } })
    }
  }

  render () {
    const { left, login } = this.state
    return (
      <Router>
        <Container>
          <Header
            toggleLeftDrawer={this.toggleModal('left')}
            toggleLogin={this.toggleModal('login')}
          />
          <Content />
          <LeftDrawer
            open={left.open}
            onClick={this.toggleModal('left')}
            onClose={this.handleClose('left')}
          />
          <RightDrawer />
          <Login
            open={login.open}
            handleLogin={this.handleClose('login')}
            handleCancel={this.handleClose('login')}
            handleSignup={this.handleClose('login')}
          />
        </Container>
      </Router>
    )
  }
}

export default App
