import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
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
    container: {
        padding: theme.spacing(6),
    },
    btn: {
        padding: theme.spacing(1, 5),
        fontSize: "15px",
        marginLeft: "30px",
        fontWeight: "bolder",
        borderRadius: "15px",
    }
}));

const cards = [1, 2, 3];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />

            <main>
                <Container align="center" className={classes.container} maxWidth="lg">
                    <Button variant="contained" color="secondary" className={classes.btn}>
                        Luxury<br /> Vilas
                    </Button>
                    <Button variant="outlined" color="default" className={classes.btn}>
                        Vilas near <br /> mumbai
                    </Button>
                    <Button variant="outlined" color="default" className={classes.btn}>
                        Vilas near <br /> Delhi
                    </Button>
                    <Button variant="outlined" color="default" className={classes.btn}>
                        Vilas near<br /> Bangalore
                    </Button>
                </Container>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://img.vistarooms.com/gallery/fxubnsoj3fvrjqqrobkr.jpg"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <div>
                                            <h5 align="left">
                                                <small>Reis Magos, Goa</small><br />
                                                Villa Kinara
                                            </h5>
                                        </div>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}
