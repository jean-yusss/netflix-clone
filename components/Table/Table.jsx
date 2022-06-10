import TableRow from '../TableRow/TableRow';

import { TableBody, TableContainer } from './TableStyles';

const Table = () => (
	<TableContainer>
		<TableBody>
			<TableRow title='Monthly price' />
			<TableRow title='Video quality' />
			<TableRow title='Resolution' />
			<TableRow title='Watch on your TV, computer, mobile phone and tablet' />
		</TableBody>
	</TableContainer>
);

export default Table;
