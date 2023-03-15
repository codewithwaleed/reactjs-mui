import React, {ReactElement, FC} from "react";
import { Box, Button, CardContent, CardActions, Container, Grid, Typography, Card } from "@mui/material";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent sx={{ backgroundColor: 'rebeccapurple', width: '14%'}}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  
const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{ minWidth: 275}}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
};

export default Home;