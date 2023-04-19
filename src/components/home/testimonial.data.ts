import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Excelência no atendimento',
    content:
      'Fiquei muito satisfeito com o atendimento da Consult ST Engenharia. A equipe foi muito prestativa e esclareceu todas as minhas dúvidas com muita paciência e profissionalismo.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'UI/UX Engineer',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Soluções personalizadas',
    content:
      'A Consult ST Engenharia ofereceu soluções personalizadas para a minha empresa, atendendo às nossas necessidades específicas e superando as nossas expectativas.',
    user: {
      id: 1,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Compromisso com a qualidade',
    content:
      'Eu confio na Consult ST Engenharia para fornecer serviços de alta qualidade. Eles têm um forte compromisso com a qualidade e fazem questão de garantir que tudo seja feito de acordo com os mais altos padrões.',
    user: {
      id: 1,
      name: 'Nguyễn Văn',
      professional: 'FullStack Designer',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Confiabilidade',
    content:
      'Sempre que preciso de serviços de segurança do trabalho e meio ambiente, eu recorro à Consult ST Engenharia. Eles são confiáveis e têm uma equipe altamente capacitada para lidar com todas as nossas demandas.',
    user: {
      id: 1,
      name: 'Diana Jordan',
      professional: 'SEO Expert',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Resultados comprovados',
    content:
      'A Consult ST Engenharia entregou resultados comprovados para a minha empresa. Graças aos serviços prestados, conseguimos melhorar a segurança e saúde no ambiente de trabalho e otimizar os nossos processos.',
    user: {
      id: 1,
      name: 'Ashley Graham',
      professional: 'Back-End Developer',
      photo: '5.jpg',
    },
  },
]
