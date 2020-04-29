function findMatching(drivers, string) {
  return drivers.filter((m) => m.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(
    (m) => m.toLowerCase().indexOf(string.toLowerCase()) === 0
  );
}

function matchName(drivers, string) {
  return drivers.filter((record) => record.name === string);
}
