export default {
    nav: {
      primary: {
        bg: 'red',
        margin: 0,
        padding: 20,
        display: 'flex',
        flexDirection: 'row'
      },
      secondary: {
        bg: 'white',
        padding: '1%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
    },
    navItem: {
        primary: {
          bg: 'red',
          color: 'white',
          fontSize: '18px',
          border: 'none'
        }
    },
    content: {
        primary: {
          bg: '#E7E4E4',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '100px'
        }
    },
    panel: {
        center: {
          bg: 'white',
          marginTop: '1%',
          gridColumnStart: 4,
          gridColumnEnd: 10,
          gridRowStart: 1,
          gridRowEnd: 6,
          borderRadius: '3px'
        },
        centerStepTwo: {
          bg: '#F5F3F3',
          marginTop: '1%',
          gridColumnStart: 4,
          gridColumnEnd: 10,
          gridRowStart: 1,
          gridRowEnd: 9,
          borderRadius: '3px',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '100px'
        },
        sub: {
          bg: 'white',
          marginTop: '1%',
          gridColumnStart: 4,
          gridColumnEnd: 10,
          gridRowStart: 6,
          gridRowEnd: 8,
          borderRadius: '3px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        subStepTwo: {
          bg: 'white',
          marginTop: '2%',
          marginLeft: '2%',
          marginRight: '2%',
          gridColumnStart: 4,
          gridColumnEnd: 10,
          gridRowStart: 6,
          gridRowEnd: 9,
          borderRadius: '3px',
        }
    },
    panelItem: {
      title: {
        bg: '#F5F3F3',
        gridColumnStart: 1,
        gridColumnEnd: 13,
        gridRowStart: 1,
        gridRowEnd: 2,
        borderRadius: '10px'
      },
      top: {
        bg: 'white',
        marginLeft: '2%',
        marginRight: '2%',
        gridColumnStart: 1,
        gridColumnEnd: 13,
        gridRowStart: 2,
        gridRowEnd: 4,
        borderRadius: '10px'
      },
      mid: {
        bg: 'white',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '1%',
        gridColumnStart: 1,
        gridColumnEnd: 13,
        gridRowStart: 4,
        gridRowEnd: 6,
        borderRadius: '10px'
      },
      down: {
        bg: 'white',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '1%',
        gridColumnStart: 1,
        gridColumnEnd: 13,
        gridRowStart: 6,
        gridRowEnd: 8,
        borderRadius: '10px'
      }
    },
    title: {
        main: {
          fontSize: '24px',
          margin: 20,
          marginBottom: 40,
          fontWeight: 'bold'
        },
        center: {
          fontSize: '20px',
          margin: 20,
          marginBottom: 10,
          fontWeight: 'bold',
          textAlign: 'center'
        },
        sub: {
          fontSize: '18px',
          margin: 20,
        }
    },
    nextStepButton: {
        focus: {
          fontSize: '14px',
          color: 'white',
          bg: 'red',
          width: '45%',
          margin: '2%',
          paddingTop: '3%',
          paddingBottom: '3%',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          textAlign: 'center'
        },
        unFocus: {
          fontSize: '18px',
          bg: 'red'
        }
    },
    backStepButton: {
      focus: {
        fontSize: '14px',
        color: 'blue',
        bg: '#F5F3F3',
        width: '45%',
        margin: '2%',
        paddingTop: '3%',
        paddingBottom: '3%',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        textAlign: 'center'
      },
      unFocus: {
        fontSize: '18px',
        bg: 'red'
      }
    },
    input: {
      primary: {
        fontSize: '20px',
        marginLeft: 30,
        marginBottom: 40,
        width: '80%',
        bg: '#F5F3F3',
        border: 'none',
        height: 50
      }
    },
    label: {
      primary: {
        fontSize: '18px',
        marginLeft: 30,
        width: '80%',
        borderBottom: '1px solid'
      }
    },
    colorCircleBar: {
      primary: {
        marginLeft: 30
      }
    }
};