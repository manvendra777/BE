import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
const styles = theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
});
class Pricing extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { classes } = this.props;
    const tiers = [
      {
        title: 'Free',
        price: '0',
        description: ['10 Advertise', '2 Days advertise time', 'Help center access', 'Email support'],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
      },
      {
        title: 'Pro',
        subheader: 'Most popular',
        price: '300',
        description: [
          '20 Advertise',
          '15 Days advertise time',
          'premium mentors access',
          'Help center access',
          'Priority email support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
      },
      {
        title: 'Enterprise',
        price: '1000',
        description: [
          '50 Advertise',
          '30 Days advertise time',
          'Help center access',
          'premium mentors access',
          'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
      },
    ];
    const footers = [
      {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
      },
      {
        title: 'Features',
        description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
      },
      {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
      },
    ];

    return (
      <div>
        <React.Fragment>
          <CssBaseline />
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                Kick Start up
          </Typography>

            </Toolbar>
          </AppBar>
          {/* Hero unit */}
          <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Pricing
        </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
              Quickly build an effective pricing table for your potential customers with this layout.
              It&apos;s built with default Material-UI components with little customization.
        </Typography>
          </Container>
          {/* End hero unit */}

          <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">

              {tiers.map((tier) => (

                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                  <Card>
                    <CardHeader
                      title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: 'center' }}
                      subheaderTypographyProps={{ align: 'center' }}
                      action={tier.title === 'Pro' ? <StarIcon /> : null}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                          ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                          /mo
                    </Typography>
                      </div>
                      <ul>
                        {tier.description.map((line) => (
                          <Typography component="li" variant="subtitle1" align="center" key={line}>
                            {line}
                          </Typography>
                        ))}
                      </ul>
                    </CardContent>
                    <CardActions>
                      <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                      </Button>
                    </CardActions>
                  </Card></Grid>
              ))}
            </Grid>
          </Container>
          {/* Footer */}
          <Container maxWidth="md" component="footer" className={classes.footer}>
            <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                  Your Website
               </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Container>
          {/* End footer */}
        </React.Fragment>
      </div>
    );
  }
}
export default withStyles(styles)(Pricing);