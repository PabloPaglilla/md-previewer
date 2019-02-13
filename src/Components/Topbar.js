import React from 'react'
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles';

const Topbar = (props) => {
    const { classes } = props;
    return (
        <AppBar
            position="absolute"
            className={classNames(classes.appBar, props.open && classes.appBarShift)}
        >
            <Toolbar disableGutters={!props.open} className={classes.toolbar}>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={props.handleDrawerOpen}
                    className={classNames(
                        classes.menuButton,
                        props.open && classes.menuButtonHidden,
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    Markdown previewer
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Topbar);