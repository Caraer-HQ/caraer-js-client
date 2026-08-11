/**
 * Hand-written serverless / installation payload helpers for Caraer apps.
 *
 * Preserved across OpenAPI regeneration (see `.openapi-generator-ignore` and
 * `scripts/client-overlays/` in the Caraer backend). Prefer these over
 * per-app `caraer apps typegen` output.
 */

/** Installation settings field as delivered in lifecycle / webhook bodies. */
export interface SettingFieldValue {
  name: string;
  label?: string;
  type?: string;
  value?: unknown;
  defaultValue?: unknown;
  hasValue?: boolean;
}

/** Approximate lifecycle hook body (install / update / uninstall / rotate). */
export interface LifecyclePayload {
  event?: "Installed" | "Updated" | "Uninstalled" | "Rotated" | string;
  timestamp?: number;
  appUuid?: string;
  appName?: string;
  appLabel?: string;
  privateApp?: boolean;
  authMethod?: "OAUTH2" | "API_KEY" | string;
  userUuid?: string;
  companyUuid?: string;
  installationToken?: string;
  caraerApiBase?: string;
  oauthConnected?: boolean;
  settingsSchema?: SettingFieldValue[];
  scopes?: string[];
  settingsChanged?: boolean;
  scopesChanged?: boolean;
  filtersChanged?: boolean;
  [key: string]: unknown;
}

/** Record / domain webhook body (USER_FRIENDLY shape varies by topic). */
export interface WebhookPayload {
  topic?: string;
  event?: string;
  timestamp?: number;
  appUuid?: string;
  companyUuid?: string;
  installationToken?: string;
  caraerApiBase?: string;
  record?: Record<string, unknown>;
  objectName?: string;
  settingsSchema?: SettingFieldValue[];
  [key: string]: unknown;
}

/** Cron / schedule invocation body. */
export interface SchedulePayload {
  scheduleName?: string;
  name?: string;
  appUuid?: string;
  companyUuid?: string;
  installationToken?: string;
  caraerApiBase?: string;
  scheduledAt?: string | number;
  settingsSchema?: SettingFieldValue[];
  [key: string]: unknown;
}

/** Inbound HTTP route body (provider-specific; wrapped by the platform). */
export interface InboundPayload {
  appUuid?: string;
  companyUuid?: string;
  installationToken?: string;
  caraerApiBase?: string;
  routeName?: string;
  body?: unknown;
  headers?: Record<string, string>;
  [key: string]: unknown;
}

/** Async installation job payload (function receives this as req.body). */
export interface JobPayload {
  jobId?: string;
  functionName?: string;
  appUuid?: string;
  companyUuid?: string;
  installationToken?: string;
  caraerApiBase?: string;
  [key: string]: unknown;
}

/** Installation state document (arbitrary JSON map). */
export type InstallationState = Record<string, unknown>;

/** Installation secrets map (values are strings when readable). */
export type InstallationSecrets = Record<string, string>;

/** POST /installation/jobs request body. */
export interface EnqueueJobRequest {
  functionName: string;
  payload?: Record<string, unknown>;
  delaySeconds?: number;
}

/** Installation job status document. */
export interface InstallationJob {
  jobId: string;
  status: "QUEUED" | "RUNNING" | "SUCCEEDED" | "FAILED" | string;
  functionName?: string;
  payload?: Record<string, unknown>;
  result?: unknown;
  error?: string;
  createdAt?: string | number;
  updatedAt?: string | number;
  [key: string]: unknown;
}

/** Wrapper returned by many Caraer API endpoints. */
export interface ApiSuccess<T = unknown> {
  message?: string;
  data?: T;
}
