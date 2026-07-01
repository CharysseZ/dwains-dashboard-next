import type { HomeInformationCardKey, HomeSectionKey } from '../types/strategy';
import { ddLocalize } from './localize';

export const DEFAULT_HOME_SECTIONS_ORDER: HomeSectionKey[] = [
  'cameras',
  'areas',
  'devices',
  'favorites',
  'summaries',
];

const HOME_SECTION_RAW_META: Record<HomeSectionKey, { icon: string }> = {
  summaries: { icon: 'mdi:clipboard-list-outline' },
  cameras: { icon: 'mdi:cctv' },
  areas: { icon: 'mdi:floor-plan' },
  devices: { icon: 'mdi:view-dashboard-outline' },
  favorites: { icon: 'mdi:star' },
};

const HOME_INFORMATION_CARD_RAW_META: Record<HomeInformationCardKey, { icon: string }> = {
  people: { icon: 'mdi:account-group' },
  climate: { icon: 'mdi:home-thermometer-outline' },
  power: { icon: 'mdi:flash' },
  device_groups: { icon: 'mdi:view-grid-outline' },
};

export function getHomeSectionMeta(hass: any, key: HomeSectionKey): { label: string; icon: string; description: string } {
  const raw = HOME_SECTION_RAW_META[key];
  return {
    label: ddLocalize(hass, `home_section.${key}.label`),
    icon: raw.icon,
    description: ddLocalize(hass, `home_section.${key}.desc`),
  };
}

export const DEFAULT_HOME_INFORMATION_CARDS: HomeInformationCardKey[] = [
  'people',
  'climate',
  'power',
  'device_groups',
];

export function getHomeInformationCardMeta(hass: any, key: HomeInformationCardKey): { label: string; icon: string; description: string } {
  const raw = HOME_INFORMATION_CARD_RAW_META[key];
  return {
    label: ddLocalize(hass, `home_card.${key}.label`),
    icon: raw.icon,
    description: ddLocalize(hass, `home_card.${key}.desc`),
  };
}

export function normalizeHomeSectionsOrder(order?: readonly unknown[]): HomeSectionKey[] {
  const validSections = new Set<HomeSectionKey>(DEFAULT_HOME_SECTIONS_ORDER);
  const normalized = (order || []).filter((section): section is HomeSectionKey =>
    typeof section === 'string' && validSections.has(section as HomeSectionKey)
  );
  const unique = normalized.filter((section, index, all) => all.indexOf(section) === index);
  const missing = DEFAULT_HOME_SECTIONS_ORDER.filter(section => !unique.includes(section));

  const merged = [...unique];
  missing.forEach(section => {
    const defaultIndex = DEFAULT_HOME_SECTIONS_ORDER.indexOf(section);
    const insertIndex = merged.findIndex(
      current => DEFAULT_HOME_SECTIONS_ORDER.indexOf(current) > defaultIndex
    );

    if (insertIndex === -1) {
      merged.push(section);
    } else {
      merged.splice(insertIndex, 0, section);
    }
  });

  return merged;
}

export function normalizeHiddenHomeSections(hidden?: readonly unknown[]): HomeSectionKey[] {
  const validSections = new Set<HomeSectionKey>(DEFAULT_HOME_SECTIONS_ORDER);
  const normalized = (hidden || []).filter((section): section is HomeSectionKey =>
    typeof section === 'string' && validSections.has(section as HomeSectionKey)
  );

  return normalized.filter((section, index, all) => all.indexOf(section) === index);
}

export function normalizeHiddenHomeInformationCards(hidden?: readonly unknown[]): HomeInformationCardKey[] {
  const validCards = new Set<HomeInformationCardKey>(DEFAULT_HOME_INFORMATION_CARDS);
  const normalized = (hidden || []).filter((card): card is HomeInformationCardKey =>
    typeof card === 'string' && validCards.has(card as HomeInformationCardKey)
  );

  return normalized.filter((card, index, all) => all.indexOf(card) === index);
}
