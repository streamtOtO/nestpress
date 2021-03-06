import {
  Theme,
  makeStyles,
  createStyles,
} from '@material-ui/core/styles';
import {
  Typography,
  Paper,
  Fade,
} from '@material-ui/core';
import { Link } from '../Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4),
      color: '#d8d8d8',
      textShadow: '1px 1.5px 0 #111',
      backgroundColor: 'transparent',
      backgroundImage: 'linear-gradient(357.5deg, rgba(255,255,255,.1) 36%, rgba(255,255,255,.2) 100%)',
      backdropFilter: 'contrast(1) blur(2px)',
      '&:hover': {
        color: '#fff',
        backgroundImage: 'linear-gradient(357.5deg, rgba(255,255,255,.12) 36%, rgba(255,255,255,.24) 100%)',
      },
    },
    title: {
      marginBottom: theme.spacing(.8),
      color: '#d8d8d8',
      textShadow: '1px 1.5px 0 #111',
    },
    description: {
      color: theme.palette.text.primary,
    },
  }),
);

export const ArticlePaper = (props) => {
  const classes = useStyles({});

  const { article } = props;

  return (
    <Fade in={true}>
      <div className={classes.root}>
        <Link
          href={`/articles/${article.id}`}
          as={`/articles/${article.id}`}
          style={{ textDecoration: 'none' }}
        >
          <Paper className={classes.paper}>
            <Typography
              className={classes.title}
              variant="h5"
              component="h2"
            >
              {article.title}
            </Typography>
            <Typography
              className={classes.description}
              component="p"
            >
              {article.description}
            </Typography>
          </Paper>
        </Link>
      </div>
    </Fade>
  );
};
