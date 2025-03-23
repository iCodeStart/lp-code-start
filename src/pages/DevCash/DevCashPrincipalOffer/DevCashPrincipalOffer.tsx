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
      <TransformationSection />
      <ProofSection />
      <IdentificationSection />
      <MethodSection />
      <EarningsSection />
      <AudienceSection />
      <InclusionsSection />
      <PricingSection />
      <CurriculumSection />
      <TeachersSection />
      <FaqSection />
    </>
  );
}
