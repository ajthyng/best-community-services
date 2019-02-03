import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import styled from 'styled-components'

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 400px;
`

class RightDrawer extends Component {
  goToRoute = name => () => {
    const { history } = this.props
    history && history.push(name)
  }
  render () {
    const { open, onClose } = this.props

    return (
      <Drawer open={open} onClose={onClose} anchor='right'>
        <Details>Item Details</Details>
      </Drawer>
    )
  }
}

export default RightDrawer
