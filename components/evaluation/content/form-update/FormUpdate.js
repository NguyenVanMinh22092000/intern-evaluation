// import React, { Component, useRef } from 'react';
// import clsx from 'clsx';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
// import Switch from '@material-ui/core/Switch';
// import TextField from '@material-ui/core/TextField';
// import { Checkbox } from "@material-ui/core";
// import { compose } from "redux";
// import EvaluationActions from "../../../../reduxs/EvaluationRedux";
// import { connect } from "react-redux";
// import styles from "./styles";
// const classify = {evaluation: 'evaluations'};
// class FormUpdate extends Component {
//     constructor(props) {
//         super(props);
//         this.nameRef = React.createRef();
//         this.state = {
//             right: false,
//         };
//     }
//
//     toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         this.setState({ [anchor]: open });
//     };
//
//     handleClose = (anchor) => () => {
//         this.setState({ [anchor]: false });
//     };
//
//     handleChange = (event) => {
//         this.setState({ [event.target.name]: event.target.checked });
//     };
//
//     handleSubmit = event => {
//         event.preventDefault();
//         const data = {
//             "name": this.nameRef.current.value,
//             "scopes": ['contact'],
//             "contact_ids": [],
//             "contact_category_ids": [],
//         };
//         this.props.updateEvaluation(classify.evaluation, data);
//     };
//
//     render() {
//         const { classes, onShow, evaluation } = this.props;
//         const anchor = 'right';
//         const { right } = this.state;
//         const { created_date, name, scopes, _id } = evaluation;
//         return (
//             <div>
//                 <React.Fragment key={anchor}>
//                     <Drawer
//                         anchor='right'
//                         open={onShow} onClose={this.handleClose(anchor)}
//                         BackdropProps={{
//                             style: {
//                                 backdropFilter: 'blur(0px)',
//                                 backgroundColor: 'rgba(255, 255, 255, 0.3)',
//                             },
//                         }}
//                     >
//                         <div
//                             className={clsx(classes.list, {
//                                 [classes.fullList]: anchor === 'top' || anchor === 'bottom',
//                             })}
//                             role="presentation"
//                             onKeyDown={this.toggleDrawer(anchor, false)}
//                         >
//                             <div className={classes.form}>
//                                 <div className={classes.header}>
//                                     <h2>Chỉnh sửa</h2>
//                                 </div>
//                                 <form onSubmit={this.handleSubmit}>
//                                     <TextField
//                                         label="Name"
//                                         inputRef={this.nameRef}
//                                         onKeyDown={(e) => e.stopPropagation()}
//                                         className={classes.input}
//                                         defaultValue={name}
//                                         variant="outlined"
//                                         required
//                                     />
//                                     <div className={classes.content}>
//                                         <label>Sử dụng cho</label><br />
//                                         <div className={classes.option}>
//                                             {scopes.map((scope) => (
//                                                 <React.Fragment key={scope}>
//                                                     <Checkbox
//                                                         defaultChecked
//                                                         color="primary"
//                                                         inputProps={{ 'aria-label': 'secondary checkbox' }}
//                                                         name={scope}
//                                                         onClick={this.handleChange}
//                                                     />
//                                                     <p>{scope}</p>
//                                                 </React.Fragment>
//                                             ))}
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <div className={classes.buttonContainer}>
//                                         <Button variant="contained" color="primary" className={classes.button} type='submit'>
//                                             Cập nhật
//                                         </Button>
//                                         <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClose(anchor)}>
//                                             Đóng
//                                         </Button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </Drawer>
//                 </React.Fragment>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     const { accessToken } = state.session;
//     return {
//         // session
//         accessToken,
//         // evaluation
//         evaluationFetching: state.evaluation.fetching,
//         evaluationContent: state.evaluation.content,
//     };
// };
//
// const mapDispatchToProps = dispatch => ({
//     // evaluation
//     updateEvaluation: (classify, data) => dispatch(EvaluationActions.updateEvaluationRequest(classify, data))
// });
//
// export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(FormUpdate);
import React, { Component, useRef } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { Checkbox } from "@material-ui/core";
import { compose } from "redux";
import EvaluationActions from "../../../../reduxs/EvaluationRedux";
import { connect } from "react-redux";
import styles from "./styles";

const classify = { evaluation: 'evaluations' };

class FormUpdate extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.state = {
            right: false,
            scopes: [],
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
        const { checked, name } = event.target;
        this.setState((prevState) => {
            if (checked) {
                return {
                    scopes: [...prevState.scopes, name],
                };
            } else {
                return {
                    scopes: prevState.scopes.filter((scope) => scope !== name),
                };
            }
        });
    };


    handleSubmit = (event) => {
        event.preventDefault();
        const { scopes } = this.state;
        const data = {
            name: this.nameRef.current.value,
            scopes: [ ...scopes],
            contact_ids: [],
            contact_category_ids: [],
        };
        console.log('  handleSubmit ')
        alert('iin')
        this.props.updateEvaluation(classify.evaluation, data);
    };

    render() {
        const { classes, onShow, evaluation } = this.props;
        const anchor = 'right';
        const { right, scopes } = this.state;
        const { created_date, name, _id } = evaluation;

        return (
            <div>
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor='right'
                        open={onShow}
                        onClose={this.handleClose(anchor)}
                        BackdropProps={{
                            style: {
                                backdropFilter: 'blur(0px)',
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            },
                        }}
                    >
                        <div
                            className={clsx(classes.list, {
                                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                            })}
                            role="presentation"
                            onKeyDown={this.toggleDrawer(anchor, false)}
                        >
                            <div className={classes.form}>
                                <div className={classes.header}>
                                    <h2>Chỉnh sửa</h2>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <TextField
                                        label="Name"
                                        inputRef={this.nameRef}
                                        onClick={(e) => e.stopPropagation()}
                                        onKeyDown={(e) => e.stopPropagation()}
                                        className={classes.input}
                                        defaultValue={name}
                                        variant="outlined"
                                        required
                                    />

                                    <div className={classes.content}>
                                        <label>Sử dụng cho</label><br />
                                        <div className={classes.option}>
                                            {scopes.map((scope) => (
                                                <React.Fragment key={scope}>
                                                    <Checkbox
                                                        defaultChecked
                                                        color="primary"
                                                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                        name={scope}
                                                        onClick={this.handleChange}
                                                    />
                                                    <p>{scope}</p>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                    <br />
                                    <div className={classes.buttonContainer}>
                                        <Button variant="contained" color="primary" className={classes.button} type='submit'>
                                            Cập nhật
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
    updateEvaluation: (classify, data) => dispatch(EvaluationActions.updateEvaluationRequest(classify, data))
});

export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(FormUpdate);
