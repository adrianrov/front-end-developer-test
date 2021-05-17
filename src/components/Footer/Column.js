import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  section: {
    marginBottom: "30px",
    padding: "0 5px",
  },
}));

const Column = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.section} item xs={12} md={6} lg={3}>
      {children}
    </Grid>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Column;
