import { ResourceErrorDetail } from '../type/index'
import { utils as coreUtils } from '@tz-overwatch/core'

const { getXPath } = coreUtils

export function resourceErrorHandler(e: ErrorEvent) {
  console.log(e)
  const target = (e.target || e.srcElement) as
    | HTMLScriptElement
    | HTMLLinkElement
    | HTMLImageElement
  if (!target) return
  const isElementTarget =
    target instanceof HTMLScriptElement ||
    target instanceof HTMLLinkElement ||
    target instanceof HTMLImageElement
  if (!isElementTarget) return
  let url = ''
  if (target instanceof HTMLScriptElement || target instanceof HTMLImageElement) {
    url = target.src
  } else if (target instanceof HTMLLinkElement) {
    url = target.href
  }
  const resourceErrorDetail: ResourceErrorDetail = {
    type: 'resourceError',
    timestamp: new Date().getTime(),
    pageUrl: window.location.href,
    title: document.title,
    src: url,
    tagName: target.tagName,
    outerHTML: target.outerHTML,
    xPath: getXPath(target),
  }
  console.log(resourceErrorDetail)
  return resourceErrorDetail
}
