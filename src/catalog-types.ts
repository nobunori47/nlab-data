/** Additive catalog API. The v1.0.0 SharedWork contract remains unchanged. */
export type ServiceId = 'automation' | 'ai-system' | 'creative';
export interface ServiceDefinition {
  id: ServiceId;
  title: string;
  description: string;
  deliverables: readonly string[];
  examples: readonly string[];
}
export interface PriceDefinition {
  id: string;
  serviceIds: readonly ServiceId[];
  title: string;
  kind: 'free' | 'from' | 'quote';
  amountYen?: number;
  tax: 'exclusive' | 'not-applicable';
  note: string;
  /** Current Main v2 listing, not a newly agreed price. */
  source: 'existing-main-v2';
}
export type WorkOrigin = 'course-self-produced' | 'self-produced' | 'paid-client';
export interface PortfolioEntry {
  id: string;
  kind: 'development' | 'video' | 'image';
  origin: WorkOrigin;
  serviceId: ServiceId;
  title: string;
  summary: string;
  features: readonly string[];
  /** Unverified details must not be presented as verified implementation evidence. */
  evidenceStatus: 'source-reviewed' | 'owner-reported';
  publication: 'published' | 'draft';
  courseProjectNumber?: number;
  sharedWorkId?: import('./types').SharedWorkId;
  links: readonly { label: string; href: string }[];
  asset?: { src: string; alt: string; diagram?: string };
}
