import { CheckIcon, List, ListItem, PlansTitle } from './PlansHeadingStyles';

const PlansHeading = () => (
	<>
		<PlansTitle>{`Choose the plan that's right for you`}</PlansTitle>

		<List>
			<ListItem>
				<CheckIcon />
				Watch all you want. Ad-free.
			</ListItem>
			<ListItem>
				<CheckIcon />
				Recommendations just for you.
			</ListItem>
			<ListItem>
				<CheckIcon />
				Change or cancel your plan anytime.
			</ListItem>
		</List>
	</>
);

export default PlansHeading;
