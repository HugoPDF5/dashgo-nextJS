import { Box, Flex, SimpleGrid, Text, theme} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from '../components/Header/index'
import { Sidebar } from '../components/Sidebar/index'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options ={
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xasis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-03-18T00:00:00:000Z',
      '2022-04-18T00:00:00:000Z',
      '2022-05-18T00:00:00:000Z',
      '2022-06-18T00:00:00:000Z',
      '2022-07-18T00:00:00:000Z',
      '2022-08-18T00:00:00:000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade:'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }

}

const series = [
  {
    name: 'series 1',
    data: [655,10,587,65,21,958]
  }
]

const dashboard = () => {
  return (
    <Flex direction='column' h='100vh' > 
      <Header />
      
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />  

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'> 
          <Box padding={["6", "8"]} bg='gray.800' borderRadius='8' pb='4'> 
            <Text fontSize='lg' mb='4'> 
              Inscritos da semana
            </Text>
            <Chart type='area' height={160} options={options} series={series} />
          </Box>
          
          <Box padding={["6", "8"]} bg='gray.800' borderRadius='8' pb='4'> 
            <Text fontSize='lg' mb='4'> 
              Taxa de abertura
            </Text>
            <Chart type='area' height={160} options={options} series={series} />
          </Box>
          
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

export default dashboard