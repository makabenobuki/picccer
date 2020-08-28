import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Button from '@material-ui/core/Button';
import { TextField, TableHead, TableRow, TableCell, Checkbox } from '@material-ui/core';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableBody from '@material-ui/core/TableBody';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'; 
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const url = "http://localhost/picccer/src/api.php";

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  media: {
    height: 128,
  },
});


function App() {
  axios.get(url).then(res => {
    console.log(res.data["tokyo"]);
    window.alert(res.data["tokyo"][0]);
  });
  const classes = useStyles();
  return (
    <body>
      <h1></h1>
      <p>画像を保存したいWebサイトのURLを入力してください</p>
      URL：
      <TextField></TextField>
      <Button variant="contained" color="primary">
        画像を表示
      </Button>
      <Button variant="contained" color="primary">
        Webサイトへ移動
      </Button>
      <br></br>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/image/sample.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/image/sample.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Checkbox></Checkbox>
            Lizard.jpg
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            size:1098*690<br></br>
            URL:
            <a href="http://yucatio.hatenablog.com/entry/2018/12/04/083053">
            http://yucatio.hatenablog.com/entry/2018/12/04/083053
            </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      <TableBody>
        <TableRow>
          <TableSortLabel>chk</TableSortLabel>
          <TableCell padding="checkbox">
          </TableCell>
        </TableRow>
        <TableRow>
          <TableSortLabel>画像</TableSortLabel>
          <TableCell padding="checkbox">
            bbb
          </TableCell>
        </TableRow>
        <TableRow>
        <TableSortLabel>画像名</TableSortLabel>
          <TableCell padding="checkbox">
            ccc
          </TableCell>
        </TableRow>
        <TableRow>
          <TableSortLabel>サイズ</TableSortLabel>
          <TableCell padding="checkbox">
            ddd
          </TableCell>
        </TableRow>
        <TableRow>
          <TableSortLabel>URL</TableSortLabel>
          <TableCell padding="checkbox">
            eee
          </TableCell>
        </TableRow>
      </TableBody>
    </body>
  );
}

export default App;
