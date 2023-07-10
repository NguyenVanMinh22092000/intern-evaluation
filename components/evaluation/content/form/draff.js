import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {compose} from "redux";
import {connect} from "react-redux";
import {ImageViewer} from "../../../common";
import styles from './styles';
import EvaluationActions from "../../../../reduxs/EvaluationRedux";
import Header from "../header";
import deleteIcon from '../../../../assets/icons/common/ic_delete.png';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import FormUpdate from "../form-update";
class Content extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                evaluation: 'evaluations',
            },
            evaluations: [],
            showDeleteAlert: false,
            showUpdateForm: false,
        };
    }

    componentDidMount() {
        const { classify } = this.state;
        const params = {
            page: 1,
            size: 10,
            body: {
                "scopes": [],
                "keyword": "",
                "sort": {
                    "field": "created_date",
                    "isAsc": false
                },
            },
        };
        this.props.getEvaluations(classify.evaluation,params );
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {evaluationFetching} = this.props;
        const classify = this.state.classify.evaluation;
        if(prevProps.evaluationFetching[classify] && !evaluationFetching[classify]){
            this.initEvaluation();
        }
    };

    initEvaluation = () => {
        const { classify } = this.state;
        const { classes, evaluationContent, evaluationFetching } = this.props;
        if(evaluationContent.evaluations){
            let evaluations = evaluationContent.evaluations.items;
            this.setState({evaluations});
        }

    };
    showAlert = () => {
        this.setState({ showDeleteAlert: true });
    };
    handleCloseDeleteAlert = () => {
        this.setState({ showDeleteAlert: false });
    };

    handleDelete = (id) => {
        const {classify} = this.state;
        const params = {id};
        this.props.deleteEvaluation(classify.evaluation, params );
        // this.setState({ showDeleteAlert: false });
    }
    render() {
        const {classes} = this.props;
        const scope = window.location.pathname.split('/').pop();;
        const evaluations = this.state.evaluations;
        const {showDeleteAlert, showUpdateForm} = this.state;
        return (
            <>
                <Header />
                <div className={classes.content}>
                    <table className={`${classes.customTable} responsive-table`}>
                        <thead>
                        <tr>
                            <th className={classes.customTh}>#</th>
                            <th className={classes.customTh}>Bộ đánh giá</th>
                            <th className={classes.customTh}>Phân loại</th>
                            <th className={classes.customTh}>Phân quyền</th>
                            <th className={classes.customTh}>Ngày tạo</th>
                            <th className={classes.customTh}>--</th>
                        </tr>
                        </thead>
                        <tbody>
                        {evaluations.map((evaluation, index) => {
                            const { created_date, name, scopes, _id } = evaluation;

                            const dateObject = new Date(created_date);
                            const formattedDate = `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`;
                            const formattedTime = `${dateObject.getHours()}:${dateObject.getMinutes()}`;

                            // Kiểm tra scope và lọc evaluations
                            const shouldRender = scope === "list" || (scopes && scopes.includes(scope));

                            // Nếu không nên render, bỏ qua evaluation này
                            if (!shouldRender) {
                                return null;
                            }

                            return (
                                <tr key={index} className={classes.customRow} onClick={this.handleClick}>
                                    <th className={classes.customTd}>{index + 1}</th>
                                    <td className={classes.customTd}>
                                        {name}
                                        <FormUpdate onShow={showUpdateForm} evaluation={evaluation}/>
                                    </td>
                                    <td className={classes.customTd}>Universal</td>

                                    <td className={classes.customTd}>
                                        {scopes.join(' / ')}
                                    </td>

                                    <td className={classes.customTd}>{`${formattedTime} ${formattedDate}`}</td>
                                    <td className={classes.customTd}>
                                        <ImageViewer src={deleteIcon} size={20} className={classes.deleteIcon} onClick={this.showAlert} />
                                        <Dialog
                                            open={showDeleteAlert}
                                            onClose={this.handleCloseDeleteAlert}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                            BackdropProps={{
                                                style: {
                                                    backdropFilter: 'blur(8px)',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                },
                                            }}
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Do you want to delete?"}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description"></DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={this.handleCloseDeleteAlert} color="primary">
                                                    No
                                                </Button>
                                                <Button onClick={() => this.handleDelete(_id)} color="primary">
                                                    Yes
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </td>

                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </>
        );
    };
};
const mapStateToProps = state => {
    const { accessToken } = state.session;
    return {
        // session
        accessToken,
        // evaluation
        evaluationFetching: state.evaluation.fetching,
        evaluationContent: state.evaluation.content,
    };
}

const mapDispatchToProps = dispatch => ({
    // evaluation
    getEvaluations: (classify, params) => dispatch(EvaluationActions.getEvaluationsRequest(classify, params)),
    deleteEvaluation: (classify, params) => dispatch(EvaluationActions.deleteEvaluationRequest(classify, params)),
});

export default compose( withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Content);
