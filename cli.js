#!/usr/bin/env node
import delay from './index.js'
import { promises as fs } from 'node:fs'

const arg = process.argv[2]
const help = `
  Usage
  $ delay <seconds>

  Example
  $ delay 4.3 && echo 🦄
`
if (!arg) {
  console.log(help)
  process.exit()
}

if (['--version', '-V'].includes(arg)) {
  const { version } = JSON.parse(await fs.readFile('package.json'))
  console.log(version)
  process.exit()
}

let seconds = parseFloat(arg)
if (isNaN(seconds)) {
  console.error('Specify the delay')
  process.exit(1)
}

const font = [
  [
    `  ▄▄▄▄▄▄▄▄▄  `,
    ` ▐░░░░░░░░░▌ `,
    `▐░█░█▀▀▀▀▀█░▌`,
    `▐░▌▐░▌    ▐░▌`,
    `▐░▌ ▐░▌   ▐░▌`,
    `▐░▌  ▐░▌  ▐░▌`,
    `▐░▌   ▐░▌ ▐░▌`,
    `▐░▌    ▐░▌▐░▌`,
    `▐░█▄▄▄▄▄█░█░▌`,
    ` ▐░░░░░░░░░▌ `,
    `  ▀▀▀▀▀▀▀▀▀  `
  ],
  [
    `    ▄▄▄▄     `,
    `  ▄█░░░░▌    `,
    ` ▐░░▌▐░░▌    `,
    `  ▀▀ ▐░░▌    `,
    `     ▐░░▌    `,
    `     ▐░░▌    `,
    `     ▐░░▌    `,
    `     ▐░░▌    `,
    ` ▄▄▄▄█░░█▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `          ▐░▌`,
    `          ▐░▌`,
    ` ▄▄▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    `▐░█▀▀▀▀▀▀▀▀▀ `,
    `▐░█▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `          ▐░▌`,
    ` ▄▄▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `          ▐░▌`,
    ` ▄▄▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ],
  [
    ` ▄         ▄ `,
    `▐░▌       ▐░▌`,
    `▐░▌       ▐░▌`,
    `▐░▌       ▐░▌`,
    `▐░█▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `          ▐░▌`,
    `          ▐░▌`,
    `          ▐░▌`,
    `           ▀ `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    `▐░█▀▀▀▀▀▀▀▀▀ `,
    `▐░█▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `          ▐░▌`,
    `          ▐░▌`,
    ` ▄▄▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    `▐░█▀▀▀▀▀▀▀▀▀ `,
    `▐░▌          `,
    `▐░█▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    `▐░█▀▀▀▀▀▀▀█░▌`,
    `▐░▌       ▐░▌`,
    `▐░█▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `         ▐░▌ `,
    `        ▐░▌  `,
    `       ▐░▌   `,
    `      ▐░▌    `,
    `     ▐░▌     `,
    `    ▐░▌      `,
    `   ▐░▌       `,
    `    ▀        `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    `▐░█▀▀▀▀▀▀▀█░▌`,
    `▐░▌       ▐░▌`,
    `▐░█▄▄▄▄▄▄▄█░▌`,
    ` ▐░░░░░░░░░▌ `,
    `▐░█▀▀▀▀▀▀▀█░▌`,
    `▐░▌       ▐░▌`,
    `▐░█▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ],
  [
    ` ▄▄▄▄▄▄▄▄▄▄▄ `,
    `▐░░░░░░░░░░░▌`,
    `▐░█▀▀▀▀▀▀▀█░▌`,
    `▐░▌       ▐░▌`,
    `▐░█▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀█░▌`,
    `          ▐░▌`,
    ` ▄▄▄▄▄▄▄▄▄█░▌`,
    `▐░░░░░░░░░░░▌`,
    ` ▀▀▀▀▀▀▀▀▀▀▀ `
  ]
]
const fontHeight = font[0].length
const fontWidth = font[0][0].length

const maxLen = seconds.toString().length
const getNumerals = (num) => {
  const str = num.toString()
  const pad = str.length < maxLen ? ' '.repeat((maxLen - str.length) * fontWidth) + '\n' : '\n'
  let out = ''
  for (let b = 0; b < fontHeight; b++) {
    for (let a = 0; a < str.length; a++) {
      out += font[parseInt(str[a])][b]
    }
    out += pad
  }
  return out
}

const cursorUp = () => {
  for (let a = 0; a < fontHeight; a++) {
    process.stdout.write('\x1B[K\x1B[1A\r')
  }
}

const print = (num) => {
  process.stdout.write(getNumerals(num, maxLen))
}

process.stdout.write('\n')
if (seconds < 1) {
  print(1)
  await delay(seconds)
} else {
  const remainder = seconds - Math.floor(seconds)
  seconds = Math.floor(seconds)
  print(seconds)
  await delay(remainder)
  while (seconds > 0) {
    await delay(1)
    seconds--
    cursorUp()
    print(seconds)
  }
}
cursorUp()
print(0)
