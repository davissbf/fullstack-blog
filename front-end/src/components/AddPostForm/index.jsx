import React from 'react';
import {
  Button,
  TextField,
  Select,
  Input,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import useStyle from './styles';

const tags = ['fun', 'programming', 'health', 'science'];

const postSchema = yup.object().shape({
  title: yup.string().required(),
  suntitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
});

const AddPostForm = (open, handleClose) => {
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });

  const classes = useStyle();

  return (
    <Dialog open={open} handleClose={handleClose}>
      <DialogTitle>Criar Nova Postagem </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Para se inscrever neste site, digite seu endereço de e-mail aqui. Nós
          enviaremos atualizações ocasionalmente.
        </DialogContentText>
        <div className={classes.root}>
          <form noValidate autoComplete="off">
            <TextField
              id="title"
              label="hood"
              name="title"
              variant="outlined"
              size="small"
              inputRef={register}
              error={errors.title ? true : false}
              fullWidth
            />
            <TextField
              id="subtitle"
              label="Legenda"
              name="subtitle"
              variant="outlined"
              size="small"
              inputRef={register}
              error={errors.subtitle ? true : false}
              fullWidth
            />
            <Controller
              as={
                <Select
                  input={<Input />}
                  className={classes.textField}
                  fullWidth
                >
                  {tags.map((tag, index) => (
                    <MenuItem key={index} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              }
              name="tag"
              control={control}
              error={errors.tag ? true : false}
              defaultValue={tags[0]}
            />
            <TextField
              id="content"
              label="Content"
              name="content"
              multiline
              rows={4}
              variant="outlined"
              className={classes.textField}
              size="small"
              inputRef={register}
              error={errors.title ? true : false}
              fullWidth
            />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="inherit">Cancelar</Button>
        <Button type="submit" color="primary" variant="outlined">
          Publicar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPostForm;
