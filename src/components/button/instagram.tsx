import { memo } from 'react';
import { FaInstagram } from 'react-icons/fa';

const Instagram = memo(() => (
  <div className='p-3 hover:bg-white hover:text-black'>
    <FaInstagram className='w-5 h-5' />
  </div>
));
export default Instagram;
