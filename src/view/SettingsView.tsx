import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDarkmode } from '../hook/useDarkmode';

export const SettingsView = () => {

    const { isDarkMode, toggleMode } = useDarkmode();

    return (
        <div className='flex flex-col justify-center items-center h-full'>
            <button onClick={toggleMode}>
                {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
        </div>
    )
}
