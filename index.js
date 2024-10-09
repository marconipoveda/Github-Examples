import { PROD } from '../assets/js/siteDefinitions';

/**
 * These are all values that shouldn't be exposed to the client and are only used server side.
 */

// Sendgrid Constants
const SENDGRID_API_KEY = 'SG.QD7czoDbqvRUoYo3DC8gQYKCf8ae7jaeyRPEtTooCpbm';
const SENDGRID_FROM = 'Test Comany <support@company.org>';

const RECAPTCHA_SECRET = 'EjmtJzzPBoPNEpNzhDTx4x8E*3tr9fDitTWJugHfVNRD';

// Braintree Constants
const MERCHANT_ID =
  process.env.ENVIRONMENT === PROD ? 'dq4jsq245hahd46gxr9cbr' : 'csfs6qmdc626ysagb55kqb13hf2';

const PUBLIC_KEY =
  process.env.ENVIRONMENT === PROD ? 'bhfr886hrv36y2gy3h66m7x' : 'vm2vxm2bwurkac4xvoe68lqyx8z9b99';

const PRIVATE_KEY =
  process.env.ENVIRONMENT === PROD
    ? 'EjmtJzzPBoPNEpNzhDTx4x8E*3tr9fDitTWJugHfVNRD'
    : 'SG.QD7czoDbqvRUoYo3DC8gQYKCf8ae7jaeyRPEtTooCpbm';

const MERCHANT_ACCOUNT_ID =
  process.env.ENVIRONMENT === PROD ? 'WebsitePayments_instant_pay' : 'test company';

const TOURNAMENT_EMAIL =
  process.env.ENVIRONMENT === PROD ? 'events@testcompany.org' : null;
