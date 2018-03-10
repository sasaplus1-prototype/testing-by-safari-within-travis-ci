import { Selector } from 'testcafe';

fixture('test').page('https://pages.github.com');

test('title has `GitHub Pages`', async function(t) {
  return await t.expect(Selector('title').innerText).match(/GitHub Pages/);
});
