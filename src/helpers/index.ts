import { getColorFromName, getRatioColor, getTorrentStateColor, getTorrentStateValue } from './colors'
import comparators, { Comparator } from './comparators'
import { formatDataValue, formatDataUnit, formatData } from './data'
import { formatEta, formatTimeMs, formatTimeSec } from './datetime'
import { toPrecision, formatPercent } from './number'
import { formatSpeedValue, formatSpeedUnit, formatSpeed } from './speed'
import { isWindows, isMac, doesCommand } from './system'
import { titleCase, capitalize, extractHostname, getDomainBody, splitByUrl, stringContainsUrl, codeToFlag } from './text'

export {
  getColorFromName,
  getRatioColor,
  getTorrentStateColor,
  getTorrentStateValue,
  comparators,
  formatDataValue,
  formatDataUnit,
  formatData,
  formatEta,
  formatTimeMs,
  formatTimeSec,
  toPrecision,
  formatPercent,
  formatSpeedValue,
  formatSpeedUnit,
  formatSpeed,
  isWindows,
  isMac,
  doesCommand,
  titleCase,
  capitalize,
  extractHostname,
  getDomainBody,
  splitByUrl,
  stringContainsUrl,
  codeToFlag
}

export type { Comparator }
