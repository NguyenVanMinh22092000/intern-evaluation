const styles = {
    list: {
        width: 550,
    },
    fullList: {
        width: 'auto',
    },
    form: {
        padding: '16px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '16px',
    },
    button: {
        marginRight: '8px',
    },
    addButton: {
        position: 'absolute',
        top: '0',
        left: '0',
    },
    switchContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '8px',
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8px',

    },
    checkboxLabel: {
        marginLeft: '8px',
    },
    switch: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    header: {
        display:'flex',
        justifyContent:'space-between',
    },
    content: {
        marginTop: '3rem',
    },
    option: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        width: '490px',
        height: '43px',
        '& input': {
            color: 'inherit',
            '&:hover': {
                backgroundColor: 'lightblue',
            },
            '&:focus': {
                backgroundColor: 'lightblue',
            },
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'lightgray',
            },
            '&:hover fieldset': {
                borderColor: 'lightblue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'lightblue',
            },
        },
        '& .MuiInputLabel-root': {
            fontSize: '14px',
        },
    },
};
export default styles;