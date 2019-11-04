/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require("react")
const { ParallaxProvider } = require("react-scroll-parallax")

exports.wrapPageElement = ({ element, props }) => {
  return <ParallaxProvider>{element}</ParallaxProvider>
}
