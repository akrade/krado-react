# Changelog

## [Unreleased]

### Fixed

- Incorrect `addHeaderOffset` prop type in `Push` cell.
- `Push` cell not having a higher `z-index` level.

## [0.12.1] - 2022-02-18

### Changed

- `Push` cell custom scroll bar now has a lighter color.

## [0.12.0] - 2022-02-18

### Changed

- Default body `font-weight` to 400. ([KRAD-303])
- For better usability, the `Panel` and `Push` menu icons are now persistent regardless of hover state. ([KRAD-315])
- `Push` menu cell has been reworked for a better experience. ([KRAD-259]).

### Fixed

- Push menu not letting you scroll all the way down when there is overflowed content. ([KRAD-248])
- Push menu casing page content to not meet the left edge of the screen. ([KRAD-317])
- Push menu causing page to jitter on page load. ([KRAD-243])

[krad-303]: https://akrade.atlassian.net/browse/KRAD-303
[krad-315]: https://akrade.atlassian.net/browse/KRAD-315
[krad-259]: https://akrade.atlassian.net/browse/KRAD-259
[krad-248]: https://akrade.atlassian.net/browse/KRAD-248
[krad-317]: https://akrade.atlassian.net/browse/KRAD-317
[krad-243]: https://akrade.atlassian.net/browse/KRAD-243

## [0.11.0] - 2022-02-14

### Added

- `Header` and `Panel` menu items now have have an boolean active state. ([KRAD-263])
- Ability to add letters inside `Avatar`. ([KRAD-283])
- Ability to add a description/subtitle to a `Push` header item. ([KRAD-282])

### Changed

- Change default font size of `Text` to `body.paragraph` variant. ([KRAD-246])
- `LinkHeading` now contains it's `id`.
- Theme font styles have been corrected and adjusted. ([KRAD-266])
- The push menu item animation has been reworked. ([KRAD-258])

### Fixed

- `HeaderAvatar` cell not pulling passing props. ([KRAD-283])

### Removed

- Content for title in `Header` being uppercase by default. ([KRAD-239])
- `text.title` color bond. ([KRAD-245])

[krad-263]: https://akrade.atlassian.net/browse/KRAD-263
[krad-246]: https://akrade.atlassian.net/browse/KRAD-246
[krad-266]: https://akrade.atlassian.net/browse/KRAD-266
[krad-258]: https://akrade.atlassian.net/browse/KRAD-258
[krad-283]: https://akrade.atlassian.net/browse/KRAD-283
[krad-282]: https://akrade.atlassian.net/browse/KRAD-282
[krad-239]: https://akrade.atlassian.net/browse/KRAD-239
[krad-245]: https://akrade.atlassian.net/browse/KRAD-245

## [0.10.0] - 2022-01-25

### Added

- `Footer` tissue. ([KRAD-133])
- "Color Bond" system for theme base colors. ([KRAD-189])

[krad-133]: https://akrade.atlassian.net/browse/KRAD-133
[krad-189]: https://akrade.atlassian.net/browse/KRAD-189

## [0.9.0] - 2022-01-14

### Added

