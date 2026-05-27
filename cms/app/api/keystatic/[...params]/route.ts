import path from 'node:path';
import { makeRouteHandler } from '@keystatic/next/route-handler';
import config from '../../../../keystatic.config';

// CMS app lives in cms/; content and public assets live at the repo root.
export const { POST, GET } = makeRouteHandler({
  config,
  localBaseDirectory: path.join(process.cwd(), '..'),
});
