import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { ImageViewer } from "../../common";
import styles from "./styles";
import iconArrowRight from "../../../assets/icons/common/ic_arrow_right.png";
import iconSearch from "../../../assets/icons/common/ic_search.png";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openItem: null,
            searchValue: "",
        };
    }

    handleSearch = (event) => {
        this.setState({ searchValue: event.target.value });
    };

    toggleItem = (itemId) => {
        this.setState((prevState) => ({
            openItem: prevState.openItem === itemId ? null : itemId,
        }));
    };

    toggleItem = (itemId) => {
        this.setState(prevState => ({
            openItem: prevState.openItem === itemId ? null : itemId
        }));
    };
    handleSearch = (event) => {
        const { value } = event.target;
        this.setState({
            searchValue: value
        });
    };
    render() {
        const { classes } = this.props;
        const { openItem, searchValue } = this.state;

        return (
            <div className={classes.sideBar}>
                <div className={classes.sideBarHeader}>
                    <p>Cấu hình</p>
                    <ImageViewer src={iconArrowRight} size={10} />
                    <p>Doanh nghiệp</p>
                    <ImageViewer src={iconArrowRight} size={10} />
                    <p>Đánh giá</p>
                </div>
                <div className={classes.sideBarBody}>
                    <div className={classes.sideBarSearch}>
                        <ImageViewer src={iconSearch} size={15} className={classes.sideBarSearchIcon} />
                        <input
                            type="text"
                            className={classes.sideBarSearchInput}
                            onChange={this.handleSearch}
                            value={searchValue}
                            placeholder="Tìm kiếm"
                        />
                    </div>
                    <div className={classes.sideBarOption}>
                        <div
                            className={classes.sideBarOptionTitle}
                            onClick={() => this.toggleItem(1)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path fill="black" d="M21 20H23V22H1V20H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V20ZM19 20V4H5V20H19ZM8 11H11V13H8V11ZM8 7H11V9H8V7ZM8 15H11V17H8V15ZM13 15H16V17H13V15ZM13 11H16V13H13V11ZM13 7H16V9H13V7Z"></path>
                            </svg>
                            <p>Mục con 1</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M16 12L10 18V6L16 12Z"></path>
                            </svg>
                        </div>
                        {openItem === 1 && (
                            <ul>
                                <li>Phần tử 1</li>
                                <li>Phần tử 2</li>
                                <li>Phần tử 3</li>
                            </ul>
                        )}
                        <div
                            className={classes.sideBarOptionTitle}
                            onClick={() => this.toggleItem(2)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM13 16.083V20H17.6586C16.9423 17.9735 15.1684 16.4467 13 16.083ZM11 20V16.083C8.83165 16.4467 7.05766 17.9735 6.34141 20H11ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.2104 11 16 9.21043 16 7C16 4.78957 14.2104 3 12 3C9.78957 3 8 4.78957 8 7C8 9.21043 9.78957 11 12 11Z"></path>
                            </svg>
                            <p>Mục con 2</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M16 12L10 18V6L16 12Z"></path>
                            </svg>
                        </div>
                        {openItem === 2 && (
                            <ul>
                                <li>Phần tử A</li>
                                <li>Phần tử B</li>
                                <li>Phần tử C</li>
                            </ul>
                        )}
                        <div
                            className={classes.sideBarOptionTitle}
                            onClick={() => this.toggleItem(3)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='20' height='20'>
                                <path d="M20.0049 2C21.1068 2 22 2.89821 22 3.9908V20.0092C22 21.1087 21.1074 22 20.0049 22H4V18H2V16H4V13H2V11H4V8H2V6H4V2H20.0049ZM8 4H6V20H8V4ZM20 4H10V20H20V4Z"></path>
                            </svg>
                            <p>Mục con 3</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" transform="rotate(0)">
                                <path d="M16 12L10 18V6L16 12Z"></path>
                            </svg>
                        </div>
                        {openItem === 3 && (
                            <ul>
                                <li>Item X</li>
                                <li>Item Y</li>
                                <li>Item Z</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        );
    }
};
export default withStyles(styles) (SideBar);