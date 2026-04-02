import svgPaths from "./svg-55nezib486";
import imgHeroImage from "./5fbb7b24b967188d394ca631544da5031febb965.png";
import imgCarouselImage from "./dced3e2150a0b94ef1a4c4ea43cbbd7bedfc2fcb.png";
import imgCarouselImage1 from "./1c549f7d27187c307d84edd884b4af59181f7ebd.png";
import imgCarouselImage2 from "./f356c347801120820fd0e37a4ab5132a29bf7631.png";
import imgCarouselImage3 from "./05a68995d48707dfa4ad5428d57b78efac3fcec0.png";
import imgVenmoLogoBlue1 from "./b4ba2905090cb2158c4e142ad75376c97b23abe8.png";
import imgFooterImage from "./3ddaff427fdcdc31fe0d2d2bb0d9bca4efd0e66f.png";

function NpGraduate() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="np_graduate_7079175_000000 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g clipPath="url(#clip0_1_161)" id="np_graduate_7079175_000000 1">
          <path d={svgPaths.p2ea99c80} fill="var(--fill-0, black)" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_161">
            <rect fill="white" height="56" style={{ fill: "white", fillOpacity: "1" }} width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function InfoRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Info Row">
      <p className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        The Graduating Class of 2026
      </p>
      <NpGraduate />
      <p className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Parkway South High School
      </p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="Hero">
      <p className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[20px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        She did it!
      </p>
      <p className="font-['Soria',sans-serif] leading-none min-w-full not-italic relative shrink-0 text-[#47637e] text-[128px] text-center w-[min-content]">Jolie Spencer</p>
      <InfoRow />
      <div className="h-[815px] relative rounded-bl-[16px] rounded-br-[16px] rounded-tl-[999px] rounded-tr-[999px] shrink-0 w-[643px]" data-name="Hero Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-bl-[16px] rounded-br-[16px] rounded-tl-[999px] rounded-tr-[999px] size-full" src={imgHeroImage} />
      </div>
    </div>
  );
}

function FirstContent() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center w-[792px]" data-name="First Content">
      <p className="font-['Soria',sans-serif] leading-none not-italic relative shrink-0 text-[#47637e] text-[80px] w-full">A New Chapter Begins</p>
      <div className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#4d4d4d] text-[20px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.5] mb-0">Join us in celebrating Jolie as she reaches this exciting milestone. Graduation marks the end of one chapter and the beginning of another, and we’re so proud of everything she has accomplished along the way.</p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5] mb-0">This fall, Jolie’s next adventure begins at Missouri State University, and we can’t wait to see what’s ahead.</p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5]">We’d love for you to be part of this special moment.</p>
      </div>
    </div>
  );
}

function PictureCarousel() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Picture Carousel">
      <div className="h-[556.463px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.15)] shrink-0 w-[370px]" data-name="Carousel Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCarouselImage} />
      </div>
      <div className="h-[556px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.15)] shrink-0 w-[370px]" data-name="Carousel Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCarouselImage1} />
      </div>
      <div className="h-[556.463px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.15)] shrink-0 w-[370px]" data-name="Carousel Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCarouselImage2} />
      </div>
      <div className="h-[556.463px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.15)] shrink-0 w-[370px]" data-name="Carousel Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCarouselImage3} />
      </div>
      <div className="h-[556px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.15)] shrink-0 w-[370px]" data-name="Carousel Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgCarouselImage1} />
      </div>
    </div>
  );
}

function EventHeader() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0" data-name="Event Header">
      <p className="font-['Soria',sans-serif] leading-none not-italic relative shrink-0 text-[#47637e] text-[48px] text-center whitespace-nowrap">Graduation Ceremony</p>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative" data-name="Wrapper">
      <EventHeader />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 576 1">
            <line id="Line 1" stroke="var(--stroke-0, #7F7F7F)" style={{ stroke: "color(display-p3 0.4997 0.4997 0.4997)", strokeOpacity: "1" }} x2="576" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Serif:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Friday, May 15th at 7:00 PM
      </p>
      <p className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#4d4d4d] text-[20px] text-center whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        St. Charles Family Arena
        <br aria-hidden="true" />
        {` 2002 Arena Pkwy`}
        <br aria-hidden="true" />
        {` St. Charles, MO 63303`}
      </p>
      <p className="decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#185eb9] text-[18px] text-center underline whitespace-nowrap">Get Directions To The Arena</p>
    </div>
  );
}

function EventHeader1() {
  return (
    <div className="content-stretch flex gap-[23px] items-center relative shrink-0 w-[400px]" data-name="Event Header">
      <p className="flex-[1_0_0] font-['Soria',sans-serif] leading-none min-h-px min-w-px not-italic relative text-[#47637e] text-[48px] text-center">Celebration Open House</p>
    </div>
  );
}

