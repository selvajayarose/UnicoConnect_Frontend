import React from "react";
import Carousel from "react-elastic-carousel";
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LuxuryImg from '../assets/Luxury+Collection+Desktop.jpg';
import Item from "./Item";

const useStyles = makeStyles((theme) => ({
    heroContent2: {
        margin: theme.spacing(10, 0),
    },
    cardGrid: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(9),
    },

    cardMedia: {
        width: '200px',
        height: '200px',
        borderRadius: '50%'
    },
    img: {
        margin: theme.spacing(7, 0),
        cursor: "pointer"
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 3 },
];

function App() {
    const classes = useStyles();
    return (
        <>
            <div className={classes.heroContent2}>
                <Container maxWidth="md">
                    <Typography component="h2" variant="h4" align="center" className="text2" gutterBottom>
                    <strong>Explore ‘Incredible India’, Your Way</strong>
                    </Typography>
                    <Typography variant="h6" align="center" className="text2" paragraph>
                        Skip the cookie-cutter hotel stays for the charm and warmth of our luxury holiday homes and personalized experiences. With over 500+ homes in 50+ destinations, invite you to experience the authenticity of India without compromising on hospitality.
                    </Typography>
                </Container>
                <Carousel breakPoints={breakPoints}>
                    {cards.map((card) => (
                        <Item>
                            <Grid item key={card}>
                                <div>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://img.vistarooms.com/gallery/pranaam-4ea2cb.jpg"
                                        title="Image title"
                                    /><br />
                                    <h5 style={{ textAlign: "center" }}>Mumbai</h5>
                                </div>
                            </Grid>
                        </Item>
                    ))}
                </Carousel>
                <Container maxWidth="lg" align="center" className={classes.img}>
                    <img src={LuxuryImg} />
                </Container>
            </div>

        </>
    );
}

export default App;