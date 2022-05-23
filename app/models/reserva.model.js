

module.exports = (sequelize, Sequelize) => {

    const Reserva = sequelize.define("Reserva", {

        id_restaurante: {
            type: Sequelize.BIGINT,
            // references: {
            //     model: 'restaurantes',
            //     key: 'id',
            // }
        },
        id_mesa: {
            type: Sequelize.BIGINT,
            // references: {
            //     model: 'mesas',
            //     key: 'id',
            // }
        },

        fecha: {

            type: Sequelize.DATE

        },
        rango: {
            type: Sequelize.STRING
        },

        id_cliente: {
            type: Sequelize.BIGINT,
            // references: {
            //     model: 'clientes',
            //     key: 'id'
            // }
        },
        cantidad: {
            type: Sequelize.BIGINT
        },
        id: {

            type: Sequelize.BIGINT,

            primaryKey: true,

            autoIncrement: true

        }

    });
    // Restaurante.hasMany(Reserva, { foreignKey: 'id_restaurante' });

    return Reserva;

};