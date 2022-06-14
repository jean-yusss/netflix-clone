import tw, { styled } from 'twin.macro';
import Button from '@mui/material/Button';
import BasicMenu from '@mui/material/Menu';
import Item from '@mui/material/MenuItem';

export const DropdownMenuContainer = tw.div`
  md:!hidden
`;

export const Browse = styled(Button)`
	${tw`!capitalize !text-white`}
`;

export const Menu = styled(BasicMenu)`
	${tw`md:hidden`}

	& .MuiPaper-root {
		${tw`!absolute !top-16 !left-0 !rounded-none !border !border-[gray] !bg-black/90 !text-white`}
	}

	& .MuiList-root {
		${tw`!p-0`}
	}

	& .MuiMenuItem-root {
		${tw`!block !w-72 !py-3.5 !text-center !text-sm !font-light !text-[#b3b3b3] !transition !duration-200 hover:!bg-[gray] hover:!bg-opacity-10 first:cursor-default first:!font-normal first:!text-white`}
	}
`;

export const MenuItem = styled(Item)``;
