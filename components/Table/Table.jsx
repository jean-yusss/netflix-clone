import { HiOutlineCheck } from 'react-icons/hi';
import 'twin.macro';

const Table = ({ plans }) => {
  return (
    <table>
      <tbody tw='divide-y divide-[gray]'>
        <tr tw='flex flex-wrap items-center font-medium'>
          <td tw='w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base'>
            Monthly price
          </td>
          {plans.map(plan => (
            <td
              key={plan.id}
              tw='w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5'
            >
              ${plan.prices[0].unit_amount / 100}
            </td>
          ))}
        </tr>

        <tr tw='flex flex-wrap items-center font-medium'>
          <td tw='w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base'>
            Video quality
          </td>
          {plans.map(plan => (
            <td
              key={plan.id}
              tw='w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5'
            >
              {plan.metadata.videoQuality}
            </td>
          ))}
        </tr>

        <tr tw='flex flex-wrap items-center font-medium'>
          <td tw='w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base'>
            Resolution
          </td>
          {plans.map(plan => (
            <td
              key={plan.id}
              tw='w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5'
            >
              {plan.metadata.resolution}
            </td>
          ))}
        </tr>

        <tr tw='flex flex-wrap items-center font-medium'>
          <td tw='w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base'>
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {plans.map(plan => (
            <td
              key={plan.id}
              tw='w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5'
            >
              {plan.metadata.portability && (
                <HiOutlineCheck tw='h-8 w-8 inline-block' />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
