import React from "react";
import {Card, CardContent,Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards =({data:{confirmed,recovered,deaths,lastUpdate}}    )=>{
   if(!confirmed){
       return ' loading...';
   }
  
    return(

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Vaka Sayısı</Typography>
                            <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={confirmed.value}
                            duration={2.5}
                            separator=","
                            />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
                            <Typography variant="body2">COVID-19 test sonucu pozitif çıkan hasta sayısı</Typography>
                        </CardContent>
                </Grid>
          
            
                <Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>İyileşme</Typography>
                            <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={recovered.value}
                            duration={2.5}
                            separator=","
                            />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
                            <Typography variant="body2">İyileşen hasta sayısı</Typography>
                        </CardContent>
                </Grid>
        
            
                <Grid item component={Card} xs={12} md={3} className={cx(styles.test,styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Ölüm Sayısı</Typography>
                            <Typography variant="h5">
                            <CountUp 
                            start={0}
                            end={deaths.value}
                            duration={2.5}
                            separator=","
                            />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()} </Typography>
                            <Typography variant="body2">COVID-19'un yüzünden vefat eden hasta sayısı</Typography>
                        </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;