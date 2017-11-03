import _ from 'lodash'

const restrictionRules = [
  { 'Manager': [ '*' ] },
  { 'TeamLeader': [ 'read', 'add', 'edit' ] },
  { 'FloorSale': [ 'read' ] }
]

export function isPermission (position, permissionType) {
  if (permissionType === '*') return true

  const permissions = _.flatten(_.values(_.find(restrictionRules, position)))
  if (permissions.length === 0) return false
  const toAllow = new Set(permissions)
  return toAllow.has(permissionType)
}
