# @caraer/client

Generated TypeScript client (axios) for the [Caraer API](https://v2.api.caraer.com).

This repository is regenerated automatically from the production OpenAPI spec after each Caraer backend production deploy. Hand-written serverless payload helpers in `apps.ts` are preserved across regenerations.

## Install

```bash
npm install @caraer/client
```

## Docs

- API reference: https://developer.caraer.com
- OpenAPI: https://v2.api.caraer.com/api-docs.yaml
- Source: https://github.com/Caraer-HQ/caraer-js-client

## Auth

Configure the generated axios client with a Bearer token (see generated `configuration` helpers after the first codegen publish).

## Serverless app payload types

Import typed helpers for lifecycle / webhook / schedule / inbound / job bodies
(instead of running `caraer apps typegen`):

```ts
import type {
  LifecyclePayload,
  WebhookPayload,
  SchedulePayload,
  InboundPayload,
  JobPayload,
  SettingFieldValue,
} from "@caraer/client";

export const handler = async (req: { body: LifecyclePayload }, res: any) => {
  const body = req.body;
  // ...
};
```

Plain JS (JSDoc):

```js
/**
 * @param {import('@caraer/client').LifecyclePayload} body
 */
function onInstall(body) {
  // ...
}
```

## License

See [LICENSE](LICENSE).
