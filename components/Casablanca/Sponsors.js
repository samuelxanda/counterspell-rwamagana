export default function Sponsors() {
    const sponsors = [
        { name: "Hack Club", site: "https://hackclub.com", logo: "https://assets.hackclub.com/icon-rounded.svg"},
        { name: "ALX Morocco", site: "https://www.alxafrica.com/morocco/", logo: "/city/casablanca/alx.svg"},
        { name: "Subrini", site: "https://subrini.ma/", logo: "/city/casablanca/subrini.svg"},
        { name: "eSTEM Morocco", site: "https://estem-morocco.org/", logo: "/city/casablanca/estem-morocco.png"},
        { name: "Robots & More", site: "https://www.robots-and-more.com/", logo: "/city/casablanca/robots-and-more.png"},
        { name: "Pesage Promotion", site: "https://pesagepromotion.com/", logo: "/city/casablanca/pesage-promotion.png"},
        { name: "The Coca-Cola Company", site: "https://www.coca-cola.com/ma/ar", logo: "/city/casablanca/coca-cola.svg"}
    ];

    return (
        <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
            <p className="mb-6 text-3xl uppercase" id="sponsors">
            Check out our amazing <span className="text-pink">sponsors</span> and <span className="text-pink">partners</span>!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
          {sponsors.map((sponsor) => (
                    <a  key={sponsor.name}
                        href={sponsor.site}
                        target="_blank"
                        style={{textDecoration: "none", color:"inherit"}}
                        className="hover:scale-105 transition-transform duration-200 inline-block text-inherit bg-pink">
                        <div className="p-4 text-xl leading-6 tracking-wide neuebit">
                            <div className="flex flex-col items-center justify-center w-[200px] h-[200px]">
                                <div className="relative w-full h-full">
                                    <img src={sponsor.logo} alt={sponsor.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain" style={{height: "180px", width: "180px", borderRadius: "8px"}}/>
                                </div>
                            </div>
                            <p style={{fontSize: "2em"}} className="h-24 px-2 flex items-center w-[200px] text-2xl justify-around">
                                {sponsor.name}
                            </p>
                        </div>
                    </a>
                ))}
            

          </div>
        </div>
    );
}