function Wrapper1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative" data-name="Wrapper">
      <EventHeader1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 576 1">
            <line id="Line 1" stroke="var(--stroke-0, #7F7F7F)" style={{ stroke: "color(display-p3 0.4997 0.4997 0.4997)", strokeOpacity: "1" }} x2="576" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Serif:Bold',sans-serif] font-bold leading-[1.5] min-w-full relative shrink-0 text-[24px] text-black text-center w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Sunday, May 18th at 1:00 PM
      </p>
      <p className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#4d4d4d] text-[20px] text-center w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`Enjoy time together at our house as we celebrate Jolie’s accomplishment. We’ll have BBQ, sides, and drinks. Whether you stay for a few minutes or a few hours, we’d love to see you. `}</p>
      <p className="decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#185eb9] text-[18px] text-center underline w-[min-content]">Get Directions To Our House</p>
    </div>
  );
}

function EventDetails() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0 w-[1200px]" data-name="Event Details">
      <Wrapper />
      <Wrapper1 />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center whitespace-nowrap" data-name="Wrap">
      <p className="font-['Soria',sans-serif] leading-none not-italic relative shrink-0 text-[#47637e] text-[48px]">RSVP</p>
      <p className="font-['Noto_Serif:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[20px] text-black" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        To help us plan, please let us know if you’ll be attending.
      </p>
    </div>
  );
}

function RsvpFormContainer() {
  return (
    <div className="bg-[#ececec] relative shrink-0 w-full" data-name="RSVP Form Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[83px] py-[160px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">Google Form</p>
        </div>
      </div>
    </div>
  );
}

function Rsvp() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0" data-name="RSVP">
      <Wrap />
      <RsvpFormContainer />
    </div>
  );
}

function EventInfoContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center overflow-clip px-[40px] relative shrink-0 w-[1440px]" data-name="Event Info Container">
      <p className="font-['Soria',sans-serif] leading-none not-italic relative shrink-0 text-[#47637e] text-[80px] text-center whitespace-nowrap">Celebrate With Us!</p>
      <EventDetails />
      <Rsvp />
    </div>
  );
}

function Wrapper2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[588px]" data-name="Wrapper">
      <p className="font-['Soria',sans-serif] leading-none not-italic relative shrink-0 text-[#47637e] text-[80px] whitespace-nowrap">Can’t Make It?</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 588 1">
            <line id="Line 1" stroke="var(--stroke-0, #7F7F7F)" style={{ stroke: "color(display-p3 0.4997 0.4997 0.4997)", strokeOpacity: "1" }} x2="588" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#4d4d4d] text-[20px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.5] mb-0">We completely understand that not everyone will be able to attend, but we’d still love for you to be part of Jolie’s celebration in spirit.</p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5] mb-0">If you’d like to send a gift or contribute toward her next adventure, you can do so here.</p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5]">Just scan the QR code from your</p>
      </div>
    </div>
  );
}

function QrCodeWrapper() {
  return (
    <div className="bg-[#ececec] relative shrink-0 w-full" data-name="QR Code Wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[83px] py-[160px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[18px] text-black whitespace-nowrap">QR Code Placeholder</p>
        </div>
      </div>
    </div>
  );
}

function VenmoCard() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[384px]" data-name="Venmo Card">
      <QrCodeWrapper />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#185eb9] text-[20px] whitespace-nowrap">@jolie-spencer-1</p>
      <div className="h-[27px] relative shrink-0 w-[146px]" data-name="Venmo_Logo_Blue 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[1.15%] max-w-none top-0 w-[97.7%]" src={imgVenmoLogoBlue1} />
        </div>
      </div>
    </div>
  );
}

function VenmoContainer() {
  return (
    <div className="bg-white content-stretch flex gap-[52px] items-start p-[48px] relative rounded-[16px] shrink-0" data-name="Venmo Container">
      <Wrapper2 />
      <VenmoCard />
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 text-center w-full" data-name="Footer Container">
      <p className="font-['Soria',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#47637e] text-[80px] whitespace-nowrap">{`Looking Ahead `}</p>
      <div className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#4d4d4d] text-[20px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[1.5] mb-0">Jolie’s graduation is more than just a ceremony—it’s the start of something new. As she prepares for what’s next at Missouri State University, we’re excited to see where her path leads and grateful for the people who have supported her along the way.</p>
        <p className="leading-[1.5] mb-0">&nbsp;</p>
        <p className="leading-[1.5]">Thank you for being part of her story.</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[588px]" data-name="Footer">
      <FooterContainer />
      <div className="h-[556.463px] relative rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.15)] shrink-0 w-[370px]" data-name="Footer Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgFooterImage} />
      </div>
      <p className="font-['Noto_Serif:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#4d4d4d] text-[20px] text-center w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        With love,
        <br aria-hidden="true" />
        {` The Spencer Family`}
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-center left-0 top-[72px] w-[1440px]" data-name="Container">
      <Hero />
      <FirstContent />
      <PictureCarousel />
      <EventInfoContainer />
      <VenmoContainer />
      <Footer />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-[#edf2f5] relative size-full" data-name="Desktop - 1">
      <Container />
    </div>
  );
}