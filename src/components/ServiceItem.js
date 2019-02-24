import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { Button, CardActions } from '@material-ui/core'
import { Subject } from '../utils/subject'

const styles = {
  card: {
    maxWidth: 'calc(100% / 3)px',
    minWidth: 'calc(100% / 6)px',
    margin: 5
  },
  media: {
    objectFit: 'cover'
  }
}

const StyledItem = styled(Card)`
  min-width: 275;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ServiceItemBase = props => {
  const { classes } = props

  return (
    <StyledItem className={classes.card}>
      <CardMedia
        component='img'
        alt={prompt.alt}
        className={classes.media}
        height='140'
        image={props.src}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='h3'>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => Subject.next('open_right')} variant='outlined'>
          Sign Up!
        </Button>
      </CardActions>
    </StyledItem>
  )
}

const ServiceItem = withStyles(styles)(ServiceItemBase)

export default ServiceItem
