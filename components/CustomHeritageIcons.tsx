'use client';

import React from 'react';

export interface HeritageIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Minimal, Theme-Aligned Custom Vector Icon Set (24x24 uniform coordinate system,
 * 1.75px stroke weight, zero star icons, clean geometric paths)
 * Built per /IconSkills.md specifications.
 */

export function HomePalaceIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3.5 10.8L12 4L20.5 10.8V19.2C20.5 19.9 19.9 20.5 19.2 20.5H4.8C4.1 20.5 3.5 19.9 3.5 19.2V10.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 20.5V14.5C9.5 13.1 10.6 12 12 12C13.4 12 14.5 13.1 14.5 14.5V20.5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BanquetArchIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4.5 20V11.2C4.5 7 7.8 4.2 12 3.2C16.2 4.2 19.5 7 19.5 11.2V20"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 20V13.2C8.5 11 10 9.4 12 8.2C14 9.4 15.5 11 15.5 13.2V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 20H21"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WeddingRingsIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="9.2"
        cy="13"
        r="5.2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="14.8"
        cy="13"
        r="5.2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function GalleryReelIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M10.2 9.2L15.4 12L10.2 14.8V9.2Z"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CameraFrameIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 8.5C4 7.4 4.9 6.5 6 6.5H8.2L9.6 4.5H14.4L15.8 6.5H18C19.1 6.5 20 7.4 20 8.5V17.5C20 18.6 19.1 19.5 18 19.5H6C4.9 19.5 4 18.6 4 17.5V8.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="13"
        r="3.2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function MapPinCustomIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 20.8C15.4 17.2 18.2 13.7 18.2 9.8C18.2 6.3 15.4 3.5 12 3.5C8.6 3.5 5.8 6.3 5.8 9.8C5.8 13.7 8.6 17.2 12 20.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.8"
        r="2.4"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function PoolWavesIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3.5 14.5C5.5 13 7.5 13 9.5 14.5C11.5 16 13.5 16 15.5 14.5C17.5 13 19.5 13 20.5 14"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M3.5 18.5C5.5 17 7.5 17 9.5 18.5C11.5 20 13.5 20 15.5 18.5C17.5 17 19.5 17 20.5 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.65" />
    </svg>
  );
}

export function ParkingCarIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M5 11L6.8 6.5C7.1 5.8 7.8 5.5 8.5 5.5H15.5C16.2 5.5 16.9 5.8 17.2 6.5L19 11M4 11H20V17C20 17.6 19.6 18 19 18H18C17.4 18 17 17.6 17 17V16H7V17C7 17.6 6.6 18 6 18H5C4.4 18 4 17.6 4 17V11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="13.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="13.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function WifiSignalIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 9.2C8 5 16 5 21 9.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M6.2 12.8C9.5 10 14.5 10 17.8 12.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M9.5 16.2C11 15 13 15 14.5 16.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="19" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function PhoneCallCustomIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M6.4 4.2H9.1C9.6 4.2 10 4.5 10.2 5L11.3 8.1C11.5 8.5 11.4 9 11 9.3L9.2 10.8C10.3 12.9 12.1 14.7 14.2 15.8L15.7 14C16 13.6 16.5 13.5 16.9 13.7L20 14.8C20.5 15 20.8 15.4 20.8 15.9V18.6C20.8 19.6 19.9 20.4 18.9 20.3C10.6 19.6 4.4 13.4 3.7 5.1C3.6 4.1 4.4 3.2 5.4 3.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppCustomIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12.04 3.2C7.18 3.2 3.24 7.12 3.24 11.96C3.24 13.62 3.71 15.22 4.58 16.6L3.4 20.6L7.52 19.46C8.86 20.26 10.42 20.72 12.04 20.72C16.9 20.72 20.84 16.8 20.84 11.96C20.84 7.12 16.9 3.2 12.04 3.2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.35 8.45C9.15 8.05 8.95 8.02 8.72 8.01H8.2C7.95 8.01 7.6 8.12 7.35 8.42C7.1 8.72 6.5 9.3 6.5 10.45C6.5 11.6 7.35 12.72 7.48 12.9C7.6 13.08 9.15 15.55 11.58 16.5C13.62 17.3 14.08 17.15 14.55 17.08C15.02 17.01 16.05 16.45 16.28 15.82C16.5 15.2 16.5 14.68 16.42 14.55C16.35 14.42 16.15 14.35 15.85 14.2L14.32 13.45C14.08 13.34 13.9 13.4 13.72 13.65L13.12 14.42C12.98 14.58 12.82 14.62 12.55 14.48C11.72 14.08 10.95 13.52 10.32 12.72C10.12 12.45 10.28 12.28 10.42 12.12L10.88 11.58C11.02 11.4 11.05 11.25 10.95 11.05L10.25 9.42C10.02 8.92 9.6 8.55 9.35 8.45Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramBrandIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="12"
        cy="12"
        r="3.8"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function FacebookBrandIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M14.5 8H16.5V4.5H14.2C11.4 4.5 10 6.1 10 8.8V10.8H7.5V14.2H10V20.5H13.6V14.2H16.2L16.7 10.8H13.6V9C13.6 8.3 13.9 8 14.5 8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GoogleMapsBrandIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 20.8C15.5 17 18.2 13.6 18.2 9.6C18.2 6.1 15.4 3.3 12 3.3C8.6 3.3 5.8 6.1 5.8 9.6C5.8 13.6 8.5 17 12 20.8Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="9.6"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
    </svg>
  );
}

export function TripadvisorBrandIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle
        cx="7.8"
        cy="13.5"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle
        cx="16.2"
        cy="13.5"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="7.8" cy="13.5" r="1.3" fill="currentColor" />
      <circle cx="16.2" cy="13.5" r="1.3" fill="currentColor" />
      <path
        d="M10.5 16.5L12 18.5L13.5 16.5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 9.5C6.8 7.3 9.3 6.5 12 6.5C14.7 6.5 17.2 7.3 19.5 9.5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VolumeMuteCustomIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11 5L6.5 9H3.5V15H6.5L11 19V5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 9.5L15.5 14.5M15.5 9.5L20.5 14.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VolumeUnmuteCustomIcon({
  size = 18,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11 5L6.5 9H3.5V15H6.5L11 19V5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M15.5 8.8C16.8 10 16.8 14 15.5 15.2M18.5 6.2C20.8 8.6 20.8 15.4 18.5 17.8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CookieShieldIcon({
  size = 20,
  className = '',
  ...props
}: HeritageIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 3.2L19 6.2V11.8C19 16.2 16 19.6 12 20.8C8 19.6 5 16.2 5 11.8V6.2L12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.2L11.2 14.2L15.2 10.2"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScrollUpTrailIcon({
  progress = 0,
  className = '',
}: {
  progress?: number;
  className?: string;
}) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, progress));
  const dashOffset = circumference * (1 - clamped);

  return (
    <svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="22"
        cy="22"
        r={radius}
        stroke="#FFFFFF"
        strokeOpacity="0.32"
        strokeWidth="2.25"
      />
      <circle
        cx="22"
        cy="22"
        r={radius}
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 22 22)"
      />
      <path
        d="M22 28V16M22 16L17.5 20.5M22 16L26.5 20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


export function ShareCustomIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

export function LinkCustomIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}
