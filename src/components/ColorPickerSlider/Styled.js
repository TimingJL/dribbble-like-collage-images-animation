export const colorPickerSliderWrapperStyle = {
  position: 'relative',
  width: '320px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
};

export const colorPickerSliderTrackStyle = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '6px',
  borderRadius: '0.5em',
  background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)',
};

export const getColorPickerSliderTrackStyle = ({
  thumbLeft,
  thumbSize,
}) => ({
  position: 'absolute',
  left: `${thumbLeft}px`,
  transform: `translateX(-${thumbSize / 2}px)`,
  width: `${thumbSize}px`,
  height: `${thumbSize}px`,
  background: 'white',
  borderRadius: '100%',
  boxSizing: 'border-box',
  border: '0.4em solid currentColor',
  cursor: 'pointer',

  ':hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 0.4em 1em rgba(0,0,0,0.15)',
    transition: 'all 0.2s ease-in-out',
  },
});
