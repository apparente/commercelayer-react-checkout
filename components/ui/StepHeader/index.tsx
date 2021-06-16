import { useTranslation } from "react-i18next"
import styled from "styled-components"
import tw from "twin.macro"

import { Badge } from "../Badge"

interface Props {
  status: "edit" | "done" | "disabled"
  label: string
  info: string | Element | JSX.Element
  stepNumber?: number
  onEditRequest?: () => void
}

export const StepHeader: React.FC<Props> = ({
  status,
  label,
  info,
  stepNumber,
  onEditRequest,
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper disabled={status === "disabled"}>
      <Body>
        <Top>
          <Badge status={status} stepNumber={stepNumber} />
          <Title data-cy="step-header-customer">{label}</Title>
        </Top>
        <Info data-cy="step-header-info">{info}</Info>
      </Body>
    </Wrapper>
  )
}

interface WrapperProps {
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  ${tw`flex items-start mb-1.5 md:pl-0 md:mb-5`}
`

const Body = styled.div`
  ${tw``}
`

const Top = styled.div`
  ${tw`flex items-center md:items-start mb-0.5`}
`

const Title = styled.h2`
  ${tw`text-lg font-semibold leading-none pl-2`}
`

const Info = styled.p`
  ${tw`text-gray-500 text-sm pl-8`}
`
