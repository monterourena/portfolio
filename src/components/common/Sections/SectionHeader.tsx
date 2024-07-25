import { FC } from 'react'
import { RenameKeys } from '@/types/common'
import Button, { ButtonProps } from '@/components/common/Buttons/Button'
import Typography from '@/components/common/Typography/Typography'

type RenamedButtonProps = RenameKeys<
  ButtonProps,
  {
    label: 'buttonLabel'
    variant: 'buttonVariant'
    onClick: 'onButtonClick'
  }
>

export interface SectionHeaderProps extends RenamedButtonProps {
  title: string
}

const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  buttonLabel,
  buttonVariant = 'faded',
  onButtonClick
}) => {
  return (
    <header className="w-full h-12 flex justify-between items-center">
      <Typography variant="title" weight="semibold">
        {title}
      </Typography>
      <Button label={buttonLabel} onClick={onButtonClick} variant={buttonVariant} />
    </header>
  )
}

export default SectionHeader
