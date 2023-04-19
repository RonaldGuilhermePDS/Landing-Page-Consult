import React, { ReactNode } from 'react'
import PeopleIcon from '@mui/icons-material/People'
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ScienceIcon from '@mui/icons-material/Science'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Abordagem diferenciada',
    description: 'Nossa abordagem busca agregar valor para clientes, empreendedores, colaboradores e comunidades. Temos um forte compromisso com a responsabilidade social e com a promoção da saúde e segurança no ambiente de trabalho, e fazemos questão de ir além da simples prestação de serviços.',
    icon: <PeopleIcon />,
  },
  {
    title: 'Experiência no mercado',
    description: 'Temos uma vasta experiência no mercado desde 2010, o que nos permite oferecer serviços gerenciais, administrativos e operacionais que agregam valor aos nossos clientes e garantem a satisfação e a salubridade do processo.',
    icon: <SchoolIcon />,
  },
  {
    title: 'Compromisso com a qualidade',
    description: 'Nós temos um forte compromisso com a qualidade em todos os serviços prestados. Nossa equipe de profissionais altamente capacitados trabalha incansavelmente para garantir a satisfação dos nossos clientes e a salubridade do processo. Aqui na Consult ST Engenharia, você pode contar com serviços de alta qualidade, com a garantia de que tudo foi feito de acordo com os mais altos padrões.',
    icon: <StarIcon />,
  },
  {
    title: 'Soluções inteligentes',
    description: 'Oferecemos soluções inteligentes para nossos clientes, que visam atender às necessidades específicas de cada empresa e promover a segurança e saúde no ambiente de trabalho. Utilizamos a nossa experiência e conhecimento para criar soluções sob medida que atendam às suas necessidades.',
    icon: <ScienceIcon />,
  },
]
