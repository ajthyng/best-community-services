import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import styled from 'styled-components'
import { Subject } from '../utils/subject'

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 400px;
`

class RightDrawer extends Component {
  state = {
    open: false
  }

  open = () => {
    if (!this.state.open) {
      this.setState({ open: true })
    }
  }

  close = () => {
    if (this.state.open) {
      this.setState({ open: false })
    }
  }

  componentDidMount () {
    Subject.subscribe('open_right', this.open)
    Subject.subscribe('close_right', this.close)
  }

  componentWillUnmount () {
    Subject.unsubscribe('open_right', this.open)
    Subject.unsubscribe('close_right', this.close)
  }

  goToRoute = name => () => {
    const { history } = this.props
    history && history.push(name)
  }

  render () {
    return (
      <Drawer open={this.state.open} onClose={this.close} anchor='right'>
        <Details>Item Details</Details>
      </Drawer>
    )
  }
}

export default RightDrawer
