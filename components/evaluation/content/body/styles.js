const styles = {
    content: {
        backgroundColor: '#fff',
    },
    customTable: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    customTh: {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
    },
    customTd: {
        padding: '10px',
        textAlign: 'center',
    },
    customRow: {
        '&:hover': {
            backgroundColor: '#ebebeb',
            '& $deleteIcon': {
                display: 'block',
            },
        },
        cursor: 'pointer',
    },
    customFirstTd: {
        padding: '10px',
        textAlign: 'center',
        fontWeight: 'bold',
        // position: 'relative',
    },
    deleteIcon: {
        display: 'none',
        marginLeft: '5rem'
    },
};
export default styles;