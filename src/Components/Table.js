import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        fontSize: 18,
        fontWeight: 'bolder'
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

const HomePage = () => {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchPosts = () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    setData(json)
                })
        }
        fetchPosts();
    }, []);

    return (
        <React.Fragment>
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={6} >
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow >
                                        <StyledTableCell>ID</StyledTableCell>
                                        <StyledTableCell align="left">Name</StyledTableCell>
                                        <StyledTableCell align="left">Email</StyledTableCell>
                                        <StyledTableCell align="left">Phone</StyledTableCell>
                                        <StyledTableCell align="left">Website</StyledTableCell>
                                        <StyledTableCell align="left">Address</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map(item => (
                                        <StyledTableRow key={item.id}>
                                            <StyledTableCell component="th" scope="row">
                                                {item.id}
                                            </StyledTableCell>
                                            <StyledTableCell className="table-cell" align="left">{item.name}</StyledTableCell>
                                            <StyledTableCell className="table-cell" align="left">{item.email}</StyledTableCell>
                                            <StyledTableCell className="table-cell" align="left">{item.phone}</StyledTableCell>
                                            <StyledTableCell className="table-cell" align="left">{item.website}</StyledTableCell>
                                            <StyledTableCell className="table-cell" align="left">
                                                {item.address.street}&nbsp;
                                                {item.address.suite},&nbsp;
                                                {item.address.city}<br />
                                                {item.address.zipcode}<br />
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </TableContainer>
                    </Grid>
                </Container>

            </main>
        </React.Fragment>
    );
};

export default HomePage;
