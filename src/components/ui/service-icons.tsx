import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function GmailIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...props}>
      <path d="M3 6.5 12 13l9-6.5" fill="none" stroke="#EA4335" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3" y="6" width="18" height="13" rx="2" fill="none" stroke="#EA4335" strokeWidth="1.6" />
    </svg>
  );
}

export function DropboxIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0061FF" {...props}>
      <path d="M6 3 12 7l-6 4-6-4Zm12 0 6 4-6 4-6-4Zm-12 9 6 4-6 4-6-4Zm12 0 6 4-6 4-6-4ZM6 13l6 4 6-4-6-4Z" />
    </svg>
  );
}

export function GoogleDriveIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...props}>
      <path d="M8.1 3h7.8l5.1 8.8h-7.8L8.1 3Z" fill="#FBBC05" />
      <path d="M5.1 19.8 8.7 13.6 16.5 13.6 12.9 19.8Z" fill="#34A853" />
      <path d="M2.4 14.4 8.1 4.5 12 11.8 6.3 21.6Z" fill="#4285F4" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="1.6" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

export function OutlookIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...props}>
      <rect x="2" y="5" width="13" height="14" rx="2" fill="#0364B8" />
      <path d="M8.5 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="#fff" />
      <path d="M15 7v10l7 2.5v-15Z" fill="#28A8EA" />
    </svg>
  );
}

export function BrandMarkIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#3b7af0" {...props}>
      <path d="M12 4 4 12l2.1 2.1L12 8.2l5.9 5.9L20 12 12 4Z" />
      <path d="M12 12 4 20l2.1 2.1L12 16.2l5.9 5.9L20 20 12 12Z" opacity="0.55" />
    </svg>
  );
}
