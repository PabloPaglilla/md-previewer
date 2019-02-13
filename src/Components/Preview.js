import React from 'react';

import ReactHighMark from 'react-mark-highlight';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Preview = (props) => {
    const { classes } = props;
    /*  The ReactHighMark component uses 'style' as a prop for selecting
        how to highlight code. Conflicts with inline styles and generates
        the following warning:

        - Style prop value must be an object  react/style-prop-object

        Might change to a different package for generating the preview to
        avoid the issue.
    */
    return (
        <Typography className={classes.preview} >
            <ReactHighMark source={props.source} style="diablo" />
        </Typography>
    )
}

export default withStyles(styles)(Preview);