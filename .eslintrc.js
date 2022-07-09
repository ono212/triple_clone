const createConfig = require('@titicaca/eslint-config-triple/create-config')

const { extends: extendConfigs, overrides } = createConfig({ type: 'frontend' })
module.exports = createConfig({ type: 'frontend', project: './tsconfig.json' })

module.exports = {
  extends: [
    ...extendConfigs,
    // 확장할 규칙 이름...
  ],
  overrides: [
    ...overrides,
    // 특정 파일 대상 규칙...
  ],
  rules: {
    // 개별 규칙
    '@typescript-eslint/naming-convention': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
  },
}
