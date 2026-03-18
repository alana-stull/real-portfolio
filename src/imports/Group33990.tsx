import imgScreenshot20241215At121206Pm1 from "figma:asset/600664a31cc8b51da32f0bf7646c3342808f6f7a.png";
import imgScreenshot20241215At122801Pm1 from "figma:asset/30e01e0647dccd396d804eb5de86b5b0c1909c0b.png";
import imgScreenshot20241215At122303Pm1 from "figma:asset/30990a3f3c2863de48e0f43adab7d15608bbcb94.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[322px] left-0 top-[58px] w-[172px]" data-name="Screenshot 2024-12-15 at 12.12.06 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20241215At121206Pm1} />
      </div>
      <div className="absolute h-[335px] left-[265px] top-[52px] w-[178px]" data-name="Screenshot 2024-12-15 at 12.28.01 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20241215At122801Pm1} />
      </div>
      <div className="absolute bottom-0 left-[25.28%] right-[27.54%] top-0" data-name="Screenshot 2024-12-15 at 12.23.03 PM 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20241215At122303Pm1} />
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}