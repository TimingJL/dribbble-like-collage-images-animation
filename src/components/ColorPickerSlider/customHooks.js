/* eslint-env browser */
import { useEffect } from 'react';
import { fromEvent } from 'rxjs';
import {
  map,
  concatMap,
  takeUntil,
} from 'rxjs/operators';

export const useMouseDrag = ({
  thumbRef,
  trackRef,
  handleSetValue,
}) => {
  useEffect(() => { // 監聽 thumb 拖曳行為以改變顏色
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
};

export const useMouseClickTrack = ({
  trackRef,
  handleSetValue,
}) => {
  useEffect(() => { // 點擊 track bar 可以使 thumb 直接跳到被點擊位置
    const trackDOM = trackRef.current;
    const mouseDown = fromEvent(trackDOM, 'mousedown');
    mouseDown
      .pipe(
        map((mouseEvent) => mouseEvent.clientX),
      )
      .subscribe((mousePosX) => {
        handleSetValue(trackDOM, mousePosX);
      });
  }, []);
};

export const useMouseUp = ({
  thumbRef,
  handleGetColor,
}) => {
  useEffect(() => { // 監聽 mouseup 行為，以取得事件完成後顏色
    const thumbDOM = thumbRef.current;
    const { body } = document;
    const mouseUp = fromEvent(body, 'mouseup');
    mouseUp
      .subscribe(() => {
        handleGetColor(thumbDOM.style.color);
      });
  }, []);
};

export const useTouchDrag = ({
  thumbRef,
  trackRef,
  handleSetValue,
}) => {
  useEffect(() => { // 監聽 thumb 拖曳行為以改變顏色
    const thumbDOM = thumbRef.current;
    const trackDOM = trackRef.current;
    const { body } = document;
    const touchStart = fromEvent(thumbDOM, 'touchstart');
    const touchUp = fromEvent(body, 'touchend');
    const touchEnd = fromEvent(body, 'touchmove');
    touchStart
      .pipe(
        concatMap(() => touchEnd.pipe(takeUntil(touchUp))),
        map((touchEvent) => touchEvent.touches[0].clientX),
      )
      .subscribe((touchPosX) => {
        handleSetValue(trackDOM, touchPosX);
      });
  }, []);
};

export const useTouchClickTrack = ({
  trackRef,
  handleSetValue,
}) => {
  useEffect(() => { // 點擊 track bar 可以使 thumb 直接跳到被點擊位置
    const trackDOM = trackRef.current;
    const touchStart = fromEvent(trackDOM, 'touchstart');
    touchStart
      .pipe(
        map((touchEvent) => touchEvent.touches[0].clientX),
      )
      .subscribe((touchPosX) => {
        handleSetValue(trackDOM, touchPosX);
      });
  }, []);
};

export const useTouchUp = ({
  thumbRef,
  handleGetColor,
}) => {
  useEffect(() => { // 監聽 mobile touch 行為，以取得事件完成後顏色
    const thumbDOM = thumbRef.current;
    const { body } = document;
    const touchEnd = fromEvent(body, 'touchend');
    touchEnd
      .subscribe(() => {
        handleGetColor(thumbDOM.style.color);
      });
  }, []);
};
