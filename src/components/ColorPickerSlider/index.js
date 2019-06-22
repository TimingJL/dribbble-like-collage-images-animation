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
import {
  limitMaxValue,
  convertLengthToColor,
} from './utils';
import {
  SIZE_THUMB,
  COLOR_RED,
} from './constants';


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
        handleSetValue(trackDOM, mousePosX);
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
