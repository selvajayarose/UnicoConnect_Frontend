import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from "./Components/NavBar";
import ImageCarousel from "./Components/ImageCarousel";
import ImageGrid from "./Components/ImageGrid";
import Luxury from "./Components/LuxuryCollection";
import Table from "./Components/Table";
import Footer from "./Components/Footer";
import BackgroundImg from '../src/assets/bg.jpg';
import one from '../src/assets/1.png'
import two from '../src/assets/2.png'
import three from '../src/assets/3.png'
import four from '../src/assets/4.png'
import five from '../src/assets/5.png'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    background: `url(${BackgroundImg})`,
    padding: theme.spacing(40, 0, 6),
    backgroundSize: "cover",
    height: '100vh',
  },
  heroContent2: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
    color: '#000',
  },
  paper: {
    textAlign: 'center',
    margin: '20px'
  },
  text: {
    marginTop: "20px"
  },
  heading: {
    padding: "50px 0"
  },
  section: {
    margin: theme.spacing(4, 0)
  }
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h3" align="center" className="text" gutterBottom>
              Experience the finest holiday homes of India
            </Typography>
            <Typography variant="h6" align="center" className="text" paragraph>
              A pristine selection of holiday homes, featuring great design, personalised service
              and an exclusive experience that is hard to replicate. Explore
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <Grid spacing={2}>
              <Form>
                <Row className="search-bar">
                  <Col xs={4}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="Where are you travelling to/from" />
                  </Col>
                  <Col xs={4}>
                    <Form.Label>Date</Form.Label>
                    <Form.Control placeholder="Check-in / Check-out" id="effective-date"
                      type="date" name="effective-date" />
                  </Col>
                  <Col xs={2}>
                    <Form.Label>Guest</Form.Label>
                    <Form.Control placeholder="1 Guest" />
                  </Col>
                  <Button variant="danger" type="submit" className="btn">
                    SEARCH
                  </Button>
                </Row>
              </Form>
            </Grid>
          </Container>
        </div>

        <div className={classes.section}>
          <ImageCarousel />
        </div>

        <div className={classes.root}>
          <Container maxWidth="lg">
            <Typography component="h2" variant="h4" align="center" className={classes.heading} gutterBottom>
              <strong>Why Choose Vista For Your Ideal Getaway</strong>
            </Typography>
            <Grid container>
              <Grid item xs={2} className={classes.paper}>
                <img src={one} />
                <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
                  Only 1 in 50 homes are accepted
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.paper}>
                <img src={two} />
                <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
                  500+ Handpicked homes across India
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.paper}>
                <img src={three} />
                <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
                  Hosted over 250,000+ happy guests
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.paper}>
                <img src={four} />
                <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
                  Homes are regularly audited for 200+ factors
                </Typography>
              </Grid>
              <Grid item xs={2} className={classes.paper}>
                <img src={five} />
                <Typography gutterBottom variant="h6" component="h2" className={classes.text}>
                  We empower the local community
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </div>

        <div className={classes.section}>
          <ImageGrid />
        </div>

        <div className={classes.heroContent2}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" align="center" className="text2" gutterBottom>
              <strong>We'll Spoil You For Choice</strong>
            </Typography>
            <Typography variant="h6" align="center" className="text2" paragraph>
              Whether you're looking for a spacious villa for a big group celebration, a romantic getway for a couple or a
              peaceful place to sneak away from the hustle-bustle of city life, we've got something for everyone.
            </Typography>
            <div className={classes.section}>
              <Luxury />
            </div>
          </Container>
          <div className={classes.section}>
            <Table />
          </div>
        </div>
      </main>

      <div className={classes.section}>
        <Footer />
      </div>
      
    </React.Fragment>
  );
}