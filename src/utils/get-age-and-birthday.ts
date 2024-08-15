export const formatDateAndCalculateAge = (birthDate: string) => {
  const date = new Date(birthDate)
  const day = date.getDate()
  const month = date.toLocaleString('pt-BR', { month: 'long' })
  const year = date.getFullYear()
  const currentYear = new Date().getFullYear()
  const age = currentYear - year

  return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year} (${age} anos)`
}
