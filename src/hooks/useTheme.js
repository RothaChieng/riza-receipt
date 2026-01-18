export function useTheme() {
  const toggle = () => {
    document.body.classList.toggle("dark");
  };
  return { toggle };
}
