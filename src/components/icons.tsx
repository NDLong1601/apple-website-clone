import { Menu, Search, ShoppingBag, X } from "lucide-react";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function AppleLogoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 17 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M14.21 10.63c-.02-2.05 1.67-3.05 1.75-3.1-.96-1.4-2.45-1.59-2.97-1.61-1.25-.13-2.46.75-3.09.75-.65 0-1.63-.73-2.68-.71-1.35.02-2.62.8-3.31 2.03-1.43 2.47-.36 6.1 1 8.1.68.98 1.48 2.07 2.54 2.03 1.03-.04 1.41-.65 2.65-.65 1.23 0 1.59.65 2.67.63 1.11-.02 1.8-.98 2.45-1.97.79-1.12 1.1-2.23 1.11-2.29-.03-.01-2.1-.8-2.12-3.21ZM12.18 4.6c.55-.69.93-1.62.82-2.57-.8.04-1.81.56-2.38 1.23-.5.58-.96 1.56-.84 2.47.91.07 1.83-.45 2.4-1.13Z"
      />
    </svg>
  );
}

export { Menu, Search, ShoppingBag, X };
