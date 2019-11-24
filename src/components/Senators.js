import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';

const useStyles = makeStyles(theme => ({
  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    alignItems: 'stretch',
    gap: '30px',
    [theme.breakpoints.up('md')]: {
      padding: '0 20px'
    }
  },
  card: {
    minWidth: 275,
    display: 'flex',
    flexDirection: 'column'
  },
  state: {
    marginBottom: 14
  },
  actions: {
    marginTop: 'auto'
  },
  contactWrapper: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    columnGap: '10px',
    alignItems: 'center',
    marginBottom: 12
  }
}));

const SenatorsList = ({ senators = [] }) => {
  const classes = useStyles();

  return (
    <ul className={classes.list}>
      {senators.map(({ name, email, state, phone }) => (
        <Card
          className={classes.card}
          raised
          elevation={2}
          component='li'
          key={`${name}-${email}`}
        >
          <CardContent>
            <Typography variant='h5' gutterBottom>
              {name}
            </Typography>
            <Typography color='textSecondary' className={classes.state}>
              {state}
            </Typography>
            {phone && (
              <div className={classes.contactWrapper}>
                <PhoneIcon />
                <Typography variant='body2' component='span' gutterLeft>
                  {phone}
                </Typography>
              </div>
            )}
            {email && (
              <div className={classes.contactWrapper}>
                <EmailIcon />
                <Typography variant='body2' component='span' gutterLeft>
                  {email}
                </Typography>
              </div>
            )}
          </CardContent>
          <CardActions className={classes.actions}>
            {phone && <Button href={`tel:${phone}`}>Call</Button>}
            {email && <Button href={`mailto:${email}`}>Send Email</Button>}
          </CardActions>
        </Card>
      ))}
    </ul>
  );
};

export default SenatorsList;
