import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

import { editTasks } from '../../reducers/todo.js';

const EditModal = ({ data }) => {
  const classes = useStyles();

  //--------- LOCAL STATE ----------//
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState(data.task);

  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  //--------- FUNCTIONS DECLARATION ----------//

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //--------- DISPATCHING EDIT TASK THUNK ----------//

  const onEditTasks = (accessToken, taskId, editTask, userId) => {
    dispatch(editTasks(accessToken, taskId, editTask, userId));
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <i className="far fa-edit"></i>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <TextField
              color="secondary"
              variant="outlined"
              label="Edit your task"
              id="edit"
              type="text"
              placeholder="Edit your task here.."
              value={editTask}
              onChange={(event) => setEditTask(event.target.value)}
            ></TextField>
            <EditButton
              type="submit"
              onClick={() =>
                onEditTasks(accessToken, data._id, editTask, userId)
              }
            >
              <i class="fas fa-save"></i>
            </EditButton>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default EditModal;

//--------- STYLED COMPONENTS ----------//
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    padding: '200px',
    borderRadius: 5,
  },
}));

const Button = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    color: #ef737d;
    cursor: pointer;
  }
`;

const EditButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 30px;
  margin-top: 10px;
  &:hover {
    color: #ef737d;
    cursor: pointer;
  }
`;
