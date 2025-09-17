import { useEffect, useRef } from "react";

const HOTMART_SRC = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
const CONTAINER_ID = "hotmart-sales-funnel";

export function HotmartSalesFunnel() {
  const didInit = useRef(false);

  useEffect(() => {
    if (didInit.current) return;          // evita o “double-invoke” do StrictMode em dev
    didInit.current = true;

    const init = () => {
      if (window.checkoutElements) {
        try {
          window.checkoutElements.init("salesFunnel").mount(`#${CONTAINER_ID}`);
        } catch (err) {
          console.error("[HotmartSalesFunnel] mount error:", err);
        }
      }
    };

    // já existe um <script> da Hotmart?
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${HOTMART_SRC}"]`);
    if (existing) {
      // se já carregou antes, só inicializa; senão, espera o load
      if (existing.dataset.loaded === "true") {
        init();
      } else {
        const onLoad = () => {
          existing.dataset.loaded = "true";
          init();
        };
        existing.addEventListener("load", onLoad, { once: true } as any);
      }
      return;
    }

    // cria o <script> UMA vez
    const script = document.createElement("script");
    script.src = HOTMART_SRC;
    script.async = true;
    script.dataset.loaded = "false";
    script.onload = () => {
      script.dataset.loaded = "true";
      init();
    };
    document.head.appendChild(script);
  }, []);

  // importante: o container precisa existir no DOM
  return <div id={CONTAINER_ID} />;
}
