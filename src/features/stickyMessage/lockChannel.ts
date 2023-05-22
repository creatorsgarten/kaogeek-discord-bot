import { getCache, saveCache } from '../../utils/cache.js'

export const LOCK_PREFIX = 'sticky-lock'

/**
 * Set the channel status to locked
 *
 * @param {string} channelId - the id of channel that want to lock
 *
 */
export function lockChannel(channelId: string): void {
  saveCache(`${LOCK_PREFIX}-${channelId}`, true)
}

/**
 * Set the channel status to unlocked
 *
 * @param {string} channelId - the id of channel that want to unlock
 *
 */
export function unlockChannel(channelId: string): void {
  saveCache(`${LOCK_PREFIX}-${channelId}`, false)
}

/**
 * Check the channel status is lock
 *
 * @param {string} channelId - the id of channel that want to check
 * @returns cooldown status (default) if available flag is true return channel available status
 *
 */
export function isChannelLock(channelId: string): boolean {
  return getCache(`${LOCK_PREFIX}-${channelId}`) === true
}
