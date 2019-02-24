import React, { PureComponent } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { Subject } from '../utils/subject'

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class Header extends PureComponent {
  render () {
    const { classes, toggleLeftDrawer, toggleLogin } = this.props
    return (
      <div style={{ zIndex: 10 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color='inherit'
              aria-label='Menu'
              onClick={toggleLeftDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              Best Community Services
            </Typography>
            <Button color='inherit' onClick={() => Subject.next('open_right')}>
              TEMP_OPEN_DETAILS
            </Button>
            <Button color='inherit' onClick={toggleLogin}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(Header)
