export const formatCep = (cep) => {
    return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2')
  }
  
  export const formatCpf = (cpf) => {
    return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
  }
  
  export const validateCep = (cep) => {
    const cepRegex = /^\d{5}-\d{3}$/
    return cepRegex.test(cep)
  }
  
  export const validateCpf = (cpf) => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return cpfRegex.test(cpf)
  }
  