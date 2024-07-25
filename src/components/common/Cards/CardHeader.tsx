import { FC } from 'react'
import Typography from '@/components/common/Typography/Typography'
import CircularButton from '@/components/common/Buttons/CircularButton'

interface CardHeaderProps {
  title: string
}

const CardHeader: FC<CardHeaderProps> = ({ title }) => {
  return (
    <header className="h-8 flex justify-between items-center">
      <Typography variant="subtitle" weight="semibold">{ title }</Typography>
      <CircularButton isElevated={true} size='small'/>
    </header>
  )
}

export default CardHeader
