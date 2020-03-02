function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export { timeout };