- Implemented [Storybook's official Emotion 11 quasi-compatibility](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#emotion11-quasi-compatibility). ([KRAD-211])
- Ability to add descriptions to `PanelItem`. ([KRAD-201])

### Changed

- Default body font to "[Inter](https://fonts.google.com/specimen/Inter)." ([KRAD-238])
- `Header` now has an lower elevation. ([KRAD-222])

### Fixed

- Gave the title's letter spacing in `Header` more breathing room. ([KRAD-220])
- `PushHeader` bold font weight not applying. ([KRAD-222])
- Incorrect `PushLabel` when inside a level 100 `Push` menu. ([KRAD-222])
- `Panel` menu showing up behind other elements. ([KRAD-235])
- `HeaderIconButton` props not working. ([KRAD-213])
- `Push` menu not spanning the full height of the page. ([KRAD-233])
- `Push` menu's close button not sticking to the top of the screen on scroll. ([KRAD-233])
- Not being able to scroll down to see more menu content in `Push` menu. ([KRAD-233])

[krad-211]: https://akrade.atlassian.net/browse/KRAD-211
[krad-201]: https://akrade.atlassian.net/browse/KRAD-201
[krad-238]: https://akrade.atlassian.net/browse/KRAD-238
[krad-233]: https://akrade.atlassian.net/browse/KRAD-233
[krad-220]: https://akrade.atlassian.net/browse/KRAD-220
[krad-222]: https://akrade.atlassian.net/browse/KRAD-222
[krad-235]: https://akrade.atlassian.net/browse/KRAD-235
[krad-213]: https://akrade.atlassian.net/browse/KRAD-213

## [0.8.0] - 2022-01-03

### Added

- `Container` cell. ([KRAD-218])
- `Divider` cell. ([KRAD-219])
- Re-added `Heading` cell.
- `LinkHeading` cell.

### Changed

- Adjusted `Push` close animation for give extra space for the open/close open.

### Fixed

- `Text` turning bold when set as an heading tag like `<h2>`. ([KRAD-217])
- `Push` not exporting correctly. ([KRAD-214])

### Removed

- Unused React imports inside `Panel` and `Push`. ([KRAD-215])

[krad-218]: https://akrade.atlassian.net/browse/KRAD-218
[krad-219]: https://akrade.atlassian.net/browse/KRAD-219
[krad-217]: https://akrade.atlassian.net/browse/KRAD-217
[krad-214]: https://akrade.atlassian.net/browse/KRAD-214
[krad-215]: https://akrade.atlassian.net/browse/KRAD-215

## [0.7.2] - 2021-12-17

### Added

- `@babel/plugin-transform-react-jsx`. ([KRAD-205])
- [`microbundle`](https://github.com/developit/microbundle). ([KRAD-205])

### Changed

- Updated `@babel/core`. ([KRAD-205])

### Fixed

- Broken JSX transform error on compile caused by [`microbundle-crl`](https://www.npmjs.com/package/microbundle-crl). ([KRAD-205])

### Removed

- `@babel/preset-react`. ([KRAD-205])
- [`microbundle-crl`](https://www.npmjs.com/package/microbundle-crl). ([KRAD-205])
- Unused React imports... [again](https://github.com/akrade/krado-react/releases/tag/v0.7.0). ([KRAD-207])

[krad-205]: https://akrade.atlassian.net/browse/KRAD-205
[krad-207]: https://akrade.atlassian.net/browse/KRAD-207

## [0.7.1] - 2021-12-03

### Fixed

- Added back in React imports to fix "React is not defined" when package is in use. ([KRAD-208])

[krad-208]: https://akrade.atlassian.net/browse/KRAD-208

## [0.7.0] - 2021-12-03

### Changed

- `Heading` cell component has now been combined into `Text` for simplicity. ([KRAD-177])
- Upgraded to Babel 7.16 ([KRAD-205])
- Turned off the `react/jsx-uses-react` and `react/react-in-jsx-scope` rules. ([KRAD-207])
- Swapped existing [Fluent UI Icons](https://www.npmjs.com/package/@fluentui/react-icons) with [Material Icons](https://react-icons.github.io/react-icons/icons?name=md). ([KRAD-183])

### Fixed

- Incorrect JSX runtime error by [removing the custom pragma comments all together](https://theme-ui.com/guides/jsx-pragma/#automatic-jsx-runtime) and setting it globally inside the Babel config. ([KRAD-205])

### Removed

- Unused React imports. See [this blog post from React](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) for more info. ([KRAD-207])
- `Heading` cell component. ([KRAD-177])
- [`@fluentui/react-icons`](https://www.npmjs.com/package/@fluentui/react-icons) package. ([KRAD-183])

[krad-177]: https://akrade.atlassian.net/browse/KRAD-177
[krad-205]: https://akrade.atlassian.net/browse/KRAD-205
[krad-207]: https://akrade.atlassian.net/browse/KRAD-207
[krad-183]: https://akrade.atlassian.net/browse/KRAD-183

## [0.6.4] - 2021-11-30

### Fixed

- "importSource cannot be set when runtime is classic" error by switching back to the [classic JSX pragma syntax](https://github.com/system-ui/theme-ui/issues/1160#issuecomment-715530924). ([KRAD-205])

[krad-205]: https://akrade.atlassian.net/browse/KRAD-205

## [0.6.3] - 2021-11-29

### Changed

- Upgraded from React 16.13.1 to [React 17.0.2](https://github.com/facebook/react/releases/tag/v17.0.2). ([KRAD-203])
- Upgraded to [Storybook 6.4.0](https://github.com/storybookjs/storybook/releases/tag/v6.4.0). ([KRAD-204])
- Upgraded to [Theme UI 0.12.1](https://github.com/system-ui/theme-ui/releases/tag/v0.12.1). ([KRAD-204])
- Upgraded other dependencies. ([KRAD-204])

### Fixed

- Incorrect version number in `package.json`.

[krad-203]: https://akrade.atlassian.net/browse/KRAD-203
[krad-204]: https://akrade.atlassian.net/browse/KRAD-204

## [0.6.2] - 2021-11-27

### Fixed

- Incorrect export for `Header`.

## [0.6.1] - 2021-11-27

### Fixed

- Missing export for `Header` tissue component.

### Removed

- Removed unused "Dummy" folder.

## [0.6.0] - 2021-11-27

### Added

- `Header` component. ([KRAD-163])

### Fixed

- Incorrect formatting in [0.5.0] changelog notes.

[krad-163]: https://akrade.atlassian.net/browse/KRAD-163

## [0.5.0] - 2021-11-25

### Added

- `Panel` menu component. ([KRAD-184])
- `Push` menu component. ([KRAD-162])
- Interactive show and hide animation for `ToggleIcon`.

### Changed

- Updated body and heading fonts to [Barlow](https://fonts.google.com/specimen/Barlow). ([KRAD-175])
- Updated display font to [Merriweather](https://fonts.google.com/specimen/Merriweather). ([KRAD-175])
- The `ToggleIcon` now has a more interactive hover animation.

### Fixed

- Fixed variant name typo in `Button` story. ([KRAD-181])

[krad-184]: https://akrade.atlassian.net/browse/KRAD-184
[krad-162]: https://akrade.atlassian.net/browse/KRAD-162
[krad-175]: https://akrade.atlassian.net/browse/KRAD-175
[krad-181]: https://akrade.atlassian.net/browse/KRAD-181

## [0.4.1] - 2021-10-22

### Fixed

- Missing dash before date in [0.2.6](https://github.com/akrade/krado-react/releases/tag/v0.2.6) changelog notes.

## [0.4.0] - 2021-10-22

### Added

- Storyboard documentation for each component. ([KRAD-153])
- Component props are now validated with [`prop-types`](https://www.npmjs.com/package/prop-types).
- Ability add left or right icons inside of the `Button` component. ([KRAD-172])
- `ToggleIcon` component. ([KRAD-173])

### Changed

- Renamed `Button` variant from `primary` to `solid`. ([KRAD-170])
- The font size of the small `Button` variant is now a bit smaller. ([KRAD-171])

### Removed

- `textDark` color inside `theme.js`. ([KRAD-169])

### Fixed

- Missing version [0.2.6](https://github.com/akrade/krado-react/releases/tag/v0.2.6) and [0.3.0](https://github.com/akrade/krado-react/releases/tag/v0.3.0) release dates in `CHANGELOG.md`.

[krad-153]: https://akrade.atlassian.net/browse/KRAD-153
[krad-172]: https://akrade.atlassian.net/browse/KRAD-172
[krad-173]: https://akrade.atlassian.net/browse/KRAD-173
[krad-170]: https://akrade.atlassian.net/browse/KRAD-170
[krad-171]: https://akrade.atlassian.net/browse/KRAD-171
[krad-169]: https://akrade.atlassian.net/browse/KRAD-169

## [0.3.0] - 2021-10-13

### Added

- Brand new components rewritten with [Theme UI](https://theme-ui.com). ([KRAD-122])
- New theme color selection from the _new_ [Krado color system](https://www.figma.com/file/1TAmEbsyXfnJ1J9CitZyZY/Krado-Identity?node-id=4506%3A67). ([KRAD-158])

### Removed

- References to [Styled System](https://styled-system.com). ([KRAD-122])
- References to [styled-components](https://styled-components.com). ([KRAD-122])
- `Title` component as the `Heading` component now replaces it. ([KRAD-122])
- `Tag` component. ([KRAD-122])

[krad-122]: https://akrade.atlassian.net/browse/KRAD-122
[krad-158]: https://akrade.atlassian.net/browse/KRAD-158

## [0.2.6] - 2021-06-16

### Changed

- Display font has been changed from [Merriweather](https://fonts.google.com/specimen/Merriweather) to [Source Serif Pro](https://fonts.google.com/specimen/Source+Serif+Pro). ([KRAD-93])

[krad-93]: https://akrade.atlassian.net/browse/KRAD-93

## [0.2.5] - 2021-06-08

### Fixed

- Correct `CHANGELOG.md` mistakes ([KRAD-91])

[krad-91]: https://akrade.atlassian.net/browse/KRAD-91

## [0.2.4] - 2021-06-08

### Changed

- Body and heading fonts have been changed from [Proxima Nova](https://fonts.adobe.com/fonts/proxima-nova) to [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro). ([KRAD-47])
- Display font has been changed from [Gimlet Text](https://fonts.adobe.com/fonts/gimlet-text) to [Merriweather](https://fonts.google.com/specimen/Merriweather). ([KRAD-47])
- Updated fallback display fonts to [Georgia](<https://en.wikipedia.org/wiki/Georgia_(typeface)>) and `serif`. ([KRAD-51])

### Security

Upgraded dependencies. ([KRAD-42])

[krad-47]: https://akrade.atlassian.net/browse/KRAD-47
[krad-51]: https://akrade.atlassian.net/browse/KRAD-51
[krad-42]: https://akrade.atlassian.net/browse/KRAD-42

## [0.2.3] - 2021-04-19

### Changed

- Exported `color.js` for use in extending themes. (KRAD-48)

## [0.2.2] - 2021-04-15

### Added

- [Position](https://styled-system.com/table#position) style props to the `Box` component.

## [0.2.1] - 2021-04-14

### Added

- Hidden `TestComponent` in example page for debugging.

### Changed

- Adobe Fonts import to support bold [display fonts.](https://fonts.adobe.com/fonts/gimlet-text)
- Made some style declarations for `Title` component to use the `defaultProps` property instead.
- Made the `Text` component extend `Box` instead of a `div` element.
- Made the `Title` component extend `Box`.

### Fixed

- Some `Text` and `Title` style props not working when a variant is applied (KRAD-43).

## [0.2.0] - 2021-03-24

### Added

- Core components. (KRAD-4)
  - `Box`
  - `Flex`
  - `Grid`
  - `Text`
  - `Heading`
  - `Title`
  - `Container`
  - `Link`
  - `Card`
  - `Image`
  - `Avatar`
  - `Button`
  - `Tag`
- Example page for showcasing the core components.
- `CHANGELOG.md` written in "[Keep a Changelog](https://keepachangelog.com/en/1.0.0/)" conventions. (KRAD-32)

## [0.1.0] - 2021-02-19

Initial development

[unreleased]: https://github.com/akrade/krado-react/compare/v0.12.1...HEAD
[0.12.1]: https://github.com/akrade/krado-react/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/akrade/krado-react/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/akrade/krado-react/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/akrade/krado-react/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/akrade/krado-react/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/akrade/krado-react/compare/v0.7.2...v0.8.0
[0.7.2]: https://github.com/akrade/krado-react/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/akrade/krado-react/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/akrade/krado-react/compare/v0.6.4...v0.7.0
[0.6.4]: https://github.com/akrade/krado-react/compare/v0.6.3...v0.6.4
[0.6.3]: https://github.com/akrade/krado-react/compare/v0.6.2...v0.6.3
[0.6.2]: https://github.com/akrade/krado-react/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/akrade/krado-react/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/akrade/krado-react/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/akrade/krado-react/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/akrade/krado-react/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/akrade/krado-react/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/akrade/krado-react/compare/v0.2.6...v0.3.0
[0.2.6]: https://github.com/akrade/krado-react/compare/v0.2.5...v0.2.6
[0.2.5]: https://github.com/akrade/krado-react/compare/v0.2.4...v0.2.5
[0.2.4]: https://github.com/akrade/krado-react/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/akrade/krado-react/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/akrade/krado-react/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/akrade/krado-react/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/akrade/krado-react/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/akrade/krado-react/releases/tag/v0.1.0
