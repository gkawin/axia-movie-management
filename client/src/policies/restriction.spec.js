import * as restriction from './restriction'

describe('restriction rules', () => {
  it('given * should grant all permissions', () => {
    const result = restriction.isPermission('Manager', '*')
    expect(result).toEqual(true)
  })

  describe('TeamLeader grat the permissions', () => {
    it('should grant read', () => {
      const result = restriction.isPermission('TeamLeader', 'read')
      expect(result).toEqual(true)
    })
    it('should grant edit', () => {
      const result = restriction.isPermission('TeamLeader', 'edit')
      expect(result).toEqual(true)
    })
    it('should not grant delete', () => {
      const result = restriction.isPermission('TeamLeader', 'delete')
      expect(result).toEqual(false)
    })
  })
})
