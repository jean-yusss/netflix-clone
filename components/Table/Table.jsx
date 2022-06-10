import 'twin.macro';

import TableRow from '../TableRow/TableRow';

const Table = () => {
  return (
    <table>
      <tbody tw='divide-y divide-[gray]'>
        <TableRow title='Monthly price' />
        <TableRow title='Video quality' />
        <TableRow title='Resolution' />
        <TableRow title='Watch on your TV, computer, mobile phone and tablet' />
      </tbody>
    </table>
  );
};

export default Table;
