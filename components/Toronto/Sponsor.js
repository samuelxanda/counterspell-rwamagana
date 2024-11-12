import React from "react";

function SponsorTier({ sponsorInfo, sponsorsPerRow }) {
  return (
    <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] w-[92%] z-[5]">
      {/*Splits the sponsors into sub-arrays of max length sponsorsPerRow*/}
      {Array.from(
        { length: Math.ceil(sponsorInfo.length / sponsorsPerRow) },
        (_, i) => sponsorInfo.slice(i * sponsorsPerRow, (i + 1) * sponsorsPerRow))
        .map((sponsorRow, rowIndex) => {
          return (
            <React.Fragment key={rowIndex}>
              <div
                style={{ gridTemplateColumns: `repeat(${sponsorsPerRow}, minmax(0, 1fr))` }}
                className={sponsorRow.length === sponsorsPerRow ? `grid lg:gap-6 md:gap-4 gap-2 lg:pt-6 md:pt-4 pt-2` : "flex flex-row justify-center lg:pt-6 md:pt-4 pt-2 lg:gap-6 md:gap-4 gap-2"}>
                {sponsorRow.map((sponsor, sponsorIndex) => {
                  return (
                    <React.Fragment key={sponsorIndex}>
                      <a href={sponsor.url} target="_blank"
                         style={{ width: `${sponsorRow.length === sponsorsPerRow ? "100" : (1 / sponsorsPerRow * 100)}%` }}
                         className={"flex flex-col items-center"}>
                        <div
                          className="w-full bg-[#1A2F57] flex flex-col items-center p-4 rounded-xl duration-200 ease-in-out hover:scale-[103%]">
                          <img
                            src={"/city/toronto/sponsors/" + sponsor.fileName}
                            alt={sponsor.name + "Logo"}
                            className="lg:h-28 md:h-20 h-16 object-contain"
                            style={{ imageRendering: "auto" }}
                          />
                        </div>
                      </a>
                    </React.Fragment>
                  )
                })}
              </div>
            </React.Fragment>
          )
        })}
    </div>
  )
}

export default function Sponsor() {
  return (
    <div className="py-16 bg-[#2A385A] flex flex-col justify-evenly items-center ">
      <div>
        <div className="text-3xl Sponser text-white font-semibold text-center retro mb-3">
          Help Us Bring the Magic By Being A Sponsor
        </div>
        <div className="text-2xl Sponser text-white font-semibold text-center fusion-pixel">
          If you are interested in becoming a sponsor, please contact us
          at <a href="mailto:counterspellgta@gmail.com">counterspellgta@gmail.com</a>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:pt-12 md:pt-8 pt-6">
        {/*Gold Sponsors*/}
        <SponsorTier
          sponsorsPerRow={1}
          sponsorInfo={[
            { fileName: "shopify.png", name: "Shopify", url: "https://www.shopify.com/ca" },
          ]}
        />
        {/*Silver Sponsors*/}
        <SponsorTier
          sponsorsPerRow={2}
          sponsorInfo={[
            { fileName: "terraCotta.png", name: "Terra Cotta Cookies Logo", url: "https://terracottacookies.com/" },
            { fileName: "ubisoft-logo.png", name: "Ubisoft Logo", url: "https://www.ubisoft.com/en-us/" },
          ]}
        />
        {/*Bronze Sponsors*/}
        {/*<SponsorTier*/}
        {/*  sponsorsPerRow={3}*/}
        {/*  sponsorInfo={[*/}
        {/*  ]}*/}
        {/*/>*/}
      </div>
    </div>
  )
}