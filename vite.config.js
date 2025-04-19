import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import fs from 'node:fs'

export default defineConfig({
  base: '/coding-magia/',
  plugins: [
    createHtmlPlugin({
      minify: false,
      inject: {
        data: {
          header: fs.readFileSync('./src/partials/header.html', 'utf-8'),
          hero: fs.readFileSync('./src/partials/hero.html', 'utf-8'),
          birthday: fs.readFileSync('./src/partials/birthday-check.html', 'utf-8'),
          guess: fs.readFileSync('./src/partials/guess-number.html', 'utf-8'),
          rps: fs.readFileSync('./src/partials/rps.html', 'utf-8'),
          calculator: fs.readFileSync('./src/partials/calculator.html', 'utf-8'),
          timeCalculator: fs.readFileSync('./src/partials/time-calculator.html', 'utf-8'),
          googleDino: fs.readFileSync('./src/partials/google-dino.html', 'utf-8'),
          football: fs.readFileSync('./src/partials/football.html', 'utf-8'),
          threeNum: fs.readFileSync('./src/partials/three-numbers.html', 'utf-8'),
          team: fs.readFileSync('./src/partials/team.html', 'utf-8'),
          scientist: fs.readFileSync('./src/partials/scientist.html', 'utf-8'),
          footer: fs.readFileSync('./src/partials/footer.html', 'utf-8')
        }
      }
    })
  ],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
})
