import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Tabs from '@material-ui/core/Tabs'
import TextField from '@material-ui/core/TextField'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Tab from '@material-ui/core/Tab'

class Login extends Component {
  state = {
    value: 0
  }

  handleTabChange = (_, value) => {
    this.setState({ value })
  }

  handleClose = () => {
    const { handleCancel } = this.props
    handleCancel && handleCancel()
  }

  render () {
    const { open } = this.props
    const { value } = this.state
    return (
      <Dialog open={open} onClose={this.handleClose}>
        <Tabs
          value={value}
          onChange={this.handleTabChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          scrollButtons='auto'
        >
          <Tab label='Login' />
          <Tab label='Sign Up' />
        </Tabs>
        <DialogContent>
          <TextField
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
          />
          <TextField
            margin='dense'
            id='password'
            label='Password'
            type='password'
            fullWidth
          />
          <TextField
            style={{ ...(value === 0 ? { display: 'none' } : {}) }}
            margin='dense'
            id='confirm_password'
            label='Confirm Password'
            type='password'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={this.handleClose} color='primary'>
            {value === 0 ? 'Login' : 'Sign Up'}
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default Login
