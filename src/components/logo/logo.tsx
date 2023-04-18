import React, { FC } from 'react'
import { Box } from '@mui/material'

import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box onClick={onClick}>
      <Image
        src="/images/Consult-ST-Engenharia-Logo.png"
        alt="Consult ST Engenharia Logo"
        width={200}
        height={65}
      />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
