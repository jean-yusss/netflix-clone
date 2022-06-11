import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../hooks/useAuth';

import * as S from './LoginFormStyles';

const LoginForm = () => {
	const { signIn, signUp } = useAuth();

	const [login, setLogin] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = async ({ email, password }) => {
		login ? await signIn(email, password) : await signUp(email, password);
	};

	return (
		<S.LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
			<S.LoginFormTitle>Sign In</S.LoginFormTitle>

			<S.InputContainer>
				<S.Label>
					<S.Email {...register('email', { required: true })} />
					{errors.email && <S.Error>Please enter a valid email or phone number.</S.Error>}
				</S.Label>
				<S.Label>
					<S.Password {...register('password', { required: true })} />
					{errors.password && (
						<S.Error>Your password must contain between 4 and 60 character</S.Error>
					)}
				</S.Label>
			</S.InputContainer>

			<S.LoginButton onClick={() => setLogin(true)}>Sign In</S.LoginButton>

			<S.SignupContainer>
				{'New to Netflix? '}
				<S.SignupButton onClick={() => setLogin(false)}>Sign up now.</S.SignupButton>
			</S.SignupContainer>
		</S.LoginFormContainer>
	);
};

export default LoginForm;
