import {store} from "../../store";


// @ts-ignore
export const computeThePosition = async ({ clientX, clientY, floating}): Promise<{x: number, y: number}> => {

  const {innerWidth, innerHeight, scrollY} = window;

  let newX = Number(clientX);
  let newY = Number(clientY);

  let xTransform = 20;
  let yTransform = 20;

  const halfwayPoint = {
    x: innerWidth / 2,
    xPositiveBumper: window.innerWidth - 200,
    y: innerHeight / 2,
    yPositiveBumper: floating ? innerHeight - floating.clientHeight : innerHeight,
  }

  let potentialX = newX + xTransform;
  let potentialY = newY + yTransform;

  if (halfwayPoint.xPositiveBumper <= potentialX) {
    newX = clientX - (floating?.clientWidth ?? 0) ?? 200;
    xTransform = 0;
  }
  if (halfwayPoint.yPositiveBumper <= potentialY) {
    newY = clientY - (floating?.clientHeight * 1.2 ?? 0) ?? 100;
    yTransform = 0;
  }

  return {x: newX + xTransform, y: newY + yTransform + scrollY}
}

// @ts-ignore
export const HandleMouseMove = ({ clientX, clientY}): any => {
  let floating = document.getElementById("floating");
  if (!floating) {
    floating = document.getElementById("floating");
  }

  if (!floating) return;

  computeThePosition({ clientX, clientY, floating})
    .then(({ x, y }) => {
      if (!floating) return;

      const {ui} = store.getState();

      Object.assign(floating.style, {
        top: `${y}px`,
        left: `${x}px`,
        // @ts-ignore
        display: ui.displayCursorPopover ? '' : 'none',
      });
      // @ts-ignore
      floating.innerText = ui.cursorPopoverText ?? 'Oops, it looks like you forgot to specify infoText!'
  });
}
