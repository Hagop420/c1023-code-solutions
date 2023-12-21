import React from 'react';

export const CustomButton = ({
  text,
  backgroundCol,
  contentContentcolor,
  border,
}) => {
  return (
    <>
      <button
        style={{
          background: backgroundCol,
          color: contentContentcolor,
          borderRadius: border,
        }}>
        {text}
      </button>
    </>
  );
};

CustomButton.defaultProps = {
  text: 'Hello World!',
  color: 'red',
};

export default CustomButton;
