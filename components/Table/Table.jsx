import { HiOutlineCheck } from 'react-icons/hi';
import tw from 'twin.macro';

const Table = ({ plans, selectedPlan }) => {
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
              css={
                selectedPlan.id === plan.id
                  ? tw`text-[#E50914]`
                  : tw`text-[gray]`
              }
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
              css={
                selectedPlan.id === plan.id
                  ? tw`text-[#E50914]`
                  : tw`text-[gray]`
              }
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
              css={
                selectedPlan.id === plan.id
                  ? tw`text-[#E50914]`
                  : tw`text-[gray]`
              }
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
              css={
                selectedPlan.id === plan.id
                  ? tw`text-[#E50914]`
                  : tw`text-[gray]`
              }
            >
              {plan.metadata.portability === 'true' && (
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
