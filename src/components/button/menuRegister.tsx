import { memo, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import './menuRegister.less';

type T = {
  revert?: boolean;
};

const MenuRegister = memo(({ revert }: T) => {
  useEffect(() => {}, []);
  return (
    <div className={twMerge('MenuRegister', revert ? 'MenuRegisterRevert' : '')}>
      <span>立即報名</span>
      <span>Register</span>
    </div>
  );
});
export default MenuRegister;
