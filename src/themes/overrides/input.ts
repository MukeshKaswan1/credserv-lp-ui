// ** MUI Imports
import { Theme } from '@mui/material/styles';

const input = (theme: Theme) => {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#667085',
          '&.Mui-focused': {
            color: '#4A4B4B',
          },
          '&.Mui-error': {
            color: '#FF4C51',
          },
          '&.Mui-disabled': {
            color: '#D9DCDC',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`,
          },
          '&.Mui-disabled:before': {
            borderBottom: `1px solid ${theme.palette.text.disabled}`,
          },
          '&.Mui-focused .MuiInput-notchedOutline': {
            borderColor: '#4A4B4B',
            borderWidth: 1,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF4C51',
          },
          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF4C51',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: `rgba(255, 0, 0, 0.04)`,
          '&:hover:not(.Mui-disabled)': {
            backgroundColor: `rgba(255, 0, 0, 0.08)`,
          },
          '&:before': {
            borderBottom: `1px solid #D0D5DD`,
          },
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: `1px solid #D0D5DD`,
          },
          '&.Mui-focused .MuiFilledInput-notchedOutline': {
            borderColor: '#4A4B4B',
            borderWidth: 1,
          },
          '&.Mui-error .MuiFilledInput-notchedOutline': {
            borderColor: '#FF4C51',
          },
          '&:hover.Mui-error .MuiFilledInput-notchedOutline': {
            borderColor: '#FF4C51',
          },
          '&.Mui-disabled .MuiFilledInput-notchedOutline': {
            borderColor: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D0D5DD',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#D0D5DD',
            borderWidth: 1,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#4A4B4B',
            borderWidth: 1,
          },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF4C51',
          },
          '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF4C51',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E3E5E5',
          },
          '&:hover.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: '#E3E5E5',
          },
        },
        // input: {
        //   padding: '6px 10px',
        // },
      },
    },
  };
};

export default input;

// return {
//   MuiInputLabel: {
//     styleOverrides: {
//       root: {
//         color: theme.palette.text.secondary,
//       },
//     },
//   },
//   MuiInput: {
//     styleOverrides: {
//       root: {
//         '&:before': {
//           borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`,
//         },
//         '&:hover:not(.Mui-disabled):before': {
//           borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`,
//         },
//         '&.Mui-disabled:before': {
//           borderBottom: `1px solid ${theme.palette.text.disabled}`,
//         },
//       },
//     },
//   },
//   MuiFilledInput: {
//     styleOverrides: {
//       root: {
//         backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
//         '&:hover:not(.Mui-disabled)': {
//           backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`,
//         },
//         '&:before': {
//           borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`,
//         },
//         '&:hover:not(.Mui-disabled):before': {
//           borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`,
//         },
//       },
//     },
//   },
//   MuiOutlinedInput: {
//     styleOverrides: {
//       root: {
//         '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
//           borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`,
//         },
//         '&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
//           borderColor: theme.palette.error.main,
//         },
//         '& .MuiOutlinedInput-notchedOutline': {
//           borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`,
//         },
//         '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
//           borderColor: theme.palette.text.disabled,
//         },
//       },
//     },
//   },
// };
