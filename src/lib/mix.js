import { hex2rgb, rgb2hex } from './convert';

export default (c1, c2, weight) => {
  const c1Arr = hex2rgb(c1);
  const c2Arr = hex2rgb(c2);
  const p = weight / 100;
  const w = p * 2 - 1;

  const w1 = (w + 1) / 2;
  const w2 = 1 - w1;

  return rgb2hex([
    c1Arr[0] * w1 + c2Arr[0] * w2,
    c1Arr[1] * w1 + c2Arr[1] * w2,
    c1Arr[2] * w1 + c2Arr[2] * w2
  ]);
};
