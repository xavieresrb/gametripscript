function getRandomSign(): -1 | 1 {
  const n = Math.random();
  return n > 0.5 ? -1 : 1;
}

export { getRandomSign };
