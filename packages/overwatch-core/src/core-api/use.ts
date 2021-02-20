import type { BaseOverwatch, Plugin } from '../type'
import { logger } from '../utils'

export function installPlugin(Overwatch: BaseOverwatch, plugin: Plugin, ...args: any[]) {
  const installedPlugins = Overwatch._plugins
  if (installedPlugins.indexOf(plugin) > -1) {
    return Overwatch
  }
  if (typeof plugin.install !== 'function') {
    logger.warn('Plugin must contain a member method named install.')
    return Overwatch
  }
  plugin.install.apply(plugin, [Overwatch, ...args])
  installedPlugins.push(plugin)
  return Overwatch
}
