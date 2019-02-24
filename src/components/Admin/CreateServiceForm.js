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

const Upload = styled.div`
  width: 400px;
  height: 250px;
  margin: 12px 0;
  border: dashed 4px #808080;
  display: flex;
  align-items: center;
  justify-content: center;
`

class CreateServiceForm extends Component {
  state = {
    name: '',
    description: '',
    cost: 0
  }

  handleSubmitSuccess = e => {
    e.preventDefault()
    this.snackbar.current && this.snackbar.current.handleClick()
    this.setState({
      name: '',
      description: '',
      cost: 0
    })
  }

  handleCancel = () => {
    this.setState({
      name: '',
      description: '',
      cost: 0
    })
  }

  snackbar = React.createRef()

  handleChangeFor = ({ field }) => e => {
    const text = e.target.value
    const newState = {
      [field]: text
    }
    if (field === 'name') {
      newState.message = `Successfully created service ${text}`
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
            placeholder='enter service name'
            label='Service Name'
            value={this.state.name}
            onChange={this.handleChangeFor({ field: 'name' })}
            className={classes.textField}
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='description'
            placeholder='enter service description'
            label='Description'
            value={this.state.description}
            onChange={this.handleChangeFor({ field: 'description' })}
            className={classes.textField}
            multiline
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='service-cost'
            type='number'
            label='Service Cost'
            value={this.state.cost}
            onChange={this.handleChangeFor({ field: 'cost' })}
            helperText='Please enter your service cost'
            margin='normal'
            required
          />
          <Upload>Click or Drag to Upload Photo*</Upload>
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

export default withStyles(styles)(CreateServiceForm)
