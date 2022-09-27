import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'

import { Logo } from './Logo'
import { NotificationsNav } from './NotificationNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export const Header = () => {
  const { onOpen } = useSidebarDrawer()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg:true
  })

  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
    >
      {!isWideVersion && (
        <IconButton
        icon={<Icon as ={RiMenuLine}/>}
        aria-label='Open navigation'
        fontSize='24'
        variant='unstyled'
        onClick={onOpen}
        mr='2'
        />

      )} 
      <Logo />  
      { isWideVersion && <SearchBox />}

      <Flex
        align='center'
        ml='auto'
      >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion}/>
      </Flex>
    </Flex>
  )
}

