/* eslint-env browser */
import React, {
  createRef, useState, memo,
} from 'react';
import PropTypes from 'prop-types';
import {
  colorPickerSliderWrapperStyle,
  colorPickerSliderTrackStyle,
  ColorPickerSliderThumb,
} from './Styled';
import {
  limitMaxValue,
  convertLengthToColor,
} from './utils';
import {
  SIZE_THUMB,
  COLOR_RED,
} from './constants';
import {
  useMouseDrag,
  useTrackClick,
  useMouseUp,
} from './customHooks';


const ColorPickerSlider = memo(({
  handleGetColor,
}) => {
  const thumbRef = createRef();
  const trackRef = createRef();
  const [value, setValue] = useState(0);
  const [pickedColor, setPickedColor] = useState(COLOR_RED);

  const handleSetValue = (trackDOM, mousePosX) => {
    const trackX = trackDOM.getBoundingClientRect().x;
    const trackWidth = trackDOM.clientWidth;
    const thumbX = limitMaxValue(mousePosX >= trackX ? (mousePosX - trackX) : 0, trackWidth);
    const color = convertLengthToColor(thumbX, trackWidth);

    setPickedColor(color);
    setValue(thumbX);
  };

  useMouseDrag({ thumbRef, trackRef, handleSetValue });
  useTrackClick({ trackRef, handleSetValue });
  useMouseUp({ thumbRef, handleGetColor });


  return (
    <div style={colorPickerSliderWrapperStyle}>
      <div ref={trackRef} style={colorPickerSliderTrackStyle}>
        <ColorPickerSliderThumb
          ref={thumbRef}
          style={{
            width: `${SIZE_THUMB}px`,
            height: `${SIZE_THUMB}px`,
            left: `${value}px`,
            border: `0.4em solid ${pickedColor}`,
            color: `${pickedColor}`,
          }}
        />
      </div>
    </div>
  );
});

ColorPickerSlider.propTypes = {
  handleGetColor: PropTypes.func,
};

ColorPickerSlider.defaultProps = {
  handleGetColor: () => {},
};

export default ColorPickerSlider;
