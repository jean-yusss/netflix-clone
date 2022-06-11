import { useRecoilValue } from 'recoil';
import { planState, selectedPlanState } from '../../atoms/planAtom';

import {
	CheckIcon,
	TableData,
	TableRowContainter,
	TableRowTitle
} from './TableRowStyles';

const TableRow = ({ title }) => {
	const plans = useRecoilValue(planState);
	const selectedPlan = useRecoilValue(selectedPlanState);

	return (
		<TableRowContainter>
			<TableRowTitle>{title}</TableRowTitle>
			{plans.map(plan => (
				<TableData key={plan.id} $selectedPlan={selectedPlan} $plan={plan}>
					{
						{
							'Monthly price': `$${plan.prices[0].unit_amount / 100}`,
							'Video quality': plan.metadata.videoQuality,
							Resolution: plan.metadata.resolution,
							'Watch on your TV, computer, mobile phone and tablet': plan.metadata
								.portability === 'true' && <CheckIcon />
						}[title]
					}
				</TableData>
			))}
		</TableRowContainter>
	);
};

export default TableRow;
