import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  button: {
    border: "2px solid",
    borderColor: theme.palette.background.dark,
    borderRadius: 0,
    fontSize: "1.5rem",
    height: "45px",
    margin: "0 auto",
    textTransform: "capitalize",
    width: "170px",
  },
  container: {
    backgroundColor: theme.palette.background.light,
    minHeight: "600px",
    padding: "90px 0",
    width: "100%",
  },
  email: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15px",
    },
    "& ::before": {
      borderBottom: "4px solid",
      borderColor: theme.palette.background.dark,
    },
  },
  form: {
    display: "flex",
    flexFlow: "row wrap",
    margin: "0 auto",
    maxWidth: "770px",
  },
  formValue: {
    display: "flex",
  },
  heading: {
    color: theme.palette.secondary.main,
    margin: "0 auto 90px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  message: {
    borderTop: "4px solid",
    borderColor: theme.palette.background.dark,
    "& ::before": {
      borderColor: theme.palette.background.dark,
    },
    margin: "50px auto 30px",
  },
  name: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "15px",
    },
    "& ::before": {
      borderBottom: "4px solid",
      borderColor: theme.palette.background.dark,
    },
  },
}));

const Marquee = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} component="h2" variant="h2">
        Contact
      </Typography>
      <Grid component="form" className={classes.form}>
        <Grid className={classes.name} item xs={12} sm={6} spacing={3}>
          <TextField
            fullWidth
            required
            placeholder="Name"
            id="name"
            label="Name"
          />
        </Grid>
        <Grid className={classes.email} item xs={12} sm={6} spacing={3}>
          <TextField fullWidth required id="email" label="Email" />
        </Grid>
        <Grid className={classes.formValue} item xs={12}>
          <TextField
            className={classes.message}
            fullWidth
            multiline
            rows={6}
            placeholder="Message..."
            required
            id="message"
            label="Message"
          />
        </Grid>
        <Grid className={classes.formValue} item xs={12}>
          <Button className={classes.button} type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Marquee;
