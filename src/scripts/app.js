import unpoly from 'unpoly'

import contact from "./animations/contact"
import menu from "./menu"
import realisations from "./animations/realisations"
import homepage from "./animations/homepage"
import blog from "./blog"

up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.link.config.instantSelectors.push('a[href]')
up.link.config.preloadSelectors.push('a[href]')

up.compiler('body', () => {
  menu()
})
up.compiler('#hero', () => {
  homepage()
})
up.compiler('#page-portfolio', () => {
  realisations()
})
up.compiler("#contactform", () => {
  contact()
})
up.compiler('#blog', () => {
  blog()
})