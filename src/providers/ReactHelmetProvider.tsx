import { HelmetProvider } from "react-helmet-async";

export const ReactHelmetProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => <HelmetProvider>{children}</HelmetProvider>;
