export default function Sponsors() {
    const sponsors = [
        { name: "Hack Club", site: "https://hackclub.com", logo: "https://assets.hackclub.com/icon-rounded.svg"},
        { name: "Subrini", site: "https://subrini.ma/", logo: "https://scontent.fcmn1-3.fna.fbcdn.net/v/t39.30808-6/400752850_732165895620889_3405111110834386339_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFDzm69g4x6vVdt-qYd_8ej_8P1y90cXU7_w_XL3RxdTttha6Lk4w-VDnbu3XmKgzCAOqEm2bNOSfqPKZ6K1QgU&_nc_ohc=OKLSvAlUzuoQ7kNvgFZLFyr&_nc_zt=23&_nc_ht=scontent.fcmn1-3.fna&_nc_gid=AO6HFfAuv6N1qS4JMnQzw16&oh=00_AYAZ-Ivsuw8SfvAcIQ5o75ZID_XHTIxqWCjVw9l5Zwu-7g&oe=672758D6" },
        { name: "ALX Morocco", site: "https://www.alxafrica.com/morocco/", logo: "https://scontent.fcmn1-1.fna.fbcdn.net/v/t39.30808-6/403739558_712294124263658_2920328546156711997_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHsv_pc7XscxNwml--iNOkv2IUi5-7wrWbYhSLn7vCtZrgsY20ckGKLPwLYimC76lWQOFJODyJ2Gs2jwlWGgy8X&_nc_ohc=rL7LLNA0_QMQ7kNvgFONMC_&_nc_zt=23&_nc_ht=scontent.fcmn1-1.fna&_nc_gid=AbTh05pPQMBrk_vMYhppEGE&oh=00_AYBN7u0Y-TE1LflfQNcfbT4BYR5Zv3-8YP_zUrD8WfwiEA&oe=672740AA"},
        { name: "Coca-Cola Company", site: "https://www.eccbc.com/", logo: "https://www.eccbc.com/wp-content/uploads/2022/04/ECCBC_Logo.png"}
    ];

    return (
        <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
            <p className="mb-6 text-3xl uppercase" id="sponsors">
            Check out our amazing <span className="text-pink">sponsors</span>!
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
                                    <img src={sponsor.logo} alt={sponsor.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full object-contain"/>
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