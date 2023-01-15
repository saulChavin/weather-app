import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Outlet, useNavigate } from 'react-router-dom';

export const MainContainer = () => {

    return (
        <div className='w-full relative h-full md:max-w-[320px] md:max-h-[620px] md:rounded-3xl  flex flex-col dark: bg-neutral-900 '>
            <div className='flex flex-1'>
                <Outlet />
            </div>
            <TabsMenu />
        </div>
    )
}

const TabsMenu = () => {

    const navigate = useNavigate();

    return (
        <nav className='flex justify-around fixed md:absolute bottom-0 w-full items-center py-4'>
            <a onClick={() => navigate('/')}><HomeRoundedIcon fontSize='medium' /></a>
            <a onClick={() => navigate('search')}><SearchOutlinedIcon fontSize='medium' /></a>
            <a onClick={() => navigate('settings')}><SettingsOutlinedIcon fontSize='medium' /></a>
        </nav>
    )
}