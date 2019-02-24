import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import SnackBar from '../SnackBar'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  }
})

const Form = styled.form``
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`

class CreateAccountForm extends Component {
  state = {
    name: '',
    email: '',
    username: ''
  }

  handleSubmitSuccess = e => {
    e.preventDefault()
    this.snackbar.current && this.snackbar.current.handleClick()
    this.setState({
      name: '',
      email: '',
      username: ''
    })
  }

  handleCancel = () => {
    this.setState({
      name: '',
      email: '',
      username: ''
    })
  }

  snackbar = React.createRef()

  handleChangeFor = ({ field }) => e => {
    const text = e.target.value
    const newState = {
      [field]: text
    }
    if (field === 'name') {
      newState.message = `Successfully created account for ${text}`
    }
    this.setState(newState)
  }

  render () {
    const { classes } = this.props
    return (
      <React.Fragment>
        <SnackBar ref={this.snackbar} message={this.state.message} />
        <Form className={classes.container} onSubmit={this.handleSubmitSuccess}>
          <TextField
            id='name'
            placeholder='enter full name'
            label='Full Name'
            value={this.state.name}
            onChange={this.handleChangeFor({ field: 'name' })}
            className={classes.textField}
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='username'
            placeholder='enter username'
            label='Username'
            value={this.state.username}
            onChange={this.handleChangeFor({ field: 'username' })}
            className={classes.textField}
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='email'
            placeholder='enter users email'
            label='email'
            value={this.state.email}
            onChange={this.handleChangeFor({ field: 'email' })}
            className={classes.textField}
            margin='normal'
            variant='outlined'
            type='email'
            required
          />
          <Buttons>
            <Button
              variant='outlined'
              color='secondary'
              onClick={this.handleCancel}
            >
              Cancel
            </Button>
            <Button
              color='primary'
              variant='contained'
              type='submit'
              onClick={this.onSubmit}
            >
              Submit
            </Button>
          </Buttons>
        </Form>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(CreateAccountForm)
