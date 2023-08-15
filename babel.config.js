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
            '@/shared/constants': './app/shared/constants',
            '@/shared/colors': './app/shared/colors',
          },
        },
      ],
    ],
  }
}
