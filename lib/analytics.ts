export type AnalyticsEvent = 
  | 'click_primary_cta'
  | 'click_secondary_cta'
  | 'submit_form'
  | 'click_sample';

interface AnalyticsEventData {
  event: AnalyticsEvent;
  location?: string;
  [key: string]: any;
}

export const trackEvent = (data: AnalyticsEventData) => {
  // В продакшене здесь будет интеграция с Google Analytics, Amplitude и т.д.
  console.log('Analytics Event:', data);
  
  // Пример для будущей интеграции с Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', data.event, {
      location: data.location,
      ...data,
    });
  }
  
  // Можно добавить отправку на свой бэкенд
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   body: JSON.stringify(data),
  // });
};
