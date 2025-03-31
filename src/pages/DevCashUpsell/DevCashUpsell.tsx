import { useEffect } from "react";
import {
  AudienceSection,
  CongratulationsSection,
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
} from "../DevCash/components";

export function DevCashUpsell() {
  useEffect(() => {
    const scriptVars = document.createElement("script");
    scriptVars.innerHTML = `
      let nextUpsellURL = "";
      let nextDownsellURL = "";
    `;
    document.body.appendChild(scriptVars);

    const scriptUpsell = document.createElement("script");
    scriptUpsell.src =
      "https://kiwify-snippets.netlify.app/upsell/upsell.min.js";
    scriptUpsell.async = true;
    document.body.appendChild(scriptUpsell);

    return () => {
      document.body.removeChild(scriptVars);
      document.body.removeChild(scriptUpsell);
    };
  }, []);

  return (
    <>
      <HeaderDevCash isUpSell/>
      <CongratulationsSection/>
      <ProofSection />
      <TransformationSection />
      <IdentificationSection />
      <MethodSection />
      <EarningsSection />
      <AudienceSection />
      <InclusionsSection />
      <PricingSection isUpSell/>
      <CurriculumSection isUpSell/>
      <TeachersSection isUpSell/>
      <FaqSection />
    </>
  );
}
