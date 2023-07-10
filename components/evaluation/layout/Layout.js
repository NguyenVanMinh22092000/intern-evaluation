import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "./styles";
import Header from "../header";
import SideBar from "../sideBar";

class Layout extends Component {
    render() {
        const { classes } = this.props;
        return (
            <>
                <Header/>
                <div className={classes.content}>
                    <SideBar/>
                    <main className={classes.main}>{this.props.children}</main>
                </div>
            </>
        );
    }
}

export default withStyles(styles)(Layout);
