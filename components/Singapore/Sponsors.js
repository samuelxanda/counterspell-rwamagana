export default function Sponsors() {
    return (
        <div className="cont flex items-center flex-wrap justify-evenly mx-auto mb-10">
            <p className="text-3xl uppercase w-full">
                Our Sponsors
            </p>
            <div className="max-w-5xl w-50 flex flex-col items-center p-8 md:p-12 py-8 md:py-20 gap-8 md:gap-12 z-40">
                <img
                    src="/city/singapore/sponsors/tiktok.png"
                    alt="Tiktok"
                    className="w-50 h-20 md:h-40"
                    style={{ imageRendering: "auto" }}
                />
            </div>
            <div className="max-w-5xl w-50 flex flex-col items-center p-8 md:p-12 py-8 md:py-20 gap-8 md:gap-12 z-40">
                <img
                    src="/city/singapore/sponsors/google.png"
                    alt="Google"
                    className="w-50 h-20 md:h-40"
                    style={{ imageRendering: "auto" }}
                />
            </div>
        </div>
    );
}