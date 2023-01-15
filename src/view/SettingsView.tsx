import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDarkmode } from '../hook/useDarkmode';

const SettingsView = () => {

    const { mode, toggleMode } = useDarkmode();

    return (
        <ul className='flex flex-col justify-center items-center w-full'>
            <li className='flex items-center justify-center w-full'>
                <label htmlFor='mode-button'>Theme mode</label>
                <button id='mode-button' className='mx-2' onClick={toggleMode}>
                    {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </button>
            </li>

        </ul>
    )
}

export default SettingsView
