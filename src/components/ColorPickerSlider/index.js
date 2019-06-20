/* eslint-env browser */
import React, {
  useEffect, createRef, useState, memo,
} from 'react';
import { fromEvent } from 'rxjs';
import {
  map,
  concatMap,
  takeUntil,
} from 'rxjs/operators';
import {
  colorPickerSliderWrapperStyle,
  colorPickerSliderTrackStyle,
  getColorPickerSliderTrackStyle,
} from './Styled';

const SIZE_THUMB = 36;
const limitMaxValue = (value, max) => (value > max ? max : value);

const ColorPickerSlider = memo(() => {
  const thumbRef = createRef();
  const trackRef = createRef();
  const [value, setValue] = useState(0);

  const handleSetValue = (trackDOM, mousePosX) => {
    const trackX = trackDOM.getBoundingClientRect().x;
    const trackWidth = trackDOM.clientWidth;
    const thumbX = limitMaxValue(mousePosX >= trackX ? (mousePosX - trackX) : 0, trackWidth);
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
  }, [thumbRef, trackRef]);

  return (
    <div style={colorPickerSliderWrapperStyle}>
      <div ref={trackRef} style={colorPickerSliderTrackStyle}>
        <div ref={thumbRef} style={getColorPickerSliderTrackStyle({ thumbLeft: value, thumbSize: SIZE_THUMB })} />
      </div>
    </div>
  );
});

export default ColorPickerSlider;
