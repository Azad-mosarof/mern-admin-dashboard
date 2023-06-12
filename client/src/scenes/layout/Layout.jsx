import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { useGetUserQuery } from '../../state/api'

function Layout() {

    const userId = useSelector(state => state.global.userId)
    const { data } = useGetUserQuery(userId)

    const user = {
        name: data?.name,
        email: data?.email,
        occupation: data?.occupation,
    }

    const isNonMobile = useMediaQuery('(min-width: 600px)')
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
      <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
          <Sidebar 
            user={data || {}}
            isNonMobile={isNonMobile}
            drawerWidth="250px"
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Box flexGrow={1}>
              <Navbar 
                user={data || {}}           
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
              <Outlet />
          </Box>
      </Box>
    )
} 

export default Layout