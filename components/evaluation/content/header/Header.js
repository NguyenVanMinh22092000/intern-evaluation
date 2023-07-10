import React from "react";
import EvaluationActions from "../../../../reduxs/EvaluationRedux";
import {compose} from "redux";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";
import {connect} from "react-redux";
import TemporaryDrawer from "../form";
class Header extends React.Component {

    render() {
        const {classes} = this.props;
        return(
            <div className={classes.header}>
                <ul className={classes.headerList}>
                    <li className={classes.headerBtn}><a href="/evaluation/list" className={classes.headerBtnLink}> Tất cả</a></li>
                    <li className={classes.headerBtn}><a href="/evaluation/contact" className={classes.headerBtnLink}> Khách hàng</a></li>
                    <li className={classes.headerBtn}><a href="/evaluation/call" className={classes.headerBtnLink}> Lịch sử cuộc gọi</a></li>
                    <li className={classes.headerBtn}><a href="/evaluation/employee" className={classes.headerBtnLink}> Nhân Viên</a></li>
                    <li className={classes.headerBtn}><a href="/evaluation/ticket" className={classes.headerBtnLink}> Phiếu ghi</a></li>
                    <li className={classes.headerBtn}><a href="/evaluation/multi_channel" className={classes.headerBtnLink}> Đa kênh</a></li>
                    <li className={classes.headerBtn}><TemporaryDrawer/></li>
                </ul>
            </div>
        )
    }
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
    getEvaluations: (classify, params) => dispatch(EvaluationActions.getEvaluationsRequest(classify, params))
});

export default compose( withStyles(styles), connect(mapStateToProps, mapDispatchToProps))(Header);
