export default function calculation(value = 0, have = 0, get = 0) {
  return (
    value *
    ((have.Value * get.Nominal) / (get.Value * have.Nominal))
  ).toFixed(2);
}
