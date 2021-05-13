import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    maxWidth: "1230px",
    margin: "90px auto",
    padding: "0 30px",
    width: "100%",
  },
  description: {
    margin: "0 auto 90px",
  },
  heading: {
    color: theme.palette.secondary.main,
    margin: "0 auto 30px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  icon: {
    color: theme.palette.secondary.main,
    display: "block",
    fontSize: "2.45rem",
    margin: "0 auto 30px",
  },
  service: {
    padding: "0 15px",
  },
  serviceHeading: {
    color: theme.palette.secondary.gray,
    margin: "0 auto 30px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  serviceSubtitle: {
    color: theme.palette.secondary.main,
    margin: "0 auto 30px",
    textAlign: "center",
  },
  subtitle: {
    color: theme.palette.primary.dark,
    textAlign: "center",
  },
}));

// TODO Move to props
const services = [
  {
    title: "Consultancy",
    icon: "users",
    subtitle:
      "Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam",
  },
  {
    title: "Marketing",
    icon: "bullhorn",
    subtitle:
      "Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam",
  },
  {
    title: "Research",
    icon: "flask",
    subtitle:
      "Claritas est etiam processus dynaicus qui sequitur mutationem consuetudium lectorum. Mirum est notare quam",
  },
];

const Services = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid className={classes.description} item xs={12}>
        <Typography className={classes.heading} component="h2" variant="h3">
          Services We Provide
        </Typography>
        <Typography
          className={classes.subtitle}
          component="p"
          variant="subtitle1"
        >
          Volutpat wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
        </Typography>
      </Grid>
      {services.map(({ icon, title, subtitle }) => (
        <Grid key={title} item className={classes.service} xs={12} md={4}>
          <FontAwesomeIcon icon={icon} className={classes.icon} />
          <Typography
            className={classes.serviceHeading}
            component="h3"
            variant="h3"
            xs={12}
          >
            {title}
          </Typography>
          <Typography
            className={classes.serviceSubtitle}
            component="p"
            variant="subtitle1"
            xs={12}
          >
            {subtitle}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Services;
