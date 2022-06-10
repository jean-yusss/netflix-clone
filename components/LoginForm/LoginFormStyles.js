import tw, { css, styled } from 'twin.macro';

export const LoginFormContainer = tw.form`
	relative mt-16 space-y-8 rounded bg-black/75 py-10 px-8 md:mt-0 md:max-w-md md:px-14
`;

export const LoginFormTitle = tw.h1`
	text-3xl font-semibold
`;

export const InputContainer = tw.div`
	space-y-4
`;

export const Label = tw.label`
	inline-block w-full
`;

const inputStyles = css`
	${tw`w-full rounded bg-[#333] px-5 py-3.5 placeholder-[gray] outline-none focus:bg-[#454545]`}
`;

export const Email = styled.input.attrs({
	type: 'email',
	placeholder: 'Email or phone number'
})`
	${inputStyles};
`;

export const Password = styled.input.attrs({
	type: 'password',
	placeholder: 'Password'
})`
	${inputStyles};
`;

export const Error = tw.p`
	p-1 text-[13px] font-light text-[#E87C03]
`;

export const LoginButton = tw.button`
	w-full rounded bg-[#E50914] py-3 font-semibold
`;

export const SignupContainer = tw.div`
	text-[gray]
`;

export const SignupButton = styled.button.attrs({ type: 'submit' })`
	${tw`text-white hover:underline`}
`;
