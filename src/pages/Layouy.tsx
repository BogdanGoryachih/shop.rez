import {FC} from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Swipers from '../components/Swipers'
import Catalog from '../components/Catalog'

const Layouy:FC =() =>{
    return(
        <div className=''>
            <Header/>
            <div className=''>
                <Catalog/>
                {/* <Swipers/> */}
            </div>
        </div>

    )
}
export default Layouy