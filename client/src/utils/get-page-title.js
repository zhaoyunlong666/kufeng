import defaultSettings from '@/settings'

const title = defaultSettings.title || '英语学习系统v1.0'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
