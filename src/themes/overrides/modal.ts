const Modal = () => {
  return {
    MuiModal: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'scroll',
          // "& > .MuiBackdrop-root": {
          //   backdropFilter: "blur(2px)",
          // },
        },
      },
    },
  };
};

export default Modal;
