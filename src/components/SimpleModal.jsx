import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 100,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4,
      outline: 'none',
    },
  });

function SimpleModal({ classes, children, modal }) {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { closeModal: () => modal.toggleModal(false) })
  );
  console.log(modal)
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modal.isOpen}
        onClose={() => { modal.toggleModal(false) }}
      >
        <div style={getModalStyle()} className={classes.paper}>
          {childrenWithProps}
        </div>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(SimpleModal);
