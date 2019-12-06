import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { IconButton, Badge} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';


function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius:'5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
}));

export default function LoginModal(props) {
  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)
  const [username,setUsername] = React.useState('')
  const [password,setPassword] = React.useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleLogin = (e) =>{
    e.preventDefault()
    if(username !=='' && password !==''){
        props.handleLogin(username)
        handleClose()
    }
  }
  const handleChangeUsername = (event) =>{
    setUsername(event.target.value)
  }
  const handleChangePassword = (event) =>{
      setPassword(event.target.value)
  }
  return (
    <>
        <IconButton aria-label="show 17 new notifications" color="inherit" onClick={handleOpen}>
            <Badge badgeContent={0} color="secondary">
            <PersonIcon />
            </Badge>
        </IconButton>
            <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description" 
            open={open}
            onClose={handleClose}
            >
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title" style={{textDecoration:'none'}}>Login</h2>
                <p id="simple-modal-description">
                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Usuario"
                        onChange={handleChangeUsername.bind(this)}
                        value={username}
                        style={{borderRadius:'5px'}}
                    ></input>
                    <input
                        placeholder="Senha"
                        type="password"
                        onChange={handleChangePassword.bind(this)}
                        style={{borderRadius:'5px'}}
                    ></input>
                    <button onClick={handleLogin} className="loginModalButton">Fazer Login</button>
                </form>
                </p>
    
            </div>
            </Modal>
    </>
  );
}