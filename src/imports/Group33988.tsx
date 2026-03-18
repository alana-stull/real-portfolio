import img31 from "figma:asset/6763ac2e1ed27a6b963c8d289616574909ed35ff.png";
import imgOfficialPage11 from "figma:asset/db282a65613be920312978bce14576f0ca3a731e.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.10932301729917526)+(var(--transform-inner-height)*0.9940062761306763)))] items-center justify-center left-[164.16px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.10932301729917526)+(var(--transform-inner-width)*0.9940062761306763)))]" style={{ "--transform-inner-width": "238.671875", "--transform-inner-height": "308.96875" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.276deg]">
          <div className="h-[308.976px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[238.684px]" data-name="3 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img31} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.16206836700439453)+(var(--transform-inner-height)*0.9867795705795288)))] items-center justify-center left-0 top-[52.76px] w-[calc(1px*((var(--transform-inner-height)*0.16206836700439453)+(var(--transform-inner-width)*0.9867795705795288)))]" style={{ "--transform-inner-width": "231.3125", "--transform-inner-height": "299.4375" } as React.CSSProperties}>
        <div className="flex-none rotate-[350.673deg]">
          <div className="h-[299.452px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[231.327px]" data-name="OFFICIAL PAGE 1 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOfficialPage11} />
          </div>
        </div>
      </div>
    </div>
  );
}