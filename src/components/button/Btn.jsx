
import React from 'react'

const Btn = ({ txt,style,onclick }) => {
    const styles = {
        background: 'linear-gradient(90.00deg, rgb(126, 144, 254),rgb(152, 115, 255) 100%)'
    }
  return (
	  <button
		  onClick={onclick}
			style={styles}
			className={`px-4 py-2 ${style} text-white font-normal leading-[27px] tracking-normal`}
		>
			{txt}
		</button>
	);
}

export default Btn
