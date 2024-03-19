import { memo } from 'react';
import { FaFacebookF } from 'react-icons/fa';

const Facebook = memo(() => (
  <div className='p-3 hover:bg-white hover:text-black'>
    <FaFacebookF className='w-5 h-5' />
  </div>
));
export default Facebook;
