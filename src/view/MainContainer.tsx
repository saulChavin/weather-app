import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Outlet, useNavigate } from 'react-router-dom';

export const MainContainer = () => {

    return (
        <div className='w-full h-full md:max-w-[320px] md:max-h-[620px] md:rounded-3xl  flex flex-col dark: bg-neutral-900 '>
            <div className='flex-1'>
                <Outlet />
            </div>
            <TabsMenu />
        </div>
    )
}

const TabsMenu = () => {

    const navigate = useNavigate();

    return (
        <div className='flex justify-around items-center py-4'>
            <button onClick={() => navigate('home')}><HomeRoundedIcon fontSize='medium' /></button>
            <button onClick={() => navigate('search')}><SearchOutlinedIcon fontSize='medium' /></button>
            <button onClick={() => navigate('settings')}><SettingsOutlinedIcon fontSize='medium' /></button>
        </div>
    )
}