import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 60,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });

function SimpleModal(props) {
    const [isOpen, toggleModal] = useState(false);
    const { classes } = props;

    return (
      <div>
        <Button onClick={() => { toggleModal(true) }}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={isOpen}
          onClose={() => {toggleModal(false)}}
        >
          <div style={getModalStyle()} className={classes.paper}>
            {props.children}
          </div>
        </Modal>
      </div>
    );
}

export default withStyles(styles)(SimpleModal);
