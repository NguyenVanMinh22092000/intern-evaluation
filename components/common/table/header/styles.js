import { getShadowStyle, getTransitionStyle, toRgbA } from '../../../../utils/StyleUtils';

import { cStyles } from '../../../../assets/styles';
import { imgSizes, fontSizes, colors, fontFamilys, fontWeights, boxShadows, borderRadiuses, textColors } from '../../../../assets/styles/Theme';

export const styles = theme => ({
    absolute: {
        position: 'absolute',
    },
    header_wrapper: {
        top: 0,
        zIndex: 100,
        display: 'flex',
        marginTop: -60,
        // padding: '24px 32px 8px',
    },
    header_item: {
        width: '100%',
        height: '20px',
        padding: '0px 24px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    content_image: {
        width: 48,
    },
    content_avatar: {
        width: 32,
    },
    unselect_view: {
        margin: '8px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img_icon: {
        width: imgSizes.icon,
        height: imgSizes.icon,
        cursor: 'pointer',
        ...cStyles.noneUserSelect,
        ...getTransitionStyle('transform 0.2s linear 0s'),
    },
    selected_menu_btn: {
        height: '11px !important',
        width: '11px !important',
    },
    selected_option_btn: {
        margin: '0 16px',
    },
    setting_container: {
        height: 20,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    none_action_setting_container: {
        position: 'absolute',
        right: 0,
        marginRight: '56px',
    },
    setting_container_resizeable: {
        zIndex: 10,
        height: 20,
        width: 76,
        right: '56px',
        marginRight: '-56px',
    },
    setting_overlayer: {
        height: 20,
        width: 76,
        position: 'absolute',
        backgroundColor: colors.bgColor,
    },
    dropdown: {
        marginTop: '8px',
        borderRadius: borderRadiuses.small,
        border: '0',
        top: '100%',
        zIndex: 1000,
        minWidth: '160px',
        padding: '0 0',
        margin: '0px 0 0',
        fontSize: '14px',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: colors.white,
        backgroundClip: 'padding-box',
        ...getShadowStyle({ color: boxShadows.primaryDark }),
    },
    menu_list: {
        padding: '5px 0px',
    },
    dropdown_item: {
        fontSize: fontSizes.primary,
        fontFamily: fontFamilys.primary,
        padding: '10px 20px',
        margin: '5px 10px',
        borderRadius: borderRadiuses.small,
        position: 'relative',
        display: 'block',
        clear: 'both',
        fontWeight: fontWeights.primary,
        height: 'fit-content',
        color: textColors.primary,
        ...getTransitionStyle('all 300ms linear'),
        '&:hover': {
            backgroundColor: colors.white,
            color: textColors.info,
        },
    },
    dropdown_item_setting: {
        fontSize: fontSizes.primary,
        fontFamily: fontFamilys.primary,
        padding: '10px 20px',
        margin: '5px 10px',
        borderRadius: borderRadiuses.small,
        position: 'relative',
        display: 'block',
        clear: 'both',
        fontWeight: fontWeights.primary,
        height: 'fit-content',
        color: textColors.primary,
        ...getTransitionStyle('all 300ms linear'),
        '&:hover': {
            backgroundColor: colors.blue,
            color: textColors.white,
            ...getShadowStyle({ color: boxShadows.blue }),
        },
    },
    header_setting: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    header_setting_layer: {
        zIndex: 10,
        right: 0,
        width: 76,
        height: 20,
        marginRight: '-72px',
        backgroundColor: colors.bgColor,
    },
    header_container: {
        display: 'flex',
    },
    header_container_grid: {
        paddingRight: '8px',
    },
    header_container_resizeable: {
        position: 'relative',
        paddingRight: '8px',
        marginRight: '8px',
        borderRight: `1px dashed ${toRgbA(colors.primary, 0.2)}`,
        '&:hover': {
            backgroundColor: colors.grayLight,
        },
    },
    header_content: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'flex',
    },
    header_align_left: {
        justifyContent: 'flex-start',
    },
    header_align_center: {
        justifyContent: 'center',
    },
    header_align_right: {
        justifyContent: 'flex-end',
    },
    header_text: {
        lineHeight: '20px',
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.bold,
        color: textColors.primary,
        fontFamily: fontFamilys.primary,
        alignSelf: 'center',
        ...cStyles.textEllipsis,
        ...cStyles.noneUserSelect,
    },
    option_view: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
    },
    count_view: {
        flex: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    count_text: {
        fontSize: fontSizes.primary,
        fontWeight: fontWeights.primary,
        color: textColors.info,
        fontFamily: fontFamilys.primary,
    },
    content_wrapper_resizeable: {
        WebkitBoxFlex: 1,
        MsFlex: '1 0 auto',
        flex: '1 0 auto',
        display: 'inline-flex',
    },
    sort_view: {
        margin: '0 8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    sort_icon: {
        cursor: 'pointer !important',
        height: '8px !important',
        objectFit: 'cover',
    },
    clickable: {
        cursor: 'pointer',
        ...cStyles.noneUserSelect,
    },
    item_action: {
        marginLeft: 8,
        color: textColors.info,
        fontSize: fontSizes.primary,
        fontFamily: fontFamilys.primary,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ...cStyles.textEllipsis,
    },
    ia_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    ia_resizeable: {
        padding: '0 8px',
    },
    ia_text: {
        cursor: 'pointer',
        ...cStyles.textEllipsis,
    },
    table_resizer: {
        zIndex: 10,
        position: 'absolute',
        right: '-12px',
        top: 0,
        bottom: 0,
        width: '24px',
        display: 'inline-block',
        cursor: 'col-resize',
    },
}); 