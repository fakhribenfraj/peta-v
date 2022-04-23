import { Theme } from '@mui/material'
const styles = (theme: Theme) => ({
  logo: {
    width: '7rem',
    marginBottom: '1rem'
  },
  title: {
    color: `${theme.palette?.common.white}`
  },
  paper: {
    backgroundImage: `linear-gradient(to bottom right ,${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '0 0 1.6rem 1.6rem'
  },
  tabContainer: {
    paddingBottom: 0
  },
  indicator: {
    backgroundColor: 'purple'
  },
  tab: {
    color: `${theme.palette.primary.main}`,
    width: '50%',
    borderRadius: '50rem',
    transition: 'all .2s',
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      zIndex: theme.zIndex.appBar,
      color: `${theme.palette.common.white}`
    }
  },
  tabs: {
    margin: '.7rem 2.2rem',
    '& .MuiTabs-indicator': {
      backgroundColor: `${theme.palette.primary.main}`,
      zIndex: theme.zIndex.appBar - 1,
      height: '100%',
      borderRadius: '50rem'
    },
    '.MuiTabs-flexContainer': {
      justifyContent: 'center',
      border: `.2rem solid ${theme.palette.primary.main}`,
      borderRadius: '50rem'
    }
  },
  form: {
    padding: '1rem 2rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: '.8rem'
  },
  button: {
    width: 'max-content',
    margin: '2rem 0 0',
    padding: '.4rem 3rem'
  },
  input: {
    color: `gray`
  }
})
export default styles
