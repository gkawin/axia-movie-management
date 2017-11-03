
export default (item) => {
  return _.map(item, y => ({ label: y, value: y }))
}
