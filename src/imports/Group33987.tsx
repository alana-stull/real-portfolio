import img31 from "figma:asset/fa92f644e9c6315506c360bd4f3aa26f0fa847f8.png";
import imgOfficialPage11 from "figma:asset/f1046575f7bb7fe01684368b059eba2aeaf0ea63.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.10932301729917526)+(var(--transform-inner-height)*0.9940062761306763)))] items-center justify-center left-[196.19px] top-0 w-[calc(1px*((var(--transform-inner-height)*0.10932301729917526)+(var(--transform-inner-width)*0.9940062761306763)))]" style={{ "--transform-inner-width": "248.109375", "--transform-inner-height": "321.171875" } as React.CSSProperties}>
        <div className="flex-none rotate-[6.276deg]">
          <div className="h-[321.182px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[248.113px]" data-name="3 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img31} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.16206836700439453)+(var(--transform-inner-height)*0.9867795705795288)))] items-center justify-center left-0 top-[74.85px] w-[calc(1px*((var(--transform-inner-height)*0.16206836700439453)+(var(--transform-inner-width)*0.9867795705795288)))]" style={{ "--transform-inner-width": "240.453125", "--transform-inner-height": "311.265625" } as React.CSSProperties}>
        <div className="flex-none rotate-[350.673deg]">
          <div className="h-[311.281px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[240.465px]" data-name="OFFICIAL PAGE 1 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgOfficialPage11} />
          </div>
        </div>
      </div>
    </div>
  );
}
