import luma from "./lib/luma";
import contrast from "./lib/contrast";
import mix from "./lib/mix";
import shade from "./lib/shade";
import spin from "./lib/spin";
import tint from "./lib/tint";

const genarate = (n, main) => {
  switch (n) {
    // モノクロ
    case "1":
      return {
        sub1: main
          ? contrast(contrast(main), tint(main, 48), shade(main, 24))
          : "",
        sub2: main ? contrast(main, tint(main, 18), shade(main, 16)) : "",
        sub3: main ? contrast(main, tint(main, 36), shade(main, 32)) : "",
        sub4: main ? contrast(main, tint(main, 72), shade(main, 64)) : "",
        sub5: main
          ? `rgb(${luma(main) * 100}%,${luma(main) * 100}%,${luma(main) *
              100}%)`
          : ""
      };
    // 類似色
    case "2":
      return {
        sub1: main ? contrast(main, tint(main, 52), shade(main, 32)) : "",
        sub2: main ? spin(main, 30) : "",
        sub3: main
          ? contrast(main, tint(spin(main, 30), 52), shade(spin(main, 30), 32))
          : "",
        sub4: main ? spin(main, -30) : "",
        sub5: main
          ? contrast(
              main,
              tint(spin(main, -30), 52),
              shade(spin(main, -30), 32)
            )
          : ""
      };
    // 補色
    case "3":
      return {
        sub1: main ? tint(main, 68) : "",
        sub2: main ? shade(main, 48) : "",
        sub3: main ? spin(main, 180) : "",
        sub4: main ? tint(spin(main, 180), 68) : "",
        sub5: main ? shade(spin(main, 180), 48) : ""
      };
    // トライアド
    case "4":
      return {
        sub1: main ? contrast(main, tint(main, 52), shade(main, 32)) : "",
        sub2: main ? spin(main, 120) : "",
        sub3: main
          ? contrast(
              main,
              tint(spin(main, 120), 52),
              shade(spin(main, 120), 32)
            )
          : "",
        sub4: main ? spin(main, -120) : "",
        sub5: main
          ? contrast(
              main,
              tint(spin(main, -120), 52),
              shade(spin(main, -120), 32)
            )
          : ""
      };
    // 分裂補色
    case "5":
      return {
        sub1: main ? contrast(main, tint(main, 52), shade(main, 32)) : "",
        sub2: main ? spin(main, 180 + 30) : "",
        sub3: main
          ? contrast(
              main,
              tint(spin(main, 180 + 30), 52),
              shade(spin(main, 180 + 30), 32)
            )
          : "",
        sub4: main ? spin(main, 180 - 30) : "",
        sub5: main
          ? contrast(
              main,
              tint(spin(main, 180 - 30), 52),
              shade(spin(main, 180 - 30), 32)
            )
          : ""
      };
    // 補色を混色
    case "6":
      return {
        sub1: main ? mix(main, spin(main, 180), 80) : "",
        sub2: main ? mix(main, spin(main, 180), 60) : "",
        sub3: main ? mix(main, spin(main, 180), 40) : "",
        sub4: main ? mix(main, spin(main, 180), 20) : "",
        sub5: main ? spin(main, 180) : ""
      };
    // 類似色（左右180°）
    case "7":
      return {
        sub1: main ? spin(main, 60) : "",
        sub2: main ? spin(main, 30) : "",
        sub3: main ? spin(main, -30) : "",
        sub4: main ? spin(main, -60) : "",
        sub5: main
          ? `rgb(${luma(main) * 100}%,${luma(main) * 100}%,${luma(main) *
              100}%)`
          : ""
      };
    default:
      return {};
  }
};

self.addEventListener("message", message => {
  const { n, main } = message.data;
  self.postMessage({ [n]: genarate(n, main) });
});
