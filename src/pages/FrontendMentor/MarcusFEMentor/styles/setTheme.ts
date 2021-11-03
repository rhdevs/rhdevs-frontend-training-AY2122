const setTheme = (themeName: 'theme-light' | 'theme-dark') => {
  localStorage.setItem('theme', themeName)
  const toggle_theme_div = document.getElementById('toggle-theme')
  if (toggle_theme_div) toggle_theme_div.className = themeName
}

export default setTheme
