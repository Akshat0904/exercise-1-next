import Layout from "@/src/shared/component/layout/Layout";
import HeroSection from "@/src/shared/component/hero-section/HeroSection";
import Image from "next/image";
import Input from "@/src/shared/component/form/Input";
import Select from "@/src/shared/component/form/Select";

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

  const renderForm = (): JSX.Element => {
    return (
      <div className="pb-6 rounded-xl font-dmSans text-at lg:right-0 lg:top-0 lg:absolute lg:w-38% border border-at-light-500">
        <p className="text-sm font-bold m-6 text-at-gray-500 ">
          Enter your details for your $220 conveyancing voucher and a free
          contract review
        </p>
        <form action="" className="px-3 lg:px-5 ">
          <Input type="text" id="first-name" label="First name" require />
          <Input type="text" id="last-name" label="Last Name" require />
          <Input type="email" id="emailId" label="Email" require />
          <Input type="number" id="contactNum" label="Phone" require />
          <Select
            id="state"
            label="state"
            placeholder="Select your state"
            optionValues={["VIC", "NSW", "QLD"]}
            require
          />
          <div className="p-1 mb-4 lg:mb-6 flex flex-col">
            <label htmlFor="" className="font-medium text-sm">
              Comments or message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Add a message"
              className="p-2 border rounded-lg border-at-light-700 focus-within:border-at-primary outline-none ring-0 focus:ring-0 focus:outline-none "
            ></textarea>
          </div>
          <button className="px-4 py-2 mb-3 font-bold text-white bg-at-primary border-at-primary hover:border-at-primary-700 hover:bg-at-primary-700 active:bg-at-primary-700 w-full disabled:opacity-50 disabled:pointer-events-none rounded-lg flex items-center justify-center ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.6665 3.83398L8.4706 8.59685C9.02158 8.98254 9.29707 9.17538 9.59672 9.25007C9.86142 9.31605 10.1383 9.31605 10.403 9.25007C10.7026 9.17538 10.9781 8.98254 11.5291 8.59685L18.3332 3.83398M5.6665 14.6673H14.3332C15.7333 14.6673 16.4334 14.6673 16.9681 14.3948C17.4386 14.1552 17.821 13.7727 18.0607 13.3023C18.3332 12.7675 18.3332 12.0674 18.3332 10.6673V5.33398C18.3332 3.93385 18.3332 3.23379 18.0607 2.69901C17.821 2.2286 17.4386 1.84615 16.9681 1.60647C16.4334 1.33398 15.7333 1.33398 14.3332 1.33398H5.6665C4.26637 1.33398 3.56631 1.33398 3.03153 1.60647C2.56112 1.84615 2.17867 2.2286 1.93899 2.69901C1.6665 3.23379 1.6665 3.93385 1.6665 5.33398V10.6673C1.6665 12.0674 1.6665 12.7675 1.93899 13.3023C2.17867 13.7727 2.56112 14.1552 3.03153 14.3948C3.56631 14.6673 4.26637 14.6673 5.6665 14.6673Z"
                stroke="#ffffff"
                fill=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="text-base font-bold pl-2">Redeem Offer</span>
          </button>
          <p className="text-xs font-normal px-4 text-at-gray-700 text-center">
            By submitting your details, you acknowledge that you accept our{" "}
            <a
              href="/_"
              className="text-xs text-at-primary hover:underline hover:text-at-primary cursor-pointer"
              aria-label="Privacy Policy"
            >
              Privacy Policy
            </a>
          </p>
        </form>
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
              {renderForm()}
              {renderOfferDetails()}
            </div>
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default ConveyancingPage;
