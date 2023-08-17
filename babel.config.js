module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components/screens': './app/components/screens',
            '@/components/layout': './app/components/layout',
            '@/components/providers': './app/components/providers',
            '@/components/ui': './app/components/ui',
            '@/shared/constants': './app/shared/constants',
            '@/shared/colors': './app/shared/colors',
          },
        },
      ],
    ],
  }
}
