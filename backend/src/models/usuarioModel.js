const prisma = require('../prisma');

const getUsuarios = () => {
    return prisma.usuario.findMany();
}

module.exports = {
    getUsuarios
};