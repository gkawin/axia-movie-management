import * as restriction from './restriction'

describe('restriction rules', () => {
  it('given * should grant all permissions', () => {
    const result = restriction.isGranted('Manager', '*')
    expect(result).toEqual(true)
  })

  describe('TeamLeader grat the permissions', () => {
    it('should grant read', () => {
      const result = restriction.isGranted('TeamLeader', 'read')
      expect(result).toEqual(true)
    })
    it('should grant edit', () => {
      const result = restriction.isGranted('TeamLeader', 'edit')
      expect(result).toEqual(true)
    })
    it('should not grant delete', () => {
      const result = restriction.isGranted('TeamLeader', 'delete')
      expect(result).toEqual(false)
    })
  })
})
