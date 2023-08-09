const BASE_URL = "http://192.168.1.111:8000/api";
const AUTH_URL = `${BASE_URL}/auth`;
const PROFILE_URL = `${BASE_URL}/profile`;
const CONSULTATIONS_URL = `${BASE_URL}/consultation`;
const ADVICE_URL = `${BASE_URL}/advice`;
const POST_URL = `${BASE_URL}/post`;

export const API = {
  auth: {
    SIGN_UP: `${AUTH_URL}/signup/`,
    LOGIN: `${AUTH_URL}/login/`,
    VERIFICATION_CODE: `${AUTH_URL}/send-verification-code/`,
    VERIFY: `${AUTH_URL}/verify/`,
    CHANGE_PASSWORD: `${AUTH_URL}/change-password/`,
    CHANGE_EMAIL: `${AUTH_URL}/change-email/`,
  },
  profile: {
    DOCTOR_PROFILE: `${PROFILE_URL}/doctor-profiles/me/`,
    PATIENT_PROFILE: `${PROFILE_URL}/patient-profiles/me/`,
    GET_DOCTORS_FOR_SPECIALIZATION: `${PROFILE_URL}/doctors/`
  },
  static: {
    GET_COUNTRIES: `${BASE_URL}/statics/countries/`,
    GET_CITIES: `${BASE_URL}/statics/cities/`,
    GET_SPECIALIZATIONS: `${BASE_URL}/statics/specializations/`
  },
  consultations: {
    CONSULTATIONS: `${CONSULTATIONS_URL}/consultations/`,
    REVIEWS: `${CONSULTATIONS_URL}/reviews/`
  },
  advice: {
    ADVICE: `${ADVICE_URL}/advices/`
  },
  social: {
    POSTS: `${POST_URL}/posts/`,
    COMMENTS: `${POST_URL}/comments/`
  }
};
