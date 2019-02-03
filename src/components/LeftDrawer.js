import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'

const styles = {
  list: {
    width: 250
  }
}

const mainRoutes = [
  { label: 'Home', route: '/' },
  { label: 'Services', route: '/services' },
  { label: 'Volunteer', route: '/volunteer' },
  { label: 'Rentals', route: '/rentals' },
  { label: 'Reservations', route: '/reservations' },
  { label: 'Hospice Care', route: '/hospice' }
]

const SideList = ({ classes, goToRoute }) => (
  <div className={classes.list}>
    <List>
      {mainRoutes.map(({ label, route }) => (
        <ListItem button key={label} onClick={goToRoute(route)}>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      <ListItem button key={'admin'} onClick={goToRoute('/admin')}>
        <ListItemText primary={'Admin'} />
      </ListItem>
    </List>
  </div>
)

class LeftDrawer extends Component {
  goToRoute = name => () => {
    const { history } = this.props
    history && history.push(name)
  }
  render () {
    const { classes, open, onClose } = this.props

    return (
      <Drawer open={open} onClose={onClose}>
        <div tabIndex={0} role='button' onClick={onClose} onKeyDown={onClose}>
          <SideList classes={classes} goToRoute={this.goToRoute} />
        </div>
      </Drawer>
    )
  }
}

export default withStyles(styles)(withRouter(LeftDrawer))
