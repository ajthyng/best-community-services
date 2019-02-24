import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

const Container = styled.div`
  flex: 1;
  min-width: 100%;
  padding: 5px;
  flex-direction: row;
  display: flex;
`

const Image = styled.div`
  width: 100%;
`

const styles = {
  card: {
    maxWidth: 'calc(100% / 3)px',
    margin: 5
  },
  media: {
    objectFit: 'cover'
  }
}

const EventBase = props => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={prompt.alt}
          className={classes.media}
          height='140'
          image={props.src}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Event = withStyles(styles)(EventBase)

class Events extends React.Component {
  render () {
    return (
      <Container>
        <Image>
          <Event
            src='img/event_one.jpg'
            title='Lantern  Festival'
            alt='Dim lighting with lighted balloons floating away at dusk'
          />
        </Image>
        <Image>
          <Event
            src='img/event_two.jpg'
            title={`Farmer's Market`}
            alt='Couple holding hands walking towards picnic tables'
          />
        </Image>
        <Image>
          <Event
            src='img/event_three.jpg'
            title={'Carnival'}
            alt='Fair and carnival equipment at night'
          />
        </Image>
      </Container>
    )
  }
}

export default Events
