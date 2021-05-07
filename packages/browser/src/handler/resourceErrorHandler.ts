import { ResourceError } from '@tz-overwatch/type'
import { getXPath } from '@tz-overwatch/util'

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
  const resourceErrorDetail: ResourceError = {
    src: url,
    tagName: target.tagName,
    outerHTML: target.outerHTML,
    xPath: getXPath(target),
  }
  console.log(resourceErrorDetail)
  return resourceErrorDetail
}
