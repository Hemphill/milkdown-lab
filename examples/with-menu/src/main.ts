import { menu, menuDefaultConfig } from '@milkdown-lab/plugin-menu'
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core'
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'

import { nord } from '@milkdown/theme-nord'
import '@milkdown/theme-nord/style.css'
import './style.css'

async function main() {
  const root = document.querySelector('#app')
  const editor = await Editor.make()
    .config(nord)
    .config(menuDefaultConfig)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, '# Hello milkdown-lab')
    })
    .use(menu)
    .use(commonmark)
    .use(gfm)
    .create()
}

main()