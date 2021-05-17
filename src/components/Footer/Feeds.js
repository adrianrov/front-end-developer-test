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
  link: {
    color: theme.palette.secondary.main,
    fontSize: "1.2rem",
    marginLeft: "5px",
    textDecoration: "none",
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

const Feeds = () => {
  const classes = useStyles();

  return (
    <Column>
      <Typography className={classes.title} component="h3" variant="h4">
        Twitter Feed
      </Typography>
      <Box className={classes.posts}>
        <Box className={classes.post}>
          <div className={classes.date}>
            about 2 days ago
            <a href="//www.twitter.com/kristianplatt" className={classes.link}>
              @kristianplatt
            </a>
          </div>
          <Typography
            className={classes.content}
            component="p"
            variant="subtitle2"
          >
            Good work buddy
          </Typography>
          <Divider className={classes.divider} />
        </Box>
        <Box className={classes.post}>
          <div className={classes.date}>
            about 2 days ago
            <a href="//www.twitter.com/fasteven" className={classes.link}>
              @fasteven
            </a>
          </div>
          <Typography
            className={classes.content}
            component="p"
            variant="subtitle2"
          >
            Good work buddy
          </Typography>
          <Divider className={classes.divider} />
        </Box>
        <Box className={classes.post}>
          <div className={classes.date}>
            about 2 days ago
            <a href="//www.twitter.com/streamer" className={classes.link}>
              @streamer
            </a>
          </div>
          <Typography
            className={classes.content}
            component="p"
            variant="subtitle2"
          >
            Good work buddy
          </Typography>
          <Divider className={classes.divider} />
        </Box>
      </Box>
    </Column>
  );
};

export default Feeds;
