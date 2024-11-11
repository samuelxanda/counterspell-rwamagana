import { useState, useEffect } from "react";

export default function Sponsors() {
  const [partner_sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const timestamp = new Date().getTime();
    fetch(`https://adamxu.net/counterspell/partner.json?t=${timestamp}`)
      .then((response) => response.json())
      .then((data) => setSponsors(data))
      .catch((error) => console.error("Error fetching sponsors:", error));
  }, []);

  const [gold_sponsors, setGoldSponsors] = useState([]);
  useEffect(() => {
    const timestamp = new Date().getTime();
    fetch(`https://adamxu.net/counterspell/gold.json?t=${timestamp}`)
      .then((response) => response.json())
      .then((data) => setGoldSponsors(data))
      .catch((error) => console.error("Error fetching sponsors:", error));
  }, []);

  const [silver_sponsors, setSilverSponsors] = useState([]);
  useEffect(() => {
    const timestamp = new Date().getTime();
    fetch(`https://adamxu.net/counterspell/silver.json?t=${timestamp}`)
      .then((response) => response.json())
      .then((data) => setSilverSponsors(data))
      .catch((error) => console.error("Error fetching sponsors:", error));
  }, []);

  const [bronze_sponsors, setBronzeSponsors] = useState([]);
  useEffect(() => {
    const timestamp = new Date().getTime();
    fetch(`https://adamxu.net/counterspell/bronze.json?t=${timestamp}`)
      .then((response) => response.json())
      .then((data) => setBronzeSponsors(data))
      .catch((error) => console.error("Error fetching sponsors:", error));
  }, []);

  const [other_sponsors, setOtherSponsors] = useState([]);
  useEffect(() => {
    const timestamp = new Date().getTime();
    fetch(`https://adamxu.net/counterspell/other.json?t=${timestamp}`)
      .then((response) => response.json())
      .then((data) => setOtherSponsors(data))
      .catch((error) => console.error("Error fetching sponsors:", error));
  }, []);

  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro" id="sponsors">
            Check out our amazing <span className="text-pink">sponsors</span>!
          </p>
          <p className="text-xl uppercase retro" style={{ fontSize: "2.5rem" }}>
            <span className="text-pink">Partner</span> Tier Sponsors
          </p>
          <br></br>
          {/* <br></br> */}
          <div
            className="flex justify-center mx-12 my-6"
            style={{ transform: "scale(1.15)", marginTop: "2rem" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              {partner_sponsors.map((sponsor, index) => (
                <SponsorCardPartner
                  key={index}
                  img={sponsor.image}
                  text={sponsor.name}
                  link={sponsor.url}
                />
              ))}
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <p className="text-xl uppercase retro" style={{ fontSize: "2.5rem" }}>
            <span style={{ color: "#bf9b30" }}>Gold</span> Tier Sponsors
          </p>
          <div
            className="flex justify-center mx-12 my-6"
            tyle={{ transform: "scale(1.05)", marginTop: "1.5rem" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              {gold_sponsors.map((sponsor, index) => (
                <SponsorCardGold
                  key={index}
                  img={sponsor.image}
                  text={sponsor.name}
                  link={sponsor.url}
                />
              ))}
            </div>
          </div>
          <br></br>
          <p className="text-xl uppercase retro" style={{ fontSize: "2rem" }}>
            <span style={{ color: "#95999c" }}>Silver</span> Tier Sponsors
          </p>
          <div
            className="flex justify-center mx-12 my-6"
            style={{ transform: "scale(0.95)" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              {silver_sponsors.map((sponsor, index) => (
                <SponsorCardSilver
                  key={index}
                  img={sponsor.image}
                  text={sponsor.name}
                  link={sponsor.url}
                />
              ))}
            </div>
          </div>
          <br></br>
          <p className="text-xl uppercase retro" style={{ fontSize: "1.5rem" }}>
            <span style={{ color: "#cd7f32" }}>Bronze</span> Tier Sponsors
          </p>
          <div
            className="flex justify-center mx-12 my-6"
            style={{ transform: "scale(0.85)", marginTop: "-0.5rem" }}
          >
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              {bronze_sponsors.map((sponsor, index) => (
                <SponsorCardBronze
                  key={index}
                  img={sponsor.image}
                  text={sponsor.name}
                  link={sponsor.url}
                />
              ))}
            </div>
          </div>
          <br></br>
          <div className="flex justify-center mx-12 my-6"></div>
        </div>
      </div>
    </div>
  );
}

function SponsorCardPartner(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: "transform 0.2s ease-in-out",
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#ff4186",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <SponsorCardPartnerInner img={props.img} text={props.text} />
    </a>
  );
}

function SponsorCardPartnerInner(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide neuebit">
      <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
        <div className="relative w-full h-full">
          <img
            src={props.img}
            alt={props.text}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <p
        className="h-24 px-2 flex items-center w-[200px]"
        style={{ fontSize: "2rem" }}
      >
        {props.text}
      </p>
    </div>
  );
}

function SponsorCardGold(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: "transform 0.2s ease-in-out",
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#bf9b30",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <SponsorCardGoldInner img={props.img} text={props.text} />
    </a>
  );
}

function SponsorCardGoldInner(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide neuebit">
      <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
        <div className="relative w-full h-full">
          <img
            src={props.img}
            alt={props.text}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}

function SponsorCardSilver(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: "transform 0.2s ease-in-out",
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#95999c",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <SponsorCardSilverInner img={props.img} text={props.text} />
    </a>
  );
}

function SponsorCardSilverInner(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide neuebit">
      <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
        <div className="relative w-full h-full">
          <img
            src={props.img}
            alt={props.text}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}

function SponsorCardBronze(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: "transform 0.2s ease-in-out",
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#cd7f32",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <SponsorCardBronzeInner img={props.img} text={props.text} />
    </a>
  );
}

function SponsorCardBronzeInner(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide neuebit">
      <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
        <div className="relative w-full h-full">
          <img
            src={props.img}
            alt={props.text}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}

function SponsorCardOther(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        transition: "transform 0.2s ease-in-out",
        display: "inline-block",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#65709c",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <SponsorCardOtherInner img={props.img} text={props.text} />
    </a>
  );
}

function SponsorCardOtherInner(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide neuebit">
      <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
        <div className="relative w-full h-full">
          <img
            src={props.img}
            alt={props.text}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"
          />
        </div>
      </div>
      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
