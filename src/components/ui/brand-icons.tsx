import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function AppleLogo(props: IconProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.365 1.43c0 1.14-.41 2.06-1.226 2.78-.815.715-1.747 1.13-2.79 1.05-.06-1.1.41-2.07 1.22-2.79.82-.74 1.78-1.16 2.8-1.04Zm3.91 17.13c-.62 1.34-.92 1.94-1.71 3.12-1.1 1.65-2.64 3.7-4.55 3.72-1.71.02-2.15-1.1-4.48-1.09-2.33.01-2.82 1.11-4.53 1.09-1.91-.02-3.36-1.85-4.46-3.5C-1.93 17.5-.79 11.1 2.6 8.9c1.4-.92 2.83-.96 4.15-.43 1.06.43 1.78.43 2.85 0 1.45-.58 2.66-.55 3.96.18.66.37 1.27.86 1.78 1.49-1.66 1.02-2.67 2.76-2.67 4.84 0 2.36 1.45 3.91 3.6 4.55-.05.16-.7.42-.3.5Z" />
    </svg>
  );
}

export function MicrosoftLogo(props: IconProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" {...props}>
      <rect x="2" y="2" width="9" height="9" fill="#F25022" />
      <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
      <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
      <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
    </svg>
  );
}

export function SlackLogo(props: IconProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" {...props}>
      <path d="M9 2.5a1.6 1.6 0 1 0 0 3.2h.8V2.5H9Z" fill="#36C5F0" />
      <path d="M2.5 9a1.6 1.6 0 1 0 0 3.2h6.3V9H2.5Z" fill="#2EB67D" />
      <path d="M15 21.5a1.6 1.6 0 1 0 0-3.2h-.8v3.2h.8Z" fill="#ECB22E" />
      <path d="M21.5 15a1.6 1.6 0 1 0 0-3.2h-6.3V15h6.3Z" fill="#E01E5A" />
      <path d="M9.8 9h4.4V4.6A1.6 1.6 0 0 0 12.6 3a1.6 1.6 0 0 0-1.6 1.6V9Z" fill="#36C5F0" />
      <path d="M15 9.8v4.4h4.4A1.6 1.6 0 0 0 21 12.6a1.6 1.6 0 0 0-1.6-1.6H15Z" fill="#2EB67D" />
      <path d="M14.2 15H9.8v4.4a1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6V15Z" fill="#ECB22E" />
      <path d="M9 14.2V9.8H4.6A1.6 1.6 0 0 0 3 11.4 1.6 1.6 0 0 0 4.6 13H9Z" fill="#E01E5A" />
    </svg>
  );
}

export function GoogleLogo(props: IconProps) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.6 12.23c0-.66-.06-1.3-.17-1.91H12v3.62h5.4a4.6 4.6 0 0 1-2 3.02v2.5h3.23c1.9-1.75 2.97-4.33 2.97-7.23Z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.96-.9 6.62-2.43l-3.23-2.5c-.9.6-2.05.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.07v2.59A9.99 9.99 0 0 0 12 22Z"
        fill="#34A853"
      />
      <path
        d="M6.41 13.91A6 6 0 0 1 6.09 12c0-.66.11-1.3.32-1.91V7.5H3.07A9.99 9.99 0 0 0 2 12c0 1.6.39 3.12 1.07 4.5l3.34-2.59Z"
        fill="#FBBC05"
      />
      <path
        d="M12 6.5c1.47 0 2.78.5 3.82 1.49l2.86-2.86C16.95 3.4 14.7 2.5 12 2.5A9.99 9.99 0 0 0 3.07 7.5l3.34 2.59C7.2 8.13 9.4 6.5 12 6.5Z"
        fill="#EA4335"
      />
    </svg>
  );
}
