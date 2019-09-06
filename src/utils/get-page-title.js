import defaultSettings from '@/settings'
/**
 * 根据路由动态修改头部标签
 */

const title = defaultSettings.title || 'Vue Admin Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
