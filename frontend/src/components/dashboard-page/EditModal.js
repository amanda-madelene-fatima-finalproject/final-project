import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';

import { editTasks } from '../../reducers/todo.js';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

const EditModal = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editTask, setEditTask] = useState(data.task);

  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  // const taskId = useSelector((store) => store.todo.taskId);

  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onEditTasks = (accessToken, taskId, editTask, userId) => {
    dispatch(editTasks(accessToken, taskId, editTask, userId));
  };

  return (
    <>
      <Button size="small" variant="text" color="primary" onClick={handleOpen}>
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
            <input
              // key={index}
              type="text"
              placeholder="Add new task here.."
              value={editTask}
              onChange={(event) => setEditTask(event.target.value)}
            />
            <Button
              type="submit"
              onClick={() =>
                onEditTasks(accessToken, data._id, editTask, userId)
              }
            >
              <i class="fas fa-save"></i>
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default EditModal;
