import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { Checkbox } from "@material-ui/core";
import styles from "./styles";
import EvaluationActions from "../../../../reduxs/EvaluationRedux";
const classify = {evaluation: 'evaluations'};
class TemporaryDrawer extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.state = {
            right: false,
            isContinuedAdding: true,
            contact: true,
            agent: false,
            call: false,
            ticket: false,
            multi_channel: false,
        };
    }

    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ [anchor]: open });
    };

    handleClose = (anchor) => () => {
        this.setState({ [anchor]: false });
    };

    handleChange = (event) => {
        const { name, checked } = event.target;
        console.log(`Name: ${name}, Checked: ${checked}`);
        this.setState({ [name]: checked });
    };


    handleSubmit = event => {
        event.preventDefault();
        const data = {
            name: this.nameRef.current.value,
            scopes: [],
            contact_ids: [],
            contact_category_ids: [],
        };
        // get value from Checkbox to add into scopes
        const { contact, agent , call, ticket, multi_channel} = this.state;
        const scopes = [];
        if (contact) scopes.push('contact');
        if (agent) scopes.push('agent');
        if (call) scopes.push('call');
        if (ticket) scopes.push('ticket');
        if (multi_channel) scopes.push('multi_channel');

        data.scopes = scopes; // Gán giá trị mới cho thuộc tính scopes trong data
        console.log(' data.scopes', data)
        this.props.addEvaluation(classify.evaluation, data);
        if (!this.state.isContinuedAdding) {
            this.setState({ right: false });
        }

        this.nameRef.current.value = "";
    };

    render() {
        const { classes } = this.props;
        const anchor = 'right';
        const { right, isContinuedAdding } = this.state;

        return (
            <div>
                <React.Fragment key={anchor}>
                    <Button onClick={this.toggleDrawer(anchor, true)}>Thêm mới</Button>
                    <Drawer anchor={anchor} open={right} onClose={this.handleClose(anchor)}>
                        <div
                            className={clsx(classes.list, {
                                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                            })}
                            role="presentation"
                            onKeyDown={this.toggleDrawer(anchor, false)}
                        >
                            <div className={classes.form}>
                                <div className={classes.header}>
                                    <h2>Thêm mới</h2>
                                    <div className={classes.switch}>
                                        <Switch
                                            checked={isContinuedAdding}
                                            onChange={this.handleChange}
                                            name="isContinuedAdding"
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        <p >Tiếp tục thêm</p>
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <TextField
                                        label="Name"
                                        inputRef={this.nameRef}
                                        onKeyDown={(e) => e.stopPropagation()}
                                        className={classes.input}
                                        variant="outlined"
                                        required
                                    />
                                    <div className={classes.content}>
                                        <label>Sử dụng cho</label><br />
                                        <div className={classes.option}>
                                            <Checkbox
                                                defaultChecked
                                                color="primary"
                                                name='contact'
                                                onChange={this.handleChange}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <p>Khách hàng</p>
                                            <Checkbox
                                                color="primary"
                                                name="call"
                                                onChange={this.handleChange}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <p>Cuộc gọi</p>
                                            <Checkbox
                                                color="primary"
                                                name="agent"
                                                onChange={this.handleChange}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <p>Nhân viên</p>
                                            <Checkbox
                                                color="primary"
                                                name="ticket"
                                                onChange={this.handleChange}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <p>Phiếu ghi</p>
                                            <Checkbox
                                                color="primary"
                                                name="multi_channel"
                                                onChange={this.handleChange}
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                            <p>Đa kênh</p>
                                        </div>
                                    </div>
                                     <br />
                                    <div className={classes.buttonContainer}>
                                        <Button variant="contained" color="primary" className={classes.button} type='submit'>
                                            Thêm mới
                                        </Button>
                                        <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClose(anchor)}>
                                            Đóng
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Drawer>
                </React.Fragment>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { accessToken } = state.session;
    return {
        // session
        accessToken,
        // evaluation
        evaluationFetching: state.evaluation.fetching,
        evaluationContent: state.evaluation.content,
    };
};

const mapDispatchToProps = dispatch => ({
    // evaluation
    addEvaluation: (classify, data) => dispatch(EvaluationActions.addEvaluationRequest(classify, data))
});

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(TemporaryDrawer);
