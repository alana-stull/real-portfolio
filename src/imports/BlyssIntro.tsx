import svgPaths from "./svg-ut087k1j6e";
import imgRectangle from "figma:asset/45a10cc7c6d98d586fbe304eaebdbc922fa85486.png";

function Group() {
  return (
    <div className="h-[1080px] overflow-clip relative w-[916px]" data-name="Group">
      <div className="absolute flex inset-[10.7%_8.88%_6.92%_8.6%] items-center justify-center">
        <div className="flex-none h-[852px] rotate-[356.844deg] w-[710px]">
          <div className="relative size-full" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgRectangle} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-px pr-[10px] py-[10px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[16px]">
                <div className="absolute inset-[-6.25%_-6.25%_-6.25%_-8.84%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
                    <path d={svgPaths.p18196800} id="Vector 2" opacity="0.3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-px pr-[10px] py-[10px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg]">
              <div className="relative size-[16px]">
                <div className="absolute inset-[-6.25%_-6.25%_-6.25%_-8.84%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18">
                    <path d={svgPaths.p18196800} id="Vector 2" opacity="0.3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-[#aec6cf] box-border content-stretch flex h-[65px] items-start left-[1725px] rounded-[15px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[958px] w-[137px]">
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-full">
          <Frame />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

export default function BlyssIntro() {
  return (
    <div className="bg-white relative size-full" data-name="BLYSS INTRO">
      <div className="absolute flex h-[1124.13px] items-center justify-center left-[1040px] top-[3px] w-[968.475px]" style={{ "--transform-inner-width": "916", "--transform-inner-height": "1080" } as React.CSSProperties}>
        <div className="flex-none rotate-[357.155deg]">
          <Group />
        </div>
      </div>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[normal] right-[394px] text-[#acacac] text-[22px] text-nowrap top-[25px] tracking-[2px] translate-x-[100%] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        blyss social introduction
      </p>
      <p className="absolute font-['Figtree:ExtraBold',sans-serif] font-extrabold leading-[160px] left-[57px] text-[#3d5d7b] text-[170px] text-nowrap top-[336px] whitespace-pre">BLYSS SOCIAL</p>
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[48px] left-[57px] text-[#565656] text-[35px] top-[794px] w-[943px]">Blyss Social connects young professionals with curated events and guaranteed reservations—so they can focus on the experience, not the logistics.</p>
      <div className="absolute font-['Figtree:Bold',sans-serif] font-bold leading-[48px] left-[57px] text-[#3d5d7b] text-[35px] top-[671px] uppercase w-[1092px]">
        <p className="mb-0">{`eliminate the stress of who to meet, `}</p>
        <p>where to go, and how to plan.</p>
      </div>
      <div className="absolute flex flex-col font-['Figtree:Bold',sans-serif] font-bold h-[83px] justify-center leading-[0] left-[61px] text-[#565656] text-[40px] top-[267.5px] translate-y-[-50%] uppercase w-[1006px]">
        <p className="leading-[160px]">redefining social experiences with</p>
      </div>
      <div className="absolute h-0 left-[-0.01px] top-[70.75px] w-[1925.02px]" data-name="Line">
        <div className="absolute inset-[-2px_-0.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1930 4">
            <path d="M2 2H1927.02" id="Line" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Frame2 />
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[normal] right-[1859px] text-[#acacac] text-[22px] text-nowrap top-[25px] tracking-[2px] translate-x-[100%] uppercase whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        HOME
      </p>
    </div>
  );
}