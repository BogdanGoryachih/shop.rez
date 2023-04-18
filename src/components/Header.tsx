import {Link} from 'react-router-dom'
import {FaRegUser} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {FaHeart} from 'react-icons/fa'
import React,{useState} from 'react'
import { Dialog } from '@headlessui/react'
import {RxCross1} from 'react-icons/all'
import {FaEyeSlash,FaEye,FaFacebookF} from 'react-icons/all'



const Header =() =>{
    const [isOpen,setisOpen] = useState<boolean>(false);
    const [isOpenreg,setisOpenreg] = useState<boolean>(false);
    

    function ser (){
    const closeclock = setisOpen(false)
    const closeclock1 = setisOpenreg(false)
    }
    function ser1(){
        const closeclock2 = setisOpen(true)
        const closeclock1 = setisOpenreg(false)
    }
  

    return(
        <nav>
            <div className="container">
                <div className="logo"> <Link to='/'><img src="./public/logo.svg" alt="" /></Link></div>
                <div className="menu">
                    <div className='links-menu'>
                        <button className='button-menu'>Каталог</button>
                        <input type="text" autoComplete='off' name='search' placeholder='Я Шукаю...' className='input-search'></input>
                        <button className='button-search'>Знайти</button>
                        <ul className='action-menu'>
                            <li className='ru'>Ru</li>
                            <li className='ua'><img src='./ua.svg'></img>Ua</li>
                            <div className="carttt">
                            <li className="user">
                                <FaRegUser onClick={()=> setisOpen(true)}  className='user-img'/>
                            </li>
                            <li className="cart">
                            <FaShoppingCart  className='FaShoppingCart' />
                            </li>
                            <li className='heart-cart'>
                                <FaHeart  className='heart'/>
                                <Dialog open={isOpen} onClose={()=> setisOpen(false)}>
                                    <div className="bg-modal">
                                        <Dialog.Panel className='popup'>
                                            <Dialog.Title className='header-modal'><h3 className='h3-modal'>Вхід</h3><li className='button-close' onClick={() => setisOpen(false)}><RxCross1/></li></Dialog.Title>
                                            <div className="modal-content">
                                                <div className="auth-model">
                                                    <form className='form-client'>
                                                        <div className="form-row">
                                                            <label className='label-row'>Ел. пошта або телефон</label>
                                                            <input type="email pohone " id="auth-email" className='input-row' />
                                                        </div>
                                                        <div className="form-pass">
                                                            <label className='label-row'>Пароль</label>
                                                            <input type='password' className='input-row pass' />
                                                            <button aria-hidden='true' className='btn-pass'><FaEyeSlash/></button>
                                                        </div>
                                                        <div className="form-restore">
                                                            <input type='checkbox' className='input-restore'  />
                                                            <label className='label-restore'  >Запам'ятати мене</label>
                                                            <Link to='/' className='link-restore'>Нагадати пароль</Link>
                                                        </div>
                                                        <div className="auth-modal">
                                                            <button className='auth-li'>
                                                                Увійти
                                                            </button>
                                                            <p className='btn-reg'  onClick={()=>setisOpenreg(true)}>
                                                                Зареєструватися
                                                            </p>
                                                        </div>
                                                    </form>

                                                    <Dialog open={isOpenreg} onClose={ser} onClick={() => setisOpen(false)}>
                                                        <div className="bg-modal">
                                                            <Dialog.Panel className='reg-popup'>
                                                            <Dialog.Title  className='header-modal'><h3 className='h3-modal' >Зареєструватися</h3><li className='button-close'   onClick={ser} ><RxCross1/></li></Dialog.Title>
                                                            <div className="modal-content">
                                                                <div className="auth-model">
                                                                    <form className='form-client'>
                                                                        <div className="form-row">
                                                                            <label className='label-row'>Имя</label>
                                                                            <input type="text" id="text" className='input-row' />
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <label className='label-row'>Фамилия</label>
                                                                            <input type="text" id="text" className='input-row' />
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <label className='label-row'>Номер телефона</label>
                                                                            <input type="text"  id="text" className='input-row'>
                                                                                
                                                                            </input>
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <label className='label-row'>Номер телефона</label>
                                                                            <input type="phone" id="text" className='input-row' />
                                                                        </div>
                                                                        <div className="form-pass">
                                                                            <label className='label-row'>Эл. почта</label>
                                                                            <input type="email" id="auth-email" className='input-row' />
                                                                            
                                                                        </div>
                                                                        <div className="form-pass">
                                                                            <label className='label-row'>Придумайте пароль</label>
                                                                            <input type='password' className='input-row pass' />
                                                                            <button aria-hidden='true' className='btn-pass'><FaEyeSlash/></button>
                                                                        </div>
                                                                        
                                                                        <div className="form-restore ">
                                                                            <p className=''>Регистрируясь, вы соглашаетесь с условиями положения о сборе и защите персональных данных  и пользовательским соглашением</p>
                                                                        </div>
                                                                        <div className="auth-modal">
                                                                             <button className='auth-li ser-reg'>
                                                                             Зареєструватися
                                                                            </button>
                                                                             <p className='btn-reg ser-reg'  onClick={ser1}>
                                                                             Я вже зареєстрований
                                                                             </p>
                                                                        </div>
                                                                    </form>
                                                                    <div className="social-modal">
                                                                        <div className="auth-social">
                                                                            <p>Увійти як користувач</p>
                                                                            <button className="Google">
                                                                            <img className='imgGoogle' src="./google.svg" alt="" /> Google
                                                                            </button>
                                                                            <button className='Facebook'>
                                                                                <FaFacebookF/> Facebook
                                                                            </button>
                                                                         </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        
                                                            </Dialog.Panel>
                                                        </div>
                                                    </Dialog>





                                                    <div className="social-modal">
                                                        <div className="auth-social">
                                                            <p>Увійти як користувач</p>
                                                            <button className="Google">
                                                            <img className='imgGoogle' src="./google.svg" alt="" /> Google
                                                            </button>
                                                            <button className='Facebook'>
                                                                <FaFacebookF/> Facebook
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Dialog.Panel>
                                    </div>
                                </Dialog>
                            </li>
                            </div>
                        </ul>
                           
                     </div>
                   
                    
                </div>
            </div>
        </nav>
    )
}
export default Header