/* eslint-env browser */
import React, {
  useEffect, createRef, useState, memo,
} from 'react';
import PropTypes from 'prop-types';
import { fromEvent } from 'rxjs';
import {
  map,
  concatMap,
  takeUntil,
} from 'rxjs/operators';
import {
  colorPickerSliderWrapperStyle,
  colorPickerSliderTrackStyle,
  ColorPickerSliderThumb,
} from './Styled';

const SIZE_THUMB = 36;
const limitMaxValue = (value, max) => (value > max ? max : value);
const convertLengthToColor = (length, width) => {
  const intervalWidth = width / 6;
  const value = length / intervalWidth;
  const valueFloor = Math.floor(value);
  const deltaValue = (16 * (value - valueFloor)).toString(16).replace('.', '');
  const hexStr = deltaValue.length > 1 ? `${deltaValue[0]}${deltaValue[1]}` : `${deltaValue[0]}0`;

  if (valueFloor === 0) {
    return `#ff${hexStr}00`;
  }
  if (valueFloor === 1) {
    const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
    const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
    return `#${updatedR}ff00`;
  }
  if (valueFloor === 2) {
    return `#00ff${hexStr}`;
  }
  if (valueFloor === 3) {
    const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
    const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
    return `#00${updatedR}ff`;
  }
  if (valueFloor === 4) {
    return `#${hexStr}00ff`;
  }
  if (valueFloor === 5) {
    const deltaR = (0xff - parseInt(hexStr, 16)).toString(16);
    const updatedR = deltaR.length > 1 ? deltaR : `0${deltaR}`;
    return `#ff00${updatedR}`;
  }
  return '#ff0000';
};

const ColorPickerSlider = memo(({
  handleGetColor,
}) => {
  const thumbRef = createRef();
  const trackRef = createRef();
  const [value, setValue] = useState(0);
  const [pickedColor, setPickedColor] = useState('#f00');

  const handleSetValue = (trackDOM, thumbDOM, mousePosX) => {
    const trackX = trackDOM.getBoundingClientRect().x;
    const trackWidth = trackDOM.clientWidth;
    const thumbX = limitMaxValue(mousePosX >= trackX ? (mousePosX - trackX) : 0, trackWidth);
    const color = convertLengthToColor(thumbX, trackWidth);

    setPickedColor(color);
    setValue(thumbX);
  };

  useEffect(() => {
    const thumbDOM = thumbRef.current;
    const trackDOM = trackRef.current;
    const { body } = document;
    const mouseDown = fromEvent(thumbDOM, 'mousedown');
    const mouseUp = fromEvent(body, 'mouseup');
    const mouseMove = fromEvent(body, 'mousemove');
    mouseDown
      .pipe(
        concatMap(() => mouseMove.pipe(takeUntil(mouseUp))),
        map((moveEvent) => moveEvent.clientX),
      )
      .subscribe((mousePosX) => {
        handleSetValue(trackDOM, thumbDOM, mousePosX);
      });
  }, []);

  useEffect(() => {
    const thumbDOM = thumbRef.current;
    const { body } = document;
    const mouseUp = fromEvent(body, 'mouseup');
    mouseUp
      .subscribe(() => {
        handleGetColor(thumbDOM.style.color);
      });
  }, []);

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
