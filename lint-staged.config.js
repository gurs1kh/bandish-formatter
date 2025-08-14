export default {
  '**/*.{js,jsx,ts,tsx}': (stagedFiles) => [`eslint ${stagedFiles.join(' ')}`],
}
