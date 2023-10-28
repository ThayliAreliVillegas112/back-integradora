const constantes = {
    ROL_CLIENTE: "Cliente",
    ROL_ADMINISTRADOR: "Administrador",
    ESTATUS_ACTIVO: "Activo",
    ESTATUS_INACTIVO: "Inactivo",
    GENERO_MASCULINO: "Masculino",
    GENERO_FEMENINO: "Femenino",
    CLAVE_TOKEN: "CLAVE_TOKEN"
}

constantes.ROLES = [constantes.ROL_ADMINISTRADOR, constantes.ROL_CLIENTE];
constantes.ESTATUS = [constantes.ESTATUS_ACTIVO, constantes.ESTATUS_INACTIVO];
constantes.GENEROS = [constantes.GENERO_MASCULINO, constantes.GENERO_FEMENINO];


module.exports= constantes;