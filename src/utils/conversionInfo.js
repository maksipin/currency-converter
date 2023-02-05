export default function conversionInfo(a, b) {
  if (a.CharCode && b.CharCode) {
    return (
      "1 " +
      a.CharCode +
      " = " +
      ((a.Value * b.Nominal) / (a.Nominal * b.Value)).toFixed(2) +
      " " +
      b.CharCode
    );
  } else return "";
}
