import React from 'react'
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { Link } from 'react-router-dom';

import styles from './styles';

const textDecorationNone = {
    textDecoration: 'none'
};

const Sidebar = (props) => {
    const { classes } = props;
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !props.open && classes.drawerPaperClose),
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton
                    onClick={props.handleDrawerClose}>
                    {<ChevronLeftIcon />}
                </IconButton>
            </div>
            <Divider />
            <List>
                <Link to='/' style={textDecorationNone}>
                    <ListItem button>
                        <ListItemIcon>
                            <EditIcon />
                        </ListItemIcon>
                        <ListItemText primary='Edit' />
                    </ListItem>
                </Link>
                <Link to='/preview' style={textDecorationNone}>
                    <ListItem button>
                        <ListItemIcon>
                            <RemoveRedEyeIcon />
                        </ListItemIcon>
                        <ListItemText primary='Preview' />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
}

export default withStyles(styles)(Sidebar);