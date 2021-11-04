export const setTheme = (themeName: 'theme-light' | 'theme-dark') => {
  localStorage.setItem('theme', themeName)
  const toggle_theme_div = document.getElementById('toggle-theme')
  if (toggle_theme_div) toggle_theme_div.className = themeName
}

export function keepTheme() {
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark')
    } else if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-light')
    }
  } else {
    setTheme('theme-dark')
  }
}
