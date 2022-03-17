import { useTranslation } from "next-i18next"
import Link from "next/link"

import { CartLinkWrapper, LinkWrapper } from "./styled"

interface Props {
  cartUrl: string | undefined
}

export const ReturnToCart = ({ cartUrl }: Props) => {
  if (!cartUrl) return <></>

  const { t } = useTranslation()

  return (
    <CartLinkWrapper>
      <Link href={cartUrl} passHref>
        <LinkWrapper>
          <>&lt;</> {t("orderRecap.returnToCart")}
        </LinkWrapper>
      </Link>
    </CartLinkWrapper>
  )
}
