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

let id = 0
const makeData = (fullname, username, created, lastAccess, actions) => {
  ++id
  return {
    fullname,
    username,
    created,
    lastAccess,
    actions,
    id
  }
}

const edit = true
const remove = true

const rows = [
  makeData('Andrew Thyng', 'ajt83', dayjs('2018-12-30T15:30:00'), dayjs(), {
    edit,
    remove: false
  }),
  makeData('Pearl Martinez', 'pm45', dayjs('2014-11-10T13:18:00'), dayjs(), {
    edit,
    remove
  }),
  makeData('Micheal Allen', 'ma44', dayjs('2018-12-30T15:30:00'), dayjs(), {
    edit: false,
    remove
  }),
  makeData('Randall Stone', 'rst4530', dayjs('2018-12-30T15:30:00'), dayjs(), {
    edit,
    remove: false
  }),
  makeData('Jose White', 'jsw543', dayjs('2015-02-20T05:30:00'), dayjs(), {
    edit,
    remove
  })
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

class ManageAccounts extends Component {
  render () {
    const { classes } = this.props
    return (
      <Container>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell align='right'>Username</TableCell>
                <TableCell align='right'>Created</TableCell>
                <TableCell align='right'>Last Accessed</TableCell>
                <TableCell align='right'>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    {row.fullname}
                  </TableCell>
                  <TableCell align='right'>{row.username}</TableCell>
                  <TableCell align='right'>
                    {row.created.format('YYYY-MM-DD HH:mm a')}
                  </TableCell>
                  <TableCell align='right'>
                    {row.lastAccess.format('YYYY-MM-DD HH:mm a')}
                  </TableCell>
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

export default withStyles(styles)(ManageAccounts)
