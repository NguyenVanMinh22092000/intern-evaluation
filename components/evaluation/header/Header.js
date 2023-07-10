import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from "react-redux";
import { compose } from 'redux';
import {ImageViewer} from "../../common";
import styles from "./styles";
import iconTicket from '../../../assets/icons/common/ic_ticket_white.png';
import iconNotification from '../../../assets/icons/common/ic_notification.png';
import iconPerson from '../../../assets/icons/common/ic_person.png';
import iconSetting from '../../../assets/icons/common/ic_setting.png';
import iconLogout from '../../../assets/icons/common/ic_logout.png';
import {getTokenContent} from "../../../utils/WebUtils";
import SessionActions from "../../../reduxs/SessionRedux";
import UserActions from "../../../reduxs/UserRedux";

const classifies = {
    user: 'userInfo',
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classify: {
                user: 'userInfo'
            },
            userInfo: {
                email: '',
                name: '',
                avatar: '',
            }
        };
    };
    componentDidMount() {
        this.props.getUserInfo(classifies.user, { id: getTokenContent('contact_id') });
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { userFetching, userContent } = this.props;

        if(prevProps.userFetching[classifies.user] && !userFetching[classifies.user]) {
           this.initUserInfo();
        }

    }

    initUserInfo = () => {
        const { classify , userInfo } = this.state;
        const { classes, userFetching, userContent } = this.props;
        if(userContent.userInfo) {

            let userInfo = {
                name: userContent.userInfo.full_name[0],
                email: userContent.userInfo.mail[0],
                avatar: 'https://cdn.omicrm.com/crm/' + userContent.userInfo.avatar[0],
            }

            this.setState({ userInfo });
        };
    };

    render() {
        const {userInfo} = this.state;
    const  {classes} = this.props;
    const {email, name , avatar} = userInfo || {} ;
        return (
            <header className={classes.header}>
                <div className={classes.logo}>
                    <img
                        itemProp="image"
                        className={classes.cssHqh8vb}
                        src="https://omicall.com/wp-content/uploads/logo-OMI-NEW.png"
                        alt="OMICall"
                    />
                </div>
                <div className={classes.service}>
                    <ImageViewer className={classes.serviceImage} src={iconTicket} size={20} />
                    <ImageViewer className={classes.serviceImage} src={iconPerson} size={20} />
                    <ImageViewer className={classes.serviceImage} src={iconNotification} size={20} />
                </div>
                <div className={classes.headerRight}>
                    <div className={classes.setting}>
                        <ImageViewer className="setting-image" src={iconSetting} size={20} />
                    </div>
                    <div className={classes.infor}>
                        <ImageViewer
                            className={classes.inforImage}
                            src={avatar}
                            size={30}
                        />
                        <div className={classes.inforDetail}>
                            <p className={classes.inforDetailName}>{name}</p>
                            <p className={classes.inforDetailEmail}>{email}</p>
                        </div>
                    </div>
                    <div className={classes.logout}>
                        <ImageViewer className="logout-image" src={iconLogout} size={20} />
                    </div>
                </div>
            </header>
        );
    };
};

const mapStateToProps = state => {
    const { accessToken } = state.session;
    const { fetching:userFetching,  content:userContent} = state.user;
    const { fetching:roleFetching,  content:roleContent} = state.role;
    return {
        // session
        accessToken,
        // user
        userFetching,
        userContent,
        // role
        roleFetching,
        roleContent,
    };
};
const mapDispatchToProps = dispatch => ({
    // session
    onLogout: (isRedirect) => dispatch(SessionActions.sessionLogout(isRedirect)),
    // user
    getUserInfo: (classify, params) => dispatch(UserActions.getUserInfoRequest(classify, params)),
});
export default compose(withStyles(styles), connect(mapStateToProps, mapDispatchToProps)) (Header);
