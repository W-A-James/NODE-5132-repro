
test('Imports compress', async () => {
  const { compress } = require('@mongodb-js/zstd');
  const buffer = Buffer.from('abcdefghi', 'utf-8');
  const compressed = await compress(buffer);
  console.log(compressed);
});
