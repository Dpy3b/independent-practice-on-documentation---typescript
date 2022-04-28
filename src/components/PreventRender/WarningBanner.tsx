import React, { FC } from "react";

interface WarningBanner{
  warn: boolean
}

const WarningBanner:FC<WarningBanner> = (props) => {
  if (!props.warn){
		return null;
		// Сам факт возврата null из метода render компонента никак не влияет на срабатывание методов жизненного цикла компонента. Например, componentDidUpdate будет всё равно вызван.
	}
  return <div className='warning'>Предупреждение!</div>;
};

export default WarningBanner;
