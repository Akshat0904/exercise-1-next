import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import Image from "next/image";
import RedeemForm from "@/src/module/conveyancing/component/RedeemForm";

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

  const renderOfferDetails = (): JSX.Element => {
    return (
      <div className="mb-8 lg:mb-16 text-at-gray-500">
        <p className="text-base font-normal mb-4">
          In partnership with view.com.au,{" "}
          <a
            href="/_"
            target="_blank"
            className="text-base text-at-gray-500 underline hover:underline hover:text-at-primary cursor-pointer"
          >
            Settle Easy{" "}
          </a>
          is currently offering new customers a $220 conveyancing voucher on
          their trusted{" "}
          <a
            href="/_"
            target="_blank"
            className="text-base text-at-gray-500 underline hover:underline hover:text-at-primary cursor-pointer"
          >
            online conveyancing services{" "}
          </a>
          and a free contract review. You&apos;ll only pay $880 incl. GST plus
          disbursements on a standard conveyancing transaction. Redeem today and
          use within 12 months.
        </p>
        <p className="text-base font-normal mb-4">
          Settle Easy provides reliable, secure, fast and hassle-free
          conveyancing services to help you buy or sell property.
        </p>
        <p className="text-base font-normal mb-4">
          Think of Settle Easy as a legal expert in your corner. Someone to
          guide you through the process and to provide you with a seamless
          experience in the lead up to settlement.
        </p>
        <p className="text-base font-normal mb-4">
          Alongside the $220 conveyancing voucher, you will also be eligible for
          a free contract review during your conveyancing transaction, knowing
          no surprises are waiting.
        </p>
        <p className="text-base font-normal mb-4">
          Simply fill out the form and a member from the Settle Easy Success
          Specialist team will get in touch within 24 hours.
        </p>
        <p className="text-base font-normal mb-4">
          This offer is eligible for customers transacting in Victoria, New
          South Wales and Queensland.
        </p>
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
              <RedeemForm />
              {renderOfferDetails()}
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default ConveyancingPage;
