import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Column from "./Column";

const useStyles = makeStyles((theme) => ({
  content: {
    color: theme.palette.secondary.light,
    margin: "0 0 30px",
  },
  date: {
    color: "#5f5f5f",
    fontSize: "0.8rem",
    fontFamily: "OpenSans, Arial",
    height: "30px",
    margin: "0 0 10px",
  },
  divider: {
    backgroundColor: "#393939",
  },
  post: {
    margin: "0 0 30px",
  },
  text: {
    color: theme.palette.secondary.main,
    margin: "0 auto 30px",
    textAlign: "left",
  },
  title: {
    color: theme.palette.secondary.light,
    margin: "0 auto 30px",
  },
}));

const Recent = () => {
  const classes = useStyles();

  return (
    <Column>
      <Typography className={classes.title} component="h3" variant="h4">
        Recent Posts
      </Typography>
      <Box className={classes.posts}>
        <Box className={classes.post}>
          <div className={classes.date}>March 30, 2014</div>
          <Typography
            className={classes.content}
            component="p"
            variant="subtitle2"
          >
            Duis autem vel eum iriure dolor
          </Typography>
          <Divider className={classes.divider} />
        </Box>
        <Box className={classes.post}>
          <div className={classes.date}>March 30, 2014</div>
          <Typography
            className={classes.content}
            component="p"
            variant="subtitle2"
          >
            Duis autem vel eum iriure dolor
          </Typography>
          <Divider className={classes.divider} />
        </Box>
        <Box className={classes.post}>
          <div className={classes.date}>March 30, 2014</div>
          <Typography
            className={classes.content}
            component="p"
            variant="subtitle2"
          >
            Duis autem vel eum iriure dolor
          </Typography>
          <Divider className={classes.divider} />
        </Box>
      </Box>
    </Column>
  );
};

export default Recent;
