import { v4 as uuid } from 'uuid'
import { MD5 } from 'crypto-js'
import {
  EventType,
  Event,
  ScriptError,
  UnhandledrejectionError,
  ResourceError,
  HttpError,
  CustomError,
} from '@tz-overwatch/type'
import pkg from '../package.json'

type Detail = ScriptError | UnhandledrejectionError | ResourceError | HttpError | CustomError

export function eventFromError<D extends Detail>(eventType: EventType, detail: D): Event {
  let event = createBaseEvent(eventType)
  switch (eventType) {
    case 'scriptError':
      event.scriptError = detail as ScriptError
      break
    case 'unhandledrejection':
      event.unhandledrejectionError = detail as UnhandledrejectionError
      break
    case 'resourceError':
      event.resourceError = detail as ResourceError
      break
    case 'httpError':
      event.httpError = detail as HttpError
      break
    case 'customError':
      event.customError = detail as CustomError
      break
    default:
  }
  return event
}

// 创建基本的event
function createBaseEvent(eventType: string): Event {
  let event_id = MD5(uuid()).toString()
  let event: Event = {
    id: event_id,
    timestamp: new Date().getTime(),
    version: pkg.version,
    type: eventType,
    pageUrl: window.location.href,
    ua: window.navigator.userAgent,
  }
  return event
}
