import test from 'ava'
import { execaNode } from 'execa'

test('main', async (t) => {
  const start = Date.now()
  await execaNode('./cli.js', [2.5])
  const elapsed = (Date.now() - start) / 1000
  t.true(elapsed > 2)
  t.true(elapsed < 3)
})
