import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import BackgroundImg from '../assets/bg.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent2: {
    padding: theme.spacing(5, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();


  return (
    <div className={classes.heroContent2}>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h4" align="center" className="text2" gutterBottom>
          <strong> Our Featured Holiday Homes </strong>
        </Typography>
        <Typography variant="h6" align="center" className="text2" paragraph>
          We carefully handpick and manage all our homes, to ensure you have a hassle-free, pleasant stay.
        </Typography>

        <Grid container spacing={4} className={classes.heroContent2}>
          <Grid item xs={6} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://img.vistarooms.com/gallery/amara-villa-164a77.jpg"
                title="Image title"
              />
            </Card>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                id="card-media"
                image={BackgroundImg}
                title="Image title"
              />
            </Card>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                id="card-media"
                image="https://cf.bstatic.com/images/hotel/max1024x768/276/276968766.jpg"
                title="Image title"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4}>

          <Grid item xs={3} sm={3} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                id="card-media"
                image={BackgroundImg}
                title="Image title"
              />
            </Card>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                id="card-media"
                image={BackgroundImg}
                title="Image title"
              />
            </Card>
          </Grid>

          <Grid item xs={6} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://img.vistarooms.com/gallery/mr-lonandkars-villa-adc256.jpg"
                title="Image title"
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={6} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://img.vistarooms.com/gallery/nalmdlzvswjmctfypa7y.jpg"
                title="Image title"
              />
            </Card>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                id="card-media"
                image={BackgroundImg}
                title="Image title"
              />
            </Card>
          </Grid>

          <Grid item xs={3} sm={3} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                id="card-media"
                image={BackgroundImg}
                title="Image title"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>

    </div>
  )

}