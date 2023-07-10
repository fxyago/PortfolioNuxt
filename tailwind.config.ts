import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    '@/components/**/*.{vue,js,ts}',
    '@/content/**/*.md',
    '@/layouts/**/*.vue',
    '@/pages/**/*.vue',
    '@/App.{js,ts,vue}',
    '@/app.{js,ts,vue}',
  ]
}