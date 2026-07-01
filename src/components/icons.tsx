import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, title, ...props }: IconProps & { children: ReactNode; title?: string }) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 2l1.7 5.1L19 9l-5.3 1.7L12 16l-1.7-5.3L5 9l5.3-1.9L12 2Z" />
    </BaseIcon>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3 19 6v5c0 4.9-3.1 8.8-7 10-3.9-1.2-7-5.1-7-10V6l7-3Z" />
      <path d="m9.2 12 1.9 1.9L15.2 10" />
    </BaseIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="m5 12 4 4 10-10" />
    </BaseIcon>
  );
}

export function ToolIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 6a4 4 0 0 0-5.1 5.1l-5.2 5.2a1.6 1.6 0 1 0 2.3 2.3l5.2-5.2A4 4 0 0 0 18 8l-2.4 2.4-1.7-1.7L16.3 6Z" />
    </BaseIcon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 4c-6.5 0-11 2.8-13.5 7.4-1.8 3.4-1.6 6.2-.9 8.6 2.4.7 5.2.9 8.6-.9C18.2 16.6 21 12.1 21 5.6V4Z" />
      <path d="M9 15c1.8-3 4.4-5.6 8-8" />
    </BaseIcon>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </BaseIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5 12h13" />
      <path d="m12 5 7 7-7 7" />
    </BaseIcon>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8.5 10.2V8.1A2.1 2.1 0 0 1 10.6 6" />
      <path d="M16 10.2V8.1A2.1 2.1 0 0 1 18.1 6" />
      <path d="M8.5 10.2a2.5 2.5 0 1 1-2.5 2.5v1.8" />
      <path d="M16 10.2a2.5 2.5 0 1 1-2.5 2.5v1.8" />
    </BaseIcon>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M5.5 4.8 8 3.7a1.2 1.2 0 0 1 1.4.35l1.9 2.7a1.2 1.2 0 0 1-.1 1.5l-1.6 1.7a14 14 0 0 0 5 5l1.7-1.6a1.2 1.2 0 0 1 1.5-.1l2.7 1.9a1.2 1.2 0 0 1 .35 1.4L20.2 19a1.5 1.5 0 0 1-1.7.9C11.2 18.4 5.6 12.8 3.2 6.5a1.5 1.5 0 0 1 .9-1.7Z" />
    </BaseIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 6 8-6" />
    </BaseIcon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 21s6-5.1 6-11a6 6 0 0 0-12 0c0 5.9 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </BaseIcon>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M14 8.5V6.7c0-.9.6-1.7 1.6-1.7H18V2.5h-2.4C12.8 2.5 11 4.4 11 7v1.5H8v3h3V21h3v-9.5h2.8l.7-3Z" />
    </BaseIcon>
  );
}