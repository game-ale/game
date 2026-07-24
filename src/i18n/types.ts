export interface Translations {
  nav: {
    projects: string;
    arsenal: string;
    experience: string;
    algorithms: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string[];
    headline: string;
    description: string;
    descriptionAstu: string;
    descriptionA2sv: string;
    descriptionEtcpc: string;
    descriptionZindi: string;
    descriptionClosing: string;
    github: string;
    twitter: string;
    linkedin: string;
    contactBtn: string;
    availableBadge: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    readCaseStudy: string;
    viewOnGithub: string;
    viewLiveDemo: string;
  };
  arsenal: {
    label: string;
    title: string;
    subtitle: string;
    languages: string;
    frameworks: string;
    mlAi: string;
    databases: string;
    devopsMlops: string;
  };
  experience: {
    title: string;
    subtitle: string;
    education: string;
    experienceLabel: string;
    educationBadge: string;
    viewCertificate: string;
  };
  algorithms: {
    label: string;
    title: string;
    subtitle: string;
    activePlatforms: string;
    viewCertificate: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    getInTouch: string;
    getInTouchDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    sent: string;
    successMsg: string;
    errorMsg: string;
    location: string;
  };
  footer: {
    tagline: string;
    copyright: string;
    techLine: string;
  };
}

export type LocaleCode = "en" | "zh" | "es";

export interface LocaleInfo {
  code: LocaleCode;
  label: string;
  nativeName: string;
}
