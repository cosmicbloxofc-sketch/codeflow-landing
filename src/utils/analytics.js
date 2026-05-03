/**
 * Helper functions para rastreamento de eventos com PostHog
 * O PostHog já está carregado via script no index.html
 */

export const trackEvent = (eventName, properties = {}) => {
  if (window.posthog) {
    window.posthog.capture(eventName, properties);
  }
};

export const trackPlanClick = (planId, planName, planPrice) => {
  trackEvent('plan_clicked', {
    plan_id: planId,
    plan_name: planName,
    plan_price: planPrice,
  });
};

export const trackMetaInitiateCheckout = ({ planId, planName, value, currency = 'BRL' }) => {
  if (window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      content_ids: [planId],
      content_name: planName,
      content_type: 'product',
      currency,
      value,
    });
  }
};

export const trackMetaViewContent = ({ planId, planName, value, currency = 'BRL' }) => {
  if (window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_ids: [planId],
      content_name: planName,
      content_type: 'product',
      currency,
      value,
    });
  }
};

export const trackCTAClick = (ctaLocation) => {
  trackEvent('cta_clicked', {
    location: ctaLocation,
  });
};

export const trackSectionView = (sectionName) => {
  trackEvent('section_viewed', {
    section: sectionName,
  });
};

export const identifyUser = (userId, properties = {}) => {
  if (window.posthog) {
    window.posthog.identify(userId, properties);
  }
};
