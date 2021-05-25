import React from 'react';
import { useHistory } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';

export default function Form() {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    defaultValues: {
      fullname: '',
      id: '',
      address: '',
      phone: '',
      email: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    history.push(`/thanks/${data.fullname}`);
  };
  return (
    <Container>
      <Title>Customer information</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputContainer
          required
          id='fullname'
          name='fullname'
          placeholder='Full name'
          {...register('fullname')}
        />
        <FormInputContainer
          required
          id='id'
          name='id'
          placeholder='id'
          {...register('id')}
        />
        <FormInputContainer
          required
          id='address'
          name='address'
          placeholder='Address'
          {...register('address')}
        />
        <FormInputContainer
          id='phone'
          name='phone'
          placeholder='phone'
          {...register('phone')}
        />
        <FormInputContainer
          required
          id='email'
          name='email'
          placeholder='email'
          {...register('email')}
        />
        <ButtonsBarContainer>
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={!isDirty || !isValid}
          >
            Submit
          </Button>
        </ButtonsBarContainer>
      </form>
    </Container>
  );
}
const Container = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 10px 0;
  color: #f5f5f5;
`;

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: black;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 70%;
  border: none;
  border-radius: 3px;
  border-bottom: 1px solid black;
  margin: 15px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

const ButtonsBarContainer = styled.div``;
