import Switch from 'react-switch';
import { useGlobalThemeContext } from '../../hooks';

const ThemeSwitchBtn: React.FC = () => {
  const { isDarkTheme, toggleTheme } = useGlobalThemeContext();

  return (
    <div className="flex justify-center items-center mb-4">
      <label htmlFor="theme-switch" className='absolute sm:top-5 sm:right-5 sm:left-auto top-6 left-5'>
        <Switch
          onChange={toggleTheme}
          checked={isDarkTheme}
          onColor="#ffffff"
          onHandleColor="#b5b5b5"
          handleDiameter={20}
          uncheckedIcon={false}
          checkedIcon={false}
          height={20}
          width={48}
          id="theme-switch"
        />
      </label>
    </div>
  );
};

export default ThemeSwitchBtn;