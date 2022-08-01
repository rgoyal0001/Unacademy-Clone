import { ChakraProvider, position } from "@chakra-ui/react"
import React from 'react';
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div style={{position:"sticky", top:"0", backgroundColor:"white",padding:"1rem"}}>
            <div style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" alt="" />
                <Link to="/login"> <button style={{border:"none",color:"white", backgroundColor:"#08BD80", padding:"8px 12px", borderRadius:"6px", cursor:"pointer"}}>Login</button>  </Link>
            </div>
        </div>

        // <div position="sticky" top="0px" left="0px" width="100%" height="72px" backgroundColor="#FFFFFF" divShadow="inset 0px -1px 0px rgba(233, 238, 242, 0.4)" zIndex="2">
        //             <div width="1200px" margin="auto" padding="15px" display="flex" justifyContent="space-between" alignItems="center" height="100%" marginInline="auto" backgroundColor="transparent">
        //                 <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" />
        //                 <Link href="/login"><button colorScheme="green" fontSize="sm" fontWeight="semibold">Login</button></Link>
        //             </div>
        // </div>

        

    )
}