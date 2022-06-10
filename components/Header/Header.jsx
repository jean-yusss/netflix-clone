import Link from 'next/link';
import { useState, useEffect } from 'react';

import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Navigation from '../Navigation/Navigation';

import * as S from './HeaderStyles';

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
		};

		window.addEventListener('scroll', handleScroll);

		// Cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<S.HeaderContainer $isScrolled={isScrolled}>
			<S.LeftContainer>
				<S.NetflixLogo />
				<DropdownMenu />
				<Navigation />
			</S.LeftContainer>

			<S.RightContainer>
				<S.SearchIcon />
				<S.HeaderText>Kids</S.HeaderText>
				<S.HeaderText>DVD</S.HeaderText>
				<S.BellIcon />
				<Link href='/account'>
					<S.AccountIcon />
				</Link>
			</S.RightContainer>
		</S.HeaderContainer>
	);
};

export default Header;
