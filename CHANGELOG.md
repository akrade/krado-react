# Changelog

## [Unreleased]

## [0.2.4] - 2021-06-08

### Changed

- Body and heading fonts has been changed from [Proxima Nova](https://fonts.adobe.com/fonts/proxima-nova) to [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro). ([KRAD-47])
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

[unreleased]: https://github.com/akrade/krado-react/compare/v0.2.3...HEAD
[0.2.4]: https://github.com/akrade/krado-react/compare/v0.2.3...v0.2.4
[0.2.3]: https://github.com/akrade/krado-react/compare/v0.2.2...v0.2.3
[0.2.2]: https://github.com/akrade/krado-react/compare/v0.2.1...v0.2.2
[0.2.1]: https://github.com/akrade/krado-react/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/akrade/krado-react/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/akrade/krado-react/releases/tag/v0.1.0
