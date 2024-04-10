import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import Image from "next/image";

const ConveyancingPage = () => {
  const renderHeroSection = (): JSX.Element => {
    return (
      <HeroSection
        heading="Buying or selling?"
        subHeading="Redeem your $220 conveyancing voucher and free contract review"
        parentDivClass="flex flex-col-reverse mb-8 md:block"
      >
        <a
          href="/_"
          target="_blank"
          className="w-14 h-14 mb-3 md:w-24 md:h-24 lg:w-120 lg:h-30 md:absolute md:right-15 md:top-12"
        >
          <Image
            src="https://resi.uatz.view.com.au/viewstatic/lancer/_next/static/media/settle-easy.53aca56e.svg"
            alt="Settle Easy Logo"
            width={120}
            height={120}
          />
        </a>
      </HeroSection>
    );
  };

  const renderIFrame = (): JSX.Element => {
    return (
      <div className="bg-at-gray-500 w-full flex items-center rounded-xl overflow-hidden mb-8 h-198 lg:h-446 lg:mb-4">
        <iframe
          src="https://www.youtube.com/embed/SklG0T_W0ao"
          width="100%"
          height="98%"
          allowFullScreen
          title="Youtube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    );
  };

  return (
    <Layout>
      <main>
        <section className="p-4 mx-auto xl:p-0 xl:py-8 max-w-1200 ">
          {renderHeroSection()}
          <section className=" lg:relative lg:gap-4">
            <div className="lg:w-3/5">
              {renderIFrame()}
              <div className="pb-6 rounded-xl font-dmSans text-at lg:right-0 lg:top-0 lg:absolute lg:w-38% border border-at-light-500">
                <p className="text-sm font-bold m-6 ">
                  Enter your details for your $220 conveyancing voucher and a
                  free contract review
                </p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default ConveyancingPage;
