import { describe, expect, it } from 'vitest'

// import isOnlyEmojiV1 from './isOnlyEmoji'
import isOnlyEmojiV2 from './isOnlyEmojiV2'

describe('isOnlyEmojiV2', () => {
  it.each([
    { msg: '🫠' },
    { msg: '🅰️' },
    { msg: ' 🅾 🅾 🅾 🅾   🅾' },
    { msg: '<:test:000>' },
    { msg: '<a:test:111>' },
    { msg: '<:ShareX_0RB3:1108771953776537701>' },
    { msg: '<:Test:1108771953776537701>' },
    { msg: '🅾🫠' },
    { msg: '1️⃣' },
    { msg: '🏻 🏼' },
    { msg: '👩🏾‍❤‍💋‍👩🏼' },
    { msg: '0️⃣' },
    { msg: `️` },
    { msg: '#️⃣ *️⃣ 0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟' },
  ])('should match emoji ($msg)', async ({ msg }) => {
    // expect(isOnlyEmojiV1(msg)).toBeTruthy()
    expect(isOnlyEmojiV2(msg)).toBeTruthy()
  })

  it.each([
    { msg: '' },
    { msg: 'hello' },
    { msg: 'a' },
    { msg: '<html>' },
    { msg: '1 2 3' },
    { msg: '0' },
    { msg: '-1' },
    { msg: '0x 000' },
    { msg: '<:ShareX_0000 :>' },
    { msg: 'Test : ' },
    { msg: ':Imao' },
    { msg: 'hello 🫠🫠🫠' },
    { msg: `hi <:ShareX_00000:>` },
    { msg: `#20` },
  ])('should not match emoji ($msg)', async ({ msg }) => {
    // expect(isOnlyEmojiV1(msg)).toBeFalsy()
    expect(isOnlyEmojiV2(msg)).toBeFalsy()
  })
})
