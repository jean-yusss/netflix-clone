import { NavigationContainer, NavigationItem } from './NavigationStyles';

const Navigation = () => (
	<NavigationContainer>
		<NavigationItem>Home</NavigationItem>
		<NavigationItem>TV Shows</NavigationItem>
		<NavigationItem>Movies</NavigationItem>
		<NavigationItem>{'New & Popular'}</NavigationItem>
		<NavigationItem>My List</NavigationItem>
		<NavigationItem>{'Audio & Subtitles'}</NavigationItem>
	</NavigationContainer>
);

export default Navigation;
