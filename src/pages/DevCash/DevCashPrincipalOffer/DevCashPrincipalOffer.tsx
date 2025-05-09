import {
  Apresentation,
  IsForYou,
  OurTrail,
  School,
  Testimonials,
} from "../../../components";
import { FullstackTrail } from "../../../components/FullstackTrail";
import { Whatsapp } from "../../../components/Whatsapp";
import {
  FaqSection,
  InclusionsSection,
  PricingSection,
  ProofSection,
  TeachersSection,
} from "../components";

const DevCashPrincipalOffer = () => {
  return (
    <>
      {/* <HeaderDevCash /> */}
      <Apresentation isMainProduct={false} />
      {/* <TransformationSection /> */}
      <ProofSection />
      <IsForYou isMainProduct={false} />
      <Testimonials isMainProduct={false} />
      {/* <IdentificationSection /> */}
      <OurTrail isMainProduct={false} />
      <FullstackTrail isMainProduct={false} />
      <School isMainProduct={false} />
      {/* <MethodSection />
      <EarningsSection />
      <AudienceSection /> */}
      <InclusionsSection />
      <PricingSection />
      {/* <CurriculumSection /> */}
      <TeachersSection />
      <FaqSection />
      <Whatsapp
        customMessage={encodeURIComponent(
          "Olá, gostaria de saber mais sobre o Dev Cash!"
        )}
      />
    </>
  );
};

export default DevCashPrincipalOffer;
