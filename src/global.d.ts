export {};

declare global {
  interface Window {
    checkoutElements?: {
      init: (widget: 'salesFunnel' | string) => {
        mount: (selector: string) => void;
        destroy?: () => void;
      };
    };
  }
}
