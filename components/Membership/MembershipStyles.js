import tw from 'twin.macro';

export const MembershipContainer = tw.div`
  mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-l-0 md:border-r-0 md:border-t md:border-b-0 md:px-0
`;

export const MembershipHeading = tw.div`
 space-y-2 py-4
`;

export const MembershipTitle = tw.h2`
  text-lg text-[gray]
`;

export const CancelMembershipButton = tw.button`
  h-10 w-3/5 whitespace-nowrap bg-gray-300 py-2 text-sm font-medium text-black shadow-md hover:bg-gray-200 md:w-4/5
`;

export const UserPanel = tw.div`
  col-span-3
`;

export const MembershipDetails = tw.div`
  flex flex-col justify-between border-b border-white/10 py-4 md:flex-row
`;

export const EmailAndPasswordContainer = tw.div``;

export const Email = tw.p`
  font-medium
`;

export const Password = tw.p`
  text-[gray]
`;

export const MembershipLinkContainer = tw.div`
  md:text-right
`;

export const MembershipLink = tw.p`
  cursor-pointer text-blue-500 hover:underline
`;

export const BillingDetails = tw.div`
  flex flex-col justify-between py-4 md:flex-row md:pb-0
`;

export const BillingDate = tw.p``;
