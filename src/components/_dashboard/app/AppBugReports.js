import { alpha, experimentalStyled as styled } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// utils

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3, 0),
  color: "black",
  backgroundColor:"#FFFF"
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#f7005b',
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.main, 0)} 0%, ${alpha(
    theme.palette.error.main,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------


export default function AppBugReports() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <RemoveCircleOutlineIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        WITHDRAW
      </Typography>
    </RootStyle>
  );
}
