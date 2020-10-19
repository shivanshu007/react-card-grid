import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MediaCard from "./card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  }
}));

export default function SpacingGrid(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="right" spacing={3}>
          {props.data.map((value) => (
            <Grid key={value} item>
              <MediaCard data={value}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
