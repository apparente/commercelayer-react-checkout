import Link from "next/link"
// eslint-disable-next-line import/order
import { useTranslation } from "next-i18next"

import { CartLinkWrapper, LinkWrapper } from "./styled"

interface Props {
  cartUrl?: string
}

export const ReturnToCart = ({ cartUrl }: Props) => {
  if (!cartUrl) return <></>

  const { t } = useTranslation()

  return (
    <CartLinkWrapper data-test-id="edit-cart-link">
      <Link href={cartUrl} passHref>
        <LinkWrapper>
          <>&lt;</> {t("orderRecap.returnToCart")}
        </LinkWrapper>
      </Link>
    </CartLinkWrapper>
  )
}
