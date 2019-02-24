import React, { Component } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import dayjs from 'dayjs'
import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

const makeData = (servicename, description, created, cost, actions) => {
  return {
    servicename,
    description,
    created,
    cost,
    actions
  }
}

const edit = true
const remove = true

const rows = [
  makeData(
    'Racquet Ball',
    'Community Racquet Ball Club',
    dayjs('2018-12-30T15:30:00'),
    20,
    {
      edit,
      remove: false
    }
  ),
  makeData(
    'Racquet Ball',
    'Community Racquet Ball Club',
    dayjs('2018-12-30T15:30:00'),
    20,
    {
      edit,
      remove: false
    }
  ),
  makeData(
    'Racquet Ball',
    'Community Racquet Ball Club',
    dayjs('2018-12-30T15:30:00'),
    50,
    {
      edit,
      remove
    }
  ),
  makeData(
    'Racquet Ball',
    'Community Racquet Ball Club',
    dayjs('2018-12-30T15:30:00'),
    40,
    {
      edit,
      remove
    }
  ),
  makeData(
    'Racquet Ball',
    'Community Racquet Ball Club',
    dayjs('2018-12-30T15:30:00'),
    30,
    {
      edit,
      remove: false
    }
  )
]

const Actions = props => {
  let actions = null
  if (props.edit && props.remove) {
    actions = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  } else {
    actions = (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
      >
        <IconButton>{props.edit ? <EditIcon /> : <DeleteIcon />}</IconButton>
      </div>
    )
  }
  return actions
}

class ManageServices extends Component {
  render () {
    const { classes } = this.props
    return (
      <Container>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Service</TableCell>
                <TableCell align='right'>Description</TableCell>
                <TableCell align='right'>Created</TableCell>
                <TableCell align='right'>Cost</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...rows, ...rows, ...rows].map((row, i) => (
                <TableRow key={i}>
                  <TableCell component='th' scope='row'>
                    {row.servicename}
                  </TableCell>
                  <TableCell align='right'>{row.description}</TableCell>
                  <TableCell align='right'>
                    {row.created.format('YYYY-MM-DD HH:mm a')}
                  </TableCell>
                  <TableCell align='right'>{`$${row.cost}`}</TableCell>
                  <TableCell align='right'>
                    <Actions {...row.actions} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    )
  }
}

export default withStyles(styles)(ManageServices)
