import { Whatsapp } from "../../../components/Whatsapp";
import {
  AudienceSection,
  CurriculumSection,
  EarningsSection,
  FaqSection,
  HeaderDevCash,
  IdentificationSection,
  InclusionsSection,
  MethodSection,
  PricingSection,
  ProofSection,
  TeachersSection,
  TransformationSection,
} from "../components";

export function DevCashPrincipalOffer() {
  return (
    <>
      <HeaderDevCash />
      <ProofSection />
      <TransformationSection />
      <IdentificationSection />
      <MethodSection />
      <EarningsSection />
      <AudienceSection />
      <InclusionsSection />
      <PricingSection />
      <CurriculumSection />
      <TeachersSection />
      <FaqSection />
      <Whatsapp
        customMessage={encodeURIComponent(
          "Olá, gostaria de saber mais sobre o Dev Cash!"
        )}
      />
    </>
  );
}
