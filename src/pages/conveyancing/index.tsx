import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import Image from "next/image";

const ConveyancingPage = () => {
  return (
    <Layout>
      <main>
        <section className="p-4 mx-auto xl:p-0 xl:py-8 max-w-1200 ">
          <HeroSection
            heading="Buying or selling?"
            subHeading="Redeem your $220 conveyancing voucher and free contract review"
            divClass="flex flex-col-reverse mb-8 md:block"
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
        </section>
      </main>
    </Layout>
  );
};

export default ConveyancingPage;
