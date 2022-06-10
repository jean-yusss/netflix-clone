import 'twin.macro';
import { HiOutlineCheck } from 'react-icons/hi';

const PlansHeading = () => {
  return (
    <>
      <h1 tw='mb-3 text-3xl font-medium'>
        {`Choose the plan that's right for you`}
      </h1>

      <ul>
        <li tw='flex items-center gap-x-2 text-lg'>
          <HiOutlineCheck tw='h-7 w-7 text-[#E50914]' />
          Watch all you want. Ad-free.
        </li>
        <li tw='flex items-center gap-x-2 text-lg'>
          <HiOutlineCheck tw='h-7 w-7 text-[#E50914]' />
          Recommendations just for you.
        </li>
        <li tw='flex items-center gap-x-2 text-lg'>
          <HiOutlineCheck tw='h-7 w-7 text-[#E50914]' />
          Change or cancel your plan anytime.
        </li>
      </ul>
    </>
  );
};

export default PlansHeading;
