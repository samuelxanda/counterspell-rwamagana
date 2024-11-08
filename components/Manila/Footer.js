export default function Footer() {
  return (
    <footer className="p-4 faq md:p-8 lg:p-10">
  <div className="mx-auto max-w-screen-xl text-center uppercase retro">
      <div className="flex justify-center items-center text-3xl font-semibold">
          <img src="/logo192.png" height={48} width={48} />
          Counterspell Manila    
      </div>
      <p className="text-xs">Built with love by teenagers, for teenagers at Hack Club</p>
      <p className="text-xs mb-6 sm:text-center">Website maintained by <a href="https://www.instagram.com/c._lowisss/?hl=en" target="_blank" rel="noopener noreferrer" className="text-pink" style={{ textDecorationLine: "none" }}>Carl Louise Romales (17, Manila)</a></p>
      <ul className="text-xs flex flex-wrap justify-center items-center mb-6">
          <li>
            <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" className="mx-4" style={{ textDecorationLine: "none" }}>
              Hack Club
            </a>
          </li>
          <li>
            <a href="https://hackclub.com/slack" target="_blank" rel="noopener noreferrer" className="mx-4" style={{ textDecorationLine: "none" }}>
              Slack
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@HackClubHQ" target="_blank" rel="noopener noreferrer" className="mx-4" style={{ textDecorationLine: "none" }}>
              Youtube
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/starthackclub/" target="_blank" rel="noopener noreferrer" className="mx-4" style={{ textDecorationLine: "none" }}>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/hackclub" target="_blank" rel="noopener noreferrer" className="mx-4" style={{ textDecorationLine: "none" }}>
              Github
            </a>
          </li>
      </ul>
      <span className="text-sm sm:text-center"><a href="https://www.instagram.com/aeralixe/?hl=en" target="_blank" rel="noopener noreferrer" className="mx-2" style={{ textDecorationLine: "none" }}>Art by Elena Baskakova (18, Boston)</a></span>
  </div>
</footer>
  );
}
