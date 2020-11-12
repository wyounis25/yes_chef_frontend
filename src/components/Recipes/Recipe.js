import React from 'react'
import Review from "./Review"
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useParams, useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        gridGap: theme.spacing(3),
    },
    img: {
        margin: 'auto',
        display: 'block',
        width: '500px',
        height: '500px',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
        color: theme.palette.text.primary,
    }
}));

function Recipe() {
    const classes = useStyles();
    // const { id } = useParams()
    const location = useLocation()
    const myrecipe = location.state.recipe
    console.log(myrecipe)
    return (
        <div className={classes.root}>
            <Grid container spacing={12}>
                <Grid item xs={12}>
                <Typography variant="h1">
                    {myrecipe.label}
                </Typography>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Grid container spacing={12} direction='row' justify="flex-start">
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <img className={classes.img} src={myrecipe.image} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Recipe

