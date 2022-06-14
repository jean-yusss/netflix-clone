import { useState } from 'react';

import useAuth from '../../hooks/useAuth';

import * as S from './DropdownMenuStyles';

const DropdownMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const { logout } = useAuth();

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<S.DropdownMenuContainer>
			<S.Browse
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				Browse
			</S.Browse>
			<S.Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
			>
				<S.MenuItem onClick={handleClose}>Home</S.MenuItem>
				<S.MenuItem onClick={handleClose}>TV Shows</S.MenuItem>
				<S.MenuItem onClick={handleClose}>Movies</S.MenuItem>
				<S.MenuItem onClick={handleClose}>{'New & Popular'}</S.MenuItem>
				<S.MenuItem onClick={handleClose}>My List</S.MenuItem>
				<S.MenuItem onClick={handleClose}>{'Audio & Subtitles'}</S.MenuItem>
				<S.MenuItem onClick={logout}>Logout</S.MenuItem>
			</S.Menu>
		</S.DropdownMenuContainer>
	);
};

export default DropdownMenu;
