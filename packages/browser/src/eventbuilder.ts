import {
  EventType,
  Event,
  ScriptError,
  UnhandledrejectionError,
  ResourceError,
  HttpError,
  CustomError,
} from '@tz-overwatch/type'

export function eventFromError<D>(eventType: EventType, detail: D): Event {
  // TODO: 根据不同的error类型，创建格式统一的event
  switch (eventType) {
    case 'scriptError':
      break
    case 'unhandledrejection':
      break
    case 'resourceError':
      break
    case 'resourceError':
      break
    case 'httpError':
      break
    case 'customError':
      break
    default:
  }
  return {} as Event
}

// 创建基本的event
function createBaseEvent(): Partial<Event> {
  // do something
  return {} as Event
}
