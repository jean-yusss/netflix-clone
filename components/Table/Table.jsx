import 'twin.macro';

import TableRow from '../TableRow/TableRow';

const Table = ({ plans, selectedPlan }) => {
  return (
    <table>
      <tbody tw='divide-y divide-[gray]'>
        <TableRow
          title='Monthly price'
          plans={plans}
          selectedPlan={selectedPlan}
        />
        <TableRow
          title='Video quality'
          plans={plans}
          selectedPlan={selectedPlan}
        />
        <TableRow
          title='Resolution'
          plans={plans}
          selectedPlan={selectedPlan}
        />
        <TableRow
          title='Watch on your TV, computer, mobile phone and tablet'
          plans={plans}
          selectedPlan={selectedPlan}
        />
      </tbody>
    </table>
  );
};

export default Table;
