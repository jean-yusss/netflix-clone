import tw from 'twin.macro';
import { HiOutlineCheck } from 'react-icons/hi';
import { useRecoilValue } from 'recoil';
import { planState, selectedPlanState } from '../../atoms/planAtom';

const TableRow = ({ title }) => {
  const selectedPlan = useRecoilValue(selectedPlanState);
  const plans = useRecoilValue(planState);

  return (
    <tr tw='flex flex-wrap items-center font-medium'>
      <td tw='w-full p-2.5 text-center text-sm font-normal text-white md:w-2/5 md:p-3.5 md:text-left md:text-base'>
        {title}
      </td>
      {plans.map(plan => (
        <td
          key={plan.id}
          tw='w-[calc(100%/3)] p-2.5 text-center md:w-[calc(60%/3)] md:p-3.5'
          css={
            selectedPlan.id === plan.id ? tw`text-[#E50914]` : tw`text-[gray]`
          }
        >
          {
            {
              'Monthly price': `$${plan.prices[0].unit_amount / 100}`,
              'Video quality': plan.metadata.videoQuality,
              Resolution: plan.metadata.resolution,
              'Watch on your TV, computer, mobile phone and tablet': plan
                .metadata.portability === 'true' && (
                <HiOutlineCheck tw='h-8 w-8 inline-block' />
              )
            }[title]
          }
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
