import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

const Head = () => {
  const { t } = useTranslation()

  return (
    <Helmet>
      <title>{t('siteDescription')}</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Lysu - Online Shopping List" />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content="Lysu - Online Shopping List" />
      <meta property="og:site_name" content="Lysu" />
      <meta property="og:description" content="Easily shopping list management with total values and quantity" />
    </Helmet>
  )
}

export default Head
